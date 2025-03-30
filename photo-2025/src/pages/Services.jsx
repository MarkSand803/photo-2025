import React from 'react';
import './css/Services.css'; // Import the Services component's CSS
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles

function Services() {
  return (
    <main>
      <section className="hero">
        <h2>Photography Services</h2>
        <p>Explore our professional photography services and pricing.</p>
      </section>

      <section className="services-table">
        <table>
          <thead>
            <tr>
              <th>Service</th>
              <th>Description</th>
              <th>Cost Per Hour</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Portrait Photography</td>
              <td>Professional headshots and personal portraits taken with high-quality lighting and background options.</td>
              <td>$50</td>
            </tr>
            <tr>
              <td>Event Photography</td>
              <td>Capture special moments at corporate events, parties, and gatherings with candid and posed shots.</td>
              <td>$75</td>
            </tr>
            <tr>
              <td>Wedding Photography</td>
              <td>Full coverage of your wedding day, including preparations, ceremony, and reception.</td>
              <td>$125</td>
            </tr>
            <tr>
              <td>Product Photography</td>
              <td>Professional shots of products for e-commerce, advertising, and social media.</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Real Estate Photography</td>
              <td>Interior and exterior shots for property listings, including drone photography.</td>
              <td>$90</td>
            </tr>
            <tr>
              <td>Family & Group Photos</td>
              <td>Beautifully composed family and group portraits for holidays, reunions, and special occasions.</td>
              <td>$65</td>
            </tr>
            <tr>
              <td>Maternity & Newborn Photography</td>
              <td>Capturing the beauty of pregnancy and the early days of a newborn’s life with soft, intimate photography.</td>
              <td>$70</td>
            </tr>
            <tr>
              <td>Sports Photography</td>
              <td>High-speed action shots of athletes and teams in various sporting events.</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>
      </section>
      <p>*All photos will be edited and sent within 3-5 business days</p>
      <Footer /> {/* Add Footer at the bottom */}
    </main>

  );
}

export default Services;