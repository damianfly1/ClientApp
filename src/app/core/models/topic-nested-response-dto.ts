/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface TopicNestedResponseDto {
  author?: User;
  id?: string;
  isClosed?: boolean;
  isPinned?: boolean;
  lastUpdatedAt?: string;
  name?: null | string;
  responseCount: number;
  viewCount: number;
}
