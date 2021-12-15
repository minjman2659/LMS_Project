const Joi = require('joi');

const { validateSchema } = require('lib/utils');
const { MyCourse } = require('database/models');

exports.add = async (req, res, next) => {
  const schema = Joi.object().keys({
    courseId: Joi.number().required(),
    title: Joi.string().min(2).max(20).required(),
    description: Joi.string().max(2000).required(),
    imageUrl: Joi.string().required(),
    courseInfoUrl: Joi.string().required(),
  });

  if (!validateSchema(res, schema, req.body)) return;

  const { courseId, title, description, imageUrl, courseInfoUrl } = req.body;

  const { id: userId } = req.user;

  try {
    await MyCourse.create({
      courseId,
      title,
      description,
      imageUrl,
      courseInfoUrl,
      fkUserId: userId,
    });
  } catch (err) {
    next(err);
    return;
  }

  res.sendStatus(201);
};

exports.list = async (req, res, next) => {
  const { id: userId } = req.user;

  if (!Number(userId)) {
    res.status(400).send('Bad request');
    return;
  }

  try {
    const { rows, count } = await MyCourse.findAndCountAll({
      where: { fkUserId: userId },
      order: [['id', 'DESC']],
      attributes: { exclude: ['fkUserId'] },
    });

    const result = {
      courses: rows,
      count,
    };

    res.send(result);
  } catch (err) {
    next(err);
  }
};
