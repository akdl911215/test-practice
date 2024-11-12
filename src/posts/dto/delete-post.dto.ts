import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class DeletePostInputDto extends PickType(Post, [
  'nickname',
  'id',
] as const) {}

export type DeletePostOutputDto = { readonly delete_post: boolean };
