/* tslint:disable */
/* eslint-disable */
import { LikedByDto } from './liked-by-dto';
import { User } from './user';
export interface PostResponseDto {
  author?: User;
  createdAt?: string;
  id: string;
  lastUpdatedAt?: string;
  points: number;
  text?: null | string;
  likedBy: Array<LikedByDto>
}
