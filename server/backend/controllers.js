const Cake = require('./models');

module.exports = {

  getAllCakes: (req, res) => {
    Cake.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createCake: (req, res) => {
    const formData = req.body;
    Cake.create(formData)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateCakeRatings: (req, res) => {
    const ID = req.params.id;
    const formData = req.body;
    console.log(req.body);
    // const baker = req.body.baker;
    // const url = req.body.url;
    Cake.findOneAndUpdate({_id:ID}, {$push: {ratings: formData}})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteCake: (req, res) => {
    const ID = req.params.id;
    Cake.deleteOne({_id:ID})
      .then(result => res.json(result))
      .catch(errors => res.json(errors));
  }

};
