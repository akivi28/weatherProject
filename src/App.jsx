
import MainPage from './MainPage';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './RootLayout';
import SearchWeather from './SearchWeather';
import NotFound from './NotFound';
import WeatherMap from './WeatherMap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <NotFound/>,
    children:[
      { path: '/', element: <MainPage /> },
      { path: '/weatherDetails/:cityName', element: <SearchWeather/>},
      {path:'/map',element: <WeatherMap/> }
    ]
  }
])

function App() {
  return (<>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
