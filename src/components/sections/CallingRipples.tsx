import styles from "./CallingRipples.module.css";

/**
 * White soundwave rendered as an absolute overlay inside the "Try Nestaid"
 * button while a call is active, so it looks like Nessa is talking in real
 * time. The host button must be `relative overflow-hidden`.
 */
export function CallingRipples() {
  return (
    <span className={styles.wrap} aria-hidden="true">
      <span className={styles.wave}>
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </span>
    </span>
  );
}
