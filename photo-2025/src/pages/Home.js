
import './App.css';
import Tree from'./component/Tree';
import Header from '../components/header';

function App() {
  return (
    <>
    <Header />
    <section className="columns">

      <Tree
      name="Live Oak"
      description="Doesn't lose it's leaves"
      image="images/LiveOak.jpg" />
      <Tree
      name="Dogwood"
      description="Flowers in spring"
      images="images/Dogwood.jpg" />
    </section>
   </>
  );
}

export default App;
