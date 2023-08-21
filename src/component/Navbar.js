import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <div className="row">
            <div className={'col-12'}>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="nav-link" to={'/home'}>Logo</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to={'add'}>Add-Product</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to={'/'}><button className="btn btn-outline-danger my-2 my-sm-0" type="submit">LogOut</button></Link>
                    </form>
                </nav>

            </div>
            </div>
        </>
    )
}