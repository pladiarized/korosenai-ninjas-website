import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
  return    <div className="topbar">
                <div className="container">
                    <div className="topbar-inner flex">
                        <div className="menu-options flex">
                            
                        </div>
                        <div className="topbar-right flex">
                            <ul className="socical-icon flex">
                                <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-instagram"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-dribbble"></i></Link></li>
                                <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>;
};

export default TopBar;
