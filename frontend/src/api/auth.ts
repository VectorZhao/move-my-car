import api from './client';
import { AuthResponse } from '../types';

export const loginRequest = (username: string, password: string) =>
  api.post<AuthResponse>('/auth/login', { username, password }).then((res) => res.data);
