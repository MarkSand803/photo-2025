import ".css/Tree.css";

function Tree() {
    return  (
    <section className="tree">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <img src={props.image} />
    </section>
    );
}

export default Tree;