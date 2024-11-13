import { Post } from '../entities/post.entity';
import {
  BaseOffsetPaginationInputDto,
  BaseOffsetPaginationOutputDto,
} from '../../_common/abstract/base.pagination.dto';

export interface PostsRepositoryInterface {
  readonly deletePost: (entity: {
    readonly id: Post['id'];
    readonly nickname: Post['nickname'];
  }) => Promise<{ readonly delete_post: boolean }>;

  readonly createPost: (entity: {
    readonly title: Post['title'];
    readonly content: Post['content'];
    readonly nickname: Post['nickname'];
  }) => Promise<Post>;

  readonly getAllPosts: (entity: {
    readonly page: BaseOffsetPaginationInputDto['page'];
    readonly take: BaseOffsetPaginationInputDto['take'];
  }) => Promise<{
    readonly current_page: BaseOffsetPaginationOutputDto<Post>['current_page'];
    readonly total_pages: BaseOffsetPaginationOutputDto<Post>['total_pages'];
    readonly total_take: BaseOffsetPaginationOutputDto<Post>['total_take'];
    readonly current_list: BaseOffsetPaginationOutputDto<Post>['current_list'];
  }>;

  readonly getPostById: (entity: { readonly id: Post['id'] }) => Promise<Post>;

  readonly updatePosts: (entity: {
    readonly id: Post['id'];
    readonly title: Post['title'];
    readonly content: Post['content'];
    readonly nickname: Post['nickname'];
  }) => Promise<Post>;
}
