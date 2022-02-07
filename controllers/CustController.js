const express = require('express')
const router = express.Router()
const custService = require('../services/CustService.js')
const custValidation = require('../middleware/CustValidation.js')
//Create
router.post("/",custValidation.CreateCustValidation,custService.createCust)



//Read
//get all Customers
router.get("/",custService.getAllCust)
// //get one hero
router.get("/:id",custService.getCust)


// //Update
// router.put("/:id",heroService.updateHero)


//Delete
router.delete("/:id",custService.removeCust)


module.exports = router