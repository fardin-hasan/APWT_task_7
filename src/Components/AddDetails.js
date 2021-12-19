import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { useParams } from 'react-router';
import axios from 'axios';

const AddDetails = () => {
    const { Location } = useParams();
    const [adds, setAdds] = useState([]);
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/advertisementList").then(response => {
            setAdds(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);
    const selectedAdd = adds.find(pd => pd.Location === Location);
    return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>

                <div>
                    <h2>Advertisement List</h2>
                    <h6>Id: {selectedAdd?.id}</h6>
                    <h6>Location: {selectedAdd?.Location}</h6>
                    <h6>Address: {selectedAdd?.Address}</h6>
                    <h6>Floor: {selectedAdd?.Floor}</h6>
                    <h6>Details: {selectedAdd?.Details}</h6>
                    
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddDetails;