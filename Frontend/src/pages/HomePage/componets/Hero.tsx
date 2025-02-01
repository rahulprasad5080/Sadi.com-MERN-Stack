import { CiShop } from "react-icons/ci";

const Hero = () => {
  return (
    <>
      <section className="min-h-[60vh] bg-center bg-[url(https://image.wedmegood.com/resized/1900X/uploads/city_bg_image/1/delhi_bg.jpeg)] flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-white font-bold mt-16">
          Your Wedding, Your Way
        </h1>
        <span className="text-center text-2xl text-white font-bold">
          Find the best wedding vendors with thousands of trusted reviews
        </span>
        <div className="flex items-center justify-center w-1/2 my-6 bg-[#e72e77] mt-50">
          <button type="button" className="text-4xl px-2 py-2    text-white ">
            <CiShop />
          </button>
          <input
            type="text"
            className="w-full px-3 py-4 bg-white text-gray-800 border font-semibold text-1xl placeholder:text-[#e72e77] border-gray-300  focus:outline-none "
            placeholder="Search for vendors, venues, and more"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
