/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface SubForumResponseDto {
  categoryId?: null | string;
  createdAt?: string;
  createdBy?: User;
  createdById?: null | string;
  description?: null | string;
  id?: string;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  name?: null | string;
  parentId?: null | string;
}
