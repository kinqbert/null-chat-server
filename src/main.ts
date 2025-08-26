import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { CONFIG } from "./config/configuration";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(CONFIG.PORT);
}

void bootstrap();
