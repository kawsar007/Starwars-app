import { useEffect, useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Circle } from "better-react-spinkit";

const GlobalStyle = createGlobalStyle`
   * {
     margin: 0;
   }
   body {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     background-color: #151515;
  font-family: "DINNextW01-Regular", -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   }
`;

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      {loading ? (
        // <AppLoading>
          <AppLoadingContents>
            {/* <img
              src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
              alt=""
            /> */}
            <Circle color="#edec51" size={60} />
          </AppLoadingContents>
        // </AppLoading>
      ) : (
        <>
          <Header />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;


const AppLoading = styled.div`
  /* display: grid;
  place-items: center; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

 const AppLoadingContents = styled.div`
   text-align: center;
   padding-bottom: 100px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   /* > img {
    object-fit: contain;
     height: 150px;
     width: 250px;
     margin-bottom: 20px;
     filter: brightness(0) invert(1);
   }  */
 `;
