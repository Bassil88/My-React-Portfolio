export const Contact = () => {
  return (
    <section id="contact" className="Contact-section">
      <div>
        <h2>Contact Me!</h2>
      </div>
      <div className="container-contact">
        <div className="contact-info">
          <div className="social-media-icon">
            <ul>
              <li>
                <a
                  className="github-icon"
                  href="https://github.com/Bassil88"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands"
                    dangerouslySetInnerHTML={{ __html: "&#xf09b;" }}
                  ></i>
                </a>
              </li>

              <li>
                <a
                  className="linkedin-icon"
                  href="https://www.linkedin.com/in/bassil-edelbi-7b31a7277/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands"
                    dangerouslySetInnerHTML={{ __html: "&#xf08c;" }}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* // contact FORM */}
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xoqzqzqj"
            method="POST"
            target="_blank"
          >
            <fieldset id="#fieldset">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your name ;)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your e-mail ;)"
                />
              </div>
              <div className="form-group">
                <label htmlFor="text">Message:</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Leave a message ;)"
                ></textarea>
              </div>
              <div className="form-group">
                <button className="neon-button" type="submit">
                  Send!
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};
