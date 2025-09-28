
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Home, Wrench, ArrowUp, RefreshCw, Bath, ChefHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Home Extensions",
    description: "Expand your living space with expertly designed and built extensions that seamlessly blend with your existing home.",
    features: ["Single & Double Story", "Planning Permission", "Structural Design"]
  },
  {
    icon: Wrench,
    title: "Plumbing Services",
    description: "Complete plumbing solutions from installations and repairs to full system upgrades for residential and commercial properties.",
    features: ["Emergency Repairs", "System Installations", "Leak Detection"]
  },
  {
    icon: ArrowUp,
    title: "Loft Conversions",
    description: "Transform your unused loft space into a beautiful bedroom, office, or living area with our specialist conversion services.",
    features: ["Dormer Extensions", "Velux Windows", "Staircase Installation"]
  },
  {
    icon: RefreshCw,
    title: "Full House Conversions",
    description: "Complete property transformations including layout changes, structural alterations, and comprehensive refurbishments.",
    features: ["Structural Changes", "Open Plan Living", "Period Restorations"]
  },
  {
    icon: Bath,
    title: "Bathroom Renovations",
    description: "Create your dream bathroom with our complete renovation service, from design to installation of luxury finishes.",
    features: ["Luxury Suites", "Wet Rooms", "Accessibility Features"]
  },
  {
    icon: ChefHat,
    title: "Kitchen Installations",
    description: "Bespoke kitchen designs and installations featuring premium appliances, custom cabinetry, and modern functionality.",
    features: ["Custom Cabinetry", "Premium Appliances", "Island Designs"]
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Specialist Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Expert construction and renovation services tailored to transform your property. 
            From extensions to complete conversions, we deliver exceptional craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-900 group-hover:border-blue-900 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-blue-800 group-hover:text-blue-100 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
