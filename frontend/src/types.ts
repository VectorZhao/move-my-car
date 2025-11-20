export type Role = 'ADMIN' | 'USER';

export interface UserProfile {
  id: string;
  username: string;
  name?: string;
  role: Role;
}

export interface AuthResponse {
  token: string;
  user: UserProfile;
}

export interface VehicleRecord {
  id: string;
  label?: string | null;
  carPlate: string;
  phone: string;
  notifyType: string;
  notifyConfig: string;
  notifyEnabled: boolean;
  callEnabled: boolean;
  shareCode: string;
  shareUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface NotifyTypeOption {
  id: string;
  name: string;
  hint: string;
}

export interface PublicVehicle {
  carPlate: string;
  label?: string | null;
  notifyEnabled: boolean;
  callEnabled: boolean;
}

export interface AdminUser {
  id: string;
  username: string;
  name: string;
  role: Role;
  createdAt: string;
}
