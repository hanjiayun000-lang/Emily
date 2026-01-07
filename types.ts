
export interface Celebrity {
  rank: number;
  name: string;
  heat: string;
  recommendation?: string;
  avatar: string;
  trend?: 'up' | 'down' | 'neutral';
}
