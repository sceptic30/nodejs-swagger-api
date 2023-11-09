module.exports = {
  secretKey: process.env.SECRET_KEY || 'myDefaultSecretKey',
  dbUser: process.env.DB_USER || 'your_db_user',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'your_db_name',
  dbPassword: process.env.DB_PASSWORD || 'your_db_password',
  dbPort: process.env.DB_PORT || 5432,
  // Other configuration properties...
};