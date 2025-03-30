import './css/Portfolio.css';
import Photo from '../components/photo';
import Footer from '../components/footer'; // Import Footer
import '../components/Main'; // Import the main styles

function App() {
  return (
    <>
      <section className="columns">
          <Photo
            title="Wedding"
            location="Charleston, SC"
            description="A beautiful wedding at the beach."
            image="images/p4wedding.jpg"
          />
          <Photo
            title="Graduation"
            location="Columbia, SC"
            description="A proud moment captured at USC."
            image="images/p4graduation.jpg"
          />
          <Photo
            title="Family Session"
            location="Greenville, SC"
            description="A heartwarming family shoot."
            image="images/p4family.jpg"
          />
          <Photo
              title="Engagement"
              location="Myrtle Beach, SC"
              description="A romantic engagement session."
              image="images/p4engagement.jpg"
          />
          <Photo
              title="Birthday"
              location="Charlotte, NC"
              description="A fun birthday celebration."
              image="images/p4birthday.jpg"
          />
          <Photo
              title="Corporate Event"
              location="Atlanta, GA"
              description="A professional corporate event."
              image="images/p4corporate.jpg"
          />
           <Photo
            title="Skyline"
            location="Chester, SC"
            description="A proud moment captured at USC."
            image="images/p4sky.jpg"
          />
           <Photo
            title="Prom"
            location="York, SC"
            description="A proud moment captured at USC."
            image="images/p4prom.JPG"
          />
          <Photo
            title="Furman University"
            location="Greenville, SC"
            description="A proud moment captured at USC."
            image="images/p4furman.jpg"
          />
        </section>
        <Footer /> {/* Add Footer at the bottom */}

    </>
  );
}

export default App;