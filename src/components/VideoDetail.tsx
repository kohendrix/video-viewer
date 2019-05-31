import React, { useState } from 'react';
import styled from 'styled-components';
import { Video } from '../interfaces/video';
import { Segment, Header, Embed } from 'semantic-ui-react';

interface Props {
  video?: Video | undefined | null;
}

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
`;

function VideoDetail({ video }: Props) {
  if (!video) return null;
  return (
    <Container>
      <Embed
        id={video.id.videoId}
        placeholder={video.snippet.thumbnails.medium.url}
        source="youtube"
      />
      <Segment>
        <Header>{video.snippet.title}</Header>
        <p>{video.snippet.description}</p>
      </Segment>
    </Container>
  );
}

export default VideoDetail;
