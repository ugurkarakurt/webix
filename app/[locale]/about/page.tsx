import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="prose prose-lg">
            <p>
              Welcome to our modern e-commerce platform. We are dedicated to
              providing you with the best shopping experience using cutting-edge
              technology.
            </p>
            <p>
              Built with Next.js 15, TypeScript, Tailwind CSS, and Redux
              Toolkit, our platform offers a seamless and fast shopping
              experience.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 