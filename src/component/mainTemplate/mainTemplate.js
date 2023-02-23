import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";


function mainTemplate(props) {
    const {
        children,
        footerCourseName, footerCourseLink,
        navItem,
        logo
    } = props; 


return ( 
    <> 
        <Header
            logo={logo}
            navItem={navItem}
            />
            <div className="my-5">

                {children}

            </div>
    <Footer
   courseName={footerCourseName}
   courseLink={footerCourseLink}
   />

</>
)


}
export default mainTemplate;