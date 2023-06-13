import { useEffect } from "react";
import { Image } from "react-bootstrap";
import { getProfile } from "../../api/profile";
import { useSelector } from "react-redux";
import { userType } from "../../types/user";

const Profile = () => {
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const setData = async () => {
        const resultData = await getProfile(userId)

        console.log("프로필 : ",resultData);
    }
    useEffect(()=>{
        setData();
    },[])
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