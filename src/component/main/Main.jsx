import React from 'react'

import { assets } from "../../assets/assets.js"

import { useContext } from "react";

import { Context } from '../../context/Context.jsx';

import './Main.css'


function Main() {

    let context = useContext(Context);





    return (
        <div className='main w-full border-0'>

            <div className='nav  '>

                <p>Gemini</p>

                <img src={assets.user_icon} alt="" className='rounded-full w-8 h-8' />



            </div>



            <div className='main-container'>


                {
                    !context.showResult ?
                        <>
                            <div className='greet'>

                                <p>
                                    <span className='text-center capitalize'>hello, dev.</span>

                                </p>

                                <p className=' capitalize '>
                                    how can i help you today?
                                </p>

                            </div>
                        </>
                        :


                        <div className='result'>
                            <div className='result-tiles '>
                                <img src={assets.user_icon} alt="" />
                                <p className='capitalize font-bold'>{context.recentPromt}</p>
                            </div>


                            <div className='result-data '>
                                <img src={assets.gemini_icon} alt="" />

                                {
                                    context.loading
                                        ?
                                        <div className='loader'>
                                            <hr />
                                            <hr />
                                            <hr />
                                        </div>
                                        :
                                        <p className=''  dangerouslySetInnerHTML={{ __html: context.resultData }}>
                                            
                                        </p>
                                }

                            </div>


                        </div>

                }








                <div className='main-button'>

                    <div className='serch-box'>
                        <input

                            value={context.input}

                            onChange={(e) => context.setInput(e.target.value)}

                            type="text"

                            placeholder='Enter a Promt Here' />


                        <div className='icons-container'>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img
                                onClick={
                                    () =>
                                        context.onSent()
                                }
                                src={assets.send_icon} alt="" />
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