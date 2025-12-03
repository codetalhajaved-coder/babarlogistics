import { ReactNode } from 'react';
import { useAppSelector } from '@/hooks/useAppSelector';

interface AppWrapperProps {
  children: ReactNode;
}

const AppWrapper = ({ children }: AppWrapperProps) => {
  const { isRTL } = useAppSelector((state) => state.language);

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
      {children}
    </div>
  );
};

export default AppWrapper;
