
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Clock, Shield } from 'lucide-react';

const stats = [
  { icon: Award, number: "7", label: "Projects Completed" },
  { icon: Users, number: "10+", label: "Expert Team Members" },
  { icon: Clock, number: "20+", label: "Years Experience" },
  { icon: Shield, number: "100%", label: "Satisfaction Rate" }
];

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Building Excellence
              <span className="block text-blue-900">Since 2003</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Foundry Construction has been the trusted choice for quality construction services 
                for over two decades. Our commitment to excellence, attention to detail, and 
                customer satisfaction has made us a leader in the industry.
              </p>
              <p>
                From luxury residential homes to complex commercial projects, our experienced team 
                brings expertise, innovation, and craftsmanship to every build. We believe in 
                building not just structures, but lasting relationships with our clients.
              </p>
              <p>
                Our comprehensive approach covers every aspect of construction, from initial 
                design consultation to final walkthrough, ensuring your vision becomes reality.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border border-gray-200 shadow-md bg-gray-50">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-blue-900 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                    <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Construction team at work"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-8 -left-8 bg-white shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-100" />
                  </div>
                  <div>
                    <div className="font-bold text-black">Licensed & Insured</div>
                    <div className="text-gray-600 text-sm">Full coverage protection</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
