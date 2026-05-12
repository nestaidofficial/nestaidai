import styles from "./NessaScheduleAnimation.module.css";

const SHIFT_PATTERN = [
  ["s1", "s2", "s3", "s4", "s5"],
  ["s6", "s7", "s8", "s9", "s10"],
  ["s11", "s12", "s1", "s2", "s3"],
  ["s4", "s5", "s6", "s7", "s8"],
] as const;

const TIME_LABELS = ["6A", "10A", "2P", "6P"] as const;
const DAY_LABELS = ["M", "T", "W", "T", "F"] as const;

export function NessaScheduleAnimation({ label = "SCHEDULING" }: { label?: string }) {
  return (
    <div
      className={styles.frame}
      role="img"
      aria-label="Home care schedule grid filling in automatically with AI coordination of caregivers"
    >
      <div className={styles.topLabel}>{label}</div>

      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        SYNCED
      </div>

      <div className={styles.gridWrap}>
        <div className={styles.dayRow}>
          {DAY_LABELS.map((d, i) => (
            <div key={i} className={styles.dayLabel}>
              {d}
            </div>
          ))}
        </div>

        <div className={styles.schedule}>
          {SHIFT_PATTERN.map((row, rowIdx) => (
            <RowFragment key={rowIdx} row={row} timeLabel={TIME_LABELS[rowIdx]} rowIdx={rowIdx} />
          ))}
        </div>
      </div>

      <div className={styles.status}>
        <div className={styles.statusText}>Matching caregivers</div>
        <div className={styles.statusText}>Filling open shifts</div>
        <div className={styles.statusText}>EVV verified</div>
        <div className={styles.statusText}>Week scheduled</div>
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

function RowFragment({
  row,
  timeLabel,
  rowIdx,
}: {
  row: readonly string[];
  timeLabel: string;
  rowIdx: number;
}) {
  return (
    <>
      <div className={styles.timeLabel}>{timeLabel}</div>
      {row.map((shiftClass, colIdx) => {
        const showSwap = rowIdx === 0 && colIdx === 3;
        return (
          <div key={colIdx} className={styles.cell}>
            <div className={`${styles.shift} ${styles[shiftClass]}`} />
            {showSwap ? <div className={styles.swapIndicator} /> : null}
          </div>
        );
      })}
    </>
  );
}
