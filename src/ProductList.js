import React, { Component } from "react";
import { Card, Row, Col, Image } from "antd";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchPhotos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.fetchPhotos();
    }
  }

  fetchPhotos = async () => {
    this.setState({ loading: true, photos: [] });

    const url =
      this.props.selectedCategory === null
        ? "http://localhost:5000/photos"
        : `http://localhost:5000/photos?albumId=${this.props.selectedCategory}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ photos: data, loading: false });
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      this.setState({ photos: [], loading: false });
    }
  };

  render() {
    const { loading, photos } = this.state;

    return (
      <div>
        <h2 className="text-xl font-bold mb-5 text-center">{this.props.title}</h2>

        {loading ? (
          <p className="text-gray-500 text-center w-full">Yükleniyor...</p>
        ) : photos.length === 0 ? (
          <p className="text-gray-500 text-center w-full">
            Bu kategoriye ait ürün bulunamadı.
          </p>
        ) : (
          <Row className="flex flex-wrap gap-5 justify-center">
            {photos.map((photo) => (
              <Col key={photo.id} xs={24} sm={12} md={8} lg={6}>
                <div className="transition-transform transform hover:scale-110 p-4 hover:-translate-y-1 duration-500">
                  <Card
                    hoverable
                    className="w-full"
                    style={{
                      width: "150%",
                      height: "150%",
                    }}
                  >
                    <Image
                      alt={photo.title}
                      className="w-full h-64 object-cover"
                      src={photo.thumbnailUrl}
                      preview={{ src: photo.thumbnailUrl }}
                      style={{
                        borderRadius: "10px",
                      }}
                    />
                    <Card.Meta
                      title={photo.title}
                      className="text-center mt-4 text-lg"
                    />
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        )}
      </div>
    );
  }
}

export default ProductList;