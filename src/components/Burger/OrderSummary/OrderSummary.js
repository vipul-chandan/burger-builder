import React, { Component } from 'react';

import Auxl from '../../../hoc/Auxl/Auxl';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
    render () {
        const ingredientSummary = Object.keys( this.props.ingredients )
            .map(igkey => {
            return (
             <li key={igkey}>
                    <span style={{ textTransform: 'capitalize' }}>{igkey}</span>: {this.props.ingredients[igkey]}
                </li> );
            });

        return (
            <Auxl>
                <h1>Your Order</h1>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Auxl>
        );
    }
}

export default OrderSummary;