import styled from 'styled-components'

export const Container = styled.main`
  text-align: center;

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .App-logo {
    height: 40vmin;

    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    color: white;
    background-color: #282c34;

    font-size: calc(10px + 2vmin);
  }

  .App-link {
    color: #067df7;
  }
`
