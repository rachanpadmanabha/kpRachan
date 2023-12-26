import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import { Project } from "../portfolio";
import { ContactUs } from "../contact";
import { About } from "../about";
// import image3 from "./image3.jpg";
import { Socialicons } from "../../components/socialicons";
import { useTheme } from "../../hooks/themeContext.js";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
function RealLife(args) {
  const { theme } = useTheme();
  const getImageSource =
    theme === 'light' ? true : false;
  console.log(args)
  return (


    <body className="realLife" >
      {/* <Link to="/contact" className="text_2 "> */}
      <div class="perspective-text" style={{ color: getImageSource ? 'black' : 'white' }}>
        <div class={`perspective-line`}>
          <p className="pop"></p>
          <p className="pop">{` ${args.a1}`}</p>
        </div>
        <div class={`perspective-line`}>
          <p className="pop">{` ${args.a1}`}</p>
          <p className="pop">{` ${args.a2}`}</p>
        </div>
        <div class={`perspective-line`}>
          <p className="pop">{` ${args.a2}`}</p>
          <p className="pop">{` ${args.a3}`}</p>
        </div>
        <div class={`perspective-line`}>
          <p className="pop">{` ${args.a3}`}</p>
          <p className="pop">{` ${args.a4}`}</p>
        </div>
        <div class={`perspective-line`}>
          <p className="pop">{` ${args.a4}`}</p>
          <p className="pop"></p>
        </div>
      </div>
      {/* </Link> */}
    </body>

  )
}

export const Home = () => {
  const { theme } = useTheme();
  const [flipImage, setFlipImage] = useState(true);
  const [darkImage, setDarkImage] = useState(false);
  const getImageSource =
    theme === 'light' ? true : false;

  useEffect(() => {
    setFlipImage(true)
    setTimeout(() => {
      setFlipImage(false)
    }, 2000)

  }, [theme]);
  useEffect(() => {
    if (flipImage) {
      setTimeout(() => {
        setDarkImage(getImageSource)
      }, 700)
    }

  }, [flipImage, getImageSource]);
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <div className="intro_sec d-block d-lg-flex align-items-center">
          <div className="h_bg-image order-1 order-lg-2 h-100 image-container" style={{ position: 'relative', top: '30px' }}>
            <svg viewBox="0 0 170 200" xmlns="http://www.w3.org/2000/svg" className="svg-blob">
              {darkImage ? <image style={{
                transform: `translate(0, -2%) scale(1.4) ${flipImage ? "rotateY(360deg)" : ""}`,
                transition: flipImage ? "transform 2s ease-in-out" : "",
                transformOrigin: 'center',
                filter: darkImage ? 'grayscale(0%)' : ''
              }} href={require('./image24.png')} className=" above-section-image order-1 order-lg-2 h-100" /> : <image style={{
                transform: `translate(0, -2%) scale(1.4) ${flipImage ? "rotateY(360deg)" : ""}`,
                transition: flipImage ? "transform 2s ease-in-out" : "",
                transformOrigin: 'center',

              }} href={require('./image22.png')} className=" above-section-image order-1 order-lg-2 h-100" />}

            </svg>
          </div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p style={{ textAlign: "inherit", hyphens: 'none' }} className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Projects
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/Resume.pdf" target="_blank">
                    <div id="button_h" className="ac_btn btn">
                      Resume
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <Project />
        <ContactUs />
        <div style={{ display: 'flex' }}> <RealLife a1="SEE" a2="You" a3="in real" a4="life" />
        </div>
        <Socialicons />
      </section>



    </HelmetProvider >
  );
};
