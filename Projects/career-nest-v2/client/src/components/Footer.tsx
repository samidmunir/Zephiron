const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left: Logo & Description */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            CareerNest
          </h2>
          <p className="text-muted mt-2 max-w-sm">
            Helping you organize, track, and succeed in your job search journey.
          </p>
        </div>

        {/* Right: Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-muted">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Product
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#features" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:underline">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Company
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
              Legal
            </h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} CareerNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
