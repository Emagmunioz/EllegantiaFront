import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import EstoresEnrollablesCard from './components/productCard/EstoresEnrollablesCard';
import EstoresLinoCard from './components/productCard/EstoresLinoCard';
import LamasVerticalesCard from './components/productCard/LamasVerticalesCard';
import LinoArrastreCard from './components/productCard/LinoArrastreCard';
import PanelesJaponesesCard from './components/productCard/PanelesJaponesesCard';

const Products = () => {
  return (
    <Container className="py-5">
      <Row xs={1} md={2} lg={3} xl={5} className="g-4">
        <Col>
          <EstoresEnrollablesCard />
        </Col>
        <Col>
          <EstoresLinoCard />
        </Col>
        <Col>
          <LinoArrastreCard />
        </Col>
        <Col>
          <PanelesJaponesesCard />
        </Col>
        <Col>
          <LamasVerticalesCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;