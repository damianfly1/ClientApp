/* tslint:disable */
/* eslint-disable */
import { SubForumNestedResponseDto } from './sub-forum-nested-response-dto';
export interface CategoryNestedResponseDto {
  createdAt?: string;
  description?: null | string;
  id?: string;
  isModerationOnly?: boolean;
  lastUpdatedAt?: string;
  name?: null | string;
  subforums?: null | Array<SubForumNestedResponseDto>;
}
