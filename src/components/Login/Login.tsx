// src/components/Login.tsx
import React, { useState } from 'react';
import styles from './loginForm.module.css';

const LoginForm = ({username, setUsername, handleSubmit}: any) => {
  return (
    <div className={styles.loginContainer}>
      <h4 className="pb-4">Sign in</h4>
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
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
    </div>
  );
};

export default LoginForm;
