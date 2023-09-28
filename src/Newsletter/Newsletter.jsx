const Newsletter = () => {
  return (
    <div className="bg-mainColor p-10 my-14  rounded">
        <h1 className="text-4xl font-medium text-center text-white">Newsletter</h1>
        <p className="text-center text-lg mt-2 text-white">Subscribe to our newsletter get bonus for the next purchase</p>
      <div className="relative rounded-md h-11 my-8 max-w-sm mx-auto bg-base-100">
        <input
          className="peer h-full rounded-md w-full border border-blue-gray-200 border-t-transparent bg-transparent px-y py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=""
        />
        <button className="bg-stone-600 text-white md:uppercase font-medium absolute py-[12px] md:px-4 px-2 text-sm rounded-r-md right-0">Subscribe</button>
        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight  peer-focus:before:border-t-2 peer-focus:after:border-t-2 peer-focus:after:border-r-2  peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
        Email address
        </label>
      </div>
    </div>
  );
};

export default Newsletter;
