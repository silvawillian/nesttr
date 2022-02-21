import { Module } from '@nestjs/common';
import { TweetsModule } from './tweets/tweets.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TweetsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
