
export interface SystemStats {
  version: string;
  deviceCount: number;
  sampleCount: number;
  reportCount: number;
}

export interface ActiveTask {
  deviceName: string;
  processName: string;
  durationSeconds: number;
  detectedBatches: number;
  totalPieces: number;
}

export interface HistoryStats {
  deviceTypes: number;
  totalBatches: number;
  totalProducts: number;
}

export interface DeviceProcess {
  id: string;
  deviceName: string;
  processName: string;
  createDate: string;
  creator: string;
  sitesCount: number;
}

export interface EngineDevice {
  id: string;
  type: string;
  model: string;
  sitesCount: number;
  addDate: string;
  creator: string;
}

export type ModelStatus = '微训练' | '训练中' | '训练失败' | '已完成';

export interface AIModel {
  id: string;
  type: string;
  model: string;
  name: string;
  sitesCount: number;
  status: ModelStatus;
}

export type MenuKey = 'home' | 'engines' | 'devices' | 'samples' | 'reports' | 'models' | 'users' | 'system';
