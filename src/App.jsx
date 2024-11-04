import Header from './components/Header'
import Footer from './components/Footer'
import ImageSlider from './components/ImageSlider'
import './App.css'
import { Parallax } from 'react-parallax'
import Lead from './images/LEAD.jpg'
import Lambo from './images/Lambo.jpg'
import dodge from './images/dodge.jpg'
import ContactBg from './images/contactbg.jpeg'
import { Button, Col, Form, Row } from 'react-bootstrap'



function App() {

  return (
    <>
      <Header />
      <Parallax className='w-100' bgImage={dodge} strength={600}>
        <div className="content">
          <div className="text-content text-white fw-bolder">
            <h1 style={{ fontSize: '60px' }}>Welcome to <span className='text-danger'>R</span>ev<span className='text-danger'>G</span>arage</h1>
            <p style={{ fontSize: '40px' }}>Your <span className='text-danger'>dream</span> car <span className='text-danger'>awaits</span> you!</p>
            <button style={{ backgroundColor: 'red', width: '150px', height: '50px', fontSize: '20px' }} className='btn btn-outline-danger text-white  inline-block' href="">Explore Now</button>
          </div>
        </div>
      </Parallax>
      {/* Services */}
      <div className=" my-5">
        <h2 className="text-center fs-1 mb-4">Our Services</h2>
        <Row className="text-center my-5">
          <Col md={4} className="mb-4">
            <i className="fas fa-tools" style={{ fontSize: '4rem', color: 'red' }}></i>
            <h4 className="mt-3">Car Repair</h4>
            <p>Professional car repair services for all makes and models.</p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="fas fa-gas-pump" style={{ fontSize: '4rem', color: 'red' }}></i>
            <h4 className="mt-3">Maintenance</h4>
            <p>Regular maintenance to keep your vehicle in top shape.</p>
          </Col>
          <Col md={4} className="mb-4">
            <i className="fas fa-car-battery" style={{ fontSize: '4rem', color: 'red' }}></i>
            <h4 className="mt-3">Battery Replacement</h4>
            <p>Reliable battery testing and replacement services.</p>
          </Col>
        </Row>
      </div>
      {/* Parallax for About */}
      <Parallax className='w-100' bgImage={Lambo} strength={600}>
        <div style={{ height: '60vh' }}>
          <div className="text-content text-white fw-bold d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '400px' }}>
            <h2 className="fs-1">About Us</h2>
            <p style={{ fontSize: '20px' }} className=" px-3 text-center">
              At CarShop, we are passionate about connecting you with the car of your dreams.
              With a dedication to quality and customer satisfaction, we provide a vast range of
              premium vehicles tailored to meet your needs and exceed your expectations.
            </p>
            <button className='btn btn-danger text-white mt-3 px-4 py-2'  style={{ fontSize: '18px',backgroundColor: 'red', width: '150px', height: '50px' }} href="#services" >
              Learn More
            </button>
          </div>
        </div>
      </Parallax>
      {/* image slider for brands */}
      <ImageSlider />
      {/* contact us parallax */}
      <Parallax className="w-100" bgImage={ContactBg} strength={600}>
      <div style={{ height: '80vh' }}>
        <div className=" text-white fw-bold d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: '400px', padding: '40px', backgroundColor: 'rgba(0, 0, 0, 0.6)',   borderRadius: '10px',  }}  >
          <h2 className="fs-1 mb-4">Contact Us</h2>
          <Row className="w-75 mx-auto">
            {/* Contact Form */}
            <Col md={12} className="p-4">
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label style={{ color: '#fff' }}>Name</Form.Label>
                  <Form.Control type="text"  placeholder="Your Name"  style={{  height: '50px',  width: '100%', fontSize: '16px'}}  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label style={{ color: '#fff' }}>Email Address</Form.Label>
                  <Form.Control  type="email"  placeholder="name@example.com"  style={{  height: '50px',  width: '100%', fontSize: '16px'}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label style={{ color: '#fff' }}>Message</Form.Label>
                  <Form.Control as="textarea"  rows={4}  placeholder="Type your message here..." style={{ fontSize: '16px',  }} />
                </Form.Group>
                <Button type="submit" className="mt-3" style={{ backgroundColor: 'red', borderColor: 'red', width: '150px',  height: '50px',  fontSize: '18px', }}>
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </Parallax>
      <Footer />
    </>
  )
}

export default App
