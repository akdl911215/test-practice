import {
  BaseOffsetPaginationInputDto,
  BaseOffsetPaginationOutputDto,
} from '../../_common/abstract/base.pagination.dto';
import { Post } from '../entities/post.entity';

export class GetAllPostsInputDto extends BaseOffsetPaginationInputDto {}

export type GetAllPostsOutputDto = BaseOffsetPaginationOutputDto<Post>;
