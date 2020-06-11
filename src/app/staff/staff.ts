export interface Staff {
  id: number;
  name: string;
  role: string;
  comments: string;
  points: any;
  status:  'ACTIVE' | 'INACTIVE';
  email: string;
  phone: string;
}
