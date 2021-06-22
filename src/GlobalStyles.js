import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    }

    a {
        text-decoration: none;
    }

    h1 {
        font-family: Staatliches;
        font-size: 100px;
    }

    #category {
        font-family: Staatliches;
        font-weight: 500;
    }

    #title {
        letter-spacing: 0.4px;
        font-size: 22px;
        font-size: 1.375rem;
        line-height: 1.13636;
    }

    #banner {
        margin: 20px;
        height: 800px;
    }

    #editor {
        font-size: 16px;
        font-size: 1rem;
        line-height: 1.75;
    }

        .uk-navbar-container {
        background: #fff !important;
        font-family: Staatliches;
    }

    img:hover {
        opacity: 1;
        transition: opacity 0.25s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
`

export default GlobalStyle