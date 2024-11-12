import { Injectable } from '@nestjs/common';
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
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { errorHandling } from '../_common/abstract/error.handling';

@Injectable()
export class PostsService implements PostsServiceInterface {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  public async createPost(
    dto: CreatePostInputDto,
  ): Promise<CreatePostOutputDto> {
    const { title, content, nickname } = dto;
    const newPost = new Post();
    newPost.title = title;
    newPost.content = content;
    newPost.nickname = nickname;

    try {
      const savedPost: Post = await this.postRepository.save(newPost);

      return savedPost;
    } catch (e: any) {
      errorHandling(e);
    }
  }

  public async deletePost(
    dto: DeletePostInputDto,
  ): Promise<DeletePostOutputDto> {
    const { id, nickname } = dto;

    const postFindByIdAndNickname: Post = await this.postRepository.findOne({
      where: {
        id,
        nickname,
      },
    });

    try {
      await this.postRepository.delete(id);
    } catch (e: any) {
      errorHandling(e);
    }

    return Promise.resolve(undefined);
  }

  public async getAllPosts(
    dto: GetAllPostsInputDto,
  ): Promise<GetAllPostsOutputDto> {
    return Promise.resolve(undefined);
  }

  public async getPostById(
    dto: GetPostByIdInputDto,
  ): Promise<GetPostByIdOutputDto> {
    return Promise.resolve(undefined);
  }

  public async update(dto: UpdatePostInputDto): Promise<UpdatePostOutputDto> {
    return Promise.resolve(undefined);
  }
}
