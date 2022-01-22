import React from "react";
import SideNav from "../widgets/SideNav";
import Footer from "../widgets/Footer";
const Seller = () => {
  return (
    <div id="seller" style={{marginTop: '64px',minHeight:'500px'}}>
      <div className="container"  style={{marginLeft: '280px',minHeight:'500px'}}>
        <h2>Welcome to your shop</h2>
      </div>
      <SideNav />
      <Footer></Footer>
    </div>
  );
};

export default Seller;
