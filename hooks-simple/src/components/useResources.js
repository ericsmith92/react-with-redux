import { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = (resource) => {
    const [resources, setResources] = useState([]);

    /*
    const fetchResource = async (resource) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(response.data);
    }

    useEffect(()=> {
        fetchResource(resource);
    }, [resource]);
    */

    //the above is a workaround since useEffect ITSELF cannot be an async funtion, so we have 
    //fetchResource defined seperately as async... it works
    //BUT, we can also try this

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/${resource}`
                );

                setResources(response.data);
            })(resource);
        },
        [resource]
    )

    return resources;
}

export default useResources;