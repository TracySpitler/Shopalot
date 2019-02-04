import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';

class Checkout extends Component{
  // load the list from store.js
  componentDidMount() {
    this.props.getItems();
  }

  getSubtotal() {
    const { items } = this.props.item;
    let subtotal = 0;
    items.map(({price}) => (
      subtotal += price
    ))
    return subtotal;
  }

  getTotal(subtotal) {
    let tax = subtotal * .07;
    let total = subtotal + tax;
    return total;
  }

  render(){
    const { items } = this.props.item;
    return (
      <Container>
          <section className="my-5">
            <MDBRow>
              <MDBCol lg="7" className="lg-0 mb-4">
                <MDBCard>
                  <MDBCardBody>

                    <div className="order-md-1">
                      <h4 className="mb-3">Billing address</h4>
                      <form className="needs-validation">
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="firstName">First name</label>
                            <input aria-label="First Name" aria-required="true" type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required/>
                            <div className="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="lastName">Last name</label>
                            <input aria-label="Last Name" aria-required="true" type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required/>
                            <div className="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="username">Email</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text">@</span>
                            </div>
                            <input aria-label="Email" aria-required="true" type="email" className="form-control" id="email" placeholder="Email" required/>
                            <div className="invalid-feedback" style={{ width: '100%' }}>
                              Your email is required.
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="address">Address</label>
                          <input aria-label="Address" aria-required="true" type="text" className="form-control" id="address" placeholder="1234 Main St" required/>
                          <div className="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                          <input aria-label="Address 2" type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
                        </div>

                        <div className="row">
                          <div className="col-md-5 mb-3">
                            <label htmlFor="country">Country</label>
                            <select aria-label="Country" aria-required="true" className="custom-select d-block w-100" id="country" required>
                              <option defaultValue="">Choose...</option>
                              <option defaultValue="United States">United States</option>
                            </select>
                            <div className="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>
                          <div className="col-md-4 mb-3">
                            <label htmlFor="state">State</label>
                            <select aria-label="State" aria-required="true" className="custom-select d-block w-100" id="state" required>
                              <option defaultValue="">Choose...</option>
                              <option defaultValue="AL">Alabama</option>
                            	<option defaultValue="AK">Alaska</option>
                            	<option defaultValue="AZ">Arizona</option>
                            	<option defaultValue="AR">Arkansas</option>
                            	<option defaultValue="CA">California</option>
                            	<option defaultValue="CO">Colorado</option>
                            	<option defaultValue="CT">Connecticut</option>
                            	<option defaultValue="DE">Delaware</option>
                            	<option defaultValue="DC">District Of Columbia</option>
                            	<option defaultValue="FL">Florida</option>
                            	<option defaultValue="GA">Georgia</option>
                            	<option defaultValue="HI">Hawaii</option>
                            	<option defaultValue="ID">Idaho</option>
                            	<option defaultValue="IL">Illinois</option>
                            	<option defaultValue="IN">Indiana</option>
                            	<option defaultValue="IA">Iowa</option>
                            	<option defaultValue="KS">Kansas</option>
                            	<option defaultValue="KY">Kentucky</option>
                            	<option defaultValue="LA">Louisiana</option>
                            	<option defaultValue="ME">Maine</option>
                            	<option defaultValue="MD">Maryland</option>
                            	<option defaultValue="MA">Massachusetts</option>
                            	<option defaultValue="MI">Michigan</option>
                            	<option defaultValue="MN">Minnesota</option>
                            	<option defaultValue="MS">Mississippi</option>
                            	<option defaultValue="MO">Missouri</option>
                            	<option defaultValue="MT">Montana</option>
                            	<option defaultValue="NE">Nebraska</option>
                            	<option defaultValue="NV">Nevada</option>
                            	<option defaultValue="NH">New Hampshire</option>
                            	<option defaultValue="NJ">New Jersey</option>
                            	<option defaultValue="NM">New Mexico</option>
                            	<option defaultValue="NY">New York</option>
                            	<option defaultValue="NC">North Carolina</option>
                            	<option defaultValue="ND">North Dakota</option>
                            	<option defaultValue="OH">Ohio</option>
                            	<option defaultValue="OK">Oklahoma</option>
                            	<option defaultValue="OR">Oregon</option>
                            	<option defaultValue="PA">Pennsylvania</option>
                            	<option defaultValue="RI">Rhode Island</option>
                            	<option defaultValue="SC">South Carolina</option>
                            	<option defaultValue="SD">South Dakota</option>
                            	<option defaultValue="TN">Tennessee</option>
                            	<option defaultValue="TX">Texas</option>
                            	<option defaultValue="UT">Utah</option>
                            	<option defaultValue="VT">Vermont</option>
                            	<option defaultValue="VA">Virginia</option>
                            	<option defaultValue="WA">Washington</option>
                            	<option defaultValue="WV">West Virginia</option>
                            	<option defaultValue="WI">Wisconsin</option>
                            	<option defaultValue="WY">Wyoming</option>
                            </select>
                            <div className="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="zip">Zip</label>
                            <input aria-label="Zip" aria-required="true" type="text" className="form-control" id="zip" placeholder="" required/>
                            <div className="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className="custom-control custom-checkbox">
                          <input aria-label="Shipping address is the same as my billing address" type="checkbox" className="custom-control-input" id="same-address"/>
                          <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                          <input aria-label="Save this information for next time" type="checkbox" className="custom-control-input" id="save-info"/>
                          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4"/>

                        <h4 className="mb-3">Payment</h4>

                        <div className="d-block my-3">
                          <div className="custom-control custom-radio">
                            <input aria-label="Credit" id="credit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                            <label className="custom-control-label" htmlFor="credit">Credit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input aria-label="Debit" id="debit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                            <label className="custom-control-label" htmlFor="debit">Debit card</label>
                          </div>
                          <div className="custom-control custom-radio">
                            <input aria-label="PayPal" id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-name">Name on card</label>
                            <input aria-label="Name on card" aria-required="true" type="text" className="form-control" id="cc-name" placeholder="" required/>
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <label htmlFor="cc-number">Credit card number</label>
                            <input aria-label="Credit card number" aria-required="true" type="text" className="form-control" id="cc-number" placeholder="" required/>
                            <div className="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Month</label>
                            <select aria-label="Month" aria-required="true" className="browser-default custom-select" required>
                              <option>Exp.</option>
                              <option defaultValue="1">Jan</option>
                              <option defaultValue="2">Feb</option>
                              <option defaultValue="3">March</option>
                              <option defaultValue="4">April</option>
                              <option defaultValue="5">May</option>
                              <option defaultValue="6">June</option>
                              <option defaultValue="7">July</option>
                              <option defaultValue="8">Aug</option>
                              <option defaultValue="9">Sept</option>
                              <option defaultValue="10">Oct</option>
                              <option defaultValue="11">Nov</option>
                              <option defaultValue="12">Dec</option>
                            </select>
                            <div className="invalid-feedback">
                              Expiration year is required
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">Year</label>
                            <input aria-label="Year" aria-required="true" type="number" min="2018" max="2099" step="1" className="form-control" id="cc-expiration-month" placeholder="2018" required/>
                            <div className="invalid-feedback">
                              Expiration year is required
                            </div>
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="cc-expiration">CVV</label>
                            <input aria-label="CVV on back of card" aria-required="true" type="text" className="form-control" min="0" pattern="^\d{1,3}$" maxLength="3" id="cc-cvv" placeholder="" required/>
                            <div className="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                        <hr className="mb-4"/>
                        <div className="input-group justify-content-between">
                          <span><small>Total:</small><h3 className="text-success">${this.getTotal(this.getSubtotal())}</h3></span>
                          <div className="input-group-append col-md-6">
                            <button className="btn btn-success btn-block float-right" type="submit">Purchase Items</button>
                            </div>
                          </div>

                      </form>
                    </div>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="5">
              <div className="order-md-1">
                <h4 className="d-flex justify-content-between align-items-center">
                  Cart Overview
                  <span className="badge badge-primary badge-pill">{items.length}</span>
                </h4>
                <hr />
                <ul className="list-group mb-3">

                
                  {items.map(({_id, name, price, description, imagePath}) => (
                    <li key={_id} className="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 className="my-0">{name}</h6>
                        <small className="text-muted">{description}</small>
                      </div>
                      <span className="text-muted">${price}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between bg-light">
                    <div className="text-success">
                      <h6 className="my-0">Subtotal</h6>
                      <small>(without tax)</small>
                    </div>
                    <span className="text-success">${this.getSubtotal()}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${this.getTotal(this.getSubtotal())}</strong>
                  </li>

                </ul>

                <form className="card p-2">
                  <div className="input-group">
                    <button className="btn btn-primary btn-block" type="submit" onClick={this.onEditCart}>Edit Cart</button>
                  </div>
                </form>

                </div>
              </MDBCol>
            </MDBRow>
          </section>
      </Container>
    );
  }
}

Checkout.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems })(Checkout);
