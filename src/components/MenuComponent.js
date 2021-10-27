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
            <div className='row'>
                <Card className='col-12 col-md-5 m-1'>
                    <CardImg width='100%' src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                <div className='col-12 col-md-5 m-1'>
                    {dish.comments.map((comment) =>
                        <div>
                            <p>{comment.comment}</p>
                            <span>{new Intl.DateTimeFormat(
                                'en-US', { year: 'numeric', month: 'short', day: '2-digit' }
                            ).format(new Date(Date.parse(comment.date)))}</span>
                            <span>{comment.author}</span>
                        </div>)}
                </div>

            </div>
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
            <div >
                {dish || ''}
            </div>
        </div>)
}
export default Menu;




