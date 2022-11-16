/* tslint:disable */
/* eslint-disable */
import { TopicNestedResponseDto } from './topic-nested-response-dto';
export interface SubForumParentNestedResponseDto {
  categoryName?: null | string;
  description?: null | string;
  id?: string;
  name?: null | string;
  topics?: null | Array<TopicNestedResponseDto>;
}
