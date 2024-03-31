import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
  updateUserAvatar,
  updateUserCoverImage,
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
userRouter.post("/update-password", verifyJwt, changeCurrentPassword);
userRouter.post("/get-current-user", verifyJwt, getCurrentUser);
userRouter.post("/update-account-details", verifyJwt, updateAccountDetails);
userRouter.post(
  "/update-avatar",
  verifyJwt,
  upload.single("avatar"),
  updateUserAvatar
);
userRouter.post(
  "/update-cover-image",
  verifyJwt,
  upload.single("coverImage"),
  updateUserCoverImage
);

export default userRouter;
