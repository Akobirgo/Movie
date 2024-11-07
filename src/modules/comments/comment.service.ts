import { Injectable } from '@nestjs/common';
import { CreateCommentDto, UpdateCommentDto } from './dtos';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentService {
  private comments: Comment[] = [];

  getAllComments(): Comment[] {
    return this.comments;
  }

  getCommentById(id: number): Comment | undefined {
    return this.comments.find((comment) => comment.id === id);
  }

  createComment(createCommentDto: CreateCommentDto): Comment {
    const newComment: Comment = {
      id: this.comments.length + 1,
      ...createCommentDto,
    };
    this.comments.push(newComment);
    return newComment;
  }

  updateComment(id: number, updateCommentDto: UpdateCommentDto): Comment | undefined {
    const commentIndex = this.comments.findIndex((comment) => comment.id === id);
    if (commentIndex === -1) return undefined;

    this.comments[commentIndex] = { ...this.comments[commentIndex], ...updateCommentDto };
    return this.comments[commentIndex];
  }

  deleteComment(id: number): boolean {
    const commentIndex = this.comments.findIndex((comment) => comment.id === id);
    if (commentIndex === -1) return false;

    this.comments.splice(commentIndex, 1);
    return true;
  }
}
