const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/rate-my-cakes';

mongoose.connect(connectString, {useNewUrlParser:true})
  .catch(err => console.log(err));

const CakeSchema = new mongoose.Schema({
  baker: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  url: {
    type: String,
    required: true,
    maxlength: 200
  },
  ratings: {
    type: Array,
    default: []
  },
}, {timestamps:true});

module.exports = mongoose.model('Cake', CakeSchema);