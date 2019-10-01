import React from "react";
import axios from "axios";

class UserFollowerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      hasError: false,
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/estheragbaje/followers")
      .then(response => {
        this.setState({ data: response.data, isLoading: false });
      })
      .catch(error => {
        this.setState({ hasError: true });
      });
  }
}
