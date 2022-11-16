/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface CategoryResponseDto {
  createdAt?: null | string;
  createdBy?: User;
  createdById?: null | string;
  description?: null | string;
  forumId?: string;
  id?: string;
  isModerationOnly?: boolean;
  lastUpdatedAt?: null | string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  name?: null | string;
}
