// src/app/about/page.tsx

import Layout from '../layout'; // Adjust the path if necessary
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div>
        <h1>About Us</h1>
        <p>
          Welcome to our blog! We are a team of passionate writers who love to share our thoughts and experiences on various topics.
        </p>
        <p>
          Our goal is to provide valuable content and insights to our readers. We cover a wide range of topics including technology, lifestyle, and more.
        </p>
        <p>
          Thank you for visiting our blog. We hope you find our posts informative and engaging. Feel free to reach out to us if you have any questions or feedback!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;
