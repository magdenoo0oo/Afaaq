import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import ContactPage from './pages/ContactPage';
import BlogPost from './pages/BlogPost';
import CategoriesPage from './pages/CategoriesPage';
import ArchivePage from './pages/ArchivePage';
import AuthorPage from './pages/AuthorPage';
import SitemapPage from './pages/SitemapPage';
import DisclaimerPage from './pages/DisclaimerPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import NewsletterPage from './pages/NewsletterPage';
import BlogListPage from './pages/BlogListPage';
import ResourcesPage from './pages/ResourcesPage';
import FAQPage from './pages/FAQPage';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="/authors" element={<AuthorPage />} />
            <Route path="/newsletter" element={<NewsletterPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route path="/terms-of-service" element={<TermsPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;