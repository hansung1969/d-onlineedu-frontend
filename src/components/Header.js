import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <div>
        <Link to="/home">HOME</Link>  
        <Link to="/userlist">사용자목록</Link>  
        <Link to="/userform">사용자저장</Link>  
        </div>
    );
};
export default Header;
