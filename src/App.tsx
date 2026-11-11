import { Route, Routes } from 'react-router'
import Layout from './components/layout/Layout.tsx'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Experience from './pages/Experience.tsx'
import Projects from './pages/Projects.tsx'
import ProjectDetail from './pages/ProjectDetail.tsx'
import Gallery from './pages/Gallery.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
