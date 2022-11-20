const CategoryBooks = () => {
    const { id } = useParams()
    const [category, setCategory] = useState({})
    useEffect(() => {
        const getCategory = async () => {
            const getOneCategory = await fetch(`${process.env.REACT_APP_API_URL}/Categories/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await getOneCategory.json()
            if (json?.success) {
                setCategory(json?.data)
            }
        }
        getCategory()
    }, [id])
    return(
        <>
        <div className="d-flex justify-content-between" style={{backgroundColor:'#fff'}}>
            <SingleBook/>
            <SideBarWrapper/>
        </div>        
        </>
    )
}
export default CategoryBooks