
import { User, Gig, Order, Category } from "@/types";

// Mock Users
export const users: User[] = [
  {
    id: "u1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg",
    role: "both",
    createdAt: "2023-01-15T10:00:00Z",
  },
  {
    id: "u2",
    name: "Jane Smith",
    email: "jane@example.com",
    avatar: "/placeholder.svg",
    role: "seller",
    createdAt: "2023-01-20T08:30:00Z",
  },
  {
    id: "u3",
    name: "Robert Johnson",
    email: "robert@example.com",
    avatar: "/placeholder.svg",
    role: "buyer",
    createdAt: "2023-02-05T14:20:00Z",
  },
];

// Mock Categories
export const categories: Category[] = [
  {
    id: "c1",
    name: "Design",
    icon: "🎨",
    description: "Get beautiful designs for your brand or project"
  },
  {
    id: "c2",
    name: "Development",
    icon: "💻",
    description: "Build apps, websites and software solutions"
  },
  {
    id: "c3",
    name: "Marketing",
    icon: "📈",
    description: "Promote your business and reach more customers"
  },
  {
    id: "c4",
    name: "Writing",
    icon: "✍️",
    description: "Quality content writing and copywriting services"
  },
  {
    id: "c5",
    name: "Video & Animation",
    icon: "🎬",
    description: "Create engaging videos and animations"
  },
  {
    id: "c6",
    name: "Music & Audio",
    icon: "🎵",
    description: "Professional audio and music production"
  },
  {
    id: "c7",
    name: "Business",
    icon: "💼",
    description: "Business consulting and support services"
  },
  {
    id: "c8",
    name: "Lifestyle",
    icon: "🌟",
    description: "Health, fitness, and personal development"
  },
];

// Mock Gigs
export const gigs: Gig[] = [
  {
    id: "g1",
    title: "I will design a professional logo for your business",
    description: "Get a stunning, unique logo design that represents your brand perfectly. Includes unlimited revisions and all source files.",
    price: 120,
    category: "Design",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZ28lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    rating: 4.9,
    reviewCount: 126,
    sellerId: "u2",
    sellerName: "Jane Smith",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-03-10T09:15:00Z",
  },
  {
    id: "g2",
    title: "I will develop a responsive website for your business",
    description: "Custom website development with modern design, mobile responsiveness, and SEO optimization. Includes 5 pages and basic CMS setup.",
    price: 450,
    category: "Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
    reviewCount: 97,
    sellerId: "u1",
    sellerName: "John Doe",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-03-15T11:30:00Z",
  },
  {
    id: "g3",
    title: "I will create engaging social media content for your brand",
    description: "Strategic social media content creation to boost your brand's online presence. Includes content calendar, graphics, and caption writing.",
    price: 280,
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvY2lhbCUyMG1lZGlhJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
    rating: 4.7,
    reviewCount: 84,
    sellerId: "u2",
    sellerName: "Jane Smith",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-03-20T10:45:00Z",
  },
  {
    id: "g4",
    title: "I will write SEO-optimized blog posts for your website",
    description: "High-quality, keyword-optimized blog content that drives traffic and engages readers. Thoroughly researched and tailored to your audience.",
    price: 85,
    category: "Writing",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.6,
    reviewCount: 65,
    sellerId: "u1",
    sellerName: "John Doe",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-03-25T08:20:00Z",
  },
  {
    id: "g5",
    title: "I will create a professional explainer video for your product",
    description: "Engaging explainer videos that simplify complex concepts and showcase your product's value. Includes script, voiceover, and animations.",
    price: 380,
    category: "Video & Animation",
    image: "https://images.unsplash.com/photo-1626379616459-b2ce1d9decbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZpZGVvJTIwZWRpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.8,
    reviewCount: 73,
    sellerId: "u2",
    sellerName: "Jane Smith",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-04-01T12:10:00Z",
  },
  {
    id: "g6",
    title: "I will compose custom music for your project",
    description: "Custom music composition for videos, podcasts, or commercials. Original tracks tailored to your project's mood and style.",
    price: 210,
    category: "Music & Audio",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww",
    rating: 4.9,
    reviewCount: 59,
    sellerId: "u1",
    sellerName: "John Doe",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-04-05T09:40:00Z",
  },
  {
    id: "g7",
    title: "I will create a comprehensive business plan for your startup",
    description: "Strategic business plan development with market analysis, financial projections, and growth strategies. Perfect for funding applications.",
    price: 520,
    category: "Business",
    image: "https://images.unsplash.com/photo-1664575198308-3959904fa430?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJ1c2luZXNzJTIwcGxhbnxlbnwwfHwwfHx8MA%3D%3D",
    rating: 4.7,
    reviewCount: 47,
    sellerId: "u2",
    sellerName: "Jane Smith",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-04-10T14:25:00Z",
  },
  {
    id: "g8",
    title: "I will be your personal fitness trainer",
    description: "Personalized fitness coaching with customized workout plans and nutrition guidance. Virtual sessions and continuous support.",
    price: 95,
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzcyUyMHRyYWluZXJ8ZW58MHx8MHx8fDA%3D",
    rating: 4.8,
    reviewCount: 83,
    sellerId: "u1",
    sellerName: "John Doe",
    sellerAvatar: "/placeholder.svg",
    createdAt: "2023-04-15T08:55:00Z",
  },
];

// Mock Orders
export const orders: Order[] = [
  {
    id: "o1",
    gigId: "g1",
    gigTitle: "I will design a professional logo for your business",
    buyerId: "u3",
    buyerName: "Robert Johnson",
    sellerId: "u2",
    sellerName: "Jane Smith",
    price: 120,
    status: "COMPLETED",
    createdAt: "2023-05-01T09:30:00Z",
  },
  {
    id: "o2",
    gigId: "g2",
    gigTitle: "I will develop a responsive website for your business",
    buyerId: "u3",
    buyerName: "Robert Johnson",
    sellerId: "u1",
    sellerName: "John Doe",
    price: 450,
    status: "IN_PROGRESS",
    createdAt: "2023-05-10T11:20:00Z",
  },
  {
    id: "o3",
    gigId: "g3",
    gigTitle: "I will create engaging social media content for your brand",
    buyerId: "u1",
    buyerName: "John Doe",
    sellerId: "u2",
    sellerName: "Jane Smith",
    price: 280,
    status: "PENDING",
    createdAt: "2023-05-15T14:45:00Z",
  },
];
