import React from 'react';
import "./SwipeButton.css"; 
import ReplyIcon from '@material-ui/icons/Reply';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';

function SwipeButton() {
    return (
        <div className='swipeButton'>
            <IconButton className="swipeButtons_repeat">
                <ReplyIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButton
