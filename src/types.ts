export type UserRole = 'Customer' | 'Admin';

export interface PortfolioItem {
  id: string;
  name: string;
  label: string; // e.g., "Bespoke Suit", "Traditional Wear"
  category: string;
  image: string;
  description: string;
}

export interface AppointmentRequest {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  service: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
}

