import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import logo from '../../assets/logo-title.png';
import 'react-tooltip/dist/react-tooltip.css';
import ThemeToggle from './ThemeToggle';
import ProfileTooltip from './ProfileTooltip';

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isDropdownVisible, setDropdownVisible] = useState(false);




  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded mr-2 ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
        }
        onClick={closeDropdown}
      >
        Home
      </NavLink>
      <NavLink
        to="/all-events"
        className={({ isActive }) =>
          `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded mr-2 ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
        }
        onClick={closeDropdown}
      >
        All Marathons
      </NavLink>
      {user && (
        <NavLink
          to="/add-event"
          className={({ isActive }) =>
            `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded mr-2 ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
          }
          onClick={closeDropdown}
        >
          Add Marathon
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/my-events"
          className={({ isActive }) =>
            `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded mr-2 ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
          }
          onClick={closeDropdown}
        >
          My Marathons
        </NavLink>
      )}
      {user && (
        <NavLink
          to="/my-registrations"
          className={({ isActive }) =>
            `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded mr-2 ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
          }
          onClick={closeDropdown}
        >
          My Registrations
        </NavLink>
      )}
      <ThemeToggle/>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-md dark:shadow-gray-700 py-2 px-4">
      <div className="navbar max-w-[1920px] mx-auto">
        <div className="navbar-start items-center">
          <div className="lg:hidden ">
            <div className="dropdown">

              <button
                onClick={toggleDropdown}
                className="btn btn-sm btn-ghost"
              >
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
              </button>
              {isDropdownVisible && (
                <ul
                  className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  onClick={closeDropdown}
                >
                  {links}
                </ul>
              )}
            </div>
          </div>
          <h2
            onClick={() => navigate("/")}
            className="text-2xl xl:text-3xl font-extrabold cursor-pointer flex items-center gap-2 dark:text-gray-200"
          >
            <span>
              <img className="w-12 h-12 hidden md:block rounded-full border-2 border-sky-500" src={logo} alt="" />
            </span>
            <span className="text-sky-700 dark:text-sky-500 italic">
              SprintSpace
            </span>
          </h2>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">

          <NavLink
            to={user ? "/profile" : "/register"}
            className={({ isActive }) =>
              `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
            }
          >
            {user ? "My Profile" : "Register"}
          </NavLink>
          {user ? (
            <ProfileTooltip
              img={user.displayURL}
              name={user.displayName}
              email={user.email}
            />
          ) : (<>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `px-3 py-2 text-xs md:text-sm lg:text-md font-semibold rounded ${isActive ? 'bg-sky-600 text-white' : 'bg-transparent dark:text-gray-200'}`
              }
            >
              Login
            </NavLink>
          </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

