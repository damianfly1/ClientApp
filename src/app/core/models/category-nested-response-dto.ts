/* tslint:disable */
/* eslint-disable */
import { SubForumNestedResponseDto } from './sub-forum-nested-response-dto';
export interface CategoryNestedResponseDto {
  description?: null | string;
  id?: string;
  isModerationOnly?: boolean;
  name?: null | string;
  subforums?: null | Array<SubForumNestedResponseDto>;
}
