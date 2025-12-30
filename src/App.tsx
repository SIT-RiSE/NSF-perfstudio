import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Course533 from './pages/Course533'
import Team from './pages/Team'
import Resources from './pages/Resources'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Papers from './pages/Papers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses/533" element={<Course533 />} />
        <Route path="advisory-board" element={<AdvisoryBoard />} />
        <Route path="team" element={<Team />} />
        <Route path="papers" element={<Papers />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  )
}

export default App

