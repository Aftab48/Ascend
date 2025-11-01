import { Work_Sans } from "next/font/google";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["600", "400"],
  variable: "--font-work-sans",
});

type StatProps = {
  value: string;
  label: string;
};

export function Stats({ value, label }: StatProps) {
  return (
    <div
      className={`flex flex-col col-span-1 items-center text-center  text-white text-3xl font-medium scale-110 ${workSans.className}`}
    >
      <h1 className="font-bold text-6xl">
        {value}
        <span className=" text-[#1FE5FF] ">+</span>
      </h1>
      <p>{label}</p>
    </div>
  );
}

export default Stats;
