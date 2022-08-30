import Button from "./Button";

const CTA = () => (
  <div>
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-8  sm:py-12 py-4 md:px-16 lg:px-32 sm:flex-row flex-col bg-gray-800  box-shadow px-4">
    <div className="flex-1 flex flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Ready to get started?
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Open an Account Today.
      </p>
    </div>
    <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-2xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Get Started
  </span>
</button>
       
    </div>
  </section>
  </div>

);

export default CTA;
