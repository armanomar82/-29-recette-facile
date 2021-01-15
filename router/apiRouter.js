const express        = require('express');
const apiController = require('./../controllers/tourController');
const router         = express.Router();

// router.param('id',tourController);



router
.route('/')
.get(apiController.getAllApi)
.post(apiController.creatApi);

router
.route('/:id')
.get(apiController.getApi)
.patch(apiController.UpdateApi)
.delete(apiController.deleteApi);

module.exports = router;