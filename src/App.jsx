/* eslint-disable no-unused-vars */

import { RouterProvider } from 'react-router-dom';
import { router } from "./Routes/Routes";
import { createContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';




export const cartDataContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);


  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
};

export default App;
