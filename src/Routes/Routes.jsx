import { createBrowserRouter } from 'react-router-dom';
import Roots from '../Layout/Roots';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Roots />,
  },
]);

export default Routes;
