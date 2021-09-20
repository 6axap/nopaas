import React from "react";
import './App.css';

function Header() {
  return (
    <>
      <header className="py-3 mb-3 border-bottom">
        <div className="container-fluid d-grid gap-3 align-items-center" style={{ "grid-template-columns": "1fr 2fr" }}>
          <div className="dropdown">
            <a href="http://localhost:3000/#" className="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none dropdown-toggle" id="dropdownNavLink" data-bs-toggle="dropdown" aria-expanded="false">
              <svg className="bi me-2" width="40" height="32"><use xlinkHref="http://localhost:3000/#bootstrap"></use></svg>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownNavLink">
              <li><a className="dropdown-item active" href="http://localhost:3000/#" aria-current="page">Overview</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/#">Inventory</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/#">Customers</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/#">Products</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="http://localhost:3000/#">Reports</a></li>
              <li><a className="dropdown-item" href="http://localhost:3000/#">Analytics</a></li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <form className="w-100 me-3">
              <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>

            <div className="flex-shrink-0 dropdown">
              <a href="http://localhost:3000/#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="mdo" className="rounded-circle" width="32" height="32" />
              </a>
              <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2" >
                <li><a className="dropdown-item" href="http://localhost:3000/#">New project...</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/#">Settings</a></li>
                <li><a className="dropdown-item" href="http://localhost:3000/#">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="http://localhost:3000/#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;