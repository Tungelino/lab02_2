import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom'
// import DishDetail from "./DishDetailComponent";

// import { DISHES } from '../shared/dishes';


class Main extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         dishes: DISHES,
    //         selectedDish: null
    //     }
    // }



    render() {
        const HomePage = () => {
            return (
                <Home />
            )
        }
        return (
            <div>
                <Header />
                {/* <Menu /> */}
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={Menu} />
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
