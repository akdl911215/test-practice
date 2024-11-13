import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class CreatePostInputDto extends PickType(Post, [
  'title',
  'content',
  'nickname',
] as const) {}

export type CreatePostOutputDto = Post;
