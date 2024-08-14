"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

const HomePage: React.FC = () => {

  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [])

  return(<></>);
};

export default HomePage;
