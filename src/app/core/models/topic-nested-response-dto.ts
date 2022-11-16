/* tslint:disable */
/* eslint-disable */
import { User } from './user';
export interface TopicNestedResponseDto {
  author?: User;
  id?: string;
  isClosed?: boolean;
  isPinned?: boolean;
  lastUpdatedAt?: string;
  lastUpdatedBy?: User;
  name?: null | string;
}
