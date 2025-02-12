// 管理员信息
interface AdminUserInfo {
  // user表
  userId: string;
  username: string;
  status: UserStatus;
  role: UserRole;
  registerTime?: Date;
  lastLoginTime?: Date;
  // userProfile表
  nickname?: string;
  gender?: Gender;
  photo?: string;
  createTime?: Date;
  updateTime?: Date;
}

// 用户信息
interface UserInfo extends AdminUserInfo {
  bio?: string; // 个性签名
  location?: string; // 位置
  level?: number; // 等级
  levelName?: string; // 等级名称
  currentPoints?: number; // 当前积分
  totalPoints?: number; // 总积分
}

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  SUPERADMIN = 'superadmin',
}

enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  LOCKED = 'locked',
}


export type { AdminUserInfo, Gender, UserRole, UserStatus, UserInfo };
