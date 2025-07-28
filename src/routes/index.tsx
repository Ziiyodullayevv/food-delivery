import { createBrowserRouter } from 'react-router';
import RootLayout from '@/layouts/RootLayout';
import HomePage from '@/features/home/pages/HomePage';
import AnalyticsPage from '@/features/analytics/pages/AnalyticsPage';
import OrdersPage from '../features/orders/pages/OrdersPage';
import MessagesPage from '../features/messages/pages/MessagesPage';
import NotificationPage from '../features/notification/pages/NotificationPage';
import SettingsPage from '../features/settings/pages/SettingsPage';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'messages', element: <MessagesPage /> },
      { path: 'notification', element: <NotificationPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
