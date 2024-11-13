import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { TypeormService } from '../_common/infrastructure/typeorm.service';

describe('PostsService', () => {
  let service: PostsService;
  let typeorm: TypeormService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeormService, PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
    typeorm = module.get<TypeormService>(TypeormService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
