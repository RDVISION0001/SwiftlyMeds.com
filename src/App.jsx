import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import Login from './Auth/SignIn';
import Home from './Pages/Home';

function Medicines() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Medicines</h2></div>;
}

function HealthProducts() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Health Products</h2></div>;
}

function HealthLibrary() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Health Library</h2></div>;
}

function LabTests() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Lab Tests</h2></div>;
}

function ConsultDoctors() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Consult Doctors</h2></div>;
}

function Offers() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Offers</h2></div>;
}

function Cart() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Cart</h2></div>;
}

function About() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">About Us</h2></div>;
}

function FAQs() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">FAQs</h2></div>;
}

function PrivacyPolicy() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Privacy Policy</h2></div>;
}

function Terms() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Terms & Conditions</h2></div>;
}

function Returns() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Return Policy</h2></div>;
}

function Contact() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Contact Us</h2></div>;
}

function SignUp() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Sign Up</h2></div>;
}

function ForgotPassword() {
  return <div className="container mx-auto px-4 py-8"><h2 className="text-primary">Forgot Password</h2></div>;
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <TopNav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/medicines" element={<Medicines />} />
            <Route path="/health-products" element={<HealthProducts />} />
            <Route path="/health-library" element={<HealthLibrary />} />
            <Route path="/lab-tests" element={<LabTests />} />
            <Route path="/consult-doctors" element={<ConsultDoctors />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;