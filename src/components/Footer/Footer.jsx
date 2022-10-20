import { Box } from 'components/Box/Box';
import { SocialLinks } from 'components/SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <Box width="100%" height={200} bg="#FAFAFA" borderTop="1px solid #d8d8d8">
      <SocialLinks />
    </Box>
  );
};
