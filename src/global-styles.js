import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  *,
  :before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    font-size: 14px;
    line-height: 1.33333;
    color: #333;
  }
  
  a {
    text-decoration: none;
    cursor: pointer;
    color: #333;
  }

  .has-inner-table .ant-table {
    margin: -16px !important;
  }

  .ant-table-column-sorter {
    color: #fff;
  }
  .ant-select-selector {
    border-radius: 50px !important;
    background-color: #d9d9d9 !important;
    border: 1px solid #d9d9d9 !important;
  }
  .ant-pagination-options .ant-select
  {
  width: 206px !important;
  }
  .ant-col .title_input {
    font-weight: bold !important; font-size: 12px !important;
  }
  .ant-row .title_input {
    font-weight: bold !important; font-size: 12px !important;
  }
  .ant-row .change_status  {
    width: 68% !important;
  }
  .ant-layout-sider
  {
    background: white;
  }

`;

export default GlobalStyle;
