import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { selectedDish } = this.props

        const Detail = selectedDish ?
            (<div >
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                        <CardTitle>{selectedDish.name}</CardTitle>
                        <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            </div>) : null
        const Comment = selectedDish ?
            (selectedDish.comments.map((a) => {
                return <div>
                    <p>{a.comment}</p>
                    <span>{a.date}</span>
                    <span>{a.author}</span>
                </div>
            })) : null

        return (
            <div className='container' style={{ display: 'flex' }}>
                <div className='col-12 col-md-5 m-1'>
                    {Detail}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    <h3>Comment Box</h3>
                    {Comment}
                </div>
            </div>

        )

    }
}
export default DishDetail;