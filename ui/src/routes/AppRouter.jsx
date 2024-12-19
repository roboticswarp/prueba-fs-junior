import { BrowserRouter, Route, Routes } from 'react-router'
import { HomeView } from '../views/HomeView'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  )
}
