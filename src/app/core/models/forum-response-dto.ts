/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface ForumResponseDto {
  createdAt?: string;
  createdBy?: User;
  createdById?: null | string;
  description?: null | string;
  faq?: null | string;
  id?: string;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  name?: null | string;
  rules?: null | string;
}
