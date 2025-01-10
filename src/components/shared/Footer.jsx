import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t-2 border-t-slate-950 dark:border-t-slate-600">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 lg:px-12">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400 mb-4">SprintSpace</h2>
          <p className="text-gray-400 mb-6 text-justify">
            Join us in celebrating fitness, endurance, and community. Whether you're running to beat your personal best or to support a meaningful cause, every step matters. Let’s cross the finish line together!
          </p>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-purple-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-purple-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/marathons" className="text-gray-400 hover:text-purple-400">
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link to="/" className="text-gray-400 hover:text-purple-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-gray-400 hover:text-purple-400">
                Join now
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold text-purple-400 mb-4">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Subscribe to our newsletter to get the latest marathon news and updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg border-2 border-purple-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-purple-400 text-white px-6 py-2 rounded-r-lg hover:bg-purple-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 py-4">
        <div className="container mx-auto flex justify-between items-center px-6 lg:px-12">
          <p className="text-sm text-gray-400">© 2025 SprintSpace. All rights reserved.</p>
          <nav className="flex space-x-4">
            <a href="/privacy-policy" className="text-gray-400 hover:text-purple-400">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-purple-400">
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
