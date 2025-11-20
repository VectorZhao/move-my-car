import api from './client';
import { VehicleRecord, NotifyTypeOption } from '../types';

export const fetchVehicles = () =>
  api.get<{ success: boolean; vehicles: VehicleRecord[] }>('/vehicles').then((res) => res.data.vehicles);

export const fetchNotifyTypes = () =>
  api.get<{ success: boolean; types: NotifyTypeOption[] }>('/vehicles/types/list').then((res) => res.data.types);

export const createVehicle = (payload: {
  label?: string;
  carPlate: string;
  phone: string;
  notifyType: string;
  notifyConfig: string;
  notifyEnabled: boolean;
  callEnabled: boolean;
}) => api.post<{ success: boolean; vehicle: VehicleRecord }>('/vehicles', payload).then((res) => res.data.vehicle);

export const updateVehicle = (
  id: string,
  payload: Partial<{ label: string; carPlate: string; phone: string; notifyType: string; notifyConfig: string; notifyEnabled: boolean; callEnabled: boolean }>
) => api.put<{ success: boolean; vehicle: VehicleRecord }>(`/vehicles/${id}`, payload).then((res) => res.data.vehicle);

export const deleteVehicle = (id: string) => api.delete<{ success: boolean }>(`/vehicles/${id}`).then((res) => res.data);

export const regenerateShareCode = (id: string) =>
  api.post<{ success: boolean; vehicle: VehicleRecord }>(`/vehicles/${id}/regenerate-link`, {}).then((res) => res.data.vehicle);

export const fetchAdminVehicles = () =>
  api.get<{ success: boolean; vehicles: Array<VehicleRecord & { owner: { id: string; name: string; username: string } }> }>('/admin/vehicles').then((res) => res.data.vehicles);
