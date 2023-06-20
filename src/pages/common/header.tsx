import "./Header.css";

const Header = () => {
    return (
        <>
            <section className="header  navigation">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-md">
                                <a className="navbar-brand" href="index.html">
                                    <img src="images/logo.png" alt="logo" />
                                </a>  
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="tf-ion-android-menu"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="about.html">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="service.html">Service</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pages
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="404.html">404 Page</a>
                                        </div>
                                    </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;