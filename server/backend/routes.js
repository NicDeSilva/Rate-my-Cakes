const cakeControllers = require('./controllers');

module.exports = app => {
  app
    .get('/api/cakes', cakeControllers.getAllCakes)
    .get('/api/cakes/:id', cakeControllers.getOneCake)
    .post('/api/cakes', cakeControllers.createCake)
    .put('/api/cakes/:id', cakeControllers.updateCakeRatings)
    .delete('/api/cakes/:id', cakeControllers.deleteCake);
}