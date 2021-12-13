import '../designs/Nav.css';

const Nav = () => {
    return(
            <div id="nav">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">BLΛƆ KPIИK</a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link" href="/myfirstreact">Home</a>
                                <a className="nav-link" href="/myfirstreact/employees">Employees</a>
                                <a className="nav-link" href="/myfirstreact/add">Add Employee</a>
                                <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
    );
};

export default Nav