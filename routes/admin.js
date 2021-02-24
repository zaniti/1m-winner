const express = require('express')
const AdminController = require('../controllers/AdminController')
const router = express.Router() 
const Admin = require('../controllers/AdminController')
const tokenMiddleware = require('../use/auth')
const superAdminMiddleware = require('../use/superAdmin')
const adminMiddleware = require('../use/admin')

router.post('/login',Admin.loginAdmin)
router.post('/addAdmin',AdminController.addAdmin)
router.post('/addadmins',[tokenMiddleware,superAdminMiddleware],AdminController.addAdmin)
router.patch('/validate/:id',[tokenMiddleware,superAdminMiddleware],AdminController.particapantvalidate)
router.post('/addQuestion',[tokenMiddleware,adminMiddleware],AdminController.addQustion)

module.exports = router