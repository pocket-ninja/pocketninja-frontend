import Head from "next/head";
import Link from "next/link";
import styles from "../components/support-styles.module.css"

export default function Support() {
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

      <div className="text-center items-center mx-auto p-6 max-w-lg">
        <div className="text-4xl text-center text-gray-900 border-0 font-extrabold mb-8 sm:text-5xl">
          Contact Us
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Name</label>
          <input type="text" className={styles.inputPrimary} required />
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Subject</label>
          <input type="text" className={styles.inputPrimary} required />
        </div>

        <div className="mb-6 text-left">
          <label className={styles.inputTitle}>Message *</label>
          <textarea className={styles.inputPrimary} rows="4" required />
        </div>

        <Link href="mailto:hello@pocketninja.dev" className="inline-flex">
          <a className="inline-flex px-8 py-3.5 text-lg text-white font-medium bg-indigo-600 hover:bg-indigo-700">
            Send
          </a>
        </Link>
      </div>
    </div>
  );
}

{
  /* <form
          action="mailto:hello@pocketninja.dev?body=how you doing"
          method="get"
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <label
              for="first_name"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              for="last_name"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              for="application_name"
              className="block text-sm font-medium text-gray-700"
            >
              Application Name & Platform
            </label>
            <input
              type="text"
              id="application_name"
              name="application_name"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label for="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1
  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-4">
            <label
              for="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1
  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold
  text-white hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div> */
}
