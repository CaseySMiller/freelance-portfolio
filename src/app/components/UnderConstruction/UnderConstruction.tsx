import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="grid place-content-center mx-auto h-full">
      <Image
        src="/assets/images/under-construction.gif"
        width={280}
        height={280}
        alt="Animated under construction gif"
      />
    </div>
  );
};

export default UnderConstruction;
