import { DataSource, Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { PostsRepositoryInterface } from './interfaces/posts.repository.interface';
import { Injectable, NotFoundException } from '@nestjs/common';
import { errorHandling } from '../_common/abstract/error.handling';
import { NOT_FOUND_POST } from '../_common/constant/errors/404';
import {
  getListOffsetPagination,
  PageReturnType,
} from '../_common/abstract/get.list.page.nation';
import {
  BaseOffsetPaginationInputDto,
  BaseOffsetPaginationOutputDto,
} from '../_common/abstract/base.pagination.dto';

@Injectable()
export class PostsRepository
  extends Repository<Post>
  implements PostsRepositoryInterface
{
  constructor(private dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }
  public async createPost(entity: {
    readonly title: Post['title'];
    readonly content: Post['content'];
    readonly nickname: Post['nickname'];
  }): Promise<Post> {
    const { title, content, nickname } = entity;
    const newPost = new Post();
    newPost.title = title;
    newPost.content = content;
    newPost.nickname = nickname;

    try {
      const savedPost: Post = await this.save(newPost);

      return savedPost;
    } catch (e: any) {
      errorHandling(e);
    }
  }

  public async deletePost(entity: {
    readonly id: Post['id'];
    readonly nickname: Post['nickname'];
  }): Promise<{
    readonly delete_post: boolean;
  }> {
    const { id, nickname } = entity;
    const postFindByIdAndNickname: Post = await this.findOne({
      where: {
        id,
        nickname,
      },
    });
    if (!postFindByIdAndNickname) throw new NotFoundException(NOT_FOUND_POST);

    try {
      await this.delete(id);

      return { delete_post: true };
    } catch (e: any) {
      errorHandling(e);
    }
  }

  public async getAllPosts(entity: {
    readonly page: BaseOffsetPaginationInputDto['page'];
    readonly take: BaseOffsetPaginationInputDto['take'];
  }): Promise<{
    readonly current_page: BaseOffsetPaginationOutputDto<Post>['current_page'];
    readonly total_pages: BaseOffsetPaginationOutputDto<Post>['total_pages'];
    readonly total_take: BaseOffsetPaginationOutputDto<Post>['total_take'];
    readonly current_list: BaseOffsetPaginationOutputDto<Post>['current_list'];
  }> {
    const { page, take } = entity;

    const totalTake: number = await this.count({ where: { deletedAt: null } });
    const pagination: PageReturnType = getListOffsetPagination({
      page,
      take,
      totalTake,
    });

    const currentList: Post[] = await this.find({
      skip: page,
      take,
      order: {
        createdAt: 'DESC',
      },
      where: { deletedAt: null },
    });

    return {
      current_list: currentList,
      current_page: pagination.currentPage,
      total_pages: pagination.totalPages,
      total_take: totalTake,
    };
  }

  public async getPostById(entity: { readonly id: Post['id'] }): Promise<Post> {
    const postFindById: Post = await this.findOne({ where: { id: entity.id } });
    if (!postFindById) throw new NotFoundException(NOT_FOUND_POST);

    return postFindById;
  }

  public async updatePosts(entity: {
    readonly id: Post['id'];
    readonly title: Post['title'];
    readonly content: Post['content'];
    readonly nickname: Post['nickname'];
  }): Promise<Post> {
    const { id, title, content, nickname } = entity;
    const postToUpdate: Post = await this.findOne({
      where: { id, nickname, content, title },
    });
    if (!postToUpdate) {
      throw new NotFoundException(NOT_FOUND_POST);
    }

    postToUpdate.title = title;
    postToUpdate.content = content;
    try {
      return await this.save(postToUpdate);
    } catch (e: any) {
      errorHandling(e);
    }
  }
}
