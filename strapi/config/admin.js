module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '960c1671de180bab72ae09af8a65ef6f'),
  },
});
