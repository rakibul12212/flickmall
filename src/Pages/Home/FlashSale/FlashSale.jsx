import Card from "../../../Component/Ui/Card/Card";

const FlashSale = () => {
  return (
    <div className="pt-28 px-24">
      <p className="text-red-500 border-l-8 border-rose-700 ps-3 py-2">
        Todays
      </p>
      <div>
        <Card
          imageSrc="https://i.ibb.co/47xyFfn/g92-2-500x500-1.png"
          productName="Havit hV-G92 GamePad"
          DiscountPrice={120}
          OriginalPrice={160}
          initialRating={5}
          review={88}
        />
      </div>
    </div>
  );
};

export default FlashSale;
