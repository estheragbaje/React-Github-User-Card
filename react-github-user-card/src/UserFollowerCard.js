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

  render() {
    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }
    if (this.state.hasError === true) {
      return <div>Ooop! There was an error</div>;
    }
    return this.state.data.map(item => (
      <div>
        <div>
          <img src={item.avatar_url} />
          <h3>{item.login}</h3>
        </div>
        <button>Check Profile</button>
      </div>
    ));
  }
}

export default UserFollowerCard;
