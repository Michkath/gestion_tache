const calendar = require("../models/calendar_models");

exports.create = (req, res, next) => {
  const calendars = new calendar({
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
  });

  calendars.save()
    .then(() => {
      res.status(200).json("tache enregistre");
    })
    .catch(error => {
      res.status(401).json({ error });
    });
};

exports.getall = (req, res, next) => {
    calendar.find()
      .then(calendar => {
        res.json(calendar);
      })
      .catch(error => {
        res.status(500).json({ error });
      });
  };