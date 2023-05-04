import ketkiPic from '../../assets/KetkiImage.jpg';
import springLogo from '../../assets/spring-logo.jpg';
import javaLogo from '../../assets/java-logo.png';
import sqlLogo from '../../assets/sql.png';
import csharpLogo from '../../assets/Csharp_Logo.png';
import "./home.scss";

const HomePage = () => {
  const greeting = "🙏";

  return (
    <>
      <div className="intro section">
        <div className="intro-image">
          <div className="image-container">
            <img src={ketkiPic} alt="" />
          </div>
        </div>
        <div className="intro-description">
          <div className="description-container">
            <h2 className="description-title">{greeting} Hello {greeting}</h2>
            <p className="description-text">
            I am Ketki
            <br></br>
            I am good at developing Full-Stack applications using following technologies.
            </p>
            <div className="description-logos">
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src= { springLogo }
                />
              </span>
              <span>
                <img
                  src= { javaLogo }
                />
              </span>
              <span>
                <img
                  src= { sqlLogo }
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/sass-1.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/dot-net-core-7.svg"
                  alt=""
                />
              </span>
              <span>
                <img
                  src= { csharpLogo }
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;