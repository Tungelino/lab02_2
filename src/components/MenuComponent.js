import React, { useState } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, ListGroup } from 'reactstrap';
import { DISHES } from "../shared/dishes";

function RenderMenuItem({ dish, onClick }) {
    return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
            <Card onClick={() => onClick(dish)}>
                <CardImg src={dish.image} width='100%' alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}


function Menu() {
    const [dish, setDish] = useState()
    // const [detail, setDetail] = useState()
    const handleRenderDish = (dish) => {

        setDish(
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>

        )




    }
    return (
        <div className='container'>
            <div className='row'>
                {DISHES.map(dish =>
                (<RenderMenuItem
                    key={dish.id}
                    dish={dish}
                    onClick={handleRenderDish}
                />))
                }
            </div>
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>{dish || ''}</div>
            </div>
        </div>)
}
export default Menu;




