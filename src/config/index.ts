export default () => ({
  DB: {
    HOST: process.env.DATABASE_HOST,
    PORT: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    USERNAME: process.env.DATABASE_PORT,
    PASSWORD: process.env.DATABASE_PASSWORD,
    DB: process.env.DATABASE_DB,
  },
  PORT: parseInt(process.env.PORT, 10) || 3000,
  API_VERSION: 'api/v1',
  CRON_RULE: process.env.CRON_RULE || '45 * * * * *',
});
