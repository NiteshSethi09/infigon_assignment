import { BsFillCheckCircleFill } from "react-icons/bs";

interface ImageProps {
  src: string;
  title: string;
  selected: boolean;
}
const Image = ({ selected, src, title }: ImageProps) => {
  return (
    <>
      <div className="relative mb-4 mr-4 cursor-pointer last:m-0 md:mb-0">
        {selected ? (
          <div className="absolute -right-1 -top-1">
            <BsFillCheckCircleFill
              style={{
                background: "white",
                color: "#658af8",
                borderRadius: "50%",
              }}
            />
          </div>
        ) : null}
        <div
          className={`h-auto rounded-xl ${
            selected ? "border-4 border-[#658af8]" : ""
          }`}
        >
          <img src={src} alt="" className="h-full w-full rounded-lg" />
        </div>
        <p className="text-sm">{title}</p>
      </div>
    </>
  );
};

export default Image;
