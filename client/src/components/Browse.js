import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBCardFooter, MDBTooltip } from 'mdbreact';

import ItemModal from './ItemModal';

class Browse extends Component{
  // load the list from store.js
  componentDidMount() {
    this.props.getItems();
  }

  // delete function
  onMoreInfo = (id) => {
    let path = '/' + id;
    this.props.history.push(path);
  }

  // delete function
  onDeleteClick = (id) => {
    this.props.deleteItem(id);
  }

  render(){

    const { items } = this.props.item;
    return (
      <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Browse Our Products
      </h2>
      <Container>
        <ItemModal />

        <TransitionGroup className="card-deck">
          {items.map(({_id, name, price, description, imagePath}) => (
            <CSSTransition key={_id} timeout={500} classNames="fade">
              <MDBCol className="mb-4">
                <MDBCard style={{ width: "20rem" }}>
                  <MDBCardImage className="img-fluid" src={imagePath} alt={name} waves />
                  <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>
                      {description}
                    </MDBCardText>
                    <hr/>
                      <span className="float-left font-weight-bold mt-2">
                        <strong>${price}</strong>
                      </span>
                      <span className="float-right font-weight-bold">
                        <MDBBtn className="btn" onClick={this.onMoreInfo.bind(this, _id)}>More Info</MDBBtn>
                      </span>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </CSSTransition>
          ))}
        </TransitionGroup>

      </Container>
    </section>


    );
  }
}

Browse.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(Browse);
