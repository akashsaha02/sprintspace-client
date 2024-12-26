
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/logo.png';
import 'react-tooltip/dist/react-tooltip.css'
import ThemeToggle from './ThemeToggle';
import ProfileTooltip from './ProfileTooltip';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/marathons"
        className={({ isActive }) =>
          `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
          }`
        }
      >
        All Marathons
      </NavLink>
      {user && (
        <NavLink
          to="/add-marathon"
          className={({ isActive }) =>
            `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
            }`
          }
        >
          Add Marathon
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/my-events"
          className={({ isActive }) =>
            `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
            }`
          }
        >
          My Marathons
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/my-registrations"
          className={({ isActive }) =>
            `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
            }`
          }
        >
          My Registrations
        </NavLink>
      )}

      <ThemeToggle />
      {/* workinng */}
      {/* <input type="checkbox" className="toggle toggle-accent" onChange={toggleTheme} defaultChecked /> */}

    </>
  );

  return (
    <div className="bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-md dark:shadow-gray-700 py-2">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start items-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="hidden btn btn-sm btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 dark:text-gray-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div
            onClick={() => navigate("/")}
            className="w-[50%] cursor-pointer flex justify-center items-cente"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold hidden dark:block italic">SprintSpace</h2>
            <img className="w-full hidden md:block dark:hidden" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {
            <NavLink
              to={user ? "/profile" : "/register"}
              className={({ isActive }) =>
                `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
                }`
              }>
              {user ? "My Profile" : "Register"}
            </NavLink>

          }
          {
            user ? <ProfileTooltip img={user.displayURL} name={user.displayName} email={user.email} /> : <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-purple-600 text-white' : 'bg-transparent dark:text-gray-200'
                }`
              }>
              Login
            </NavLink>
          }
        </div>
      </div>
    </div >
  );
};

export default Header;
