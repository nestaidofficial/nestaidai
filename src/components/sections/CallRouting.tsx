
import Image from "next/image";
import styles from "./CallRouting.module.css";

const logEntries = [
  {
    time: "9:30 AM",
    caller: "Maria Lopez",
    detail: "Caregiver call-out — Tuesday 2 PM visit",
    route: "SOFIA",
    shift: "a" as const,
  },
  {
    time: "11:45 AM",
    caller: "Johnson family",
    detail: "Schedule change request",
    route: "SOFIA",
    shift: "a" as const,
    hero: true,
  },
  {
    time: "1:58 PM",
    caller: "New lead — Davis",
    detail: "Inquiry about evening hours",
    route: "SOFIA",
    shift: "a" as const,
    hero: true,
  },
  {
    time: "2:01 PM",
    caller: "Caregiver Anna onboarding",
    detail: "EVV check-in question",
    route: "ANNA",
    shift: "b" as const,
    hero: true,
  },
  {
    time: "4:30 PM",
    caller: "Williams family",
    detail: "Care plan update follow-up",
    route: "ANNA",
    shift: "b" as const,
  },
  {
    time: "7:00 PM",
    caller: "After-hours call-out",
    detail: "Sub coverage arranged automatically",
    route: "ANNA",
    shift: "b" as const,
  },
];

export function CallRouting() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-max">
        <div
          className="max-w-3xl mx-auto mb-10 sm:mb-14 text-center"

        >
          <p className="text-xs font-medium uppercase tracking-wider text-[#C97B5B] mb-3">
            Smart Call Routing
          </p>
          <h2 className="text-[2.1rem] sm:text-[2.7rem] lg:text-[50px] font-body font-bold tracking-tight leading-tight mb-6">
            Coverage that <em className="italic" style={{ color: "#F58D42" }}>follows</em> the clock
          </h2>
          <p className="text-[17px] text-muted-foreground max-w-2xl mx-auto">
            Sofia handles mornings. Anna covers nights and weekends. Every call
            gets answered, logged, and routed automatically.
          </p>
        </div>

        <div className={styles.wrap}>
          <div className={styles.stage}>
            <div className={styles.footer}>
              <p className={styles.footerText}>
                <strong>Zero missed calls.</strong> Nestaid knows who's on shift,
                routes the call, and logs the outcome — automatically.
              </p>
            </div>

            {/* Live activity log */}
            <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white p-6 sm:p-8 mt-5">
              <div className={styles.logHeader}>
                <div className={styles.logBadge}>
                  <Image
                    src="/logo.svg"
                    alt="Nestaid logo"
                    width={18}
                    height={18}
                    className={styles.logBadgeLogo}
                  />
                </div>
                <div className={styles.logTitleWrap}>
                  <p className={styles.logTitle}>Nestaid · Routing activity</p>
                  <p className={styles.logSub}>
                    Every inbound call, triaged in real time
                  </p>
                </div>
                <span className={styles.logLive}>
                  <span className={styles.logLiveDot} />
                  Live
                </span>
              </div>
              <div className={styles.log}>
                <div className={styles.logEntries}>
                  {/* Sofia's shift header */}
                  <div className={`${styles.coord} ${styles.coord_a}`}>
                    <div className={styles.coordAvatar}>
                      <Image
                        src="/ava1.webp"
                        alt="Sofia Martinez"
                        width={40}
                        height={40}
                        className={styles.coordAvatarImage}
                      />
                    </div>
                    <div className={styles.coordBody}>
                      <p className={styles.coordName}>Sofia Martinez</p>
                      <p className={styles.coordHours}>8:00 AM – 2:00 PM · Day shift</p>
                    </div>
                    <div className={styles.coordStatusWrap}>
                      <span className={`${styles.coordStatus} ${styles.statusOn}`}>
                        <span className={styles.statusDot} />
                        On call
                      </span>
                      <span className={`${styles.coordStatus} ${styles.statusOff}`}>
                        <span className={styles.statusDot} />
                        Off shift
                      </span>
                    </div>
                  </div>

                  {logEntries.slice(0, 3).map((entry) => (
                    <div
                      key={entry.time}
                      className={`${styles.logEntry} ${entry.hero ? styles.logEntryHero : ""}`}
                    >
                      <span className={styles.entryTime}>{entry.time}</span>
                      <span className={styles.entryText}>
                        <strong>{entry.caller}</strong>
                        <small>{entry.detail}</small>
                      </span>
                    </div>
                  ))}

                  {/* Handoff divider — vertical dotted line with side label */}
                  <div className={styles.handoffRow}>
                    <div className={styles.handoffDots} aria-hidden="true">
                      <span className={styles.handoffPulse} />
                    </div>
                    <div className={styles.handoffMeta}>
                      <span className={styles.handoffMetaTitle}>
                        Shift change
                      </span>
                      <span className={styles.handoffMetaSub}>
                        Call routed · 2:00 PM
                      </span>
                    </div>
                  </div>

                  {/* Anna's shift header */}
                  <div className={`${styles.coord} ${styles.coord_b}`}>
                    <div className={styles.coordAvatar}>
                      <Image
                        src="/ava2.webp"
                        alt="Anna Chen"
                        width={40}
                        height={40}
                        className={styles.coordAvatarImage}
                      />
                    </div>
                    <div className={styles.coordBody}>
                      <p className={styles.coordName}>Anna Chen</p>
                      <p className={styles.coordHours}>2:00 PM – 11:00 PM · Evening shift</p>
                    </div>
                    <div className={styles.coordStatusWrap}>
                      <span className={`${styles.coordStatus} ${styles.statusOn}`}>
                        <span className={styles.statusDot} />
                        On call
                      </span>
                      <span className={`${styles.coordStatus} ${styles.statusOff}`}>
                        <span className={styles.statusDot} />
                        Off shift
                      </span>
                    </div>
                  </div>

                  {logEntries.slice(3).map((entry) => (
                    <div
                      key={entry.time}
                      className={`${styles.logEntry} ${
                        entry.hero ? `${styles.logEntryHero} ${styles.logEntryHeroB}` : ""
                      }`}
                    >
                      <span className={styles.entryTime}>{entry.time}</span>
                      <span className={styles.entryText}>
                        <strong>{entry.caller}</strong>
                        <small>{entry.detail}</small>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
