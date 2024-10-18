import Head from "next/head";
import Link from "next/link";

export default function Support() {
  return (
    <div class="min-h-screen bg-white">
      <Head>
        <title>Support</title>
      </Head>

      <header>
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <div>
                <span class="sr-only">Pocket Ninja</span>
                <img class="h-8 w-auto sm:h-10" src="/logo_black.png" />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div class="text-center items-center mx-auto p-4 max-w-md">
        <div class="text-4xl text-center text-gray-900 border-0 font-extrabold mb-6 sm:text-5xl">
          Contact Us
        </div>

        <Link href="mailto:hello@pocketninja.dev" class="inline-flex">
          <a class="inline-flex px-7 py-4 text-lg text-white font-semibold bg-indigo-600 hover:bg-indigo-700">
            Send
          </a>
        </Link>

        {/* <form
          action="mailto:hello@pocketninja.dev"
          method="get"
          class="max-w-md mx-auto"
        >
          <div class="mb-4">
            <label
              for="first_name"
              class="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label
              for="last_name"
              class="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label
              for="application_name"
              class="block text-sm font-medium text-gray-700"
            >
              Application Name & Platform
            </label>
            <input
              type="text"
              id="application_name"
              name="application_name"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="mt-1
  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div class="mb-4">
            <label
              for="message"
              class="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="mt-1
  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 bg-indigo-600 border border-transparent rounded-md font-semibold
  text-white hover:bg-indigo-700"
          >
            Send
          </button>
        </form>
      </div> */}
      </div>
    </div>
  );
}
