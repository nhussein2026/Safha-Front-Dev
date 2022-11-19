

const Collection = ({book}) => {
    // const randomBooks = book[Math.floor(Math.random()* book.length)]
    return(
        <>
            <div className="collections">
            {book?.Category?.name}
            </div>
        </>
    )
}
export default Collection;