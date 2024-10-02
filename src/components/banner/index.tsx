import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { ctaBg } from "../../assets/images";
import { useNavigate } from "react-router-dom";

export function ExperiseBanner() {
  const navigate = useNavigate();
  return (
    <ParallaxProvider>
      <div className="relative h-full w-full overflow-hidden">
        <ParallaxBanner className="h-full w-full">
          <ParallaxBannerLayer speed={-20}>
            <img
              src={ctaBg}
              alt="Rocky mining landscape with a large boulder"
              className="h-full w-full object-cover bg-no-repeat"
            />
          </ParallaxBannerLayer>
          <ParallaxBannerLayer speed={0}>
            <div className="absolute inset-0 flex flex-col justify-center items-end ml-auto p-6 md:p-12 lg:p-24">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-loose tracking-wider text-white mb-4 max-w-2xl text-right">
                USE OUR EXPERTISE
                <br />
                TO FIND THE RIGHT SOLUTIONS
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-light md:text-left">
                Efficient mining solutions for companies worldwide
              </p>
              <button
                onClick={() => navigate("/services")}
                className="bg-yellow-500 text-white font-bold py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-10 hover:bg-blue-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
              >
                OUR SERVICES
              </button>
            </div>
          </ParallaxBannerLayer>
        </ParallaxBanner>
      </div>
    </ParallaxProvider>
  );
}

export function PageBanner({ title, image }: { title: string; image: string }) {
  return (
    <section className="relative bg-cover bg-center h-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center z-[-1] "
        style={{
          width: "calc(100% + 150px)",
          height: "calc(100% + 150px)",
          backgroundImage: `url(${image})`,
          backgroundPosition: "50% 50%",
          animation: "bgPos 100s linear infinite",
          willChange: "transform",
        }}
      ></div>
      <div className="container mx-auto flex justify-center items-center h-full relative ">
        <h1 className="text-white text-4xl font-bold uppercase">{title}</h1>
      </div>
    </section>
  );
}
