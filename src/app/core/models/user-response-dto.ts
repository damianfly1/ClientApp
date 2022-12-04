import { UserRole } from "./user-role";

export interface UserResponseDto{
    id: string;
    userName: string;
    nickName: string;
    createdAt: string;
    isBanned: boolean;
    postCount: number;
    avatarUrl: string | null;
    role: string | null;
}