import { GlobalContext } from '@/states/global.context';
import { FC, useContext, useEffect, useMemo, useState } from 'react';
import Loading from './loading';

const Img: FC<{ url?: string }> = (props) => {
  const [status, setStatus] = useState<'nodata' | 'loading' | 'error' | 'success'>('loading');
  const context = useContext(GlobalContext);
  useEffect(() => {
    if (typeof props.url !== 'string' || props.url === '') {
      setStatus('nodata');
      return;
    }
    const img = new Image();
    img.src = props.url;
    img.onload = () => {
      context.onImageLoad?.();
      setStatus('success');
    };
    img.onerror = () => {
      context.onImageLoadError?.();
      setStatus('error');
    };
  }, [props.url]);
  const imgDom = <img src={props.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
  const instance = useMemo(() => {
    switch (status) {
      case 'loading':
        return <Loading />;
      case 'success':
        return imgDom;
      case 'error':
      case 'nodata':
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        return context.defaultImage ? context.defaultImage : imgDom;
    }
  }, [status]);
  return instance;
};

export default Img;
