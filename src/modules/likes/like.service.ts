import { Injectable } from '@nestjs/common';
import { Like } from './models/like.model';
import { CreateLikeDto } from './dtos/create-like.dto';

@Injectable()
export class LikeService {
  private likes: Like[] = [];
  private idCounter = 1;

  getAllLikes(): Like[] {
    return this.likes;
  }

  createLike(createLikeDto: CreateLikeDto): Like {
    const newLike: Like = {
      id: this.idCounter++,
      ...createLikeDto,
    };
    this.likes.push(newLike);
    return newLike;
  }

  updateLike(id: number, updatedLike: Partial<Like>): Like {
    const likeIndex = this.likes.findIndex(l => l.id === id);
    if (likeIndex === -1) {
      throw new Error('Like not found');
    }
    this.likes[likeIndex] = { ...this.likes[likeIndex], ...updatedLike };
    return this.likes[likeIndex];
  }
}
