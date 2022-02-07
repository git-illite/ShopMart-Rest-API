const express = require('express')
const router = express.Router()
const ShortPropService = require('../services/ShortPropService.js')
const ShortPropValidation = require('../middleware/ShortPropValidation')
//Create
router.post("/",ShortPropValidation.CreateShortPropValidation,ShortPropService.createShortProp)



//Read
//get all Short Term Properties
router.get("/",ShortPropService.getAllShortProp)
//get one Short Term Property
router.get("/:id",ShortPropValidation.ShortPropIDValidation,ShortPropService.getShortProp)
//get all property types
router.get("/type",ShortPropService.getDistinctShortProp)

// //Update
router.put("/:id",ShortPropService.updateShortProp)


//Delete
router.delete("/:id",ShortPropValidation.ShortPropIDValidation,ShortPropService.removeShortProp)


module.exports = router