import React, { Component } from 'react';

const Card = () => {


    return (


        <div className='flex'>
            <div className=" container bg-[#5facff] w-[500px] h-[360px] rounded-[10px] mt-[40px] ">
                <div className="ml-[24px] py-[24px]">
                    <div>
                        <h2 className="text-[32px] text-[#FFFFFF]  tracking-[-0.03em] text-left ">
                            The Best Platform <br /> for Car Rental
                        </h2>
                        <p className="py-4 text-base font-medium leading-6 tracking-tight text-left  text-[#FFFFFF]">
                            Ease of doing a car rental safely <br />and reliably. Of course
                            at a low price.
                        </p>
                        <button className="text-base text-[#FFFFFF] bg-[#3563E9] rounded-[5px] font-semibold leading-6 tracking-tight text-center w-[120px] h-[44px] px-5 py-0 gap-2 rounded-tl-[4px] ">
                            Rental Car
                        </button>
                    </div>

                </div>

                <div className="ml-[80px] mt-[-20px]">
                    <img className='' src="./src/assets/images/hero-img1.png" alt="" />
                </div>

            </div>


            <div className=" container bg-[#3563E9;] w-[500px] h-[360px] rounded-[10px] mt-[40px] ">
                <div className="ml-[24px] py-[24px]">
                    <div>
                        <h2 className="text-[32px] text-[#FFFFFF] text-left ">
                        Easy way to rent a car at a low price  car at a low price
                        </h2>
                        <p className="py-4 text-base font-medium leading-6 tracking-tight text-left  text-[#FFFFFF]">
                        Providing cheap car rental services and <br /> safe and comfortable facilities.
                        </p>
                        <button className="text-base text-[#FFFFFF] bg-[#5facff] rounded-[5px] font-semibold leading-6 tracking-tight text-center w-[120px] h-[44px] px-5 py-0 gap-2 rounded-tl-[4px] ">
                            Rental Car
                        </button>
                    </div>

                </div>

                <div className="ml-[190px] mt-[-20px]">
                    <img className='' src="./src/assets/images/hero-img2.png" alt="" />
                </div>

            </div>

        </div>








    )


}

export default Card;