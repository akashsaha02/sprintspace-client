import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import AuthProvider from './providers/AuthProvider'
import MyProfilePage from './pages/MyProfilePage/MyProfilePage'
import UpdateProfilePage from './pages/UpdateProfilePage/UpdateProfilePage'
import CampaignsPage from './pages/CampaignsPage/CampaignsPage'
import CampaignDetailsPage from './pages/CampaignDetailsPage/CampaignDetailsPage';
import MyCampaignPage from './pages/MyCampaignPage/MyCampaignPage';
import AddCampaignPage from './pages/AddCampaignPage/AddCampaignPage';
import MyDonationPage from './pages/MyDonationPage/MyDonationPage';
import PrivateRoute from './routes/PrivateRoute'
import UpdateCampaigns from './pages/UpdateCampaigns/UpdateCampaigns'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService/TermsOfService'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      },
      {
        path: '/profile',
        element: <PrivateRoute>
          <MyProfilePage />
        </PrivateRoute>
      },
      {
        path: '/update-profile',
        element: <PrivateRoute>
          <UpdateProfilePage />
        </PrivateRoute>
      },
      {
        path: '/campaigns',
        element: <CampaignsPage />
      },
      {
        path: '/campaigns/:id',
        element: <PrivateRoute>
          <CampaignDetailsPage />
        </PrivateRoute>
      },
      {
        path: '/add-campaign',
        element: <PrivateRoute>
          <AddCampaignPage />
        </PrivateRoute>
      },
      {
        path: '/my-campaigns',
        element: <PrivateRoute>
          <MyCampaignPage />,
        </PrivateRoute>
      },
      {
        path: '/my-campaigns/:id',
        element: <PrivateRoute>
          <CampaignDetailsPage />,
        </PrivateRoute>
      },
      {
        path: '/my-donations',
        element: <PrivateRoute>
          <MyDonationPage />
        </PrivateRoute>
      },
      {
        path: 'campaigns/update/:id',
        element: <PrivateRoute>
          <UpdateCampaigns />
        </PrivateRoute>
      },
      {
        path:'/privacy-policy',
        element:<PrivacyPolicy/>
      },
      {
        path:'/terms-of-service',
        element:<TermsOfService/>
      }
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
