export type EventType =
  | "STREAM"
  | "LIVE"
  | "RELEASE"
  | "ANNIVERSARY"
  | "GOODS"
  | "OTHER";

export type EventStatus = "PLANNED" | "COMPLETED" | "MISSED";

export interface OshiEvent {
  id: number;
  oshiId: number;
  title: string;
  eventType: EventType;
  status: EventStatus;
  startAt: string;
  endAt?: string;
  contentUrl?: string;
  description?: string;
}