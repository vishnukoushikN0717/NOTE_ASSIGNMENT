import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '@/styles/auth.module.css';
import { Alert } from '@/components/common/Alert';

export const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Registration failed');
        return;
      }

      setSuccess('Registration successful! Redirecting to login...');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });

      setTimeout(() => {
        router.push('/auth/login');
      }, 2000);

    } catch {
      setError('An error occurred during registration. Please try again.');
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
            <h2 className={styles.title}>Create Account</h2>
            <p className={styles.subtitle}>Join us to start organizing your digital life</p>

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
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>

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
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className={styles.input}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  required
                />
              </div>
              <p className={styles.passwordHint}>
                Must be at least 6 characters long
              </p>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <div className={styles.inputWrapper}>
                <input
                  id="confirmPassword"
                  type="password"
                  name="confirmPassword"
                  className={styles.input}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
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
                  Creating account...
                </span>
              ) : (
                'Create account'
              )}
            </button>

            <div className={styles.footer}>
              <span className={styles.footerText}>Already have an account?</span>
              <Link href="/auth/login" className={styles.footerLink}>
                Sign in instead
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};