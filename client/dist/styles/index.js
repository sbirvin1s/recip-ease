/*========== EXTERNAL MODULES ==========*/
import styled, {createGlobalStyle} from 'styled-components';


/*========== EXPORTS ==========*/

/*
=====================================
                THEMES
=====================================
*/

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  color: #171816;
  background-color: #fff;
}
`;

/*
=====================================
                TEXT
=====================================
*/

export const P = styled.p``;

/*
=====================================
                BUTTONS
=====================================
*/

export const Button = styled.button``;

/*
=====================================
                DIVS
=====================================
*/

export const modalBG = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 40px 0;
`;

export const Nav = styled.nav`
  position: absolute;
  background-color: #000;
  bottom: 0px;
  display: flex;
  margin-bottom: 0.25em;
  width: 100vw;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Footer = styled.footer`
`;


export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Container = styled.div`
`;

export const Div = styled.div``;

export const Column = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonTray = styled(Row)`
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ButtonGroup = styled.div`
  display:flex;
  margin: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export const ButtonBox = styled(Column)`
  top: 15px;
  right: 10px;
  position: absolute;
`;

export const Span = styled.span`
`

/*
=====================================
                FORMS
=====================================
*/

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/*
=====================================
                INPUTS
=====================================
*/

export const Input = styled.input`
`;

/*
=====================================
                IMAGES
=====================================
*/

export const Img = styled.img``;

export const Thumbnail = styled.img``;