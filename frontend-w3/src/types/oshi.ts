export type OshiType = "VTUBER" | "IDOL" | "CHARACTER" | "OTHER";

export interface Oshi {
  id: number;
  name: string;
  type: OshiType;
  groupName?: string;
  officialUrl?: string;
  memo?: string;
  createdAt: string;
}