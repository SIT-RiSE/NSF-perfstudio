import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Course533 from './pages/Course533'
import Team from './pages/Team'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses/533" element={<Course533 />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  )
}

export default App

