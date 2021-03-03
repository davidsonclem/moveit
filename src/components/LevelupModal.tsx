import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelupModal.module.css'

export function LevelupModal() {
  const { level, closeLevelupModal } = useContext(ChallengesContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level</p>
        <button type="button" onClick={closeLevelupModal}> <img src="/icons/close.svg" alt="" /></button>
      </div>
    </div>
  )
}