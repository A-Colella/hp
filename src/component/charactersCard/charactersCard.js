import React from "react";
import { NavLink } from "react-router-dom";
import {Card, CardBody,CardImg,CardText,CardTitle} from "reactstrap";
import style from "../charactersCard/charactersCard.module.css";
import { NavLink } from "react-router-dom";


function charactersCard (props){
    const {image,name, house, patronus} = props;
    

return(
    <NavLink to={`charactersTableByHouse`}>
        <Card className={style.card}>
            <CardImg className={style.image} top width="100%" src={image} alt={name}/>
            <CardBody className="text-center">
                <CardTitle tag="h5" className={`h3${style.title}`}>{name}</CardTitle>
                <CardText className={style.text}>
                    {house}
                    {patronus}
                </CardText>
            </CardBody>
        </Card>
    </NavLink>
)








}
export default charactersCard; 