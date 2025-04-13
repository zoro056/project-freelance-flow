
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'buyer' | 'seller' | 'both';
  createdAt: string;
}

export interface Gig {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  rating?: number;
  reviewCount?: number;
  sellerId: string;
  sellerName: string;
  sellerAvatar?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  gigId: string;
  gigTitle: string;
  buyerId: string;
  buyerName: string;
  sellerId: string;
  sellerName: string;
  price: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

// Form Data Types
export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CreateGigFormData {
  title: string;
  description: string;
  price: number;
  category: string;
  image?: File;
}
