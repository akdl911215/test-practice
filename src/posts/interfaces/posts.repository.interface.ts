import { Post } from '../entities/post.entity';

export interface PostsRepositoryInterface {
  readonly deletePost: (entity: {
    readonly id: string;
    readonly nickname: string;
  }) => Promise<{ readonly delete_post: boolean }>;

  readonly createPost: (entity: {
    readonly title: string;
    readonly content: string;
    readonly nickname: string;
  }) => Promise<Post>;

  readonly getAllPosts: (entity: {
    readonly page: number;
    readonly take: number;
  }) => Promise<{
    readonly current_page: number;
    readonly total_pages: number;
    readonly total_take: number;
    readonly current_list: Post[];
  }>;

  readonly getPostById: (entity: { readonly id: string }) => Promise<Post>;

  readonly update: (entity: {
    readonly title: string;
    readonly content: string;
    readonly nickname: string;
  }) => Promise<Post>;
}
