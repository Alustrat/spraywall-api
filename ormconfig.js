module.exports = {
  type: 'mysql',
  url: process.env.DATABASE_URL,
  autoLoadEntities: true,
  synchronize: false,
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  migrationsRun: true,
};
