import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from './Component/Bag.jsx';
import Home from './Component/Home.jsx';
import { Provider } from 'react-redux';
import myntraStore from './store/index.js';
const router = createBrowserRouter([
  {
    path: "/", element: <App />,
    children: [
      { path: "/Home", element: <Home /> },
      { path: "/Bag", element: <Bag /> }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
