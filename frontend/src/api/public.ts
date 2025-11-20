import api from './client';
import { PublicVehicle, NotifyTypeOption } from '../types';

export const fetchPublicVehicle = (shareCode: string) =>
  api.get<{ success: boolean; vehicle: PublicVehicle }>(`/public/vehicles/${shareCode}`).then((res) => res.data.vehicle);

export const notifyVehicle = (shareCode: string, message?: string) =>
  api.post<{ success: boolean; message?: string; rateLimited?: boolean }>(`/public/vehicles/${shareCode}/notify`, { message }).then((res) => res.data);

export const callVehicle = (shareCode: string) =>
  api.post<{ success: boolean; phone: string }>(`/public/vehicles/${shareCode}/call`).then((res) => res.data.phone);

export const fetchPublicNotifyTypes = () =>
  api.get<{ success: boolean; types: NotifyTypeOption[] }>('/public/notify-types').then((res) => res.data.types);
