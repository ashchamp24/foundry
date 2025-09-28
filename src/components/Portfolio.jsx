
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Modern Family Estate",
    location: "Beverly Hills, CA",
    year: "2024",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "5,000 sq ft luxury home with contemporary design and smart home integration."
  },
  {
    title: "Luxury Kitchen Remodel",
    location: "Manhattan Beach",
    year: "2024",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Complete kitchen transformation with premium finishes and custom cabinetry."
  },
  {
    title: "Custom Pool House",
    location: "Malibu, CA",
    year: "2024",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Elegant pool house with entertainment area and guest accommodations."
  },
  {
    title: "Historic Building Restoration",
    location: "Pasadena, CA",
    year: "2023",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Careful restoration of 1920s landmark building preserving historical character."
  }
];

const categories = ["All", "Residential", "Renovation"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
            Explore our portfolio of exceptional construction projects that showcase our 
            commitment to quality, innovation, and craftsmanship.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 transition-all duration-300 shadow-md ${
                  activeCategory === category 
                    ? "bg-blue-900 hover:bg-black text-white" 
                    : "border-gray-400 text-gray-700 hover:border-blue-900 hover:text-blue-900 bg-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Button 
                  size="icon"
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white hover:text-slate-900 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-900 text-blue-100 text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
