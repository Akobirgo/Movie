import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dtos';
import { Comment } from './models/comment.model';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  getAllComments(): Comment[] {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  getCommentById(@Param('id') id: number): Comment | undefined {
    return this.commentService.getCommentById(Number(id));
  }

  @Post()
  createComment(@Body() createCommentDto: CreateCommentDto): Comment {
    return this.commentService.createComment(createCommentDto);
  }

  @Put(':id')
  updateComment(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto): Comment | undefined {
    return this.commentService.updateComment(Number(id), updateCommentDto);
  }

  @Delete(':id')
  deleteComment(@Param('id') id: number): boolean {
    return this.commentService.deleteComment(Number(id));
  }
}
