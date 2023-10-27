import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../Components/Layout';
import Main from '../Pages/Main';
import Abdomen from '../Pages/Abdomen';
import Finger from '../Pages/Finger';

export default function Router() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        { path: '/', element: <Main /> },
        { path: '/abdomen', element: <Abdomen /> },
        { path: '/finger', element: <Finger /> }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
