// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './Auth/ThemeContext';
import TopNav from './Components/Topnav';
import Footer from './Components/Footer';
import Home from './Pages/Home';

import AddToCart from './Pages/Products/AddToCart';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import FAQs from './Components/FAQs';
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsConditions from './Components/TermsConditions';
import ReturnsPolicy from './Components/ReturnsPolicy';


function Medicines() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Medicines</h2>
    </div>
  );
}

function HealthProducts() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Health Products</h2>
    </div>
  );
}

function HealthLibrary() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Health Library</h2>
    </div>
  );
}

function LabTests() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Lab Tests</h2>
    </div>
  );
}

function ConsultDoctors() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Consult Doctors</h2>
    </div>
  );
}

function Offers() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Offers</h2>
    </div>
  );
}


function ForgotPassword() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Forgot Password</h2>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
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
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route path="/add-to-cart" element={<AddToCart />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/returns-policy" element={<ReturnsPolicy />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;