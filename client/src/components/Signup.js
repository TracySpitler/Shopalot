import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const FormPage = () => {
  return (
    <TransitionGroup className="card-deck mt-4">
        <CSSTransition key="" timeout={500} classNames="fade">
        <MDBContainer>
          <MDBRow>
            <MDBCol sm="12" md="8" lg="6" className="mx-auto">
              <MDBCard>
                <MDBCardBody className="mx-4">
                  <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                      <strong>Sign Up</strong>
                    </h3>
                  </div>
                  <MDBInput
                    label="Your email"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    group
                    type="password"
                    validate
                    containerClass="mb-0"
                  />
                  <div className="text-center mb-3">
                    <MDBBtn
                      type="button"
                      gradient="blue"
                      rounded
                      className="btn-block z-depth-1a"
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                  <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                    or Sign up with:
                  </p>
                  <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn className="gplus" social="gplus">
                    <MDBIcon fab icon="google-plus-g" className="pr-1" /> Google +
                  </MDBBtn>
                  </div>
                </MDBCardBody>
                <MDBModalFooter className="mx-5 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">
                    Already a member?
                    <a href="#!" className="blue-text ml-1">

                      Sign In
                    </a>
                  </p>
                </MDBModalFooter>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </CSSTransition>
    </TransitionGroup>

  );
};

export default FormPage;
