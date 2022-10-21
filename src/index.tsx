import { CSSProperties, FC } from 'react';
import Img from './components/image';
import { GlobalContext } from './states/global.context';
import { MediaInterface } from './types/context.interface';
import './style.css';
import Video from './components/video';
import Audio from './components/audio';

const MediaPreviewer: FC<MediaInterface> = (props) => {
  let instance: any = '';
  switch (props.type) {
    case 'video':
      instance = <Video url={props.url} cover={props.cover} />;
      break;
    case 'audio':
      instance = <Audio url={props.url} cover={props.cover} />;
      break;
    case 'image':
    default:
      instance = <Img url={props.url} />;
      break;
  }

  const STYLE: CSSProperties = {
    position: 'relative',
    width: '100px',
    height: '100px',
  };
  return (
    <GlobalContext.Provider value={props}>
      <div style={STYLE}>{instance}</div>
    </GlobalContext.Provider>
  );
};

export default MediaPreviewer;
