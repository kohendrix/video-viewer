import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1100px;
  margin: 20px auto;
`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <Container>
          <SearchBar />
        </Container>
      </>
    );
  }
}
