import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import AddCard from './AddCard';

const AddList = () => {
    const [adds, setAdds] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/advertisementList").then(response => {
            setAdds(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }, []);
   
    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
            <h2 className="my-4 text-center">Advertisement List</h2>
                <div className="row">
                    {
                        adds.map(add => <AddCard add={add}></AddCard>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddList;