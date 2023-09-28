import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MenuList, MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import { HomeOutlined, ArticleOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import './nav.css'

const CustomizedMenuItem = styled(MenuItem)`
  background-color: none !important;
  color: #fff;
  height: 40px;
  width: calc(100% - 20px);
  margin-left: 10px;
  margin: 10px 0px 10px 10px !important;
  border-radius: 5px;

  .nav-icon {
    color: #fff !important;
  }
  
  .nav-icon .nav-icon-img {
    font-size: 1.6rem !important;
  }
  
  .nav-text {
    color: #fff !important;
  }
  
  .nav-text span {
    font-weight: bold !important;
  }

  :hover {
    background-color: #D7E8FF !important;
    
    & .nav-icon {
      color: #1C74BC !important;
    }
    & .nav-text {
      color: #000 !important;
    }
  }

  &.focussed {
    background-color: #fff !important;
    
    & .nav-icon {
      color: #1C74BC !important;
    }
    & .nav-text {
      color: #000 !important;
    }
  }
`;


const Navbar: React.FC = () => {
  const location = useLocation();
  console.log({ location })
  const data = [
    { title: 'Home', path: "/", icon: HomeOutlined },
    { title: 'Study Search', path: "/search", icon: ArticleOutlined },
  ]
  return (
    <div className="sidenav leftnav">
      <MenuList>
        {data.map(item => (
          <NavLink key={item.path} to={item.path}>
            <CustomizedMenuItem className={location.pathname === item.path ? "focussed" : ""}>
              <ListItemIcon className="nav-icon">
                <item.icon className="nav-icon-img" />
              </ListItemIcon>
              <ListItemText className="nav-text">{item.title}</ListItemText>
            </CustomizedMenuItem>
          </NavLink>
        ))}
      </MenuList>
    </div >

  )
}

export default Navbar;
