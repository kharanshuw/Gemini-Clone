import React from 'react'

import { assets } from "../../assets/assets.js"

import './Main.css'


function Main() {

    console.log(assets.user_icon);

    return (
        <div className='main w-full border-0'>

            <div className='nav  '>

                <p>Gemini</p>

                <img src={assets.user_icon} alt="" className='rounded-full w-8 h-8' />



            </div>



            <div className='main-container'>
                <div className='h-80'>

                </div>

                <div className='greet'>

                    <p>
                        <span className='text-center capitalize'>hello, dev.</span>

                    </p>

                    <p className=' capitalize'>
                        how can i help you today?
                    </p>

                </div>


                {/* <div className='cards'>
                <div className='card'>

                    <p>
                        suggest
                    </p>
                    <img src={assets.compass_icon} alt="" />

                </div>




                <div className='card'>

                    <p>
                        suggest
                    </p>
                    <img src={assets.bulb_icon} alt="" />

                </div>





                <div className='card'>

                    <p>
                        suggest
                    </p>
                    <img src={assets.message_icon} alt="" />

                </div>





                <div className='card'>

                    <p>
                        suggest
                    </p>
                    <img src={assets.code_icon} alt="" />

                </div>

            </div> */}

                <div className='main-button'>

                    <div className='serch-box'>
                        <input type="text" placeholder='Enter a Promt Here' />


                        <div className='icons-container'>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>



                    <p className='bottom-info capitalize'>
                        Gemini may generate incorrect information
                    </p>



                </div>



            </div>

        </div>
    )
}

export default Main