const Delivery = ({name, order, status}) => {
    return ( 
        <section>
            <h2>{name}</h2>
            <h3>{order}</h3>
            <button>{status}</button>
        </section>
     );
}
 
export default Delivery;