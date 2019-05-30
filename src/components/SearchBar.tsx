import React, { useState } from 'react';
import styled from 'styled-components';
import { Segment, Form, Input, Label, FormField, Container } from 'semantic-ui-react';

// const Container = styled.div`
//   margin: 20px;
// `;

export default class SearchBar extends React.Component {
  state = { term: '' };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(this.state.term);
  };

  render() {
    return (
      <>
        <Container>
          <Segment>
            <Form onSubmit={this.onSubmit}>
              <FormField>
                <label>Video Search</label>
                <Input
                  name="search"
                  placeholder="title..."
                  type="text"
                  value={this.state.term}
                  onChange={e => this.setState({ term: e.target.value })}
                  action={{ icon: 'search', type: 'submit' }}
                />
              </FormField>
            </Form>
          </Segment>
        </Container>
      </>
    );
  }
}
