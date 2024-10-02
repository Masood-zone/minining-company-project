import { formsBg } from "../../assets/images";

export default function AboutUsBanner() {
  return (
    <section className="relative bg-cover bg-center h-80 overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-center z-[-1] "
        style={{
          width: "calc(100% + 150px)",
          height: "calc(100% + 150px)",
          backgroundImage: `url(${formsBg})`,
          backgroundPosition: "50% 50%",
          animation: "bgPos 100s linear infinite",
          willChange: "transform",
        }}
      ></div>
      <div className="container mx-auto flex justify-center items-center h-full relative ">
        <h1 className="text-white text-4xl font-bold uppercase">About Us</h1>
      </div>
    </section>
  );
}
