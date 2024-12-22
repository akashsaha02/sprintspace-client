import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { useState, useEffect } from 'react'

const Layout = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (

    <div className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <Outlet />
      <div className="">
        <div className='max-w-7xl px-4 mx-auto'>
          <Toaster />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
