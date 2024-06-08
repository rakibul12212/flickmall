

import Banner from './Banner/Banner';
import BestSellingProduct from './BestSellingProduct/BestSellingProduct';
import Category from './Category/Category';
import Feature from './Feature/Feature';
import FlashSale from './FlashSale/FlashSale';
import HighlightCategories from './HighlightCategories/HighlightCategories';
import NewArrival from './NewArrival/NewArrival';
import OurProduct from './OurProduct/OurProduct';

const HomeIndex = () => {
    return (
        <div>
            <Banner/>
            <FlashSale/>
            <Category/>
            <BestSellingProduct/>
            <HighlightCategories/>
            <OurProduct/>
            <NewArrival/>
            <Feature/>
            
            
        </div>
    );
};

export default HomeIndex;