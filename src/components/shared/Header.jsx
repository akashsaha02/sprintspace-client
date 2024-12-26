
// import { useContext } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../providers/AuthProvider';
// import logo from '../../assets/logo-title.png';
// import 'react-tooltip/dist/react-tooltip.css'
// import ThemeToggle from './ThemeToggle';
// import ProfileTooltip from './ProfileTooltip';

// const Header = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const links = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//           }`
//         }
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/marathons"
//         className={({ isActive }) =>
//           `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//           }`
//         }
//       >
//         All Marathons
//       </NavLink>
//       {user && (
//         <NavLink
//           to="/add-marathon"
//           className={({ isActive }) =>
//             `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//             }`
//           }
//         >
//           Add Marathon
//         </NavLink>
//       )}
//       {user && (
//         <NavLink
//           to="/my-events"
//           className={({ isActive }) =>
//             `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//             }`
//           }
//         >
//           My Posted Marathons
//         </NavLink>
//       )}
//       {user && (
//         <NavLink
//           to="/my-registrations"
//           className={({ isActive }) =>
//             `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg mr-2 ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//             }`
//           }
//         >
//           My Registrations
//         </NavLink>
//       )}

//       <ThemeToggle />
//       {/* workinng */}
//       {/* <input type="checkbox" className="toggle toggle-accent" onChange={toggleTheme} defaultChecked /> */}

//     </>
//   );

//   return (
//     <div className="bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-md dark:shadow-gray-700 py-2">
//       <div className="navbar max-w-7xl mx-auto">
//         <div className="navbar-start items-center">
//           <div className="dropdown hidden">
//             <div tabIndex={0} role="button" className="btn btn-sm btn-ghost hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 dark:text-gray-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>
//             <ul
//               tabIndex={0}
//               className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 dark:text-gray-200 rounded-box z-[1] mt-3 w-52 p-2 shadow hidden"
//             >
//               {links}
//             </ul>
//           </div>
//           <h2
//             onClick={() => navigate("/")}
//             className="text-xl md:text-2xl lg:text-3xl font-bold cursor-pointer flex items-center gap-2 dark:text-gray-200"
//           >
//             <span>
//               <img className="w-12 h-12 hidden md:block rounded-full" src={logo} alt="" />
//             </span>
//             <span className="text-teal-700 dark:text-teal-500">
//               SprintSpace
//             </span>
//           </h2>
//         </div>
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>
//         <div className="navbar-end gap-2">
//           {
//             <NavLink
//               to={user ? "/profile" : "/register"}
//               className={({ isActive }) =>
//                 `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//                 }`
//               }>
//               {user ? "My Profile" : "Register"}
//             </NavLink>

//           }
//           {
//             user ? <ProfileTooltip img={user.displayURL} name={user.displayName} email={user.email} /> : <NavLink
//               to="/login"
//               className={({ isActive }) =>
//                 `px-4 py-2 md:text-sm lg:text-md font-semibold rounded-lg ${isActive ? 'bg-teal-600 text-white' : 'bg-transparent dark:text-gray-200'
//                 }`
//               }>
//               Login
//             </NavLink>
//           }
//         </div>
//       </div>
//     </div >
//   );
// };

// export default Header;

import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo-title.png";
import ThemeToggle from "./ThemeToggle";
import ProfileTooltip from "./ProfileTooltip";

const Header = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/marathons", label: "All Marathons" },
    ...(user
      ? [
          { to: "/add-marathon", label: "Add Marathon" },
          { to: "/my-events", label: "My Posted Marathons" },
          { to: "/my-registrations", label: "My Registrations" },
        ]
      : []),
  ];

  return (
    <header className="bg-white dark:bg-gray-900 sticky top-0 z-20 shadow-md py-3">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 rounded-full hidden sm:block"
          />
          <h1
            onClick={() => navigate("/")}
            className="text-xl md:text-2xl font-bold cursor-pointer text-teal-700 dark:text-teal-500"
          >
            SprintSpace
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex gap-4">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-lg transition ${
                  isActive
                    ? "bg-teal-600 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {user ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? "bg-teal-600 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                My Profile
              </NavLink>
              <ProfileTooltip
                img={user.displayURL}
                name={user.displayName}
                email={user.email}
              />
            </>
          ) : (
            <>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? "bg-teal-600 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-semibold rounded-lg transition ${
                    isActive
                      ? "bg-teal-600 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`
                }
              >
                Login
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            className="btn btn-sm btn-ghost"
            aria-label="Open Menu"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className="lg:hidden mt-2 space-y-2">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `block px-4 py-2 text-sm font-semibold rounded-lg transition ${
                isActive
                  ? "bg-teal-600 text-white"
                  : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  );
};

export default Header;
