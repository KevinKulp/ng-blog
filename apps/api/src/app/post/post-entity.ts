import { Post } from '@ng-blog/domain';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('post')
export class PostEntity {

  @PrimaryColumn()
  permalink: string;

  @Column({ length: 100 })
  title: string;

  @Column('date')
  date: Date;

  @Column('simple-array')
  tags: string[];

  @Column('simple-json')
  body: string;
}

export const postToEntity = (post: Post): PostEntity => ({
  permalink: post.permalink,
  title: post.title,
  date: post.date,
  tags: post.tags,
  body: JSON.stringify(post.body)
})

export const entityToPost = (entity: PostEntity): Post => ({
  permalink: entity.permalink,
  title: entity.title,
  date: entity.date,
  tags: entity.tags,
  body: JSON.parse(entity.body)
})
