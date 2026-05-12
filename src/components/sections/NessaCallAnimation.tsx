import styles from "./NessaCallAnimation.module.css";

export function NessaCallAnimation({ label = "NESSA AI" }: { label?: string }) {
  return (
    <div
      className={styles.frame}
      role="img"
      aria-label="AI receptionist answering a call with pulsing soundwaves and rotating status messages"
    >
      <div className={styles.topLabel}>{label}</div>

      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        LIVE
      </div>

      <div className={`${styles.orbit} ${styles.orbit1}`} />
      <div className={`${styles.orbit} ${styles.orbit2}`} />
      <div className={`${styles.orbit} ${styles.orbit3}`} />

      <div className={styles.core}>
        <div className={styles.waveform}>
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
          <div className={styles.waveBar} />
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.statusText}>Answering call</div>
        <div className={styles.statusText}>Listening</div>
        <div className={styles.statusText}>Lead captured</div>
        <div className={styles.statusText}>Appointment booked</div>
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
