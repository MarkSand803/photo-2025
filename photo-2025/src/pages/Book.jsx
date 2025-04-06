import React from 'react';
import './css/Book.css'; // Import the Book component's CSS
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles

function Book() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4b8fd46f-ec1d-4b49-bd2e-546648271be3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <main>
      <section className="hero">
        <h2>Book A Session</h2>
        <p>Fill out the form below to schedule your session.</p>
      </section>

      <section className="form-section">
      <form onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="4b8fd46f-ec1d-4b49-bd2e-546648271be3" />

          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="service">Select a Service:</label>
          <select id="service" name="service">
            <option value="portrait">Portrait Photography</option>
            <option value="event">Event Photography</option>
            <option value="wedding">Wedding Photography</option>
            <option value="product">Product Photography</option>
            <option value="real_estate">Real Estate Photography</option>
            <option value="family">Family & Group Photos</option>
            <option value="maternity">Maternity & Newborn Photography</option>
            <option value="sports">Sports Photography</option>
          </select>

          <label htmlFor="location">Preferred Location:</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="date">Select Date & Time:</label>
          <input type="datetime-local" id="date" name="date" required />

          {/* Honeypot Spam Protection */}
          <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

          {/* Times preview section removed*/}
          <section className="calendar-preview">
            <h3>Check Available Times</h3>
            <p>Please contact us to check available times.</p>
          </section>

          <button type="submit">Submit</button>

          <div id="result"></div>
          <span>{result}</span>

          <p>*A down payment of one hour of service will be charged before arrival</p>
          <p>*Cancelation should be called in within 14 days of event</p>
        </form>
        
      </section>
      <Footer /> {/* Add Footer at the bottom */}
    </main>
  );
}

export default Book;

