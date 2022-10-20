import { Box } from 'components/Box/Box';
import svg from '../../images/sprite.svg';
import { List, ListItem, StyledSvg } from './SocialLinks.styled';

export const SocialLinks = () => {
  return (
    <Box>
      <List>
        <ListItem>
          <a href="https://www.linkedin.com">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-linkedin2'}></use>
            </StyledSvg>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://twitter.com">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-twitter'}></use>
            </StyledSvg>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://www.facebook.com/">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-facebook'}></use>
            </StyledSvg>
          </a>
        </ListItem>
        <ListItem>
          <a href="https://ru.pinterest.com/">
            <StyledSvg width="20" height="16">
              <use href={svg + '#icon-pinterest2'}></use>
            </StyledSvg>
          </a>
        </ListItem>
      </List>
    </Box>
  );
};
