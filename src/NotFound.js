import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class NotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/");
    }, 7000);
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
          backgroundColor: "#f8f9fa",
        }}
      >
        <h1 style={{ fontSize: "3rem", color: "#dc3545" }}>404 - Not Found</h1>
        <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>
          This page is currently offline. You will back to Home page in moments.
        </p>
        <Link
          to="/"
          className="bg-blue hover:shadow-2xl bg-blue-600 hover:scale-105 hover:text-white transition-all duration-700"
          style={{
            padding: "10px 20px",
            fontSize: "1.1rem",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Back to Home
        </Link>
      </div>
    );
  }
}

export default withRouter(NotFound);