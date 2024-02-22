import React, { useState } from "react";
import './Sidebar.css';
import './animation.css';

const Sidebar = () => {

    const routes = [
        { title: 'Home', icon: 'bx bxs-dashboard', path: '/', num: '1' },
        { title: 'Sales', icon: 'bx bx-money-withdraw', path: '/sales', num: '2' },
        { title: 'Costs', icon: 'bxs-objects-vertical-bottom', path: '/costs', num: '3' },
        { title: 'Payments', icon: 'bx bxs-wallet', path: '/payments', num: '4' },
        { title: 'Finances', icon: 'bx bxs-pie-chart-alt-2', path: '/finances', num: '5' },
        { title: 'Messages', icon: 'bx bx-envelope', path: '/messages', num: '6' },
    ];
    
    const bottomRoutes = [
        { title: 'Settings', icon: 'bx bx-cog', path: '/settings', num: '7' },
        { title: 'Support', icon: 'bx bx-support', path: '/support', num: '8' },
    ];

    const [openMenu, setOpenMenu] = useState(true);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const [openProfile, setOpenProfile] = useState(false);
    const toggleProfile = () => {
        setOpenProfile(!openProfile);
    }
    



    return (
        <div className={`sidebar ${ openMenu ? 'sidebar--open' : 'sidebar--closed' }`}>
            <div className="sidebarHalf">
                <div className="sidebar__title">
                    <div className="sidebar__title-icon">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                    <div className="sidebar__title-name">TensorFlow</div>
                    <div className="sidebar__title-button">
                        <button onClick={ toggleMenu }>
                            {openMenu ? <i class='bx bx-chevron-left'></i> : <i class='bx bx-chevron-right'></i>}
                        </button>
                    </div>
                </div>

                <div className="sidebar__list">

                    {
                        routes.map((route) => (
                            
                            <div className={`sidebar__list-item sidebar__list${route.num}`}>
                                <i class={route.icon} ></i>
                                <span>{route.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="sidebar__list">
                {
                    bottomRoutes.map((route) => (
                        <div className={`sidebar__list-item sidebar__list${route.num}`}>
                            <i class={ route.icon } ></i>
                            <span>{ route.title }</span>
                        </div>
                    ))
                }
                <div className="sidebar__profile">
                    <div className="sidebar__profile-info">
                        <button onClick={toggleProfile}>
                            <img src="./assets/profile.png" alt="Image Profile" />
                        </button>
                        <div className="sidebar__profile-info_name">
                            <span>User Account</span>
                            <span>Mark T.</span>
                        </div>
                    </div>
                    <div className="sidebar__profile-button">
                        <button><i class='bx bx-expand-vertical'></i></button>
                    </div>
                </div>


                
                <div className= {`card-profile ${ openProfile ? 'cardProfile--open' : 'cardProfile--closed' }`}>
                    <div className="card-profile__title">
                        <div className="card-profile__title-image">
                            <img src="./assets/profile.png" alt="Image Profile" />
                        </div>
                        <div className="card-profile__title-info">
                            <span>Mark Talbierz</span>
                            <span>hello@talbierz.com</span>
                        </div>
                    </div>
                    <div className="card-profile__settings">
                        <span>View profile</span>
                        <span>Manage subscriptions</span>
                        <span>View history</span>
                    </div>
                    <div className="card-profile__footer">
                        <div className="card-profile__footer-info">
                            <span>Logout</span>
                            <i class='bx bx-log-in'></i>
                        </div>
                        <div className="card-profile__footer-version">
                            <span>v 1.0.34 - </span><a href="">Team and Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;