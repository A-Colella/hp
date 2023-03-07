import React from "react";
import style from "../footer/footer.module.css";
import unimib from "../../assets/image/unimib.jpg";

function footer(props){
    const {courseName, courseLink} = props; // queste poi vengonoo dichiararte in app in main tamplate



    return (
        <footer className= {style.footer}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className={style.cpiright}>
                            <h4>This project was created by Anna Colella</h4>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className={`d-flex ${style.copyright}`}>
                            <div id={style.course}>
                                <a href={courseLink}>{courseName}</a>
                            </div>
                            <div id={style.unimib} className={style.logo}>
                                <a href="https://www.unimib.it/" target="_blank"><img src={unimib} alt="unimib"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    )

}
export default footer;