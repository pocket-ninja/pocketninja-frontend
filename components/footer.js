import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 sm:pt-20 md:pt-24 xl:pt-32 sm:pb-20">
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto divide-y divide-gray-200 px-4 sm:px-6 md:px-8">
        <ul
          className="text-sm font-medium pb-14 sm:pb-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10">
          <li className="space-y-5 row-span-2">
            <h2 className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Legal</h2>
            <ul className="space-y-4">
              <li>
                <Link className="hover:text-gray-900 transition-colors duration-200" href="/tos">Terms Of Use</Link>
              </li>
              <li>
                <Link className="hover:text-gray-900 transition-colors duration-200" href="/pp">Privacy Policy</Link>
              </li>
            </ul>
          </li>
          <li className="space-y-5">
            <h2 id="contacts" className="text-xs font-semibold tracking-wide text-gray-900 uppercase">Contacts</h2>
            <ul className="space-y-4">
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200" href="https://www.instagram.com/pocket_nindza/">Instagram</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200" href="https://www.facebook.com/pocketnindza/">Facebook</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200" href="https://twitter.com/pocket_nindza">Twitter</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200" href="https://github.com/pocket-ninja">GitHub</a>
              </li>
              <li>
                <a className="hover:text-gray-900 transition-colors duration-200" href="mailto:hello@pocketninja.dev">Send E-Mail</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="pt-10 sm:pt-12">
          <img className="h-8 w-auto sm:h-10" src="/logo_black.png" />
        </div>
      </div>
    </footer>
  )
}
