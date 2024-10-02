import React from "react";

export default function Home() {
  const wobblePropsArray = [
    { x: "-53%", y: "-53%", t: 37 },
    { x: "-47%", y: "-52%", t: 58 },
    { x: "-45%", y: "-50%", t: 46 },
    { x: "-53%", y: "-45%", t: 72 },
    { x: "-55%", y: "-45%", t: 62 },
  ];

  return (
    <main className="h-screen flex flex-col items-center justify-center w-screen relative">
      {wobblePropsArray.map((props, index) => (
        <Wobble key={index} {...props} />
      ))}
    </main>
  );
}

type WobbleProps = {
  x: string;
  y: string;
  t: number;
  color?: string; // Option to customize color if needed
};

const Wobble: React.FC<WobbleProps> = ({ x, y, t, color = "bg-lime-500" }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 translate-x-[var(--x)] translate-y-[var(--y)] rotate-0 text-[20vmin] w-[3em] h-[3em] rounded-[90%_95%_85%_105%] ${color} mix-blend-screen animate-wobble shadow-custom-inset flex items-center justify-center`}
      style={
        {
          "--x": x,
          "--y": y,
          "--t": t,
          filter: "hue-rotate(0deg)",
        } as React.CSSProperties
      }
    ></div>
  );
};
