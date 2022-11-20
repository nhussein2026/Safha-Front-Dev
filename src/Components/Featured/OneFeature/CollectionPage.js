import SingleBookElement from "../../Books/SingleBookElement/SingleBookElement";
import HeroSection from "../../HeroSection/HeroSection";
import Sidebar from "../../SideBar/SideBar";

const CollectionPage = ({books}) => {
    
    return(
        <>
            <div className="page-wrapper">
                <HeroSection />
                <main className="main">
                    <div className="bg-white">
                        <div className="container">
                            <div className="row main-content">
                                <Sidebar books={books} />
                                <div className="col-lg-9">
                                    <div className="row">
                                        {
                                            books.map((book, i) => {
                                                return <SingleBookElement book={book} key={i} customize="books" />
                                            })
                                        }
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
export default CollectionPage;