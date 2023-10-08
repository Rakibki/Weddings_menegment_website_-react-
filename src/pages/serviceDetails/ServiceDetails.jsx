import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
      fetch("/services.json")
        .then((res) => res.json())
        .then((data) => setServices(data));
    }, []);

    const {id} = useParams()
    console.log(id);

    console.log(services);
  return (
    <div>ServiceDetails</div>
  )
}

export default ServiceDetails
