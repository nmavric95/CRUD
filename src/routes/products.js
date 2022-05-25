// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require("multer")
const path = require("path")



const storage = multer.diskStorage({
	destination: (req, file, cb)=>{
		let folder = "public/images/products"
		cb(null, folder)
	},

	filename: (req, file, cb)=>{
		let name = file.fieldname + "-" + Date.now() + path.extname(file.originalname)
		cb(null, name)
	},
})

const upload = multer({storage: storage})

// ************ Controller Require ************
const productsController = require('../controllers/productsController');

// /*** GET ALL PRODUCTS ***/ 

router.get('/', productsController.index); 

// /*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); 
router.post('/create', upload.any(),productsController.store); 


// /*** GET ONE PRODUCT ***/ 
router.get('/detail/:id', productsController.detail); 

// /*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/edit/:id', productsController.update); 


// /*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


module.exports = router;
