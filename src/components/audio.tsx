import { FC, useContext, useRef, useState } from 'react';
import Img from './image';
import { PauseSvg, PlaySvg } from '@/assets';
import { GlobalContext } from '@/states/global.context';

const Audio: FC<{ url: string; cover?: string }> = (props) => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const context = useContext(GlobalContext);
  return (
    <>
      <div style={{ width: '100%', height: '100%' }}>
        <audio
          ref={audioRef}
          autoPlay={false}
          loop={true}
          src={props.url}
          controls={false}
          onPlay={() => {
            context.onPlay?.();
          }}
          onPause={() => {
            context.onPause?.();
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0,
          }}
        />
        <Img url={props.cover} />
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
                void audioRef.current?.play();
              } else {
                audioRef.current?.pause();
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

export default Audio;
