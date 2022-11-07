import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBIcon} from 'mdbreact';
function Footer() {
  const year = new Date().getFullYear();

  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
    <MDBContainer className='p-4'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.google.com/' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <section className=''>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' start='12'>
              <MDBInput contrast type='email' label='Email address' className='mb-4' />
            </MDBCol>

            <MDBCol size="auto">
              <MDBBtn outline color='light' type='submit' className='mb-4'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </section>

      

      <section className=''>
        <MDBRow>
          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Company</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Blog
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Newsroom
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Careers
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Products</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Ride
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Drive
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Deliver
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Eat
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Travel</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Aiports
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Cities
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Stations
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Global</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-white'>
                  Safety
                </a>
              </li>
              <li>
                <a href='#!' className='text-white'>
                  Diversity and Inclusion
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © {year} LuxRide Technologies Inc.
    </div>
  </MDBFooter>
  );
}
export default Footer;


