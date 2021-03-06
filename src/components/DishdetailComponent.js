import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardImgOverlay } from "reactstrap";

class DishDetail  extends Component{


    constructor(props){
        super(props);
        this.state = {
           
        }
    }

    renderDish(dish){
        if(dish != null) {
            return(
                <Card>
                <CardImg top src = {dish.image} alt = {dish.name}/>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            );
        } else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div>
                {this.renderDish(this.props.dish)}
            </div>
        );
    }
}

export default DishDetail;