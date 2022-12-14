import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import router from './Router/Routes/Routes';

function App() {
  return (
    
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false} />
    </div>
  );
}

export default App;
