import Link from 'next/link';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        minHeight: '100vh',
        width: '100%',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        fontFamily: inter.style.fontFamily,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '2rem',
          backgroundColor: '#1a1a1a',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#ffffff',
              letterSpacing: '-0.03em',
            }}
          >
            My Notebooks
          </motion.h1>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginBottom: '3rem',
          }}
        >
          <h2
            style={{
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              color: '#61dafb',
              fontWeight: '600',
              letterSpacing: '-0.02em',
            }}
          >
            Welcome to Your Digital Workspace
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem',
              color: '#e0e0e0',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            }}
          >
            Organize your thoughts, collaborate with others, and boost your productivity
            with our advanced notebook system. Create, edit, and share your notes
            seamlessly across all your devices.
          </p>
          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '2rem',
              color: '#e0e0e0',
              letterSpacing: '-0.01em',
              fontWeight: '400',
            }}
          >
            Whether you&apos;re a student, professional, or creative mind, our platform
            provides the perfect environment for your note-taking needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            href="/auth/login"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#61dafb',
              color: '#000000',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              letterSpacing: '-0.01em',
            }}
          >
            Login to Your Account
          </Link>
          <Link
            href="/auth/register"
            style={{
              padding: '1rem 2rem',
              backgroundColor: 'transparent',
              color: '#61dafb',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              border: '2px solid #61dafb',
              transition: 'all 0.3s ease',
              letterSpacing: '-0.01em',
            }}
          >
            Create New Account
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            marginTop: '4rem',
            padding: '2rem',
            backgroundColor: '#2d2d2d',
            borderRadius: '12px',
          }}
        >
          <h3
            style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#61dafb',
              fontWeight: '600',
              letterSpacing: '-0.02em',
            }}
          >
            Key Features
          </h3>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
            }}
          >
            {['Real-time collaboration', 'Cloud sync', 'Rich text editing', 'File attachments'].map(
              (feature, index) => (
                <li
                  key={index}
                  style={{
                    padding: '1rem',
                    backgroundColor: '#3d3d3d',
                    borderRadius: '8px',
                    color: '#e0e0e0',
                    letterSpacing: '-0.01em',
                    lineHeight: '1.5',
                    fontWeight: '500',
                  }}
                >
                  ✨ {feature}
                </li>
              )
            )}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;