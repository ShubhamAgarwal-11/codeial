const express = require('express');
const router = express.Router();
const passport = require('passport');
const userController = require('../controller/users_controller');

router.get('/profile', passport.checkAuthentication , userController.profile);

router.get('/sign-in',userController.signIn);
router.get('/sign-up',userController.signUp);

router.post('/create',userController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect : 'sign-in'}
) , userController.createSession);

router.get('/sign-out',userController.DestroySession);
module.exports = router;