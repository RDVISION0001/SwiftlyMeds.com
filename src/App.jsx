import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';

function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Swiftly Meds</h1>
      <p className="text-lg text-gray-600">Your trusted online pharmacy for medicines and health products.</p>
    </div>
  );
}

function Medicines() {
  return <div className="container mx-auto px-4 py-8"><h2>Medicines</h2></div>;
}

function HealthProducts() {
  return <div className="container mx-auto px-4 py-8"><h2>Health Products</h2></div>;
}

function HealthLibrary() {
  return <div className="container mx-auto px-4 py-8"><h2>Health Library</h2></div>;
}

function LabTests() {
  return <div className="container mx-auto px-4 py-8"><h2>Lab Tests</h2></div>;
}

function ConsultDoctors() {
  return <div className="container mx-auto px-4 py-8"><h2>Consult Doctors</h2></div>;
}

function Offers() {
  return <div className="container mx-auto px-4 py-8"><h2>Offers</h2></div>;
}

function Login() {
  return <div className="container mx-auto px-4 py-8"><h2>Login/Sign Up</h2></div>;
}

function Cart() {
  return <div className="container mx-auto px-4 py-8"><h2>Cart</h2></div>;
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
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;