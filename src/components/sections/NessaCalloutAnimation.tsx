import { Check } from "lucide-react";
import styles from "./NessaCalloutAnimation.module.css";

const COUNTDOWN_VALUES = ["45:00", "36:24", "28:11", "22:46", "18:32", "16:08"] as const;
const CAREGIVERS = ["MJ", "AK", "RP", "TL", "SC"] as const;

export function NessaCalloutAnimation({ label = "NESTAID" }: { label?: string }) {
  return (
    <div
      className={styles.frame}
      role="img"
      aria-label="Caregiver call-out fill cycle dropping from 45 minutes to 15 minutes with AI matching"
    >
      <div className={styles.headerRow}>
        <div className={styles.topLabel}>{label}</div>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          FILLING
        </div>
      </div>

      <div className={styles.timerWrap}>
        <svg className={styles.timerRing} viewBox="0 0 180 180">
          <circle className={styles.timerBg} cx="90" cy="90" r="84" />
          <circle className={styles.timerFg} cx="90" cy="90" r="84" />
        </svg>
        <div className={styles.timerContent}>
          <div className={styles.timerNums}>
            {COUNTDOWN_VALUES.map((value, i) => (
              <div key={i} className={styles.timerNum}>
                <div className={styles.timerValue}>{value}</div>
              </div>
            ))}
            <div className={styles.timerFinal}>
              <div className={styles.timerValue}>15:00</div>
            </div>
          </div>
          <div className={styles.timerUnit}>AVG FILL TIME</div>
        </div>
      </div>

      <div className={styles.caregivers}>
        {CAREGIVERS.map((initials, i) => {
          const isMatched = i === CAREGIVERS.length - 1;
          return (
            <div
              key={initials}
              className={`${styles.cgAvatar} ${isMatched ? styles.cgAvatarMatched : ""}`}
            >
              {initials}
              {isMatched ? (
                <span className={styles.checkMark}>
                  <Check size={8} strokeWidth={3} />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className={styles.status}>
        <div className={styles.statusText}>Call-out received</div>
        <div className={styles.statusText}>Texting backups</div>
        <div className={styles.statusText}>Match confirmed</div>
        <div className={styles.statusText}>Shift covered</div>
      </div>

      <div className={styles.dotRow}>
        <div className={styles.progressDot} />
        <div className={styles.progressDot} />
        <div className={styles.progressDot} />
        <div className={styles.progressDot} />
      </div>
    </div>
  );
}
