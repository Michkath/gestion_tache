const Tâches = require("../models/tache_models");

exports.create = (req, res, next) => {
  const tache = new Tâches({
    userid: req.body.userid,
    title: req.body.title,
    description: req.body.description,
    echeance: req.body.echeance,
  });

  tache.save()
    .then(() => {
      res.status(200).json("tache enregistre");
    })
    .catch(error => {
      res.status(401).json({ error });
    });
};

exports.delete_tache = (req, res, next) => {
  Tâches.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'tache delete' });
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.update = (req, res, next) => {
  Tâches.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => {
      res.status(200).json('tache update');
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getall = (req, res, next) => {
  Tâches.find()
    .then(taches => {
      res.json(taches);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

exports.getspecifitache = (req, res, next) => {
  Tâches.find({ userid: req.params.id })
    .then(taches => {
      res.json(taches);
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};

// recuperer les info en fonction de l'id de la tache

exports.getinfowithtacheid= (req, res, next) => {
  Tâches.find({ _id: req.params.id })
    .then(taches => {
      res.json({message: taches});
    })
    .catch(error => {
      res.status(500).json({ error });
    });
};
