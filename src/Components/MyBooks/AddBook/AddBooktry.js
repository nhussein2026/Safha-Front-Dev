import { Box, Card, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputLabel, NativeSelect } from "@mui/material"
import { Button } from "bootstrap"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/Authcontext"
import './AddBook.css';
import logo from "../../../assets/images/logo with safha.png";
import './AddBooktry.css'


const AddBookTry = () => {

    return (
        <>

            <div id="container-div" className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Book Name</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="inputZip" className="form-label">Page Count</label>
                        <input type="Number" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Book Description</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} defaultValue={""} />
                    </div>

                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label">Add Book Cover</label>
                        <input type="file" className="form-control" id="inputAddress" placeholder="Insert File" />
                    </div>
                    <div className="col-6">
                        <label htmlFor="inputAddress2" className="form-label">Publisher Date</label>
                        <input type="date" className="form-control" id="inputAddress2" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Book Language</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Category Id</label>
                        <input type="number" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Publisher Id</label>
                        <input type="number" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">kindle</label>
                        <input type="number" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputCity" className="form-label">Paper</label>
                        <input type="number" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-12 d-flex justify-content-center">
                        <button type="submit" className="btn" id="add-book">Add Book</button>
                    </div>
                </form>
            </div>





        </>
    )
}
export default AddBookTry