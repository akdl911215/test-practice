import { ConfigModule } from '@nestjs/config';

export const CONFIG_MODULE = ConfigModule.forRoot({
  isGlobal: true,
});
