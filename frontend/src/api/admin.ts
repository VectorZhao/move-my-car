import api from './client';
import { AdminUser } from '../types';

export const fetchAdminUsers = () =>
  api.get<{ success: boolean; users: AdminUser[] }>('/admin/users').then((res) => res.data.users);

export const createAdminUser = (payload: { username: string; name: string; password: string; role?: 'ADMIN' | 'USER' }) =>
  api.post<{ success: boolean; user: AdminUser }>('/admin/users', payload).then((res) => res.data.user);

export const updateAdminUser = (id: string, payload: Partial<{ name: string; password: string; role: 'ADMIN' | 'USER' }>) =>
  api.patch<{ success: boolean; user: AdminUser }>(`/admin/users/${id}`, payload).then((res) => res.data.user);

export const deleteAdminUser = (id: string) => api.delete<{ success: boolean }>(`/admin/users/${id}`).then((res) => res.data);
