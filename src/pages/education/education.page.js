import Layout from '../../components/layout/layout.component';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './education.scss';
import { EducationData } from './education.data';
import { ReactComponent as EducationIcon } from '../../assets/education-icon.svg';

const EducationPage = () => {

  return (
    <Layout title='Education'>
      <VerticalTimeline layout='2-columns' className="vertical-timeline-custom-line">
        {
          EducationData.map(education => (
            <VerticalTimelineElement
              key={education.id}
              className={`vertical-timeline-element--${education.purpose}`}
              date={education.date}
              icon={<EducationIcon />}
            >
              <h3 className="vertical-timeline-element-title">{education.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{education.subtitle}</h4>
              <p>
                {education.description}
              </p>
            </VerticalTimelineElement>
          ))
        }
      </VerticalTimeline>
    </Layout>
  )
};

export default EducationPage;