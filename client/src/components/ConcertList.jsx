import React from "react";

const ConcertList = () =>{
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr className="bg-primary">
                        <th scope="col">Concert</th>
                        <th scope="col">Location</th>
                        <th scope="col">Price Range</th>
                        <th scope="col">Ratings</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Deletes</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Oldies</td>
                        <td>Long Beach</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-warning">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}