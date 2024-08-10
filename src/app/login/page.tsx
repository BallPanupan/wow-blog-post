// app/login/page.tsx
'use client'
import { useState } from 'react';
import LoginLayout from './layout';
import styles from './login.module.css';
import Image from 'next/image';
import Login from '@/components/Login/Login';


export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Basic client-side validation
    if (!email) {
      setError('Please fill out both email.');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Redirect to another page on successful login
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };


  return (
    <div className={styles.loginContainer}>
      <div className={styles.signForm}>
        <Login />
      </div>

      <div className={styles.loginBoardSide}>
        <Image
          src={'./images/LoginBoard.svg'} 
          alt='login board'
          width={300}
          height={300}
        />
        <i>a Board</i>
      </div>
    
    </div>
  )
}
