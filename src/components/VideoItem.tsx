import React from 'react';
import styled from 'styled-components';
import { List, Image } from 'semantic-ui-react';
import { Video } from '../interfaces/video';

interface Props {
  video?: Video | undefined | null;
  onVideoSelect: (video: Video) => void;
}

const Item = styled(List.Item)`
  display: flex !important;
  align-items: center !important;
  cursor: pointer;

  img {
    max-width: 100px !important;
  }
`;

function VideoItem({ video, onVideoSelect }: Props) {
  if (!video) return null;
  return (
    <Item
      onClick={(_: any) => {
        onVideoSelect(video);
      }}
    >
      <Image src={video.snippet.thumbnails.medium.url} />
      <List.Content>
        <List.Header as="a">{video.snippet.title}</List.Header>
      </List.Content>
    </Item>
  );
}

export default VideoItem;
