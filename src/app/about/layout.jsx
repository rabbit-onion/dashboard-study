import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';

const AboutLayout = ({ children }) => {
  return (
    <div id='wrap'>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AboutLayout;
