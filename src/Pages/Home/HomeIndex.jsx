

import Banner from './Banner/Banner';
import BestSellingProduct from './BestSellingProduct/BestSellingProduct';
import Category from './Category/Category';
import FlashSale from './FlashSale/FlashSale';

const HomeIndex = () => {
    return (
        <div>
            <Banner/>
            <FlashSale/>
            <Category/>
            <BestSellingProduct/>
            
            
        </div>
    );
};

export default HomeIndex;