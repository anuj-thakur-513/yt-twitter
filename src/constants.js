export const DB_NAME = "yt_twitter";
export const EMAIL_REGEX = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
// cookie options for sending tokens so that these can't be updated from client side
export const AUTH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
};
