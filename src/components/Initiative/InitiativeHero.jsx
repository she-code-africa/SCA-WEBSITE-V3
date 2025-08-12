// import heroImage from "../../images/initiative/hero-image.jpg";

// export default function Hero() {
//   return (
//     <section
//       className="relative w-full h-screen bg-cover bg-no-repeat bg-center text-white"
//       style={{
//         backgroundImage: `url(${heroImage})`,
//         backgroundBlendMode: "multiply",
//         backgroundColor: "#FF8A3F",
//       }}
//     >
//       {/* Dark overlay using rgba version of #00000059 */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundColor: "rgba(0, 0, 0, 0.35)", // 0.35 = 35% opacity
//           mixBlendMode: "multiply",
//         }}
//       ></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6 md:px-10 max-w-5xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-semibold leading-[130px] md:leading-tight tracking-tight ">
//           Equipping women with <br />
//           digital skills, one initiative <br />
//           after another
//         </h1>
//         <p className="mt-6 text-lg md:text-xl font-medium max-w-3xl">
//           She Code Africa is a registered non-profit organization dedicated to empowering and
//           celebrating girls and women in technology across Africa
//         </p>
//       </div>
//     </section>
//   );
// }



// src/components/HeroSection.jsx

import heroImage from "../../images/initiative/hero-image.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundBlendMode: "multiply",
        backgroundColor: "#FF8A3F",
        backgroundSize: "150%", // Zoom in the image
        backgroundPosition: "40% center", // Focus image on the left
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0,0,0,0.35)",
          mixBlendMode: "multiply",
        }}
      ></div>
      <div className="relative z-10 px-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-medium leading-tight font-BebasNeue">
          Equipping women with digital skills, one initiative after another
        </h1>
        <p className="mt-4 text-lg md:text-xl font-figtree">
          She Code Africa is a registered non-profit organization dedicated to
          empowering and celebrating girls and women in technology across Africa.
        </p>
      </div>
    </section>
  );
}
