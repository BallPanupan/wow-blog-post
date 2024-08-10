// src/app/home/page.tsx

"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const HomePage: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Home Page: Explore our latest posts and updates.</p>
    </div>
  );
};

export default HomePage;
