import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

userRouter.post("/login", loginUser);

// secured routes
userRouter.post("/logout", verifyJwt, logoutUser);
userRouter.post("/refresh-token", refreshAccessToken);

export default userRouter;
