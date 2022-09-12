import React from 'react';
import './share.css';
 import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material';
function Share() {
  return (
    <div className='share'>
        <div className='shareWrapper'>
        <div className='shareTop'>
            <img className='shareImg' src="/assets/person/1.jpeg" alt=''  />
            <input type="text" placeholder='Whats your mind sai....?' className='shareInput' />
        </div>
        <hr className='shareHr' />
        <div className='shareBottom'>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <PermMedia htmlColor='tamato' className='shareOptionIcon' />
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <Label htmlColor='blue' className='shareOptionIcon' />
                    <span className='shareOptionText'>Tag</span>
                </div>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <Room htmlColor='green' className='shareOptionIcon' />
                    <span className='shareOptionText'>Location</span>
                </div>
            </div>
            <div className='shareOpitons'>
                <div className='shareOption'>
                    <EmojiEmotions htmlColor='goldenrod' className='shareOptionIcon' />
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
             <button className='sharebtn'>Share</button>
        </div>
        </div>
    </div>
  )
}

export default Share