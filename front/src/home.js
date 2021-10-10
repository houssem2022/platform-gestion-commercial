import React from "react";
import TheContent from './containers/TheContent'
import TheFooter from './containers/TheFooter'
import TheHeader from './containers/TheHeader'
import TheHeaderDropdown from './containers/TheHeaderDropdown'
import TheHeaderDropdownMssg from './containers/TheHeaderDropdownMssg'
import TheHeaderDropdownNotif from './containers/TheHeaderDropdownNotif'
import TheHeaderDropdownTasks from './containers/TheHeaderDropdownTasks'
import TheSidebar from './containers/TheSidebar'

const Home=({handlelogout})=>{

    return(
        <div>
        <div>
            <button onClick={handlelogout}>Logouuut</button>
        </div>
        <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
       </div>
    );
};
export default Home;