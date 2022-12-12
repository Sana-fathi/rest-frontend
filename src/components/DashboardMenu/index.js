import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';


function DashboardMenu({logout}) {
    const router = useRouter()    

    
  const handleLogOut = (e) => {
    e.preventDefault();
    router.push("/");
  };
    
    return (
        <div className="w-auto mx-10">
              <ul className="nav flex-column text-uppercase" >
                <li className="px-20 py-2 border" >
                    <Link href="/my-account">
                    DASHBOARD
                    </Link>
                </li>
                <li className="px-20 py-2 border" >
                    <Link href="/my-account/order">
                    ORDERS
                    </Link>
                </li>
                {/* <li className="nav-item dashboard-menu" style={{border: '1px solid #c8ced7', borderTopStyle: 'none'}}>
                    <Link href="/my-account/favourite"><a className="nav-link text-uppercase" type="button" style={{color: 'inherit'}}><i className="fa fa-heart" style={{marginRight: '8px'}}/>
                    Favourite
                    </a></Link>
                </li> */}
                <li className="px-20 py-2 border" style={{border: '1px solid #c8ced7', borderTopStyle: 'none'}}>
                    <Link href="/my-account/profile">
                    PROFILE
                    </Link>
                </li>
                {/* <li className="nav-item dashboard-menu" style={{border: '1px solid #c8ced7', borderTopStyle: 'none'}}>
                    <Link href="/my-account/address"><a className="nav-link text-uppercase" type="button" style={{color: 'inherit'}}><i className="fa fa-address-card" style={{marginRight: '8px'}}/>
                    ADDRESSES
                    </a></Link>
                </li> */}
                <li onClick={(e)=>handleLogOut(e)}className="primary-button mt-10 text-center mb-10">
                    <span className="nav-link text-uppercase" type="button">
                    LOGOUT
                    </span>
                </li>
              </ul>
        </div>
    );
}


export default DashboardMenu;