const Banner = () => {
  return (
    <div className="container max-w-[1416px]">
      <div className="pt-5">
        <div className="flex flex-col items-start px-4">
          <select
            id="category"
            name="category"
            className="p-2 outline-none rounded text-base w-64 bg-white "
          >
            <option value="technology">Womans Fashion</option>
            <option value="science">Item-1</option>
            <option value="health">Item-2</option>
          </select>
        </div>
        <div className="flex flex-col items-start px-4">
          <select
            id="category"
            name="category"
            className="p-2 outline-none rounded text-base w-64 bg-white "
          >
            <option value="technology">Mans Fashion</option>
            <option value="science">Item-1</option>
            <option value="health">Item-2</option>
          </select>
        </div>
        <div className="flex flex-col items-start px-7 ">
          <a href="/" className="pb-2">Electronics</a>
          <a href="/" className="pb-2">Home & Lifstyle</a>
          <a href="/" className="pb-2">Medicine</a>
          <a href="/" className="pb-2">Sports & Outdoor</a>
          <a href="/" className="pb-2">Baby&apos;s & Toys</a>
          <a href="/" className="pb-2">Groceries & Pets</a>
          <a href="/" className="pb-2">Health & Beauty</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
