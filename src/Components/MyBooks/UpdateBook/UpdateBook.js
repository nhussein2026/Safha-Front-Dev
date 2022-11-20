

const UpdateBook = () => {


    const { token, user, setUser } = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [currentBook, setCurrentBook] = useState({
        publish: "", //this is for date
        land: "",
        author: "",
        ISBN: "",
        categoryId: "",
        publisherId: "",
        kindle: "",
        paper: ""
    })
    const navigate = useNavigate()
    const { logOut, loggedIn } = useContext(AuthContext)
    useEffect(() => {
        const GetBook = async () => {
            const response = await fetch('https://safha.fjobeir.com/backend/books', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            if (json.success) {
                setCurrentBook({
                    ...currentBook,
                    userName: json?.data?.userName,
                    email: json?.data?.email,
                })
            }
        }
        GetBook()
    }, [])


    const updateBook = async () => {
        setLoading(true)
        const response = await fetch(`https://safha.fjobeir.com/backend/edit/: + ${id}`, {
            method: 'PUT',
            body: JSON.stringify(currentBook),
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setLoading(false)
        window.alert(json.messages.join(', '))
        if (json.success) {
            logOut()
            if (!loggedIn) navigate('/signin')
        }
    }


    return (
        <>

        </>
    )
}
export default UpdateBook;