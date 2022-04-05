import withSizesReact from 'react-sizes';
import { pure } from 'recompose';

const widthToSize = width => ({
    isMobile: width <= 576,
    isTablet: width > 576 && width < 768,
    isDesktop: width >= 768,
    isLargeDesktop: width > 992,
    isXLargeDesktop: width > 1200
  });


  export default WrappedComponent => withSizesReact(({ width }) => ({
    sizes: widthToSize(width)
  }))(pure(WrappedComponent));