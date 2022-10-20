import { Box } from './Box/Box';
import { GoogleMapComponent } from './GoogleMapComponent/GoogleMapComponent';

export const App = () => {
  return (
    <Box>
      <Box width={976} height={976}>
        <GoogleMapComponent />
      </Box>
      <Box height={200}>futter</Box>
    </Box>
  );
};
