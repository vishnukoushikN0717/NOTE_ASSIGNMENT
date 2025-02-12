// Login.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/auth.module.css';
import { Alert } from '@/components/common/Alert';

export const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Invalid credentials');
        return;
      }

      setSuccess('Login successful! Redirecting...');
      localStorage.setItem('token', data.token);
      setFormData({ email: '', password: '' });

      setTimeout(() => {
        router.push('/notebooks');
      }, 1500);

    } catch {
      setError('An error occurred during login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.authContainer}>
        <div className={styles.formWrapper}>
          <div className={styles.logoSection}>
            <h1 className={styles.logo}>Your Digital Workspace</h1>
          </div>

          <form className={styles.authForm} onSubmit={handleSubmit}>
            <h2 className={styles.title}>Welcome Back</h2>
            <p className={styles.subtitle}>Sign in to continue to your workspace</p>

            {error && (
              <Alert 
                message={error} 
                type="error" 
                onClose={() => setError('')}
              />
            )}

            {success && (
              <Alert 
                message={success} 
                type="success" 
                onClose={() => setSuccess('')}
              />
            )}

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.labelFlex}>
                <label htmlFor="password" className={styles.label}>
                  Password
                </label>
                </div>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={styles.input}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.button} ${loading ? styles.loading : ''}`}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.loadingSpinner}>
                  <span className={styles.spinner}></span>
                  Signing in...
                </span>
              ) : (
                'Sign in'
              )}
            </button>

            <div className={styles.footer}>
              <span className={styles.footerText}>Dont have an account?</span>
              <Link href="/auth/register" className={styles.footerLink}>
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};