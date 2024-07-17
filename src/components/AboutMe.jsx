import me from "../assets/Me.jpg"

export const AboutMe = () => {
  return (
    <div className="about-me-container">
    <div id="about">
      <div className="always-container">
        <div className="always-be">
          <span>always be</span>
          <div className="message">
            <div className="word1">cool</div>
            <div className="word2">code</div>
            <div className="word3">creative</div>
          </div>
        </div>
      </div>

      <div className="container-welcome">
        <div className="welcome-text">
          <h1>
            Hello, <br />
            I am Bassil!
          </h1>
          <h2>Web-developer</h2>
          <div className="animated-text">
            <h6>
              <span>About </span>
              <span> me </span>
            </h6>
          </div>
          <p>
            I have a strong passion for challenges, which is why I enjoy doing
            parkour in my free time. Parkour is a demanding and difficult sport,
            but whenever I master a new movement or flip, it gives me an
            incredible feeling of accomplishment. Even during challenging
            moments when I push myself beyond my limits, I experience a rush of
            excitement and adrenaline, knowing that I am about to achieve a new
            goal.
          </p>

          <p>
            Interestingly, I have found a similar sense of satisfaction in coding.
            When I work with JavaScript or React and find the best and most
            efficient way to bring my ideas to life, seeing my code work and
            achieve the desired outcome makes me incredibly happy. It is like
            reaching a new milestone in my life and experiencing that same
            indescribable feeling of accomplishment.
          </p>

          <p>
            My goal is to continue challenging myself both in parkour and
            coding, striving to master new movements in parkour and becoming
            proficient in advanced coding techniques. I believe that through
            constant growth and pushing my boundaries, I will achieve even
            greater goals and make meaningful contributions in both personal and
            professional domains.
          </p>

          <p>Skills:</p>
          <ul>
            <li>
              Web Development: HTML, CSS, JavaScript, React, Express.js, Node.js
            </li>
            <li>Server-side development</li>
            <li>Version Control: Git, GitHub</li>
            <li>Database: MongoDB</li>
            <li>Front-End Frameworks: Bootstrap, Tailwind</li>
            <li>RESTful APIs</li>
            <li>Operating Systems: Linux, Windows, Mac</li>
          </ul>
        </div>
        <div className="welcome-img">
          <img src={me} alt="an image of me" />
        </div>
      </div>
    </div>
    </div>
  );
};


