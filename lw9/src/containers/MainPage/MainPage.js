import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './MainPage.css';
import { ERROR_404, ERROR_500 } from '../../constants/Errors';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:1337/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <h1><Badge color="danger">Error: {error.message}</Badge></h1>;
    } else if (!isLoaded) {
      return <h1><Badge color="info">Loading...</Badge></h1>;
    } else if (JSON.stringify(products) === ERROR_404) {
      return <h1><Badge color="warning">Not found 404!</Badge></h1>;
    } else if (JSON.stringify(products) === ERROR_500) {
      return <h1><Badge color="danger">Error 500!</Badge></h1>;
    } else {
      return (
        <Container>
          <h1><Badge color="success">Products:</Badge></h1>
          <ListGroup>
            {products.map(product => (
              <NavLink className='product' to={`/reviews/${product._id}`}>
                <ListGroupItem className="text" key={product._id}>
                  {product.name}
                </ListGroupItem>
              </NavLink>
            ))}
          </ListGroup>
        </Container>
      );
    }
  }
}

export default MainPage;
