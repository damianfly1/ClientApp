/* tslint:disable */
/* eslint-disable */
import { CategoryModerator } from './category-moderator';
import { Forum } from './forum';
import { SubForum } from './sub-forum';
import { User } from './user';
export interface Category {
  categoryModerators?: null | Array<CategoryModerator>;
  createdAt?: string;
  createdBy?: User;
  createdById?: null | string;
  description?: null | string;
  forum?: Forum;
  forumId?: string;
  id?: string;
  isModerationOnly?: boolean;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  lastUpdatedById?: null | string;
  name?: null | string;
  subforums?: null | Array<SubForum>;
}
