import React from "react";

function Header() {
  return (
    <div class="wd-100 position-fixed bg-nav">
      <header class="d-flex flex-wrap align-items-center justify-content-center py-2 ">
        <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ">
          <li>
            <a href="#" class="nav-link px-2 link-secondary">
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white">
              Features
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white">
              FAQs
            </a>
          </li>
          <li>
            <a href="#" class="nav-link px-2 text-white">
              About
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
