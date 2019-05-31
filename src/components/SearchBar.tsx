import React from 'react';
import { Segment, Form, Input, FormField, Container } from 'semantic-ui-react';

// const Container = styled.div`
//   margin: 20px;
// `;

interface Props {
  onTermSubmit: (term: string) => void;
}
export default class SearchBar extends React.Component<Props> {
  state = { term: '' };

  onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onTermSubmit(this.state.term);
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
                  placeholder="keywords..."
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
