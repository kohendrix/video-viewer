import 'semantic-ui-css/semantic.min.css';
import React from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import { Video } from '../interfaces/video';
import VideoDetail from './VideoDetail';
import { Grid, Segment } from 'semantic-ui-react';

const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null, showNoResult: false };

  componentDidMount() {
    // default
    this.onTermSubmit('surfing');
  }

  onTermSubmit = async (term: string) => {
    try {
      if (!term) return;

      this.setState({ showNoResult: false });

      const result = await youtube.get('/search', {
        params: {
          q: term,
        },
      });

      if (!result.data.items.length) {
        this.setState({ videos: result.data.items, selectedVideo: null, showNoResult: true });
        return;
      }

      this.setState({ videos: result.data.items, selectedVideo: result.data.items[0] });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  onVideoSelect = (video: Video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        {this.state.showNoResult && <Segment>No Result</Segment>}
        {!this.state.showNoResult && (
          <Grid>
            <Grid.Column width={10}>
              <VideoDetail video={this.state.selectedVideo} />
            </Grid.Column>
            <Grid.Column width={6}>
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </Grid.Column>
          </Grid>
        )}
      </Container>
    );
  }
}
