// src/components/Login.tsx
import React, { useState } from 'react';
import styles from './loginForm.module.css';
interface FormData {
	email: string;
}

const Login: React.FC = () => {
	const [formData, setFormData] = useState<FormData>({ email: '' });

	return (
		<div className={styles.loginContainer}>
			<h4 className='pb-4'>Sign in</h4>
			<form>
				<div className={styles.formGroup}>
					
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						placeholder='Username'
						required
					/>
					<button
						className={styles.loginButton}
						type="submit"
					>Sign In</button>

				</div>
			</form>
		</div>
	);
};

export default Login;
