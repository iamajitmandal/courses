const { Router } = require("express");
const router = Router();
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/citizenship/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const { registerUser, logInUser, findAllUsers, updateUserKyc, checkKycStatusByUserId, getUserKyc, getUserBalanceById} = require("../controllers/user");

router.get('/users', findAllUsers);
router.post("/register", registerUser );
router.post("/login", logInUser );

router.post("/user-kyc", upload.single('citizenshipPhoto'), updateUserKyc );

router.get('/kyc-status/:userId', checkKycStatusByUserId)

router.get('/user-kyc', getUserKyc);

router.get('/user-balance/:userId', getUserBalanceById)

 module.exports = router