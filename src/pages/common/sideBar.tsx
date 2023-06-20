import { useEffect, useState } from "react";
import { Button, CloseButton, Dropdown, Nav, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "../../routes/menu";
import Icons from "./icons";
import { userType } from "../../types/user";
import { useSelector } from "react-redux";

const SideBar = ({ checkMenu }: { checkMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const menu = Menu;
    const navigate = useNavigate();
    const [selectItem, setSelectItem] = useState(0);
    const sidebarHeight = window.innerHeight + 'px';
    const [show, setShow] = useState(false);
    const [pathCheck, setPathCheck] = useState('');
    const userId = useSelector((state: {user: userType}) => state.user?.userId)
    
    const handleClose = () => {
        setShow(false);
        checkMenu(false)
        navigate(pathCheck);
    }
    const handleShow = () => {
        setShow(true);
        checkMenu(true);
    }

    
    const linkHandle = (event:React.MouseEvent<HTMLElement, MouseEvent> ,data: string, index: number) => {
        event.preventDefault();
        // console.log("data : ",data);
        // console.log("index : ",index);
        setSelectItem(index);
        navigate(data);
    }

    useEffect(()=>{

    },[selectItem])

    return (
        <>
            <Button onClick={handleShow} variant="link">
                <img src="https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4" alt="" width="32" height="32" className="rounded-circle me-2" />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '100%', height: sidebarHeight, overflow: 'auto' }}>
                <Link to="#" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <Icons iconsComponent="h-square" />
                    <span className="fs-4">고라이크</span>
                    <CloseButton variant="white" onClick={handleClose}/>
                </Link>
                <hr />
                <Nav className="nav-pills flex-column mb-auto">
                    {menu.map((data, index)=> {
                        return (
                            <Nav.Item key={index}>
                                <Nav.Link href={data.path} className={selectItem === index ? 'active' : 'text-white'} key={index} onClick={ (event) => { linkHandle(event, data.path, index); setPathCheck(data.path) }}>
                                    <div id={data.label}>
                                        <Icons iconsComponent={data.cssName} />
                                        {data.label}
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })}
                </Nav>
                <hr />
                <Dropdown>
                    <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-basic" 
                        className="badge d-flex align-items-center p-1 pe-2 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-pill"
                        // onClick={(event) => {linkHandle(event, '/login', 0); setPathCheck("/login")}}
                    >
                        {/* Replace the img src with your Image */}
                        {/* <img src="https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                        <img src="https://avatars.githubusercontent.com/u/124127110?s=400&u=817277e11797b367fe3d50d64d14fbca3c1e8e8f&v=4" alt="" width="32" height="32" className="rounded-circle me-1" />
                        
                        <strong onClick={(event) => {linkHandle(event, '/login', 0); setPathCheck("/login")}}>
                            {userId === '' ? '로그인' : userId}
                        </strong>
                    </Dropdown.Toggle>
                    {userId !== '' && 
                        <Dropdown.Menu className="dropdown-menu-dark text-small shadow">
                            <Dropdown.Item href="#">내정보</Dropdown.Item>
                            <Dropdown.Item href="#">로그아웃</Dropdown.Item>
                            {/* ... 다른 드롭다운 아이템들 */}
                        </Dropdown.Menu>
                    }
                </Dropdown>
            </div>
            </Offcanvas>
        </>
    );
}

export default SideBar;
