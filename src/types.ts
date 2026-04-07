export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Suits' | 'Dresses' | 'Streetwear' | 'Traditional';
  image: string;
  description: string;
  customizable: boolean;
}

export interface Appointment {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
}
