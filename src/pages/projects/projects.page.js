import Layout from '../../components/layout/layout.component'
import './projects.scss'
import ProjectData from '../projects/projects.data'

const ProjectPage = () => {
  return (
    <Layout title="Projects">
      <div className="projects-container">
        {ProjectData.map(({ id, name, description, frontend, backend }) => (
          <div key={id} className="project-card">
            <div className="project-basic-details">
              <p className="project-name">{name}</p>
              <p className="project-description">{description}</p>
            </div>
            <div className="project-tech-container">
            <div className='tech-wrapper'>
              {frontend && <p>Frontend - </p>}
                {frontend?.map((technology,index) => (
                  <><p>{technology}</p>{index!== frontend.length-1 && <span>,</span>}</>
                ))}
              </div>
              <div className='tech-wrapper'>
              {backend && <p>Backend - </p>}
                {backend?.map((technology,index) => (
                  <><p>{technology}</p>{index!== backend.length-1 && <span>,</span>}</>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default ProjectPage
