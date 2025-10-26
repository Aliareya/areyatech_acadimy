import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './context/ThemeContext';
import { StaticDataProvider } from './context/StaticDataContext';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <StaticDataProvider>
        <BrowserRouter>
         <MainLayout />
        </BrowserRouter>
      </StaticDataProvider>
    </ThemeProvider>
  )
}

export default App