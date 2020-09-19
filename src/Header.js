import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://wizmove.com/wp-content/uploads/2018/09/amazon-logo-white-png-transparent-3.png"
      />

      <div className="header_search">
        <input className="header_searchinput" type="text" />
        <SearchIcon className="search_icon"/>
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineone">Hello guest</span>
          <span className="header_optionLinetwo">sign in</span>
        </div>


        <div className="header_option">
          <span className="header_optionLineone">returns</span>
          <span className="header_optionLinetwo">and orders</span>
        </div>


        <div className="header_option">
        <span className="header_optionLineone">your</span>
          <span className="header_optionLinetwo">prime</span>


        </div>
        <div className="header_optionBasket">
         <ShoppingBasketIcon/>
         <span className="header_optionLinetwo header_basketcount"> 0 </span>
        </div>

      </div>
    </div>
  );
}

export default Header;
