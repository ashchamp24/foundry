
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Hampstead Garden Extension",
    location: "Hampstead, NW3",
    year: "2024",
    category: "Residential",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/426ce6a6a_eyg-extension-3-w930.jpg",
    description: "A stunning glass and steel extension creating a light-filled kitchen and dining area, seamlessly connecting the period home to its garden."
  },
  {
    title: "St. John's Wood Loft Conversion",
    location: "St. John's Wood, NW8",
    year: "2023",
    category: "Renovation",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/9153bea0b_Screenshot2025-09-28at152753.png",
    description: "Transformed an unused attic into a luxurious home office with bespoke joinery and ample natural light."
  },
  {
    title: "Notting Hill Kitchen Remodel",
    location: "Notting Hill, W11",
    year: "2024",
    category: "Renovation",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/499a1bf0e_small-kitcehn-remodel-length.jpg",
    description: "A complete kitchen transformation in a Grade II listed building, featuring premium finishes and custom cabinetry."
  },
  {
    title: "Primrose Hill Victorian Renovation",
    location: "Primrose Hill, NW1",
    year: "2023",
    category: "Renovation",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/a7d5a3432_hmo-reconfiguration-019.jpg",
    description: "Full-scale renovation of a Victorian terrace, creating modern, bright living spaces while restoring original period features."
  },
  {
    title: "Belsize Park Basement Conversion",
    location: "Belsize Park, NW3",
    year: "2024",
    category: "Residential",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/c9f19f703_Screenshot2025-09-28at152735.png",
    description: "An ambitious basement dig-out to create a spacious family entertainment room and home cinema."
  },
  {
    title: "Kensington Historic Restoration",
    location: "Kensington, W8",
    year: "2023",
    category: "Renovation",
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d8f0dcf4c0dff2cdf1d240/2cc349f50_bond-construction-hmo-conversion-extension-03n.jpg", // Updated image URL
    description: "Careful restoration of a classic Kensington townhouse, preserving historical character while upgrading all modern amenities."
  }
];

export default function Portfolio() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Featured Projects
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of exceptional construction projects that showcase our 
            commitment to quality, innovation, and craftsmanship in London.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-0 text-white hover:bg-white hover:text-black opacity-0 group-hover:opacity-100 transition-all duration-300"
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
