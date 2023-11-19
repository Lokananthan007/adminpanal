import React from "react";
import './Dashboard.css';
import { AiFillSetting } from "react-icons/ai";
import Card from 'react-bootstrap/Card';
import * as ImIcons from 'react-icons/im'
import * as Fa6Icons from 'react-icons/fa6'
import * as BsIcons from 'react-icons/bs'
import * as Hi2Icons from 'react-icons/hi2'
import * as BiIcons from 'react-icons/bi'
import * as AiIcons from 'react-icons/ai'
import 'bootstrap';
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Dashboard(){
  
    return(
      <div className="dashboard">
        <div className="home1">
          <div className="header">
            <div className="row">
              <div className="col-lg-2 ps-4">
                <h2>Dashboard</h2>
              </div>
              <div className="col-lg-1 hometext pt-2">
                <Link to="/admin" style={{color:"gray",fontSize:"20px",textDecoration:"none"}}>Home<IoIosArrowForward /></Link>
              </div>
              <div className="col-lg-1 text2 pt-2">
                <Link to="/admin"style={{color:"blue",fontSize:"20px",textDecoration:"none"}}>Dashboard</Link>
              </div>
              <div className="col-lg-6"></div>
              <div className="col-lg-2 ps-2 settings">
                <Link> <AiFillSetting className="icon ps-1 pe-1"/></Link>
              </div>
            </div>
          </div>
          <hr></hr>
           {/* <h1 className="head">Dashboard
             <div className="settings">
                <AiFillSetting/>
              </div>
            </h1>
            <Link to='/admin'>Home</Link> */}
            

        <div className="container-fluid">

        <Card className="card" id="card">   
          <div className="card-top">
           <p>TOTAL ORDERS
           <span>0%</span></p>
          </div>
          <div className="card-center">
            <ImIcons.ImCart className="card-icon"/>
            <h1 className="card-num">381</h1>
          </div>
          <div className="card-bottom">
            <p>view more...</p>
          </div>
    </Card> 

    <Card className="card" id="card">   
          <div className="card-top">
           <p>TOTAL SALES
           <span>0%</span></p>
          </div>
          <div className="card-center">
            <Fa6Icons.FaRegCreditCard className="card-icon"/>
            <h1 className="card-num">98.2K</h1>
          </div>
          <div className="card-bottom">
            <p>view more...</p>
          </div>
    </Card> 

    <Card className="card" id="card">   
          <div className="card-top">
           <p>TOTAL CUSTOMERS
           <span>0%</span></p>
          </div>
          <div className="card-center">
            <BsIcons.BsFillPersonFill className="card-icon"/>
            <h1 className="card-num">815</h1>
          </div>
          <div className="card-bottom">
            <p>view more...</p>
          </div>
    </Card> 

    <Card  className="card" id="card" style={{float: 'right', marginRight: '0px'}}>   
          <div className="card-top">
           <p>PEOPLE ONLINE
           <span>0%</span></p>
          </div>
          
          <div className="card-center">
            <Hi2Icons.HiMiniUserGroup className="card-icon"/>
            <h1 className="card-num">0</h1>
          </div>
          <div className="card-bottom">
            <p>view more...</p>
          </div>
    </Card> 
    <div className="container-fluid, map" id="map">
      <div className="map-top">
     <BiIcons.BiWorld style={{height:'20px', width:'50px'}}/>
     WORLD MAP
      </div>
      <div className="worldmap"></div>

    </div>
    <div className="container-fluid, map" id="map" style={{float:'right'}}>
     <div className="map-top">
    <AiIcons.AiOutlineBarChart style={{height:'20px', width:'50px'}}/>
     SALES ANALYTICS</div> 
    </div>

        </div>
        </div>
    </div>     
    )
}
export default Dashboard;











// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { ImCart } from "react-icons/im";
// import { FaRegCreditCard } from "react-icons/fa";
// import { GoPersonFill } from "react-icons/go";
// import { TiGroup } from "react-icons/ti";

// const Dashboard = () => {
//   return (
//     <Container fluid className="Dashboard">
//       <Row>
//         <Col className="Dtop">
//           Dashboard
//           <p className="Home">
//             <Link to="/anotherpage">Home</Link>
//             <i className="bi bi-arrow-right"></i>
//             <Link to="/anotherpage">Dashboard</Link>
//           </p>
//           <Button className="Settings">
//             <i className="bi bi-gear-fill"></i>
//           </Button>
//         </Col>
//       </Row>
//       <Row>
//         <Col className="Dtop2">
//           <Row>
//             <Col className="fourdivs">
//               <Container className="fourdivtop">
//                 <p>TOTAL ORDERS</p>
//                 <p className="zero">0%</p>
//               </Container>
//               <Container className="fourdivcenter">
//                 <ImCart />
//                 <h5 className="numbers">381</h5>
//               </Container>
//               <Container className="fourdivbottom"></Container>
//             </Col>
//             <Col className="fourdivs">
//               <Container className="fourdivtop">
//                 <p>TOTAL SALES</p>
//                 <p className="zero">0%</p>
//               </Container>
//               <Container className="fourdivcenter">
//                 <FaRegCreditCard />
//                 <h5 className="numbers">98.2K</h5>
//               </Container>
//               <Container className="fourdivbottom"></Container>
//             </Col>
//             <Col className="fourdivs">
//               <Container className="fourdivtop">
//                 <p>TOTAL CUSTOMERS</p>
//                 <p className="zero">0%</p>
//               </Container>
//               <Container className="fourdivcenter">
//                 <GoPersonFill />
//                 <h5 className="numbers">815</h5>
//               </Container>
//               <Container className="fourdivbottom"></Container>
//             </Col>
//             <Col className="fourdivs">
//               <Container className="fourdivtop">
//                 <p>PEOPLE ONLINE</p>
//                 <p className="zero">0%</p>
//               </Container>
//               <Container className="fourdivcenter">
//                 <TiGroup />
//                 <h5 className="numbers" style={{ marginLeft: "150px" }}>
//                   0
//                 </h5>
//               </Container>
//               <Container className="fourdivbottom"></Container>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Dashboard;
