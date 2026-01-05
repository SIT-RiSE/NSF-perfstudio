import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Course315 from './pages/Course315'
import Course345 from './pages/Course345'
import Course533 from './pages/Course533'
import Course567 from './pages/Course567'
import Team from './pages/Team'
import Resources from './pages/Resources'
import AdvisoryBoard from './pages/AdvisoryBoard'
import Papers from './pages/Papers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="courses/315" element={<Course315 />} />
        <Route path="courses/345" element={<Course345 />} />
        <Route path="courses/533" element={<Course533 />} />
        <Route path="courses/567" element={<Course567 />} />
        <Route path="advisory-board" element={<AdvisoryBoard />} />
        <Route path="team" element={<Team />} />
        <Route path="papers" element={<Papers />} />
        <Route path="resources" element={<Resources />} />
      </Route>
    </Routes>
  )
}

export default App

