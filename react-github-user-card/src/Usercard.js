import React from "react";
import axios from "axios";
import {
  Flex,
  Image,
  Text,
  Box,
  Stack,
  Stat,
  StatLabel,
  StatNumber
} from "@chakra-ui/core";

class Usercard extends React.Component {
  constructor(props) {
    super(props);
    //state of users data
    this.state = {
      isLoading: true,
      data: {},
      hasError: false
    };
  }

  componentDidMount() {
    axios
      //users api
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
      <Box>
        <Flex
          justify="space-between"
          align="center"
          maxWidth="300px"
          margin="auto"
          bg="gray.100"
        >
          <Image size="100px" src={avatar_url} alt={name} />
          <Text>{name}</Text>
        </Flex>

        <div>
          <p>{location}</p>
          <p>{email}</p>
          <p>{created_at}</p>
        </div>
        <Stack
          maxWidth="500px"
          mx="auto"
          isInline
          spacing="30px"
          align="center"
        >
          <Stat>
            <StatLabel>Followers</StatLabel>
            <StatNumber>{followers}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Repos</StatLabel>
            <StatNumber>{public_repos}</StatNumber>
          </Stat>

          <Stat>
            <StatLabel>Following</StatLabel>
            <StatNumber>{following}</StatNumber>
          </Stat>
        </Stack>
      </Box>
    );
  }
}

export default Usercard;
