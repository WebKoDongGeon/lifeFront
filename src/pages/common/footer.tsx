import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from 'bootstrap-icons/icons/facebook.svg';
import { ReactComponent as Instagram } from 'bootstrap-icons/icons/instagram.svg';
import { ReactComponent as Twitter } from 'bootstrap-icons/icons/twitter.svg';

const Footer = () => {
    return (
        <>
            <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
                <div className="row">
                <div className="col-6 col-md-2 mb-3">
                    <h5>이름</h5>
                    <p className="text-body-secondary">고동건</p>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>주소지</h5>
                    <p className="text-body-secondary">서울시 관악구</p>
                </div>

                <div className="col-6 col-md-2 mb-3">
                    <h5>이메일</h5>
                    <p className="text-body-secondary">kodg94@naver.com</p>
                </div>

                <div className="col-md-5 offset-md-1 mb-3">
                    <form>
                    <h5>기술스택</h5>
                    <p>React, Springboot, Mysql, MSsql</p>
                    <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                        <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                        <input id="newsletter1" type="text" className="form-control" value={`연차 : '3년5개월'`} />
                    </div>
                    </form>
                </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                <p>&copy; 기타 문의는 위 이메일로 연락부탁드립니다.</p>
                <ul className="list-unstyled d-flex">
                    <li className="ms-3">
                        <Link className="link-body-emphasis" to="#">
                            <svg className="bi" width="24" height="24">
                                <Twitter />
                            </svg>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="link-body-emphasis" to="#">
                            <svg className="bi" width="24" height="24">
                                <Instagram />
                            </svg>
                        </Link>
                    </li>
                    <li className="ms-3">
                        <Link className="link-body-emphasis" to="#">
                            <svg className="bi" width="24" height="24">
                                <Facebook />
                            </svg>
                        </Link>
                    </li>
                </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer;