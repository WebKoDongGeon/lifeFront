import { useEffect, useState } from "react";
import { Button, CloseButton, Dropdown, Nav, Offcanvas } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Menu } from "../../routes/menu";
import Icons from "./icons";

const SideBar = ({ checkMenu }: { checkMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const menu = Menu;
    const navigate = useNavigate();
    const [selectItem, setSelectItem] = useState(0);
    const sidebarHeight = window.innerHeight + 'px';
    const [show, setShow] = useState(false);
    const [pathCheck, setPathCheck] = useState('');

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
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: '100%', height: sidebarHeight, overflow: 'auto' }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    {/* Replace the SVG with your Logo */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="bi bi" width="40" height="32">
                        <use xlinkHref="http://www.w3.org/2000/svg" />
                    </svg>
                    
                    <span className="fs-4">고라이크</span>
                </Link>
                <CloseButton variant="white" onClick={handleClose}/>
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
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="d-flex align-items-center text-white text-decoration-none">
                        {/* Replace the img src with your Image */}
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>mdo</strong>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-dark text-small shadow">
                        <Dropdown.Item href="#">New project...</Dropdown.Item>
                        {/* ... 다른 드롭다운 아이템들 */}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            </Offcanvas>
        </>
    );
}

export default SideBar;
