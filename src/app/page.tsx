"use client";
// Dummy change
import Image from "next/image";
import styles from "./page.module.css";
import { FormattedMessage, IntlProvider } from "react-intl";
import { useState } from "react";

export default function Home() {
  type Locale = "en" | "ja" | "es";
  const [locale, setLocale] = useState<Locale>("en");
  const [number, setNumber] = useState(0);
  let messages;
  if (locale === "ja") {
    messages = require("../../public/lang/ja.json");
  } else if (locale === "es") {
    messages = require("../../public/lang/es.json");
  }
  return (
    <main className={styles.main}>
      <IntlProvider messages={messages} locale={locale}>
        <div className={styles.description}>
          <p>
            <FormattedMessage
              id="sampleMessage"
              defaultMessage="There are {number} users"
              values={{ number }}
            />
          </p>
          <div>
            <select
              id="languageSelect"
              onChange={(value) => {
                const newLocale = value.currentTarget.value as Locale;
                setLocale(newLocale);
              }}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="ja">日本語</option>
            </select>
            <br />
            <br />
            <h4>
              <FormattedMessage
                id="inputMessage"
                defaultMessage="Input a number"
              />
            </h4>
            <input
              type="number"
              onChange={(event) => setNumber(+event.target.value)}
            />
          </div>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              <FormattedMessage id="documentTitle" defaultMessage="Docs" />
              <span>-&gt;</span>
            </h2>
            <p>
              <FormattedMessage
                id="documentDescription"
                defaultMessage="Find in-depth information about Next.js features and API."
                description="A link to the NextJS API Documentation"
              />
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              <FormattedMessage id="learnTitle" defaultMessage="Learn" />
              <span>-&gt;</span>
            </h2>
            <p>
              <FormattedMessage
                id="learnDescription"
                defaultMessage="Learn about Next.js in an interactive course with&nbsp;quizzes!"
                description="A link to the NextJS quiz page"
              />
            </p>
          </a>
        </div>
      </IntlProvider>
    </main>
  );
}
