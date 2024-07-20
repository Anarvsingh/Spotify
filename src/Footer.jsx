import React from 'react'
import "./Footer.css";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';


function Footer() {
  return (
    <div className='footer'>
        <div className="footer_left">
            <img className='footer_album_logo' src="https://i.pinimg.com/564x/b6/fd/91/b6fd9120e72059dda300a9ab1231a6e8.jpg" alt="" />
            <div className='footer_songInfo'>
                <h4>Yeah!</h4>
                <p>User</p>
            </div>
        </div>
        <div className="footer_center">
            <ShuffleIcon className="footer_green"/>
            <SkipPreviousIcon className="footer_icon"/>
            <PlayCircleOutlineIcon fontSize="large"/>
            <SkipNextIcon className="footer_icon"/>
            <RepeatIcon className="footer_icon"/>
        </div>
        <div className="footer_right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default Footer