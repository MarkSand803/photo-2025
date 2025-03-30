
import React from 'react';
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles
import './css/Home.css'; // Import page specific styles.
import Me from '../img/p4me.jpg'

function App() {
  return (
    <div>

      <main>
        <section className="hero">
          <h2>Capturing Moments, Creating Memories</h2>
          <p>Professional photography services tailored to your needs.</p>
        </section>

        <section className="section-container alt-section">
          <div className="image-section small">
            <img src="https://picsum.photos/300/200" alt="Client Reviews" />
          </div>

          <div className="image-section small">
            <h2>Client Reviews</h2>
            <p>"Markael's photography is amazing! He captured our wedding perfectly." - Sarah & John</p>
            <p>"Incredible attention to detail. Highly recommend!" - David R.</p>
          </div>
        </section>

        <section className="section-container alt-section">
          <div className="image-section small">
            <h2>About Me</h2>
            <p>I'm Markael Sanders, a passionate photographer capturing moments that last forever.</p>
            <a href="photo-2025/about">Read more...</a>
          </div>
          <div className="image-section small">
          <img src={Me} alt="About Me Image" />
          </div>
        </section>

        <section className="hero2"></section>

        <div className="sm-container">
          <h2>Social Media</h2>
          <a href="https://www.facebook.com/people/Markael-Sanders/pfbid02nudGAQMmbGwtogKZq2jPfmaCZgzT42jj6FuHQFQ9dwTwECXRjmzKpX5eNKjRmKTml/" className="fa fa-facebook"></a>
          <a href="https://www.google.com/" className="fa fa-google"></a>
          <a href="https://www.youtube.com/@marksand803" className="fa fa-youtube"></a>
          <a href="https://www.instagram.com/mark_sand803/" className="fa fa-instagram"></a>
        </div>
      </main>

      <Footer /> {/* Add Footer at the bottom */}
    </div>
  );
}

export default App;