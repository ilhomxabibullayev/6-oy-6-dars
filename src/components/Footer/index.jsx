import React, { Component } from 'react';

const Footer = () => {


    return (

        <div className='container wrapper flex justify-between mt-[70px]' >

            <div>

                <img className="" src="./src/assets/images/nav-logo.svg" alt="" />
                <p className='mt-[16px] text-[#000000b0]'>Our vision is to provide convenience <br />and help increase your sales business.</p>

            </div>


            <div className='flex gap-[60px]'>


                <div>
                    <p>About</p>
                    <p>How it works</p>
                    <p>Featured</p>
                    <p>Partnership</p>
                    <p>Bussiness Relation</p>
                </div>


                <div>
                    <p>Community</p>
                    <p>Events</p>
                    <p>Blog</p>
                    <p>Podcast</p>
                    <p>Invite a friend</p>
                </div>



                <div>
                    <p>Socials</p>
                    <p>Discord</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                </div>



            </div>


        </div>

    )


}

export default Footer;