import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () => useMediaQuery({ query: '(min-width: 1024px)' });

const useTabletAndBelowMediaQuery = () => useMediaQuery({ query: '(max-width: 1023px)' });

const useSmartPhoneMediaQuery = () => useMediaQuery({ query: '(max-width: 768px)' });

export const useResponsive = () => {
  const isDesktop = useDesktopMediaQuery();
  const isTabletAndBelow = useTabletAndBelowMediaQuery();
  const isSmartPhone = useSmartPhoneMediaQuery();

  return {
    isDesktop,
    isTabletAndBelow,
    isSmartPhone,
  };
};
