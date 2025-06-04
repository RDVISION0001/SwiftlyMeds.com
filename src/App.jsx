// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './Auth/ThemeContext';
import TopNav from './Components/TopNav';
import Footer from './Components/Footer';
import Login from './Auth/SignIn';
import Home from './Pages/Home';

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

function Cart() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Cart</h2>
    </div>
  );
}

function About() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>About Us</h2>
    </div>
  );
}

function FAQs() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>FAQs</h2>
    </div>
  );
}

function PrivacyPolicy() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Privacy Policy</h2>
    </div>
  );
}

function Terms() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Terms & Conditions</h2>
    </div>
  );
}

function Returns() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Return Policy</h2>
    </div>
  );
}

function Contact() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Contact Us</h2>
    </div>
  );
}

function SignUp() {
  const { styles } = useTheme();
  return (
    <div className={`container mx-auto px-4 py-8 ${styles.container}`}>
      <h2 className={`text-primary ${styles.primary}`}>Sign Up</h2>
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
    </ThemeProvider>
  );
}

export default App;