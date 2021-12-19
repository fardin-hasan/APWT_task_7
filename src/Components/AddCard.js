import React from 'react';
import { useHistory } from 'react-router';

const AddCard = (props) => {
    const { Location, Address, Floor, Details } = props.add;
    const history = useHistory();
    const handelClick = (Location) => {
        const url = `/addDetails/${Location}`;
        history.push(url);
    }

    return (
        <div className="col-3" style={{ minHeight: "70vh" }}>
            <div className="card-group">
                <div className="card">
                    <div class="card-body">
                        <div class="">
                            <h5 class="card-title text-primary">{Location}</h5>
                            <p class="card-text ms-auto"><small class="text-danger fw-bold">Location:
                                {Location}</small></p>
                        </div>
                        <span></span>
                        <div class="d-flex">
                        </div>
                        <div class="d-flex">
                            <div class="ms-auto">
                                <button className="btn btn-sm btn-primary mt-4" onClick={() => handelClick(Location)}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;