import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { getProfile } from "../../api/profile";
import { useSelector } from "react-redux";
import { userType } from "../../types/user";
import { ProfileType } from "../../types/profile";
import { Link } from "react-router-dom";
import ProfileDetail from "./detail";

const Profile = () => {
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    const [userData, setUserData] = useState<ProfileType[]>([]);
    const [a, setA] = useState(false);
    const [clickBoarNo, setClickBoardNo] = useState(0)
    
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
            {a && <ProfileDetail boardNo={clickBoarNo} setA={setA} />}
            <div className="row featurette">
                <div className="col-md">
                    <h2 className="featurette-heading fw-normal lh-1">작업물</h2>
                    <hr className="featurette-divider"/>
                    <div className="row mb-7">
                        <div className="col-md-12">
                                {userData.map((data, index) => {
                                    return (
                                        <>
                                            <div key={index} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                                <div className="col p-4 d-flex flex-column position-static">
                                                    <strong className="d-inline-block mb-2 text-primary">{data.company}</strong>
                                                    <h3 className="mb-0">{data.title}</h3>
                                                    <div className="mb-1 text-body-secondary">시작일 : {data.startProject}</div>
                                                    <div className="mb-1 text-body-secondary">종료일 : {data.endProject}</div>
                                                    <p className="card-text mb-auto">{data.content.slice(0, 50) + '...'}</p>
                                                    <Link 
                                                        // to={`/profile/detail/${data.boardNo}`} 
                                                        to={`#`} 
                                                        className="icon-link gap-1 icon-link-hover stretched-link"
                                                        onClick={()=>{
                                                            setA(true)
                                                            setClickBoardNo(data.boardNo)
                                                        }}
                                                    >
                                                        자세히 보기
                                                        <svg className="bi"><use xlinkHref="#chevron-right"/></svg>
                                                    </Link>                                            
                                                    
                                                </div>
                                                <div className="col-auto d-none d-lg-block">
                                                    <Image className="bd-placeholder-img" 
                                                        style={{width: "50", height: "100"}} 
                                                        src={data.saveImageName === null ? '' : `http://localhost:8080/file/${data.saveImageName}`}
                                                    />
                                                    {/* <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Profile;