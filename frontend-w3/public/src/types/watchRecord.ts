export type Rating = 1 | 2 | 3 | 4 | 5;

export interface WatchRecord {
  id: number;
  eventId: number;
  content: string;
  rating?: Rating;
  createdAt: string;
  updatedAt: string;
}