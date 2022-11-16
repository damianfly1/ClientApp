/* tslint:disable */
/* eslint-disable */
import { Post } from './post';
import { User } from './user';
export interface Topic {
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
  posts?: null | Array<Post>;
}
