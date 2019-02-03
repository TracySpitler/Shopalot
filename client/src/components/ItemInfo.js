import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItemInfo } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow, MDBMask, MDBIcon, MDBView } from 'mdbreact';

class ItemInfo extends Component{
  // load the list from store.js
  componentDidMount() {
    this.props.getItemInfo(this.props.match.params.id);
  }

  // add to cart function
  onAddToCart = (id) => {
    console.log(id);
  }

  render(){
    const { items } = this.props.item;

    return (
      <Container>

        <CSSTransition key={items._id} timeout={500} classNames="fade">

          <MDBCard
          className="my-5 px-5 mx-auto"
          style={{ fontWeight: 300, maxWidth: "90%" }}
          >
            <MDBCardBody style={{ paddingTop: 0 }}>
              <h2 className="h1-responsive font-weight-bold my-5 text-center">
                A Closer Look at {items.name}
              </h2>
              <MDBRow>
                <MDBCol lg="6" md="12">
                  <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                    <MDBView hover rounded className="z-depth-1-half mb-4">
                      <img
                        className="img-fluid"
                        src={items.imagePath}
                        alt={items.name}
                      />
                      <a href="#!">
                        <MDBMask overlay="white-slight" className="waves-light" />
                      </a>
                    </MDBView>
                    <div className="d-flex justify-content-between">
                        <span className="float-left font-weight-bold mt-2">
                          <strong>${items.price}</strong>
                        </span>
                        <span className="float-right font-weight-bold mr-3">
                          <MDBBtn className="btn" onClick={this.onAddToCart.bind(this, items._id)}>Add To Cart</MDBBtn>
                        </span>
                    </div>
                    <hr/>
                    <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                      {items.name}
                    </h3>
                    <p className="dark-grey-text">
                      {items.description}
                    </p>
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                  <br/>
                  <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                    Product Reviews
                  </h3>
                    <MDBRow>
                      <MDBCol md="3">
                        <MDBView hover rounded className="z-depth-1-half mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" className="waves-light" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol md="9">
                        <p className="font-weight-bold dark-grey-text">
                          19/08/2018
                        </p>
                        <div className="d-flex justify-content-between">
                          <MDBCol size="11" className="text-truncate pl-0 mb-3">
                            <a href="#!" className="dark-grey-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit
                            </a>
                          </MDBCol>
                          <a href="#!">
                            <MDBIcon icon="angle-double-right" />
                          </a>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                    <MDBRow>
                      <MDBCol md="3">
                        <MDBView hover rounded className="z-depth-1-half mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" className="waves-light" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol md="9">
                        <p className="font-weight-bold dark-grey-text">
                          18/08/2018
                        </p>
                        <div className="d-flex justify-content-between">
                          <MDBCol size="11" className="text-truncate pl-0 mb-3">
                            <a href="#!" className="dark-grey-text">
                              Soluta nobis est eligendi optio cumque nihil impedit
                              quo minus
                            </a>
                          </MDBCol>
                          <a href="#!">
                            <MDBIcon icon="angle-double-right" />
                          </a>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>

                  <div className="mb-4">
                    <MDBRow>
                      <MDBCol md="3">
                        <MDBView hover rounded className="z-depth-1-half mb-4">
                          <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                            alt=""
                          />
                          <a href="#!">
                            <MDBMask overlay="white-slight" className="waves-light" />
                          </a>
                        </MDBView>
                      </MDBCol>
                      <MDBCol md="9">
                        <p className="font-weight-bold dark-grey-text">
                          17/08/2018
                        </p>
                        <div className="d-flex justify-content-between">
                          <MDBCol size="11" className="text-truncate pl-0 mb-3">
                            <a href="#!" className="dark-grey-text">
                              Voluptatem accusantium doloremque
                            </a>
                          </MDBCol>
                          <a href="#!">
                            <MDBIcon icon="angle-double-right" />
                          </a>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </MDBCol>






                <MDBCol lg="6" md="12">
                  <div style={{
                    borderBottom: "1px solid #e0e0e0",
                    marginBottom: "1.5rem"
                  }}>
                    <h3 className="font-weight-bold dark-grey-text mb-3 p-0">
                      <a href="#!">Write a Review:</a>
                    </h3>
                    <p className="dark-grey-text">
                      Fill out the form below.
                    </p>
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>

        </CSSTransition>

      </Container>
    );
  }
}

ItemInfo.propTypes = {
  getItemInfo: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItemInfo })(ItemInfo);
