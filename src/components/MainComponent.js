import React, { Component } from 'react';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import DishDetail from "./DishDetailComponent";

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Switch, Route, Redirect } from 'react-router-dom'




class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }
    render() {
        const HomePage = () => {
            return (
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            )
        }
        return (
            <div>
                <Header />
                {/* <Menu /> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={Menu} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />

                </Switch>
                <Footer />
                {/* <DishDetail */}
                {/* //                     dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
            </div>
        )
    }
}

export default Main;
