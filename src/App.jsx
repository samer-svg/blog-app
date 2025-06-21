import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function wait(mx) {
  return new Promise(resolve => setTimeout(resolve,mx));
}

const Home = lazy(() => wait(1000).then(() => import('./pages/Home')));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));

function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50 z-50">
      <div className="w-16 h-16 border-4 border-sky-400 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-sky-200">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
const withSuspense = (Component) => {
  return (
    <Suspense fallback={ < LoadingSpinner />}>
      <Component />
    </Suspense>
  )}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: withSuspense(NotFound),
    children: [
      {
        index: true,
        element: withSuspense(Home),
      },
      {
        path: 'about',
        element: withSuspense(About),
      },
      {
        path: 'contact',
        element: withSuspense(Contact),
      },
      {
        path: 'blog/:id',
        element: withSuspense(BlogPost),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
