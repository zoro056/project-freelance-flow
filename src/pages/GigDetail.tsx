
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { gigs, users } from "@/data/mock";
import { useAuth } from "@/providers/AuthProvider";
import { useToast } from "@/hooks/use-toast";
import RatingStars from "@/components/ui/RatingStars";
import { AlertCircle, CheckCircle, Clock, DollarSign, User } from "lucide-react";

export default function GigDetail() {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isOrdering, setIsOrdering] = useState(false);
  
  // Find the gig in our mock data
  const gig = gigs.find(g => g.id === id);
  
  // If gig doesn't exist, show not found
  if (!gig) {
    return (
      <Layout>
        <div className="container mx-auto py-12 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
          <h1 className="text-2xl font-bold mb-4">Gig Not Found</h1>
          <p className="mb-6">The gig you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <a href="/gigs">Browse All Gigs</a>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // Find the seller
  const seller = users.find(u => u.id === gig.sellerId);

  const handleOrderNow = () => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to place an order",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }
    
    setIsOrdering(true);
    
    // Simulate API call for creating an order
    setTimeout(() => {
      setIsOrdering(false);
      toast({
        title: "Order placed successfully",
        description: "You'll be redirected to payment",
      });
      
      // In a real app, this would redirect to Stripe checkout
      // For now, we'll just redirect to the orders page
      navigate("/my-orders");
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{gig.title}</h1>
            
            <div className="flex items-center gap-2 mb-6">
              <RatingStars rating={gig.rating} />
              <span className="text-sm text-gray-600">({gig.reviewCount} reviews)</span>
            </div>
            
            {gig.imageUrl && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={gig.imageUrl}
                  alt={gig.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
            
            <Tabs defaultValue="description" className="w-full mb-8">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <h3 className="text-xl font-bold mb-4">About This Gig</h3>
                <div className="prose max-w-none">
                  <p className="mb-4">{gig.description}</p>
                  <p>
                    Let me bring your ideas to life with high-quality work delivered on time.
                    I pride myself on communication and making sure you're 100% satisfied with
                    the final result.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="mt-6">
                <h3 className="text-xl font-bold mb-4">Gig Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Delivery Time</p>
                      <p className="text-gray-600">3-5 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="font-medium">Revisions</p>
                      <p className="text-gray-600">3 revisions included</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
                {gig.reviewCount > 0 ? (
                  <div className="space-y-6">
                    {/* This would normally come from the API */}
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <RatingStars rating={5} />
                        <span className="font-medium">Great experience!</span>
                      </div>
                      <p className="text-gray-600 mb-2">
                        The seller delivered high-quality work ahead of schedule. Would definitely recommend!
                      </p>
                      <p className="text-sm text-gray-500">Posted on {new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-600">No reviews yet.</p>
                )}
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold">${gig.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-600">Starting at</span>
                  </div>
                  
                  <Button 
                    className="w-full mb-4"
                    onClick={handleOrderNow}
                    disabled={isOrdering}
                  >
                    {isOrdering ? "Processing..." : "Order Now"}
                  </Button>
                  
                  <p className="text-sm text-center text-gray-500 mb-6">
                    You won't be charged yet
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-bold mb-3">This package includes:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{gig.title}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">3 revisions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">Delivery within 3-5 days</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                {seller && (
                  <div className="border-t pt-4">
                    <h4 className="font-bold mb-3">About the Seller</h4>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="h-6 w-6 text-gray-500" />
                      </div>
                      <div>
                        <p className="font-medium">{seller.name}</p>
                        <p className="text-sm text-gray-600">
                          Member since {new Date(seller.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact Seller
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
