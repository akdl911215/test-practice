import { TypeOrmModule } from '@nestjs/typeorm';

export const TypeormService = TypeOrmModule.forRoot({
  type: 'sqlite', // SQLite 데이터베이스를 사용
  database: 'database.sqlite', // 데이터베이스 파일 이름
  autoLoadEntities: true, // 엔티티 자동 로드 및 매핑
  synchronize: true, // 데이터베이스 스키마를 엔티티와 동기화
});

/*
type: 'sqlite'
SQLite는 파일 기반의 가벼운 데이터베이스로,
소규모 프로젝트나 개발 중 빠르게 사용하기에 적합합니다.

database: 'database.sqlite'
- 설명: 사용할 데이터베이스 파일의 이름을 지정합니다.
- 여기서 'database.sqlite'라는 이름으로 SQLite 데이터베이스
   파일을 생성하거나 사용합니다.
- 이 파일은 애플리케이션 루트 폴더에 위치하게 되며,
  만약 이 이름의 파일이 없으면 새로 생성됩니다.

autoLoadEntities: true:
설명: 엔티티(Entity)를 자동으로 로드하여
     데이터베이스 테이블과 매핑하도록 설정합니다.
- 이 설정이 true로 되어 있으면,
   TypeORM은 애플리케이션 내에서 정의된 모든 엔티티 클래스를
   자동으로 로드하여 데이터베이스 테이블로 인식하고 동기화합니다.
- 장점: 모듈에 TypeOrmModule.forFeature()로 개별 엔티티를 명시적으로
        등록하지 않아도 TypeORM이 자동으로 엔티티를 찾아 매핑합니다.
        이는 개발 초기 단계에서 설정을 간소화하고 빠르게 테스트할 때 유용합니다.

synchronize: true
설명: 데이터베이스 스키마를 애플리케이션의 엔티티 정의와 동기화합니다.
- 이 설정이 true일 경우, 애플리케이션이 실행될 때 TypeORM이
  엔티티 구조를 기반으로 데이터베이스의 테이블 구조를 자동으로
  생성하거나 변경합니다.
- 장점: 개발 중에 엔티티를 수정하고 데이터베이스 테이블을 재정의할 때
  매우 편리합니다. 데이터베이스 구조가 엔티티 클래스와 자동으로
  동기화되기 때문에 수동으로 데이터베이스 스키마를 수정할 필요가 없습니다.
- 주의 사항: 이 옵션은 개발 환경에서만 사용하는 것이 좋습니다.
  프로덕션 환경에서 사용하면 데이터 손실이 발생할 수 있습니다.
  프로덕션에서는 스키마 동기화를 수동으로 관리하거나 마이그레이션
  도구를 사용하는 것이 좋습니다.

*/
