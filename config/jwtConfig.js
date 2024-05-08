const jwtConfig = {
  access: {
    type: 'access',
    expiresIn: `${1000 * 60 * 0.2}`,
  },
  refresh: {
    type: 'refresh',
    expiresIn: `${1000 * 60 * 60 * 12}`,
  },
};

module.exports = jwtConfig;
