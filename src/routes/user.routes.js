import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
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
userRouter.get("/get-current-user", verifyJwt, getCurrentUser);
userRouter.patch("/update-account-details", verifyJwt, updateAccountDetails);
userRouter.patch(
  "/update-avatar",
  verifyJwt,
  upload.single("avatar"),
  updateUserAvatar
);
userRouter.patch(
  "/update-cover-image",
  verifyJwt,
  upload.single("coverImage"),
  updateUserCoverImage
);
userRouter.get("/channel/:username", verifyJwt, getUserChannelProfile);
userRouter.get("/history", verifyJwt, getWatchHistory);

export default userRouter;
