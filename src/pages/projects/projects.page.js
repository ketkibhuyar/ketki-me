import Layout from '../../components/layout/layout.component'
import './projects.scss'
import ProjectData from '../projects/projects.data'
import githubImage from '../../assets/github.svg'
import linkImage from '../../assets/link.avif'

const ProjectPage = () => {
  const openLink = (link) => {
    window.open(link, '_blank');
  }

  return (
    <Layout title="Projects">
      <div className="projects-container">
        {ProjectData.map(({ id, name, description, frontend, backend, githubLink, websiteLink }) => (
          <div key={id} className="project-card">
            <div className="project-basic-details">
              <p className="project-name">{name}</p>
              <p className="project-description">{description}</p>
            </div>
            <div>
              <div className="project-tech-container">

                <div className='tech-wrapper'>
                  {frontend && <p>Frontend - </p>}
                  {frontend?.map((technology, index) => (
                    <><p>{technology}</p>{index !== frontend.length - 1 && <span>,</span>}</>
                  ))}
                </div>
                <div className='tech-wrapper'>
                  {backend && <p>Backend - </p>}
                  {backend?.map((technology, index) => (
                    <><p>{technology}</p>{index !== backend.length - 1 && <span>,</span>}</>
                  ))}
                </div>
                <div class="social-wrapper">
                  {websiteLink && <span onClick={() => openLink({ websiteLink })} >
                    <img class="social-image" src={linkImage} alt=''></img>
                  </span>
                  }

                  {githubLink && <span onClick={() => openLink({ githubLink })} href=''>
                    <img class="social-image" src={githubImage} alt=''
                    ></img>
                  </span> }
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectPage
