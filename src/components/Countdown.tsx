import { FC, useContext } from 'react';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';

export function Countdown() {
  const { minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown }
    = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


  const ButtonCountdown: FC<{}> = () => {
    if (isActive) {
      return <button
        type="button"
        className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
        onClick={resetCountdown} >Abandonar ciclo  <img src="icons/close.svg" alt="Abandonar ciclo" /></button>
    }

    if (hasFinished) {
      return <button
        className={styles.countdownButton}
        disabled>
        Ciclo encerrado <img src="icons/check_circle.svg" alt="Ciclo encerrado" /></button>
    }

    return <button
      type="button"
      className={styles.countdownButton}
      onClick={startCountdown} >Iniciar ciclo <img src="icons/play_arrow.svg" alt="Iniciar ciclo" /></button>
  }

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <ButtonCountdown />
    </div>
  )
}