
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner",
    project: "Custom Home Build",
    rating: 5,
    content: "Foundry Construction exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. Our dream home became a reality thanks to their expertise.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    project: "Office Complex",
    rating: 5,
    content: "The team delivered our office complex ahead of schedule and within budget. Their project management skills and communication throughout the process were exceptional.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Jennifer Torres",
    role: "Property Developer",
    project: "Residential Complex",
    rating: 5,
    content: "Working with Foundry Construction has been a game-changer for our developments. Their craftsmanship and reliability make them our go-to construction partner.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our satisfied clients who have 
            experienced the Foundry Construction difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-0 shadow-2xl hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="p-8 relative">
                <Quote className="w-12 h-12 text-blue-300 mb-6 opacity-60" />
                
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-bold text-black text-lg">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-blue-900 text-sm font-medium">{testimonial.project}</div>
                  </div>
                </div>

                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-300 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
