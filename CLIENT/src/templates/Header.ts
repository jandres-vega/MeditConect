export const Header = ():string => {
    return `
        <nav class="navbar bg-primary mb-5">
            <form class="d-flex ms-5">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-text-info" type="submit">Search</button>
            </form>
            <div class="">
                <ul class="me-5 navbar-nav flex-row-reverse gap-5">
                    <li class="">
                        <a class="nav-link" aria-current="page" href="#">Listado de pasientes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Listado de doctores</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Listado de citas</a>
                    </li>
                </ul>
            </div>
        </nav>
    `
}