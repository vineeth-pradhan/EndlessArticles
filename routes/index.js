const express = require('express');
const router = express.Router();
const httpStatuses = ["100","101","200","201","202","203","204","205","206","300","301","302","303","304","305","307","400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","500","501","502","503","504","505"];

/* GET home page. */
router.get('/articles/:id', function(req, res, next) {
  var httpStatus;
  const idParam = req.params['id']
  switch(idParam) {
    default:
      if(httpStatus = parseInt(httpStatuses.find(i => i == req.params['id']))) {
        res.status(httpStatus).render('index', { title: 'Article List', status: httpStatus, httpStatus: httpStatus });
      }
      else {
        res.status(404).render('index', { title: 'Article List', status: 404, httpStatus: 404 });
      }
  }
});

module.exports = router;
