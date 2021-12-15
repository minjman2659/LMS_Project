const { User } = require('database/models');

const { decodeToken, setTokenCookie } = require('lib/token');

const refresh = async (res, refreshToken) => {
  try {
    const decoded = await decodeToken(refreshToken);
    const user = await User.findByPk(decoded.id);

    if (!user) {
      throw new Error('Invalid User error');
    }

    const tokens = await user.refreshUserToken(decoded.exp, refreshToken);
    setTokenCookie(res, tokens);

    return user;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const consumeToken = async (req, res, next) => {
  const { access_token: accessToken, refresh_token: refreshToken } =
    req.cookies;

  try {
    // 여기 코드는 없어도 될 것 같습니다. (만약 accessToken이 없으면 catch(err)로 빠지기 때문에 없어도 되는 코드)
    if (!accessToken) {
      throw new Error('No access token');
    }

    const accessTokenData = await decodeToken(accessToken);
    const { id: userId } = accessTokenData;
    const user = await User.findByPk(userId);

    req.user = user;

    // refresh token when exp < 30mins
    const diff = accessTokenData.exp * 1000 - new Date().getTime();
    if (diff < 1000 * 60 * 30 && refreshToken) {
      await refresh(res, refreshToken);
    }
  } catch (err) {
    if (!refreshToken) return next();
    try {
      // retry...
      const user = await refresh(res, refreshToken);
      req.user = user;
    } catch (e) {
      return next(e);
    }
  }

  return next();
};

module.exports = consumeToken;
