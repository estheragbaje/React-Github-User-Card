import React from "react";
import axios from "axios";
import { Box, Stack, Button, Image, Heading } from "@chakra-ui/core";

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
    return (
      <Stack spacing="40px">
        {this.state.data.map(item => (
          <Stack isInline maxW="400px" mx="auto">
            <Image size="80px" src={item.avatar_url} />
            <Box>
              <Heading size="sm">{item.login}</Heading>
              <Button
                target="__blank"
                marginTop={3}
                size="sm"
                as="a"
                href={item.html_url}
              >
                Check Profile
              </Button>
            </Box>
          </Stack>
        ))}
      </Stack>
    );
  }
}

export default UserFollowerCard;
