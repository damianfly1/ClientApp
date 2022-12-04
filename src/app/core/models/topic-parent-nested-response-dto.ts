/* tslint:disable */
/* eslint-disable */
import { PostNestedResponseDto } from './post-nested-response-dto';
import { User } from './user';
export interface TopicParentNestedResponseDto {
  author?: User;
  id?: string;
  isClosed?: boolean;
  isPinned?: boolean;
  name?: null | string;
  posts?: null | Array<PostNestedResponseDto>;
}
