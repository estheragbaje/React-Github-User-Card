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
  StatNumber,
  Heading,
  Spinner
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
      login,
      following,
      public_repos
    } = this.state.data;

    if (this.state.isLoading === true) {
      return (
        <Flex my="32px" mx="auto" justifyContent="center">
          <Spinner color="tomato" />
          <Box ml={3}>Loading...</Box>
        </Flex>
      );
    }
    if (this.state.hasError === true) {
      return <div>Has Error</div>;
    }
    return (
      <Box
        maxWidth="560px"
        mx="auto"
        bg="white"
        shadow="md"
        padding="24px"
        rounded="md"
      >
        <Stack
          isInline
          align="center"
          maxWidth="300px"
          mx="auto"
          py="24px"
          spacing="32px"
        >
          <Image rounded="md" size="100px" src={avatar_url} alt={name} />
          <Box textAlign="left">
            <Heading size="sm">{name}</Heading>
            <Text>{login}</Text>
            <Text>{location}</Text>
          </Box>
        </Stack>

        {/* <Box>
          <p>{location}</p>
          <p>{email}</p>
          <p>{created_at}</p>
        </Box> */}

        <Stack
          maxWidth="500px"
          mx="auto"
          isInline
          spacing="30px"
          align="center"
          marginBottom="20px"
        >
          <Stat textAlign="center">
            <StatLabel>Followers</StatLabel>
            <StatNumber>{followers}</StatNumber>
          </Stat>

          <Stat textAlign="center">
            <StatLabel>Repos</StatLabel>
            <StatNumber>{public_repos}</StatNumber>
          </Stat>

          <Stat textAlign="center">
            <StatLabel>Following</StatLabel>
            <StatNumber>{following}</StatNumber>
          </Stat>
        </Stack>
      </Box>
    );
  }
}

export default Usercard;
