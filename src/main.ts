import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { CONFIG } from "./config/configuration";
import { loadSequelize } from "./loaders/SequelizeLoader";

async function bootstrap() {
  await loadSequelize();

  const app = await NestFactory.create(AppModule);

  await app.listen(CONFIG.PORT);
}

void bootstrap();
