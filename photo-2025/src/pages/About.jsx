import React from 'react';
import './css/About.css'; // Import the About component's CSS
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles

function About() {
  return (
    <main>
      <section className="hero">
        <h2>About Me</h2>
        <p>Get to know the person behind the camera.</p>
      </section>

      <section className="section-container alt-section">
        <div className="image-section small">
          <h2>About Me</h2>
          <p>
            I'm Markael Sanders, a photographer from York, South Carolina, with a passion for capturing life’s most meaningful moments. I provide professional photography services across the Carolinas and Georgia, specializing in portraits, weddings, real estate, and event photography. My goal is to blend creativity with technical precision, ensuring each image tells a story and reflects the true essence of the moment. Whether I’m shooting in the heart of a bustling city or the quiet beauty of a small town, I strive to create stunning, high-quality visuals that leave a lasting impact. Photography isn’t just my profession—it’s my way of preserving memories and bringing visions to life.
          </p>
        </div>
        <div className="image-section small">
          <img src="images/p4me.jpg" alt="About Me Image" />
        </div>
      </section>

      <h2>Contact Me</h2>

      <section className="form-section">
        <form method="POST" id="form">
          <input type="hidden" name="access_key" value="4b8fd46f-ec1d-4b49-bd2e-546648271be3" />

          <label htmlFor="name">Full Name:</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />

          <label htmlFor="message">Question:</label>
          <textarea name="message" required></textarea>

          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          <button type="submit">Submit Form</button>

          <div id="result"></div>
        </form>
      </section>

      <aside className="faq">
        <h3>Frequently Asked Questions</h3>
        <p><strong>How do I book a session?</strong> Fill out the booking form on the "Book A Session" page.</p>
        <p><strong>What types of photography do you offer?</strong> Portrait, event, and wedding photography.</p>
      </aside>

      <section className="hero2"></section>

      <div className="sm-container">
        <h2>Social Media</h2>
        <a href="https://www.facebook.com/people/Markael-Sanders/pfbid02nudGAQMmbGwtogKZq2jPfmaCZgzT42jj6FuHQFQ9dwTwECXRjmzKpX5eNKjRmKTml/" className="fa fa-facebook"></a>
        <a href="https://www.google.com/" className="fa fa-google"></a>
        <a href="https://www.youtube.com/@marksand803" className="fa fa-youtube"></a>
        <a href="https://www.instagram.com/mark_sand803/" className="fa fa-instagram"></a>
      </div>
      <Footer /> {/* Add Footer at the bottom */}
    </main>
  );
}

export default About;