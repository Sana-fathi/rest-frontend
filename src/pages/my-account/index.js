import { DashboardMenu ,Layout } from '../../components';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import {User} from '../../components/Icons'

index.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function index({logout, userInfo, clearCart}) {
  const [state, setState] = useState({})
  const router = useRouter()

//   useEffect(()=>{
//     //Redirection effect
//     if(!userInfo.user || userInfo.user === null){
//       router.push('/');
//     }
//   },[userInfo])

//   useEffect(async ()=>{

//     if(userInfo.user && userInfo.user !== null){      
//       var fData = new FormData()
//       fData.append("user_id", userInfo.user.id )
//       fData.append("offset", 0)
  
//       const {data, status} = await axios({
//         method: "post",
//         url: Config.Url+"/web-my-orders",
//         data: fData,
//         headers: { "Content-Type": "multipart/form-data" },
//       })  
//       if (status===200){
//         setState(data.data)
//       }
//     }
//   },[])

//   if(!userInfo.user || userInfo.user === null){
//     // alert("run")
//     return (
//       <div style={{position:"fixed",top:0, left:0, width:"100vw",height:"100vh", zIndex:9999}}>
//         <div className="frosted">
//           <div className="spinner">
//             <div className="spinner spinner2">
//               <div className="spinner spinner3" />
//             </div>   
//           </div>
//         </div>
//       </div>
//     )
//   }


    return (

<section>
        {/* Start: 1 Row 3 Columns */}
        <div className="container mt-16">
        <div className='flex flex-col items-center justify-center mb-10 border-b-2 border-gray-300 xl:mx-10'>
    <div className='text-center rounded-full mb-2 bg-tbRed px-3 py-3 text-white'><User/></div>
    <h3 className='text-center font-bold font-worksans text-4xl mb-8'>My Account</h3>
    {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
      </div>
          <div className="flex flex-col md:flex-row space-x-3">
            
            {/* Start: category column */}
            <DashboardMenu page="dashboard"/>
            {/* End: category column */}

            {/* Start: menu column */}
            <div className="col-12 col-lg-9 mb-4 text-center text-gray-600 font-medium" >
              <div >

              <p>Welcome back&nbsp;<span >
                  &nbsp;(Not&nbsp;</span>
                  <span >
                    ? then&nbsp;</span>
                <a
                className='font-bold text-tbRed'
                onClick={()=>{
                  clearCart() // Clear cart data
                  logout()    // Clear user data
                  router.push("/")}} href="#" >Logout
                </a>&nbsp;now
                </p>

                <h5 className="text-uppercase">Recent Orders</h5>
              </div>{/* Start: Small Screen Orders */}

              {/* {Array.isArray(state) && state.length>=1 &&
              
              <OrderItem orderItem={state}/>

              } */}
              
            
            </div>{/* End: menu column */}
          </div>
        </div>{/* End: 1 Row 3 Columns */}
      </section>

  
    );
}






export default index;