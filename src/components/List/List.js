import React, { Component } from 'react';
import { connect } from "react-redux";
import './List.css';

import Customer from './Customer/Customer';
import CreateCustomer from './CreateCustomer/CreateCustomer';
import dispatchGetList from './../../services/listService';

class List extends Component {
  componentDidMount() {
    dispatchGetList();
  }
  render() {
    const {
      loading,
      customerList
    } = this.props;
    
    const CustomerComponents = customerList.map( customer => (
      <Customer
        key={ customer.id } 
        id={ customer.id }
        first={ customer.first }
        last={ customer.last }
      />
    ));

    return (
      <div id="List__container">
        {
          loading
          ?
            <p> Fetching Customers.. </p>
          :
            <div id="List__namesContainer">
              { CustomerComponents }
              <CreateCustomer />
            </div>
        }
      </div>
    )
  }
}

function mapStateToProps( state ) {
  state = state.listReducer;
  return state;
}

export default connect( mapStateToProps )( List );