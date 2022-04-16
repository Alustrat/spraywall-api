import { ApolloDriver } from '@nestjs/apollo';
import { INestApplication, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import validationSchema from 'common/configuration';
import GymsModule from 'gyms/gyms.module';

@Module({
  imports: [
    ConfigModule.forRoot({ validationSchema, isGlobal: true }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: false,
      autoSchemaFile: 'schema.gql',
      sortSchema: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        url: configService.get<string>('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: false,
        migrations: ['dist/migrations/*{.ts,.js}'],
        migrationsRun: true,
      }),
      inject: [ConfigService],
    }),
    GymsModule,
  ],
})
export class ApiModule {
  static async getApp(): Promise<INestApplication> {
    const app = await NestFactory.create(ApiModule);
    const configService = app.get<ConfigService>(ConfigService);
    await app.listen(configService.get<string>('API_PORT'));
    return app;
  }
}
