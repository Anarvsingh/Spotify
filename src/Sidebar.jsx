import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import {useDataLayerValue} from './Datalayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className='sidebar'>
        <img className='sidebar_logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
        <SidebarOption Icon={HomeIcon} title='Home' />
        <SidebarOption Icon={SearchIcon} title='Search' />
        <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
        <br />
        <strong className='sidebar_title'>PLAYLIST</strong>
        <hr />
        {playlists?.map((playlist) => (
        <SidebarOption title={playlist.name} />
        ))}
    </div>
  ) 
}

export default Sidebar