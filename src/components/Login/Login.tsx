// src/components/Login.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    try {
      // const res = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username }),
      // });

      // if (!res.ok) {
      //   throw new Error('Login failed');
      // }

      // const { accesstoken } = await res.json();

      // Store the token in local storage
      localStorage.setItem('accesstoken', username);

      // Redirect to the desired page upon successful login
      router.push('/login'); // Adjust this route as needed
    } catch (err) {
      setError('Invalid username');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h4 className="pb-4">Sign in</h4>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button
            className={styles.loginButton}
            type="submit"
          >
            Sign In
          </button>
        </div>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
