const Banner = () => {
  return (
    <div className="container px-5 md:px-20 max-w-[500px]">
      <div className="pt-5 border-r-2">
        <div className="flex flex-col items-start px-4 font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 py-4 outline-none rounded text-base w-64 bg-white "
          >
            <option value="technology" className="font-semibold">Womans Fashion</option>
            <option value="science" className="font-semibold">Item-1</option>
            <option value="health" className="font-semibold">Item-2</option>
          </select>
        </div>
        <div className="flex flex-col items-start px-4 font-semibold">
          <select
            id="category"
            name="category"
            className="px-2 pb-4 outline-none rounded text-base w-64 bg-white "
          >
            <option value="technology" className="font-semibold">Mans Fashion</option>
            <option value="science" className="font-semibold">Item-1</option>
            <option value="health" className="font-semibold">Item-2</option>
          </select>
        </div>
        <div className="flex flex-col items-start px-7 ">
          <a href="/" className="pb-4 font-semibold">Electronics</a>
          <a href="/" className="pb-4 font-semibold">Home & Lifstyle</a>
          <a href="/" className="pb-4 font-semibold">Medicine</a>
          <a href="/" className="pb-4 font-semibold">Sports & Outdoor</a>
          <a href="/" className="pb-4 font-semibold">Baby&apos;s & Toys</a>
          <a href="/" className="pb-4 font-semibold">Groceries & Pets</a>
          <a href="/" className="pb-4 font-semibold">Health & Beauty</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
