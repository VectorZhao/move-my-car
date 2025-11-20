import api from './client';
import { AuthResponse } from '../types';

export const loginRequest = (username: string, password: string) =>
  api.post<AuthResponse>('/auth/login', { username, password }).then((res) => res.data);

export const changePasswordRequest = (oldPassword: string, newPassword: string) =>
  api.post('/auth/password', { oldPassword, newPassword }).then((res) => res.data);
