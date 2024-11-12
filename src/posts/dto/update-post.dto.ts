import { Post } from '../entities/post.entity';
import { PickType } from '@nestjs/swagger';

export class UpdatePostInputDto extends PickType(Post, [
  'title',
  'content',
  'nickname',
] as const) {}

export type UpdatePostOutputDto = Post;
