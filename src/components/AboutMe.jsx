// import me from "../assets/Me.jpg";

// export const AboutMe = () => {
//   return (
//     <div className="about-me-container">
//       <div id="about">
//         <div className="always-container">
//           <div className="always-be">
//             <span>always be</span>
//             <div className="message">
//               <div className="word1">cool</div>
//               <div className="word2">code</div>
//               <div className="word3">creative</div>
//             </div>
//           </div>
//         </div>

//         <div className="container-welcome">
//           <div className="welcome-text">
//             <h1>
//               Hello,
//               <br />I am Bassil Edelbi
//             </h1>

//             <h3>
//               Full Stack Software Developer <br />
//               (.NET • Angular • AI-Assisted Development)
//             </h3>

//             <div className="animated-text">
//               <h6>
//                 <span>About </span>
//                 <span> Me</span>
//               </h6>
//             </div>

//             <p>Software developer with hands-on experience building and maintaining production web applications using .NET, Angular, and modern web technologies. Experienced in frontend and backend development, REST API integration, authentication systems, debugging, performance optimization, and framework migrations.</p>

//             <p>At DrengerTec IT Solutions, I work on business-critical applications used by internal users and customers. My responsibilities include developing new features, maintaining production systems, diagnosing complex issues, implementing secure authentication solutions using JWT and HttpOnly Cookies, and contributing to application stability and maintainability.</p>

//             <p>One of my key achievements has been successfully upgrading production applications from Angular 17 to Angular 20 and modernizing Node.js environments while ensuring compatibility, stability, and uninterrupted business operations.</p>

//             <p>Alongside traditional software development, I actively leverage AI-assisted development tools such as ChatGPT, Gemini, GitHub Copilot, and OpenAI Codex for code generation, debugging, architectural analysis, code review, and solution validation. My experience includes evaluating AI-generated outputs, identifying implementation issues, refining prompts, and applying human-in-the-loop verification practices to ensure correctness, maintainability, and production readiness.</p>

//             <p>I enjoy solving technical challenges, continuously learning new technologies, and building practical software solutions that deliver measurable value to users and businesses.</p>

//             <h3>Technical Skills</h3>

//             <ul>
//               <li>
//                 <strong>Frontend:</strong> Angular, React, TypeScript, JavaScript, HTML5, CSS3
//               </li>

//               <li>
//                 <strong>Backend:</strong> .NET, ASP.NET Core, REST APIs, Node.js, Express.js
//               </li>

//               <li>
//                 <strong>Authentication & Security:</strong> JWT Authentication, HttpOnly Cookies, Authorization Workflows
//               </li>

//               <li>
//                 <strong>Databases:</strong> PostgreSQL, MongoDB, SQL
//               </li>

//               <li>
//                 <strong>Tools:</strong> Git, GitHub, Visual Studio, VS Code, Postman
//               </li>

//               <li>
//                 <strong>AI & Evaluation:</strong>
//                 ChatGPT, Gemini, GitHub Copilot, OpenAI Codex, Prompt Engineering, AI Output Validation, AI-assisted Debugging, Human-in-the-Loop Evaluation
//               </li>

//               <li>
//                 <strong>Operating Systems:</strong> Windows, Linux, macOS
//               </li>
//             </ul>
//           </div>

//           <div className="welcome-img">
//             <img src={me} alt="Bassil Edelbi" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import me from "../assets/Me.jpg";

export const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div id="about">
        {/* <div className="always-container">
          <div className="always-be">
            <span>always be</span>

            <div className="message">
              <div className="word1">cool</div>
              <div className="word2">code</div>
              <div className="word3">creative</div>
            </div>
          </div>
        </div> */}

        <div className="always-container">
  <h2 className="always-title">
    Always
    <span className="changing-word">
      <span>Building</span>
      <span>Learning</span>
      <span>Creating</span>
    </span>
  </h2>
</div>

        <div className="container-welcome">
          <div className="welcome-text">
             <div className="hero-section">
              
            <h1>
              Hello,
              <br />
              I am Bassil Edelbi
            </h1>
            <h2>
              Full Stack Software Developer
              <br />
              (.NET • Angular • AI-Assisted Development)
            </h2>
          <div className="welcome-img">
            <img src={me} alt="Bassil Edelbi" />
          </div>
             </div>

            <div className="animated-text">
              <h6>
                <span>About </span>
                <span>Me</span>
              </h6>
            </div>

            <p>
              Software developer with hands-on experience building and
              maintaining production web applications using .NET, Angular, and
              modern web technologies. Experienced in frontend and backend
              development, REST API integration, authentication systems,
              debugging, performance optimization, and framework migrations.
            </p>

            <p>
              At DrengerTec IT Solutions, I work on business-critical
              applications used by internal users and customers. My
              responsibilities include developing new features, maintaining
              production systems, diagnosing complex issues, implementing secure
              authentication solutions, and contributing to application
              stability and maintainability.
            </p>

            <p>
              Alongside traditional software development, I actively leverage
              AI-assisted development tools such as ChatGPT, Gemini, GitHub
              Copilot, and OpenAI Codex for code generation, debugging,
              architectural analysis, code review, and solution validation. My
              experience includes evaluating AI-generated outputs, identifying
              implementation issues, refining prompts, and applying
              human-in-the-loop verification practices to ensure correctness,
              maintainability, and production readiness.
            </p>

            <div className="quick-facts">
              <h3>Quick Facts</h3>

              <ul>
                <li>📍 Germany</li>
                <li>💼 Full Stack Software Developer</li>
                <li>🧠 AI-Assisted Development & Evaluation</li>
                <li>🌐 English • German • Arabic</li>
                <li>⚙️ .NET • Angular • React • TypeScript</li>
              </ul>
             
            </div>
            <br />
            

            <h3>Technical Skills</h3>

            <div className="skills-grid">
              <div className="skill-card">
                <h4>Frontend</h4>

                <div className="skills-tags">
                  <span>Angular</span>
                  <span>React</span>
                  <span>TypeScript</span>
                  <span>JavaScript</span>
                  <span>HTML5</span>
                  <span>CSS3</span>
                </div>
              
              </div>

              <div className="skill-card">
                <h4>Backend</h4>

                <div className="skills-tags">
                  <span>.NET</span>
                  <span>ASP.NET Core</span>
                  <span>REST APIs</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                </div>
             
              </div>

              <div className="skill-card">
                <h4>AI & Evaluation</h4>

                <div className="skills-tags">
                  <span>ChatGPT</span>
                  <span>Gemini</span>
                  <span>GitHub Copilot</span>
                  <span>OpenAI Codex</span>
                  <span>Prompt Engineering</span>
                  <span>AI Validation</span>
                  <span>AI-Assisted Debugging</span>
                  <span>Human-in-the-Loop</span>
                </div>
             
              </div>

              <div className="skill-card">
                <h4>Tools</h4>

                <div className="skills-tags">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Visual Studio</span>
                  <span>VS Code</span>
                  <span>Postman</span>
                </div>
              </div>

              <div className="skill-card">
                <h4>Databases</h4>

                <div className="skills-tags">
                  <span>PostgreSQL</span>
                  <span>MongoDB</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};