/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface Post {
  author?: User;
  authorId?: string;
  createdAt?: string;
  id?: string;
  isEdited?: boolean;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  rating?: number;
  text?: null | string;
}
