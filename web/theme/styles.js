import { theme } from './theme';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
html,
body {
  color:  ${theme.backgroundDefault};
  min-height: 100vh;
  font-family: Roboto, "Helvetica Neue", sans-serif;
}

.text-light {
  color:  ${theme.textLight};
}

.text-main {
  color:  ${theme.textMain};
}

.text-dark {
  color:  ${theme.textDark};
}

.default-bg {
  color:  ${theme.primaryDark};
  border-radius: 30px;
  background-color:  ${theme.backgroundDefault};
}

.paper-bg {
  color: #000;
  border-radius: 30px;
  background-color:  ${theme.backgroundPaper};
}

.primary-bg {
  color: #fff;
  border-radius: 30px;
  background-color:  ${theme.primaryMain};
}

.big-icon {
  .material-icons {
    font-size: 40px;
  }

  .mat-icon {
    height: 40px;
    width: 40px;
  }
}

.big-box {
  min-height: 550px;
}

.medium-box {
  min-height: 210px;
}

.small-box {
  min-height: 130px;
}


.flat-btn {
  padding: 8px;
  padding-right: 35px;
  padding-left: 35px;
  border-radius: 50px;
}

.round-btn {
  box-shadow: none;
}

.primary-btn {
  color:  ${theme.primaryLight};
  background-color:  ${theme.primaryMain};
}

.secondary-btn {
  color:  ${theme.primaryMain};
  background-color: #fff;
}

.tertiary-btn {
  color:  ${theme.primaryDark};
  background-color:  ${theme.primaryLight};
}  

`;
