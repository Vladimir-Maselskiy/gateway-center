import { Box } from 'components/Box/Box';
import GreenCartoon from 'components/Cartoons/GreenCartoon';
import RedCartoon from 'components/Cartoons/RedCartoon';
import YellowCartoon2 from 'components/Cartoons/YellowCartoon2';
import { SocialLinks } from 'components/SocialLinks/SocialLinks';

export const Footer = () => {
  return (
    <Box
      width="100%"
      height={200}
      bg="#FAFAFA"
      borderTop="1px solid #d8d8d8"
      position="relative"
      overflow="hidden"
    >
      <Box width={300} height={300} position="absolute" bottom="-30%" left={20}>
        <RedCartoon />
      </Box>
      <Box width={108} height={106} position="absolute" top="35%" right={-35}>
        <YellowCartoon2 />
      </Box>
      <Box width={79} height={97} position="absolute" top={0} right={100}>
        <GreenCartoon />
      </Box>
      <Box position="absolute" top="40%" left="30%">
        <SocialLinks />
      </Box>
    </Box>
  );
};
