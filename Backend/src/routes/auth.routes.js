const { Router } = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

// Auth routes
const authRouter = Router()


/**
 * @route POST /api/auth/register
 * @description Register a new User
 * @access Public
 */
authRouter.post("/register", authController.registerUserController)

/**
 * @route POST /api/auth/login
 * @description Login user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController)

/**
 * @route GET /api/auth/logout
 * @description Clear token form user cookie and add token in to black list
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController)


/**
 * @route GET /api/auth/get-me
 * @description Get current user information
 * @access Private
 */
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)

module.exports = authRouter