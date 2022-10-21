import { MediaInterface } from '@/types/context.interface';
import { createContext } from 'react';

export const GlobalContext = createContext<MediaInterface>({
  url: '',
});
