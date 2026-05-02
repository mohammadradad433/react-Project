import FeatureCard from "../Components/FeatureCard";
import TestimonialCard from "../Components/TestimonialCard";
import PricingCard from "../Components/PricingCard";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center text-center min-h-[70vh] gap-6 px-4">

      <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
        Learn & Manage Courses Easily
      </h1>

      <p className="text-gray-500 max-w-xl">
        A modern SaaS platform for managing educational content and dashboards.
      </p>

      <button className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
        Get Started
      </button>

    </div>
    {/*// Features Section*/}

  <section className="px-6 mb-24">

    <h2 className="text-3xl font-semibold text-center mb-10">
      Features
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      <FeatureCard 
        title="Smart Learning" 
        desc="Manage courses easily" 
      />

      <FeatureCard 
        title="Powerful Dashboard" 
        desc="Track everything in real time" 
      />

      <FeatureCard 
        title="Responsive Design" 
        desc="Works on all devices" 
      />

    </div>

  </section>

    {/*// Testimonials Section*/}
    <section className="px-6 mb-24">

      <h2 className="text-3xl font-semibold text-center mb-10">What Our Users Say</h2>    

    <div className="grid md:grid-cols-3 gap-6">

      <TestimonialCard 
        name="Mohammad"
        text="This platform helped me organize my learning easily."
      />

      <TestimonialCard 
        name="Sara"
        text="Very clean UI and easy dashboard."
      />

      <TestimonialCard 
        name="Omar"
        text="Perfect for managing courses."
      />

    </div>
    </section>
    {/*// Pricing Section*/}

    <section className="px-6 mb-24">

      <h2 className="text-3xl font-semibold text-center mb-10">Pricing Plans</h2>

      <div className="grid md:grid-cols-3 gap-6 text-gray-800 text-center">

        <PricingCard 
          title="Free" 
          price="0" 
          desc="Basic features" 
        />

        <PricingCard 
          title="Pro" 
          price="9" 
          desc="All features" 
        />

        <PricingCard 
          title="Premium" 
          price="19" 
          desc="Advanced tools" 
        />

      </div>
    </section>

    <section className="bg-purple-600 text-white py-16 text-center mt-16 rounded-xl">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Start Learning?
      </h2>

      <p className="mb-6 text-purple-100 max-w-xl mx-auto">
        Join our platform and explore courses.
      </p>

      <div className="flex justify-center gap-4">

        <Link to="/courses" className="bg-white text-purple-600 px-6 py-3 rounded hover:bg-gray-100 font-semibold">
          Browse Courses
        </Link>

      </div>

    </section>

    </>
  );
}