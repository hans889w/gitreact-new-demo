import React, { Component } from "react";
import { List, Card } from "antd";

var backgroundImages = [
  "https://wallpapers.com/images/featured/electronics-1ovz9er6jk6otp61.jpg",
  "/images/clothes.jpg",
  "https://img.freepik.com/free-photo/modern-living-room-interior-with-large-tv-screen-displaying-home-automation-system_9975-33164.jpg",
];

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => this.setState({ categories: data }));
  }

  render() {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-white">
        <List
          grid={{
            gutter: 26,
            column: 1,
            xs: 1,
            sm: 2,
            md: 3,
          }}
          dataSource={this.state.categories || []}
          renderItem={(item, index) => (
            <List.Item>
              <Card
                title={item?.name}
                headStyle={{
                  color: "#fff",
                  fontSize: "2rem",
                  fontWeight: "bold",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                  textAlign: "center",
                  marginTop: "4rem",
                  transition: "color 0.6s ease-in-out, transform 0.5s ease",
                }}
                className="text-center cursor-pointer relative overflow-hidden hover:shadow-2xl hover:scale-105 hover:brightness-95 hover:border-cyan-400 hover:-translate-y-1 [&_.ant-card-head-title]:hover:text-cyan-200 [&_.ant-card-head-title]:hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${
                    backgroundImages[index % backgroundImages.length]
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "200px",
                  color: "#fff",
                  textShadow: "1px 1px 2px rgba(0, 0, 0, 1.3)",
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition:
                    "border-color 0.4s ease-in-out, filter 0.5s ease, transform 0.5s ease, box-shadow 0.5s ease", 
                }}
                onClick={() => this.props.onCategorySelect(item.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out" />
              </Card>
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default CategoryList;