import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { getProfile } from "../../api/profile";
import { useSelector } from "react-redux";
import { userType } from "../../types/user";
import { ProfileType } from "../../types/profile";

const Profile = () => {
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const [userData, setUserData] = useState<ProfileType[]>([]);
    const setData = async () => {
        const resultData = await getProfile(userId)

        console.log("프로필 : ",resultData);
        setUserData(resultData.data);
    }
    useEffect(()=>{
        setData();
    },[])
    return (
        <>
            <hr className="featurette-divider"/>
            <div className="row featurette">
                        {/* <img key={index} src={`http://localhost:8080/file/${data.saveImageName}`} style={{width: '50px', height: '50px'}} alt=""/> */}
                <div className="col-md">
                    <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
                    <hr className="featurette-divider"/>
                    <div className="row mb-7">
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">Featured post</h3>
                                <div className="mb-1 text-body-secondary">Nov 12</div>
                                <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <Image className="bd-placeholder-img" 
                                    style={{width: "200", height: "250"}} 
                                    src={"https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4"}
                                />
                                {/* <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-success">Design</strong>
                                <h3 className="mb-0">Post title</h3>
                                <div className="mb-1 text-body-secondary">Nov 11</div>
                                <p className="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" className="icon-link gap-1 icon-link-hover stretched-link">
                                Continue reading
                                <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
                                </a>
                            </div>
                            <div className="col-auto d-none d-lg-block">
                                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
                {/* <div className="col-md-5">
                    <Image src={"https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4"}/>
                </div> */}
            </div>
        </>
    );
};


export default Profile;