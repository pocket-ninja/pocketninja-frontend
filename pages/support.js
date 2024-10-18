import Head from "next/head";
import Link from "next/link";
import styles from "../components/support-styles.module.css";

export default function Support() {
  async function send(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = encodeURIComponent(data.get("body"));
    const subject = encodeURIComponent(data.get("subject"));
    const url = `mailto:hello@pocketninja.dev?body=${body}&subject=${subject} contact-us-form`;
    window.open(url);
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Support</title>
      </Head>

      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/">
            <a>
              <span className="sr-only">Pocket Ninja</span>
              <img className="h-8 w-auto sm:h-10" src="/logo_black.png" />
            </a>
          </Link>
        </div>
      </div>

      <form
        onSubmit={send}
        className="text-center items-center mx-auto p-6 max-w-lg"
      >
        <div className="text-4xl text-center text-gray-900 border-0 font-extrabold mb-8 sm:text-5xl">
          Contact Us
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Name</label>
          <input type="text" name="name" className={styles.inputPrimary} />
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Subject *</label>
          <input
            type="text"
            name="subject"
            className={styles.inputPrimary}
            required
          />
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Message *</label>
          <textarea
            className={styles.inputPrimary}
            name="body"
            rows="4"
            required
          />
        </div>

        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
}
