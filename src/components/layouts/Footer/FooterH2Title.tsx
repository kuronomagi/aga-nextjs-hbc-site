// components

// types
import { StyledSystemDefaultProps } from '~/types/Common';

interface P extends StyledSystemDefaultProps {
  text: string;
}

const FooterH2Title: React.FC<P> = ({ text }) => {
  return <h2 className='h2'>{text}</h2>;
};
export default FooterH2Title;
