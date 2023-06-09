import { Image } from "react-bootstrap";

const Profile = () => {
    return (
        <>
        <hr className="featurette-divider"/>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <Image src={""}/>

                </div>
            </div>
        </>
    );
};


export default Profile;