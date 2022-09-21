import React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from '@Styles/theme'
import ReactDOM from 'react-dom/client'
import App from './App'
import Error from './Error'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
