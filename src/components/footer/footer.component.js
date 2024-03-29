import './footer.scss';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
const Footer = () => {
  const openLink = (link) => {
    window.open(link, '_blank');
  }

  return (
  <div className='footer-container'>
    <div className='footer-social-media'>
      <div className='footer-links'>
        <span onClick={() => openLink('https://github.com/ketkibhuyar')}>
          <GithubLogo className='icon'/>
        </span>
      </div>
    </div>
    <p className='footer-middle-msg'>
      Created using react 💖
    </p>
    <div className='footer-download-resume'>
      <button className='download-button' onClick={() => openLink('https://drive.google.com/file/d/1_KuSd5Di2KRhhPWDh1g7DAU5FgF2EfX6/view?usp=share_link')}>
        Resume
      </button>
    </div>
  </div>
)};

export default Footer;