import React from "react";
import axios from "axios";

// const usercardApi = "https://api.github.com/users/estheragbaje";

// export default class Usercard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   //   componentDidMount() {
//   //     axios.get(usercardApi).then(response => {
//   //       //   console.log(response.data);
//   //       this.setState({ users: response.data })
//   //       );
//   //     });

//   componentDidMount() {
//     axios.get(usercardApi).then(response => {
//       this.setState({ todos: response.data });
//     });
//   }

//   render() {
//     // const followersArray = [
//     //   "tetondan",
//     //   "dustinmyers",
//     //   "justsml",
//     //   "luishrd",
//     //   "bigknell",
//     //   "ladrillo",
//     //   "estheragbaje"
//     // ];
//     return (
//       <div>
//         <div>
//           <img src={this.props.avatar_url} alt={this.props.name} />
//           <h3>{this.props.name}</h3>
//         </div>
//         <div>
//           <p>{this.props.location}</p>
//           <p>{this.props.email}</p>
//           <p>{this.props.created_at}</p>
//         </div>
//         <div>
//           <p>{this.props.followers}</p>
//           <p>{this.props.public_repos}</p>
//           <p>{this.props.following}</p>
//         </div>
//       </div>
//     );
//   }
// }

class Usercard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {},
      hasError: false
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/estheragbaje")
      .then(respone => {
        this.setState({ data: respone.data, isLoading: false });
      })
      //   .catch(err => console.log(err));
      .catch(error => {
        this.setState({ isLoading: false, hasError: true });
      });
  }

  render() {
    const {
      name,
      location,
      avatar_url,
      email,
      created_at,
      followers,
      following,
      public_repos
    } = this.state.data;

    if (this.state.isLoading === true) {
      return <div>Loading...</div>;
    }
    if (this.state.hasError === true) {
      return <div>Has Error</div>;
    }
    return (
      <div>
        <div>
          <img src={avatar_url} alt={name} />
          <h3>{name}</h3>
        </div>
        <div>
          <p>{location}</p>
          <p>{email}</p>
          <p>{created_at}</p>
        </div>
        <div>
          <p>{followers}</p>
          <p>{public_repos}</p>
          <p>{following}</p>
        </div>
      </div>
    );
  }
}

export default Usercard;
