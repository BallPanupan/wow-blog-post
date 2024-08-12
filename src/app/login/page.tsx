// app/login/page.tsx
'use client'
import { useState } from 'react';
import styles from './login.module.css';
import Image from 'next/image';
import Login from '@/components/Login/Login';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";
import checkSignIn from '@/common/checkSignIn';

export default function LoginPage() {
  const accessToken = localStorage.getItem('accesstoken');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!username) {
      setError('Please fill out both email.');
      return;
    }
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username }),
      });
      if (!response.ok) {
        throw new Error('Login failed');
      }
      const data = await response.json()
      localStorage.setItem('accesstoken', data.accessToken);
      router.push('/');
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  const router = useRouter();

  useEffect(() => {
    const checkUserSignIn = async () => {
      const isSignIn: any = await checkSignIn(accessToken);
      console.log(isSignIn)
      if (accessToken && isSignIn.status) router.push('/');
    }
    checkUserSignIn()
  }, [accessToken]);

  return (
    <div className={styles.loginContainer}>
      
      <div className={styles.signForm}>
        <Login username={username} setUsername={setUsername} handleSubmit={handleSubmit}/>
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
