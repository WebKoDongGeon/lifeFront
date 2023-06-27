import { Link } from "react-router-dom";


const Main = () => {
    return (
        <>  
            <br />
            <div className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
                    <div className="col-md-6 px-0">
                        <h1 className="">고동건</h1>
                        <p className="lead my-3">주요스킬 : React, SpringBoot</p>
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
