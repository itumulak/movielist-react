import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import AddEditPage from "./components/AddEditPage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/add',
    element: <AddEditPage/>
  },
  {
    path: '/edit/:id',
    element: <AddEditPage/>
  }
]);

function App() {
  return (
    <Provider store={store}><RouterProvider router={router}/></Provider>
  )
}

export default App
