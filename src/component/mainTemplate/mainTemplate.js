import React, { Children } from "react";
import Footer from "../footer/footer";




function mainTemplate (props) {
    const{footerCourseName, footerCourseLink} = props; 
return (
    <>
    <Header/>
    {Children}
    <Footer
   courseName={footerCourseName}
   courseLink={footerCourseLink}
   />
  </>


)


}
export default mainTemplate;