import React from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";


function CharacterCard(){
    const {name, house, image, patronus} = useParams();

    return (
        <Card>
            <CardImg loading="lazy" className={style.image} top
                         width="100%" src={image} alt={name}/>
            <CardBody className="text-center">
                <CardTitle tag="h5" className={`h3 ${style.title}`}>{name}</CardTitle>
                <CardText>{house}{patronus}</CardText>
            </CardBody>
        </Card>
    )

}
export default CharacterCard; 