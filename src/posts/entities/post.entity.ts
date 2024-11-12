import { IsDate, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Post {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  @PrimaryGeneratedColumn()
  public id!: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  @Column()
  public title!: string;

  @IsString()
  @ApiProperty({
    type: String,
    default: '',
    required: false,
  })
  @Column()
  public content?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    default: '',
    required: true,
  })
  @Column()
  public nickname!: string;

  @IsDate()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  public createdAt!: Date;

  @IsDate()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  public updatedAt!: Date;

  @IsDate()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  public deletedAt?: Date;
}
