import { FC, useContext, useRef, useState } from 'react';
import Img from './image';
import { PauseSvg, PlaySvg } from '@/assets';
import { GlobalContext } from '@/states/global.context';

const Video: FC<{ url: string; cover?: string }> = (props) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const context = useContext(GlobalContext);
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <video
          ref={videoRef}
          autoPlay={false}
          loop={true}
          src={props.url}
          controls={false}
          width="100%"
          height="100%"
          onPlay={() => {
            context.onPlay?.();
          }}
          onPause={() => {
            context.onPause?.();
          }}
        />
        <div
          style={{
            opacity: playing ? 0 : 1,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#eee',
          }}
        >
          <Img url={props.cover} />
        </div>
        <div
          data-id="trigger-play"
          style={{
            position: 'absolute',
            width: '24px',
            height: '24px',
            right: '4px',
            bottom: '4px',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setPlaying((e) => {
              if (!e) {
                void videoRef.current?.play();
              } else {
                videoRef.current?.pause();
              }
              return !e;
            });
          }}
        >
          {playing ? <PauseSvg /> : <PlaySvg />}
        </div>
      </div>
    </>
  );
};

export default Video;
