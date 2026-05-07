import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Whytredixo from './pages/whytredixo';
import BecomeAnAffiliate from './pages/BecomeAnAffiliate';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CryptoTrading from './pages/CryptoTrading';
import ForexTrading from './pages/ForexTrading';
import DabbaTrading from './pages/DabbaTrading';
import MarginTrading from './pages/MarginTrading';
import IntradayTrading from './pages/IntradayTrading';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import Blogs from './pages/Blogs';
import store from './app/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Dashboard from './pages/Dashboard';
import ThemeProvider from './components/ThemeProvider';
import PrivateRoute from './components/PrivateRoute';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import CreateBlog from './pages/CreateBlog';
import UpdateBlog from './pages/UpdateBlog';
import ShowBlog from './pages/ShowBlog';
import ForgetPassword from './pages/ForgetPassword';
import ScrollToTop from './components/ScrollToTop';
import Search from './components/Search';
import { HelmetProvider } from 'react-helmet-async';
import RiskDisclosure from './pages/RiskDisclosure';
import Regulations from './pages/Regulations';
import BrokerageCalculator from './pages/BrokerageCalculator';
import AboutUs from './pages/Aboutus';
import LiveMarkets from "./pages/LiveMarkets";
import NSE from './pages/NSEtrading';
import MCX from './pages/MCXtrading';
import US from './pages/Usstock';
import Comex from './pages/comextrading';
const persistor = persistStore(store);

const App = () => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ScrollToTop />
            <ThemeProvider>
              <div className="min-h-screen bg-black text-white">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/why-tredixo" element={<Whytredixo />} />
                  <Route path="/become-an-affiliate" element={<BecomeAnAffiliate />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />
                  <Route path="/crypto-trading" element={<CryptoTrading />} />
                  <Route path="/forex-trading" element={<ForexTrading />} />
                  <Route path="/dabba-trading" element={<DabbaTrading />} />
                  <Route path="/margin-trading" element={<MarginTrading />} />
                  <Route path="/intraday-trading" element={<IntradayTrading />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/tredixo-admin-login" element={<Login />} />
                  <Route path="/blog/:blogSlug" element={<ShowBlog />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/forget-password" element={<ForgetPassword />} />
                  <Route path="/risk-disclosure" element={<RiskDisclosure />} />
                  <Route path="/regulations" element={<Regulations />} />
                  <Route path="/brokerage-calculator" element={<BrokerageCalculator />} />
                  <Route path="/about-us" element={<AboutUs />} />
                  <Route path="/live-markets" element={<LiveMarkets />} />
                  <Route path="/nse-trading" element={<NSE />} />
                  <Route path="/us-stock" element={<US />} />
                  <Route path="/comex-trading" element={<Comex />} />
                  <Route path="/mcx-trading" element={<MCX/>}/>
                  <Route element={<PrivateRoute />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                  </Route>

                  <Route element={<AdminPrivateRoute />}>
                    <Route path="/create-blog" element={<CreateBlog />} />
                    <Route path="/update-blog/:blogId" element={<UpdateBlog />} />
                  </Route>
                </Routes>
                <Footer />
              </div>
            </ThemeProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </HelmetProvider>
  );
};

export default App;