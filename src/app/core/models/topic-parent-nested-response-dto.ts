/* tslint:disable */
/* eslint-disable */
import { PostNestedResponseDto } from './post-nested-response-dto';
import { User } from './user';
export interface TopicParentNestedResponseDto {
  author?: User;
  authorId?: string;
  createdAt?: string;
  id?: string;
  isClosed?: boolean;
  isPinned?: boolean;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  name?: null | string;
  posts?: null | Array<PostNestedResponseDto>;
}
