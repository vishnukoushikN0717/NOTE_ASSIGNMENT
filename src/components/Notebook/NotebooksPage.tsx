// NotebooksPage.tsx
import React from 'react';
import { NotebookList } from './NotebookList';
import styles from './NotebooksPage.module.css';

export const NotebooksPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
          <h1 className={styles.pageTitle}>My Notebooks</h1>
        <div className={styles.mainContent}>
          <NotebookList />
        </div>
    </div>
  );
};