/* tslint:disable */
/* eslint-disable */
import { Category } from './category';
import { Topic } from './topic';
import { User } from './user';
export interface SubForum {
  category?: Category;
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
  topics?: null | Array<Topic>;
}
