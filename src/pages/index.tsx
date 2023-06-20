import { Link } from "react-router-dom";


const Main = () => {
    return (
        <>  
            <br />
            <div className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="">고라이크 블로그</h1>
                        <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
                        <p className="lead mb-0">
                            <Link to={"#"} className="text-white fw-bold">Continue reading...</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
