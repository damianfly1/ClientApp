/* tslint:disable */
/* eslint-disable */
import { CategoryNestedResponseDto } from './category-nested-response-dto';
export interface ForumNestedResponseDto {
  categories?: null | Array<CategoryNestedResponseDto>;
  description?: null | string;
  id?: string;
  name?: null | string;
  faq?: null | string;
  rules?: null | string;
}
