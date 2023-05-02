const Header = (): JSX.Element => {
  return (
        <nav className="navbar bg-primary mb-5">
            <form className="d-flex ms-5">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-text-info" type="submit">Search</button>
            </form>
            <div className="">
                <ul className="me-5 navbar-nav flex-row-reverse gap-5">
                    <li className="">
                        <a className="nav-link" aria-current="page" href="#">Listado de pasientes</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Listado de doctores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Listado de citas</a>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Header
