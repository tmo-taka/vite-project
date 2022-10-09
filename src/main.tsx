import React from 'react'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from '@Styles/theme'
import { RecoilRoot } from 'recoil'
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
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    </ChakraProvider>
  </React.StrictMode>
)
