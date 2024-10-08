import Delivery from "./Delivery";
import data from "../data.js"
import { useState } from "react";

const DeliveryList = () => {
    const [delivery, setDelivery] = useState(data);

    return (
    <section>
        {
            delivery.map((delivery) => (
                <Delivery name={delivery.name} order={delivery.order} status={delivery.status}/> 
            ))
        }
    </section>
);
}
 
export default DeliveryList;