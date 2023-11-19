import { Outlet, useNavigate } from "react-router-dom";
import SideMenu from "./sidebar/SideMenu";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsBoxArrowInRight } from "react-icons/bs";

function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
   
    navigate("/");
  };

  return (
    <div className="container-fulid">
      <div className="admin fixed-top">
        <div className="row">
          <div className="col col-lg-2  pt-3 ps-4 pb-2">
            <h3 className="text">Administration</h3>
          </div>
          <div className="col col-lg-6"></div>
          <div className="col col-lg-2">
            <div className="d-flex">
              <img
                src="https://www.ecomdeveloper.com/demo/image/cache/profile-45x45.png"
                alt="Demo User"
                className="Demouserimg mt-2"
              />
              <h5 className="mt-3 ps-2">Demo User</h5>
              <IoMdArrowDropdown
                className="mt-3 ms-4"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <div className="col col-lg-2">
            <div className="d-flex ps-4 pt-3">
              <BsBoxArrowInRight
                className="mt-2"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              />
              <h5 className="mt-1  ms-3" onClick={handleLogout} style={{ cursor: "pointer" }}>
                Logout
              </h5>
            </div>
          </div>
        </div>
      </div>
      <SideMenu />
      <Outlet />
    </div>
  );
}

export default Admin;
