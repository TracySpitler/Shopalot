import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';
import { TransitionGroup } from 'react-transition-group';

class Checkout extends Component{
  // load the list from store.js
  componentDidMount() {
    this.props.getItems();
  }

  getSubtotal() {
    const { items } = this.props.item;
    var subtotal = 0;
    items.map(({price}) => (
      subtotal += price
    ))
    return subtotal;
  }

  getTotal(subtotal) {
    var tax = subtotal * .07;
    var total = subtotal + tax;
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

                    <div class="order-md-1">
                      <h4 class="mb-3">Billing address</h4>
                      <form class="needs-validation">
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" class="form-control" id="firstName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                              Valid first name is required.
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" class="form-control" id="lastName" placeholder="" value="" required/>
                            <div class="invalid-feedback">
                              Valid last name is required.
                            </div>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="username">Email</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">@</span>
                            </div>
                            <input type="email" class="form-control" id="email" placeholder="Email" required/>
                            <div class="invalid-feedback" style={{ width: '100%' }}>
                              Your email is required.
                            </div>
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="address">Address</label>
                          <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                          <div class="invalid-feedback">
                            Please enter your shipping address.
                          </div>
                        </div>

                        <div class="mb-3">
                          <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
                          <input type="text" class="form-control" id="address2" placeholder="Apartment or suite"/>
                        </div>

                        <div class="row">
                          <div class="col-md-5 mb-3">
                            <label for="country">Country</label>
                            <select class="custom-select d-block w-100" id="country" required>
                              <option value="">Choose...</option>
                              <option>United States</option>
                            </select>
                            <div class="invalid-feedback">
                              Please select a valid country.
                            </div>
                          </div>
                          <div class="col-md-4 mb-3">
                            <label for="state">State</label>
                            <select class="custom-select d-block w-100" id="state" required>
                              <option value="">Choose...</option>
                              <option value="AL">Alabama</option>
                            	<option value="AK">Alaska</option>
                            	<option value="AZ">Arizona</option>
                            	<option value="AR">Arkansas</option>
                            	<option value="CA">California</option>
                            	<option value="CO">Colorado</option>
                            	<option value="CT">Connecticut</option>
                            	<option value="DE">Delaware</option>
                            	<option value="DC">District Of Columbia</option>
                            	<option value="FL">Florida</option>
                            	<option value="GA">Georgia</option>
                            	<option value="HI">Hawaii</option>
                            	<option value="ID">Idaho</option>
                            	<option value="IL">Illinois</option>
                            	<option value="IN">Indiana</option>
                            	<option value="IA">Iowa</option>
                            	<option value="KS">Kansas</option>
                            	<option value="KY">Kentucky</option>
                            	<option value="LA">Louisiana</option>
                            	<option value="ME">Maine</option>
                            	<option value="MD">Maryland</option>
                            	<option value="MA">Massachusetts</option>
                            	<option value="MI">Michigan</option>
                            	<option value="MN">Minnesota</option>
                            	<option value="MS">Mississippi</option>
                            	<option value="MO">Missouri</option>
                            	<option value="MT">Montana</option>
                            	<option value="NE">Nebraska</option>
                            	<option value="NV">Nevada</option>
                            	<option value="NH">New Hampshire</option>
                            	<option value="NJ">New Jersey</option>
                            	<option value="NM">New Mexico</option>
                            	<option value="NY">New York</option>
                            	<option value="NC">North Carolina</option>
                            	<option value="ND">North Dakota</option>
                            	<option value="OH">Ohio</option>
                            	<option value="OK">Oklahoma</option>
                            	<option value="OR">Oregon</option>
                            	<option value="PA">Pennsylvania</option>
                            	<option value="RI">Rhode Island</option>
                            	<option value="SC">South Carolina</option>
                            	<option value="SD">South Dakota</option>
                            	<option value="TN">Tennessee</option>
                            	<option value="TX">Texas</option>
                            	<option value="UT">Utah</option>
                            	<option value="VT">Vermont</option>
                            	<option value="VA">Virginia</option>
                            	<option value="WA">Washington</option>
                            	<option value="WV">West Virginia</option>
                            	<option value="WI">Wisconsin</option>
                            	<option value="WY">Wyoming</option>
                            </select>
                            <div class="invalid-feedback">
                              Please provide a valid state.
                            </div>
                          </div>
                          <div class="col-md-3 mb-3">
                            <label for="zip">Zip</label>
                            <input type="text" class="form-control" id="zip" placeholder="" required/>
                            <div class="invalid-feedback">
                              Zip code required.
                            </div>
                          </div>
                        </div>
                        <hr class="mb-4"/>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="same-address"/>
                          <label class="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" class="custom-control-input" id="save-info"/>
                          <label class="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        <hr class="mb-4"/>

                        <h4 class="mb-3">Payment</h4>

                        <div class="d-block my-3">
                          <div class="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                            <label class="custom-control-label" for="credit">Credit card</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                            <label class="custom-control-label" for="debit">Debit card</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                            <label class="custom-control-label" for="paypal">Paypal</label>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" class="form-control" id="cc-name" placeholder="" required/>
                            <small class="text-muted">Full name as displayed on card</small>
                            <div class="invalid-feedback">
                              Name on card is required
                            </div>
                          </div>
                          <div class="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" class="form-control" id="cc-number" placeholder="" required/>
                            <div class="invalid-feedback">
                              Credit card number is required
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Month</label>
                            <select className="browser-default custom-select">
                              <option>Exp.</option>
                              <option value="1">Jan</option>
                              <option value="2">Feb</option>
                              <option value="3">March</option>
                              <option value="4">April</option>
                              <option value="5">May</option>
                              <option value="6">June</option>
                              <option value="7">July</option>
                              <option value="8">Aug</option>
                              <option value="9">Sept</option>
                              <option value="10">Oct</option>
                              <option value="11">Nov</option>
                              <option value="12">Dec</option>
                            </select>
                            <div class="invalid-feedback">
                              Expiration year is required
                            </div>
                          </div>
                          <div class="col-md-3 mb-3">
                            <label for="cc-expiration">Year</label>
                            <input type="number" min="2018" max="2099" step="1" class="form-control" id="cc-expiration-month" placeholder="2018" required/>
                            <div class="invalid-feedback">
                              Expiration year is required
                            </div>
                          </div>
                          <div class="col-md-3 mb-3">
                            <label for="cc-expiration">CVV</label>
                            <input type="text" class="form-control" min="0" pattern="^\d{1,3}$" maxlength="3" id="cc-cvv" placeholder="" required/>
                            <div class="invalid-feedback">
                              Security code required
                            </div>
                          </div>
                        </div>
                        <hr class="mb-4"/>
                        <div class="input-group justify-content-between">
                          <span><small>Total:</small><h3 class="text-success">${this.getTotal(this.getSubtotal())}</h3></span>
                          <div class="input-group-append col-md-6">
                            <button class="btn btn-success btn-block float-right" type="submit">Purchase Items</button>
                            </div>
                          </div>

                      </form>
                    </div>

                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="5">
              <div class="order-md-1">
                <h4 class="d-flex justify-content-between align-items-center">
                  Cart Overview
                  <span class="badge badge-primary badge-pill">{items.length}</span>
                </h4>
                <hr />
                <ul class="list-group mb-3">

                <TransitionGroup>
                  {items.map(({_id, name, price, description, imagePath}) => (
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                      <div>
                        <h6 class="my-0">{name}</h6>
                        <small class="text-muted">{description}</small>
                      </div>
                      <span class="text-muted">${price}</span>
                    </li>
                    </CSSTransition>
                  ))}
                  <li class="list-group-item d-flex justify-content-between bg-light">
                    <div class="text-success">
                      <h6 class="my-0">Subtotal</h6>
                      <small>(without tax)</small>
                    </div>
                    <span class="text-success">${this.getSubtotal()}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>${this.getTotal(this.getSubtotal())}</strong>
                  </li>

                </TransitionGroup>
                </ul>

                <form class="card p-2">
                  <div class="input-group">
                    <button class="btn btn-primary btn-block" type="submit" onClick={this.onEditCart}>Edit Cart</button>
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
