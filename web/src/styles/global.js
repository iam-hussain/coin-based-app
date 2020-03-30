import css from 'styled-jsx/css'
import theme from './theme'

export default css.global `
  body {
    margin: 0;
    font-family: ${theme.fontFamily};
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color:  ${theme.colors.textMain};
    text-align: left;
    background-color: #fff;
  }
  
  .default-bg {
    color: ${theme.colors.textMain};
    border-radius: 30px;
    background-color: ${theme.colors.backgroundDefault};
  }

  .paper-bg {
    color: ${theme.colors.textDark};
    border-radius: 30px;
    background-color: ${theme.colors.secondary};
  }

  .primary-bg {
    color: #fff;
    border-radius: 30px;
    background-color: ${theme.colors.primary};
  }
  
  .textLight {
    color: ${theme.colors.textLight};
  }

  .textMain {
    color: ${theme.colors.textMain};
  }

  .textDark {
    color: ${theme.colors.textDark};
  }

  .button{
    overflow: hidden;
    margin:5px;
    padding: 8px 30px;
    min-width: 200px;
    border-radius: 50px;
    border: 1px solid transparent;
    display: inline-block;
    font-weight: 400;
    letter-spacing: 1px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-size: 1rem;
    line-height: 1.5;
    transform: translate3d(0, 0, 0);
  }
  .button:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10,10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
  }
  .button:active:after {
      transform: scale(0,0);
      opacity: .2;
      transition: 0s;
  }
  .button:focus {
      box-shadow: 0 0 0 0rem rgba(38,143,255,.2);
      outline: 0px dotted;
      outline: 0px auto -webkit-focus-ring-color;
  }

  .btnPrimary{
    color: #f1f5ff;
    background-color: #4548ed;
  }

  .btnSecondary{
    color: #4548ed;
    background-color: #fff;
  }
  
  .btnTertiary{
    color: #221996;
    background-color: #f1f5ff;
  }

  .iconBtn{
    min-width: 10px;
    padding: 8px 10px;
  }

  .flexboy {
    display: flex;
  }
  
  .flex-spacer {
    flex-grow: 1;
  }

  .zero-margin{
    margin: 0px;
  }

  .zero-padding{
    padding: 0px;
  }

  .auto-margin{
    margin: auto;
  }

`