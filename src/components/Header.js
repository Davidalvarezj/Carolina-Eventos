import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className=" container-fluid text-center bg-primary header-img">
      <div className="container">
        <div className="row">
          <div className="col logo-img ">
            <i className="bi bi-house-check"></i>
          </div>
          <div className="col">
            <div className="title">Expertos en eventos</div>

            <div className="row offset-md-1">
              <p className="title-p">
                Catering que deleita, eventos que asombran.
              </p>
              <p className="title-p">
                Transformamos detalles en momentos inolvidables.
              </p>
            </div>
            <div className="row offset-md-1">
              <div className="col title-button ">
                <button type="button" className="btn btn-outline-light">
                  <i class="bi bi-whatsapp"></i> Contactanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
