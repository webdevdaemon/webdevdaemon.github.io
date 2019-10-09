import GalleryOfCards from '../components/gallery-of-cards'
import PageWrap from '../layouts/page-wrap'

const Projects = () => {
  return (
    <PageWrap
      desc="Projects Page: A Collection of Charles M's Programming Highlights."
      title="projects"
    >
      <GalleryOfCards/>
    </PageWrap>
  )
}

export default Projects
