import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown()
  }

  return (
    <div className={styles.challengeboxContainer} >
      { activeChallenge ? (
        <div className={styles.challengeboxActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Novo desafio" />
            <strong>Novo dessafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeboxFailedButton}
              type='button'
              onClick={handleChallengeFailed} >
              Falhei
              </button>

            <button
              className={styles.challengeboxSuccesedButton}
              type='button'
              onClick={handleChallengeSucceeded}
            >Completei</button>
          </footer>
        </div>
      ) : (
          <div className={styles.challengeboxNotActive}>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level up" />
              Avance de level completando os desafios
            </p>
          </div>
        )}
    </ div>)
}