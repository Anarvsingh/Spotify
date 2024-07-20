import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { useDataLayerValue } from './Datalayer';

function Header() {
    const [{ user }, dispatch] = useDataLayerValue();
  
    return (
        <div className="header">
        <div className="header_left">
            <SearchIcon />
            <input
            placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
            />
        </div>
        <div className="header_right">
        {user ? (
                <>
                <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
                <h4>{user?.display_name}</h4>
                </>
            ) : (
                <p>Loading...</p> 

            )}
        </div>
        </div>
    );
  }
  

export default Header