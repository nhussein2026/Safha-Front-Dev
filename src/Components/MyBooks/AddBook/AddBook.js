import { Box, Card, Checkbox, FormControl, FormControlLabel, Grid, Icon, InputLabel, NativeSelect } from "@mui/material"
import { Button } from "bootstrap"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/Authcontext"

const AddBook = () => {
    const { token } = useContext(AuthContext)
    const [publish, setPublish] = useState('')
    const navigate = useNavigate()
    const AddBook = async (event) => {
        let BookData = new FormData(event.target)
        event.preventDefault()
        console.log("BookData", BookData)

        const added = await fetch(`${process.env.REACT_APP_API_URL}/books`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: BookData
        })
        const json = await added.json()
        // console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/books')
        }
    }
    const [categories, setCategories] = useState()
    const [publishers, setPublishers] = useState()
    useEffect(() => {
        async function getCategories() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/categories/all`);
            const categoriesData = await data.json()
            setCategories(categoriesData.data)
        }
        // console.log("categoriesData",categories)
        getCategories();

        async function getPublishers() {
            const data = await fetch(`${process.env.REACT_APP_API_URL}/publishers/all`);
            const publishersData = await data.json()
            // console.log("publishersData",publishersData)
            setPublishers(publishersData.data)
        }
        getPublishers();
    }, []);
    return ( 
        <>                            
                                        
            <form className="row g-3" method="post" onSubmit={AddBook}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputCity" className="form-label">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" htmlFor="gridCheck">
                        Check me out
                        </label>
                    </div>
                </div>
                <input name='cover' hidden accept="image/*" single type="file" />
                {/* <Checkbox value='1' name="paper" /> */}
                {/* <Checkbox value='1' name="kindle" /> */}
                <div className="row mb-3">
                <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label className="form-check-label" for="gridCheck1">
                    Example checkbox
                    </label>
                </div>
                </div>
            </div>

                <div className="col-12">
                <button type="submit" className="btn btn-primary">Sign in</button>
                </div>
            </form>
        </>
    )
}
export default AddBook