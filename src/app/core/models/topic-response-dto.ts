/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface TopicResponseDto {
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
}
