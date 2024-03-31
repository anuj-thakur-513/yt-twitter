export const getCloudinaryPublicId = (cloudinaryUrl) => {
  const arr = cloudinaryUrl.split("/");
  const fileName = arr[arr.length - 1];
  const publicId = fileName.split(".")[0];
  return publicId;
};
