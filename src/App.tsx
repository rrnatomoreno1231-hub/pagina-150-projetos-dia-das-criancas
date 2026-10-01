/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { ComparisonSection } from './components/ComparisonSection';
import { BonusesSection } from './components/BonusesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { ThankYouPage } from './components/ThankYouPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/obg' || hash === '#/obg' || hash === '#obg') {
        return '/obg';
      }
      return window.location.pathname;
    }
    return '/';
  });

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '');
      const hash = window.location.hash.toLowerCase();
      if (path === '/obg' || hash === '#/obg' || hash === '#obg') {
        setCurrentPath('/obg');
      } else {
        setCurrentPath(window.location.pathname);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  // Check if current route is /obg
  const isThankYouPage =
    currentPath === '/obg' ||
    (typeof window !== 'undefined' &&
      (window.location.pathname.toLowerCase().replace(/\/$/, '') === '/obg' ||
        window.location.hash.toLowerCase() === '#/obg' ||
        window.location.hash.toLowerCase() === '#obg'));

  if (isThankYouPage) {
    return <ThankYouPage />;
  }

  // Smooth scroll to #planos section
  const scrollToPlans = () => {
    const plansSection = document.getElementById('planos');
    if (plansSection) {
      plansSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F8F7F4] text-[#0F172A] selection:bg-blue-600 selection:text-white">
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onScrollToPlans={scrollToPlans} />

        {/* 2. Seção de Comparação (Festa Pronta vs Montar Sozinha) */}
        <ComparisonSection onScrollToPlans={scrollToPlans} />

        {/* 3. Presentes Exclusivos / 5 Bônus */}
        <BonusesSection onScrollToPlans={scrollToPlans} />

        {/* 3. Depoimentos / Prints WhatsApp */}
        <TestimonialsSection onScrollToPlans={scrollToPlans} />

        {/* 4. Planos e Preços */}
        <PricingSection />

        {/* 5. Garantia 7 Dias */}
        <GuaranteeSection />

        {/* 6. FAQ */}
        <FaqSection onScrollToPlans={scrollToPlans} />

        {/* 7. Final CTA */}
        <FinalCtaSection onScrollToPlans={scrollToPlans} />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
