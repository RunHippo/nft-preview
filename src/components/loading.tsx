import { CSSProperties, FC } from 'react';

const WrapperStyle: CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};
const SkeletonStyle: CSSProperties = {
  backgroundColor: '#eee',
  backgroundImage: 'linear-gradient( 90deg,#eee,#f5f5f5,#eee )',
  backgroundSize: ' 200px 100%',
  backgroundRepeat: 'no-repeat',
  borderRadius: '4px',
  display: 'inlineBlock',
  lineHeight: 1,
  width: '100%',
  height: '100%',
  animation: 'animation-skeleton 1.2s ease-in-out infinite',
};
const Loading: FC = () => {
  return (
    <div style={WrapperStyle}>
      <div style={SkeletonStyle}></div>
    </div>
  );
};

export default Loading;
