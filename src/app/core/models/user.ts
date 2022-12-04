/* tslint:disable */
/* eslint-disable */
import { CategoryModerator } from './category-moderator';
import { Image } from './image';
import { UserRole } from './user-role';
export interface User {
  createdAt: Date;
  nickName: string;
  avatarUrl: string | null;
  isBanned: boolean;
  footer?: any;
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber?: any;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnd?: any;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}
