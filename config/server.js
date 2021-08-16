module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4100),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '7b71312f03932281297d7f376e57b81a'),
    },
  },
});
