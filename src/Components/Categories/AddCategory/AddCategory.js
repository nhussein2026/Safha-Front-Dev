import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../../contexts/Authcontext"
// import logo2 from '../../../assets/images/logos/logo with safha.png'

const AddCategory = () => {
    const { token } = useContext(AuthContext)

    const [category, setCategory] = useState({
        name: '',
        des: '',

    })

    const navigate = useNavigate()

    const addCategory = async (event) => {
        // let CategoryData = new FormData(event.target)
        event.preventDefault()
        // console.log("CategoryData", CategoryData)

        // console.log("event.target", event.target)
        const added = await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
            method: 'POST',
            // body: CategoryData,
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(category),

        })
        const json = await added.json()
        // console.log(json)
        alert(json.messages.join(' '))
        if (json.success) {
            navigate('/books')
        }
    }
    return (
        <>
            <h2>Manal</h2>
            <div id="container-div" className="container">
                <form className="row g-3">
                    <div className='form-field mb-3 d-flex flex-column align-items-start'>
                        <label htmlFor='name' className='mb-2'>Category Name</label>
                        <input placeholder='Type Book Name' type='text' id="name" value={category?.name} onChange={(e) => { setCategory({ ...category, name: e.target.value }) }} name="name" fullWidth label="Category name" className='form-control' />
                    </div>
                    <div className='form-field mb-3 d-flex flex-column align-items-start'>
                        <label htmlFor='Category-des' className='mb-2'>Category Description</label>
                        <input placeholder='Write Book Description' type='text' id="category-des" value={category?.des} onChange={(e) => { setCategory({ ...category, des: e.target.value }) }} name="des" fullWidth label="Description" className='form-control' />
                    </div>
                    <div className='col-12 mb-5'>
                            <button onClick={addCategory} type="submit" className="btn" id="add-book">Add Category</button>
                        </div>
                </form>
            </div>
        </>
    )
}

export default AddCategory
