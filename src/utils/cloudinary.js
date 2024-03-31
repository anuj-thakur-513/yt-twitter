import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }
    // upload file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temp file which failed to upload
  }
};

const deleteImageOnCloudinary = async (cloudinaryId) => {
  try {
    await cloudinary.uploader.destroy(cloudinaryId);
  } catch (error) {
    console.log("Error while deleting previous Image: ", error.message);
  }
};

export { uploadOnCloudinary, deleteImageOnCloudinary };
