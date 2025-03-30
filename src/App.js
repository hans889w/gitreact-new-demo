import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import NaviBar from "./NaviBar";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: null,
    };
  }

  handleCategorySelect = (categoryId) => {
    this.setState({ selectedCategory: categoryId });
  };

  render() {
    return (
      <div>
        <NaviBar />
        <Switch>
          {/* /products yolu - sadece ProductList */}
          <Route
            exact
            path="/products"
            render={(props) => (
              <Container>
                <Row>
                  <Col xs="12">
                    <ProductList
                      {...props}
                      selectedCategory={null} // Tüm fotoğrafları göstermek için null
                      title="All Photos"
                    />
                  </Col>
                </Row>
              </Container>
            )}
          />

          {/* / ve /products/:categoryId yolları - CategoryList ile birlikte */}
          <Route
            exact
            path={["/", "/products/:categoryId"]}
            render={(props) => (
              <Container>
                <Row>
                  <Col xs="3">
                    <CategoryList onCategorySelect={this.handleCategorySelect} />
                  </Col>
                  <Col xs="9">
                    <ProductList
                      {...props}
                      selectedCategory={
                        props.match.params.categoryId
                          ? parseInt(props.match.params.categoryId)
                          : this.state.selectedCategory
                      }
                      title="All Products"
                    />
                  </Col>
                </Row>
              </Container>
            )}
          />

         
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;