/* tslint:disable */
/* eslint-disable */
import { CategoryModerator } from './category-moderator';
import { Image } from './image';
import { UserRole } from './user-role';
export interface User {
  avatar?: Image;
  avatarId?: null | string;
  categoryModerators?: null | Array<CategoryModerator>;
  createdAt?: string;
  email?: null | string;
  firstName?: null | string;
  footer?: null | string;
  id?: string;
  isBanned?: boolean;
  lastName?: null | string;
  lastUpdatedAt?: string;
  nickName?: null | string;
  reputation?: number;
  role?: UserRole;
}
