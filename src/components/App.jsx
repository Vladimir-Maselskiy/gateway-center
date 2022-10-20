import { Box } from './Box/Box';
import Ellipse from './Cartoons/Ellipse';
import RedCartoon from './Cartoons/RedCartoon';
import YellowCartoon from './Cartoons/YellowCartoon';
import YellowCartoon2 from './Cartoons/YellowCartoon2';
import { Footer } from './Footer/Footer';
import { Form } from './Form/Form';
import { GoogleMapComponent } from './GoogleMapComponent/GoogleMapComponent';

export const App = () => {
  return (
    <Box>
      <Box
        display="flex"
        maxWidth={1454}
        position="relative"
        overflow="hidden"
        margin="0 auto"
      >
        <Box width={108} height={106} position="absolute" top="3%" left="3%">
          <YellowCartoon2 />
        </Box>
        <Box width={87} height={87} position="absolute" top="2%" left="50%">
          <Ellipse />
        </Box>
        <Form />
        <Box width={976} height={976} position="relative" top={-52}>
          <GoogleMapComponent />
          <Box
            width={300}
            height={300}
            position="absolute"
            bottom="10%"
            left={-40}
          >
            <RedCartoon />
          </Box>
          <Box
            width={127}
            height={127}
            position="absolute"
            bottom="32%"
            left={-30}
          >
            <YellowCartoon />
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};
