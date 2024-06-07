import React from 'react';

const Feature = () => {
    return (
        <div className="pt-10 md:py-28 px-2 md:px-24  ">
           <div className='flex justify-evenly items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/vmkjTyC/Services.png" alt="img-delivery" />
                    <p className='pt-5 font-bold'>FREE AND FAST DELIVERY</p>
                    <p className='text-sm'>Free delivery for all orders over $140</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/7Xww8Hy/Services1.png" alt="img-CUSTOMER SERVICE" />
                    <p className='pt-5 font-bold'>24/7 CUSTOMER SERVICE</p>
                    <p className='text-sm'>Friendly 24/7 customer support</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <img src="https://i.ibb.co/8DNjVPw/Services2.png" alt="img-MONEY BACK" />
                    <p className='pt-5 font-bold'>MONEY BACK GUARANTEE</p>
                    <p className='text-sm'>We reurn money within 30 days</p>
                </div>
           </div>
        </div>
    );
};

export default Feature;