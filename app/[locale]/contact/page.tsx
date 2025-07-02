import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">123 E-Commerce Street<br />Digital City, DC 12345</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ecommerce.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-field"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-field"
                    placeholder="Your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 