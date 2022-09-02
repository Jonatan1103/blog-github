import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0.45rem;
    }
    ::-webkit-scrollbar-track {
      background: ${(props) => props.theme.colors["base-border"]}
    }
    ::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.colors["brand-blue"]};
      border-radius: 999px;
    }
  }

  body {
    background: ${(props) => props.theme.colors["base-background"]};
    color: ${(props) => props.theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 ${(props) =>
      props.theme.textSizes["text-text-m"]} 'Nunito', sans-serif;
      line-height: 160%;
  }

  ul {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;