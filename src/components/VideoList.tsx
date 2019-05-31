import React from 'react';
import styled from 'styled-components';
import VideoItem from './VideoItem';
import { List } from 'semantic-ui-react';
import { Video } from '../interfaces/video';

interface Props {
  videos?: Video[] | undefined | null;
  onVideoSelect: (video: Video) => void;
}

const Container = styled.div`
  margin-top: 50px;
`;

class VideoList extends React.Component<Props> {
  render() {
    const { videos, onVideoSelect } = this.props;
    if (!videos) return null;
    const list = videos.map(v => (
      <VideoItem key={v.id.videoId} video={v} onVideoSelect={onVideoSelect} />
    ));
    return (
      <Container>
        <List divided relaxed>
          {list}
        </List>
      </Container>
    );
  }
}

export default VideoList;
