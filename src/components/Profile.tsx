import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/davidsonclem.png" alt="Davidson Clem" />
      <div>
        <strong>Davidson Clem</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}</p>
      </div>
    </div>
  );
}