import { DashboardMenu, UserInformation , UserPassword ,Layout} from '../../components';
import { useRouter } from 'next/router'
import {User} from '../../components/Icons'

profile.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

function profile({user}) {
  // console.log("Page Props", JSON.stringify(props)); //TODO remove on final build

  const router = useRouter()


//   if(!user.user || user.user === null){
//     router.push('/');
//     return (

//       <Loader/>
//       // <div className="spinner">
//       //   <div className="spinner spinner2">
//       //     <div className="spinner spinner3" />
//       //   </div>   
//       // </div>
//     )
//   }


    return (
 


      <section>
        {/* Start: 1 Row 3 Columns */}
        <div className="container mt-16" >
        <div className='flex flex-col items-center justify-center mb-10 border-b-2 border-gray-300 xl:mx-10'>
    <div className='text-center rounded-full mb-2 bg-tbRed px-3 py-3 text-white'><User/></div>
    <h3 className='text-center font-bold font-font-worksans text-4xl mb-8'>My Account</h3>
    {/* <div className="mx-5 h-1 bg-gray-300 rounded mt-2 mb-4"></div> */}
      </div>
          <div className="flex flex-col md:flex-row space-x-3">
            
            {/* Start: category column */}
            <DashboardMenu page="profile"/>
            {/* End: category column */}
            
            {/* Start: menu column */}
            <div className="col-12 col-lg-9" style={{marginBottom: '16px'}}>
              <div className='bg-green rounded'>
                <h5 className="text-2xl  text-center uppercase text-white">Profile</h5>
              </div>
              <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 mx-10 gap-4">
                 <div className='mt-16'><UserInformation/></div>
                  
                 <div className='mt-16'><UserPassword/></div>

                  
                   
                


                </div>
              </div>
              <div />
            </div>{/* End: menu column */}
          </div>
        </div>{/* End: 1 Row 3 Columns */}
      </section>

  
    );
}



export default profile;