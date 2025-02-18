import React, { useState } from 'react';
import './Sidebar.css';
import { assets } from "../../assets/assets.js";
import { Context } from '../../context/Context.jsx';
import { useContext } from 'react';
import {v4 as uuidv4} from 'uuid';



const Sidebar = () => {

    const [extended, setExtended] = useState(false);

    let context = useContext(Context);


    let loadPrompt =async (prompt) =>{
        context.setRecentPromt(prompt);
        await context.onSent(prompt);        
    }



    function generateUuid() {
        return uuidv4();
    }





    return (
        <div className='sidebar '>




            <div className="top">

                <img onClick={() => setExtended(!extended)} className='menu' src={assets.menu_icon} alt="" />



                <div className='new-chat'  onClick={() => context.newChat()}>
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New chat</p> : null}
                </div>






                {
                    extended ?
                        <div className='recent'>
                            <p className='recent-title'>Recent</p>

                            {
                                context.prevHistory.map(
                                    (item, index) => {
                                        return (
                                            <div className='recent-entry' key={generateUuid()}  onClick={() => loadPrompt(item)}>
                                                <img src={assets.message_icon} alt="" />
                                                <p>{item.slice(0,18)} ...</p>
                                            </div>
                                        )
                                    }
                                )
                            }



                        </div>
                        : null
                }








            </div>



            <div className="bottom">

                <div className='bottom-item  recent-entry '>


                    <img src={assets.question_icon} alt="" />


                    {extended ? <p>help</p> : null}



                </div>



                <div className='bottom-item  recent-entry '>


                    <img src={assets.history_icon} alt="" />


                    {extended ? <p>Activity</p> : null}

                </div>



                <div className='bottom-item  recent-entry '>


                    <img src={assets.setting_icon} alt="" />

                    {extended ? <p>Setting</p> : null}

                </div>



            </div>




        </div>
    )
}

export default Sidebar