import { Inject, Injectable } from '@nestjs/common';
import { PostsServiceInterface } from './interfaces/posts.service.interface';
import { CreatePostInputDto, CreatePostOutputDto } from './dto/create-post.dto';
import { DeletePostInputDto, DeletePostOutputDto } from './dto/delete-post.dto';
import {
  GetAllPostsInputDto,
  GetAllPostsOutputDto,
} from './dto/get-all-posts.dto';
import {
  GetPostByIdInputDto,
  GetPostByIdOutputDto,
} from './dto/get-post-by-id.dto';
import { UpdatePostInputDto, UpdatePostOutputDto } from './dto/update-post.dto';
import { PostsRepositoryInterface } from './interfaces/posts.repository.interface';

@Injectable()
export class PostsService implements PostsServiceInterface {
  constructor(
    @Inject('REPOSITORY') private readonly repository: PostsRepositoryInterface,
  ) {}
  public async createPost(
    dto: CreatePostInputDto,
  ): Promise<CreatePostOutputDto> {
    const { title, content, nickname } = dto;
    return await this.repository.createPost({ title, content, nickname });
  }

  public async deletePost(
    dto: DeletePostInputDto,
  ): Promise<DeletePostOutputDto> {
    const { id, nickname } = dto;

    return await this.repository.deletePost({ id, nickname });
  }

  public async getAllPosts(
    dto: GetAllPostsInputDto,
  ): Promise<GetAllPostsOutputDto> {
    const { page, take } = dto;

    return await this.repository.getAllPosts({ page, take });
  }

  public async getPostById(
    dto: GetPostByIdInputDto,
  ): Promise<GetPostByIdOutputDto> {
    const { id } = dto;
    return await this.repository.getPostById({ id });
  }

  public async update(dto: UpdatePostInputDto): Promise<UpdatePostOutputDto> {
    const { id, title, content, nickname } = dto;

    return await this.repository.updatePosts({ id, title, content, nickname });
  }
}
