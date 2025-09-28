
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-slate-900 to-black">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }} />

      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Your
            <span className="text-blue-300 block">Dreams Into Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Premium construction services with over 20 years of expertise. 
            From residential homes to commercial projects, we deliver excellence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button
            size="lg"
            className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">

            Get Free Quote
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-lg">

            View Our Work
          </Button>
        </div>

        {/* Quick Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-gray-200">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-300" />
            <span className="text-lg">(555) 123-4567</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-300" />
            <span className="text-lg">info@foundryconstruction.com</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-300" />
            <span className="text-lg">Downtown District</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-300 rounded-full mt-2"></div>
        </div>
      </div>
    </section>);

}
