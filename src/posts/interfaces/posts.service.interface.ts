import {
  DeletePostInputDto,
  DeletePostOutputDto,
} from '../dto/delete-post.dto';
import {
  CreatePostInputDto,
  CreatePostOutputDto,
} from '../dto/create-post.dto';
import {
  GetAllPostsInputDto,
  GetAllPostsOutputDto,
} from '../dto/get-all-posts.dto';
import {
  GetPostByIdInputDto,
  GetPostByIdOutputDto,
} from '../dto/get-post-by-id.dto';
import {
  UpdatePostInputDto,
  UpdatePostOutputDto,
} from '../dto/update-post.dto';

export interface PostsServiceInterface {
  readonly deletePost: (
    dto: DeletePostInputDto,
  ) => Promise<DeletePostOutputDto>;

  readonly createPost: (
    dto: CreatePostInputDto,
  ) => Promise<CreatePostOutputDto>;

  readonly getAllPosts: (
    dto: GetAllPostsInputDto,
  ) => Promise<GetAllPostsOutputDto>;

  readonly getPostById: (
    dto: GetPostByIdInputDto,
  ) => Promise<GetPostByIdOutputDto>;

  readonly update: (dto: UpdatePostInputDto) => Promise<UpdatePostOutputDto>;
}
