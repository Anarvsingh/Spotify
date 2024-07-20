import React from 'react'
import "./Body.css";
import { useDataLayerValue } from './Datalayer';
import Header from './Header';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import "./SongRow"
import SongRow from './SongRow';

function Body({spotify}) {
    const [{discover_weekly}, dispatch ] = useDataLayerValue();
  return (
    <div className='body'>
        <Header spotify={spotify}/>

        <div className="body_info">
        <img src="https://i.pinimg.com/564x/b6/fd/91/b6fd9120e72059dda300a9ab1231a6e8.jpg" alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
            </div>
        </div>

        <div className="body_songs">
            <div className="body_icons">
                <PlayCircleFilledIcon className='body_shuffle'/>
                <FavoriteIcon fontSize="large"/>
                <MoreHorizIcon/>
            </div>

            {discover_weekly?.tracks.items.map((item) => (
            <SongRow  track={item.track} />
            ))}

        </div>
    </div>
  )
}

export default Body