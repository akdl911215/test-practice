import { PickType } from '@nestjs/swagger';
import { Post } from '../entities/post.entity';

export class GetPostByIdInputDto extends PickType(Post, ['id'] as const) {}

export type GetPostByIdOutputDto = Post;
