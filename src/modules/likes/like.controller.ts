import { Controller, Get, Post, Body, Put, Param } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDto } from './dtos/create-like.dto';
import { UpdateLikeDto } from './dtos/update-like.dto';

@Controller('likes')
export class LikeController {
  constructor(private readonly likeService: LikeService) {}

  @Get()
  getAllLikes() {
    return this.likeService.getAllLikes();
  }

  @Post()
  createLike(@Body() createLikeDto: CreateLikeDto) {
    return this.likeService.createLike(createLikeDto);
  }

  @Put(':id')
  updateLike(@Param('id') id: number, @Body() updateLikeDto: UpdateLikeDto) {
    return this.likeService.updateLike(id, updateLikeDto);
  }
}
