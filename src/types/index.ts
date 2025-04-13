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
  deliveryTime?: number;
  revisions?: number;
  includes?: string[];
  orders?: number;
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

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  receiverId: string;
  content: string;
  createdAt: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participantIds: string[];
  participantNames: string[];
  participantAvatars?: string[];
  lastMessage?: string;
  lastMessageTime?: string;
  orderId?: string;
  gigId?: string;
  unreadCount: number;
}

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
