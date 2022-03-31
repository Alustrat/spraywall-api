import { ApiModule } from './api.module';

async function bootstrap() {
  return ApiModule.getApp();
}

bootstrap()
  .then(async (app) => app.getUrl())
  .then((url) => console.log(`Application is running on: ${url}`));
