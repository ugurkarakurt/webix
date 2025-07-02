import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Brand() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Brand</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Committed to delivering exceptional quality and innovative solutions 
              that make your shopping experience memorable.
            </p>
          </div>

          {/* Brand Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to bring you the latest and greatest products.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">
                Every product is carefully selected and tested to meet our high standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">
                Building lasting relationships with our customers through transparency and reliability.
              </p>
            </div>
          </div>

          {/* Brand Story */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                Founded in 2024, our e-commerce platform was born from a simple idea: 
                to create a shopping experience that puts customers first. We believe 
                that technology should make life easier, not more complicated.
              </p>
              <p className="text-gray-700">
                Today, we serve thousands of customers worldwide, offering a carefully 
                curated selection of products across multiple categories. Our commitment 
                to quality, innovation, and customer satisfaction drives everything we do.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 