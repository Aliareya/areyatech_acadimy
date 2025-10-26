import MainLayout from './layouts/MainLayout';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <MainLayout/>
    </ThemeProvider>
  )
}

export default App