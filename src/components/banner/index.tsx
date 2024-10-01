import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const ExpertiseBanner = () => {
  return (
    <div>
      <ParallaxProvider>
        <Parallax translateY={[-20, 20]}>
          <div className="bg-gray-900 h-96 flex items-center justify-center text-white text-5xl">
            Expertise Banner
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default ExpertiseBanner;
