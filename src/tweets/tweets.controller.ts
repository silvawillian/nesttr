import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTweetDto } from './dto/create.dto';
import { UpdateTweetDto } from './dto/update.dto';
import { TweetsService } from './tweets.service';

@Controller('tweets')
export class TweetsController {
  constructor(private readonly tweetsService: TweetsService) { }

  @Get()
  getAll() {
    return this.tweetsService.getAll();
  }

  @Get('/:id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.tweetsService.getById(id);
  }

  @Post()
  create(@Body() tweet: CreateTweetDto) {
    return this.tweetsService.create(tweet);
  }

  @Put('/:id')
  update(@Param('id', ParseIntPipe) id: number, @Body() tweet: UpdateTweetDto) {
    return this.tweetsService.update(id, tweet);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.tweetsService.delete(id);
  }
}
