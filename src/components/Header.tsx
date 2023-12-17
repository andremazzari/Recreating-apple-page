import React, {useState} from 'react';

import {HeaderStyled, HeaderItemStyled, HeaderItemContainer, HeaderDropdownContainer, HeaderDropdownColumnStyled} from './HeaderStyled';
import {HeaderMenuData, HeaderMenuDataProps, submenuType, submenuColumnType} from './HeaderData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faBagShopping} from '@fortawesome/free-solid-svg-icons';

type HeaderItemProps = {
    menuItem: HeaderMenuDataProps
  }
  
  function HeaderItem ({menuItem}: HeaderItemProps) {
    const [dropdown, setDropdown] = useState(false); 
  
    return (
      <>
        <HeaderItemContainer onMouseEnter={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}}>
          <HeaderItemStyled>{menuItem.title}</HeaderItemStyled>
          {menuItem.submenu ? <HeaderDropdownMenu display={dropdown} submenu={menuItem.submenu}/> : ''}
        </HeaderItemContainer>
      </>
    )
  }
  
  
  type HeaderDropdownMenuProps = {
    display: boolean,
    submenu: submenuType
  }
  
  function HeaderDropdownMenu ({display, submenu}: HeaderDropdownMenuProps) {
    return (
      <>
        <HeaderDropdownContainer display={display}>
          {submenu.map(menu_column => <HeaderDropdownMenuColumn menuColumn={menu_column}/>)}
        </HeaderDropdownContainer>
      </>
    )
  }
  
  type HeaderDropdownMenuColumn = {
    menuColumn: submenuColumnType
  }
  function HeaderDropdownMenuColumn({menuColumn}: HeaderDropdownMenuColumn) {
    return (
      <>
      <HeaderDropdownColumnStyled>
        <span>
          {menuColumn.title}
        </span>
        {menuColumn.items.map(item => <span style={{fontSize:'30px'}}>{item}</span>)}
      </HeaderDropdownColumnStyled>
      </>
    )
  }

export function Header () {

    //States
    const [headerIsHoverApple, setHeaderIsHoverApple] = useState(false);
    const [headerIsHoverMagnifying, setHeaderIsHoverMagnifying] = useState(false);
    const [headerIsHoverBag, setHeaderIsHoverBag] = useState(false);

    //Styles
    const headerIconColor = 'rgba(220, 220, 220, .8)';
    const headerIconColorHover = 'rgba(255, 255, 255, .8)';

    let headerIconAppleStyle = {
        color: (headerIsHoverApple ? '#f5f5f7' : 'rgba(250, 250, 250, .8)'),
        fontSize: '18px',
        marginTop: '-3px'
    }

    let headerIconMagnifyingStyle = {
        color: (headerIsHoverMagnifying ? headerIconColorHover : headerIconColor),
        fontSize: '14px'
    }

    let headerIconBagStyle = {
        color: (headerIsHoverBag ? headerIconColorHover : headerIconColor),
        fontSize: '14px',
        marginTop: '-2px'
    }

    return (
    <nav>
      <HeaderStyled>
        <li>
        <HeaderItemStyled>
          <FontAwesomeIcon icon={faApple} style={headerIconAppleStyle} onMouseEnter={() => {setHeaderIsHoverApple(true)}} onMouseLeave={() => {setHeaderIsHoverApple(false)}}></FontAwesomeIcon>
        </HeaderItemStyled>
        </li>

        {HeaderMenuData.map(menuItem => <HeaderItem menuItem={menuItem}/>)}

        <li>
        <HeaderItemStyled>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={headerIconMagnifyingStyle} onMouseEnter={() => {setHeaderIsHoverMagnifying(true)}} onMouseLeave={() => {setHeaderIsHoverMagnifying(false)}}/>
        </HeaderItemStyled>
        </li>

        <li>
        <HeaderItemStyled>
        <FontAwesomeIcon icon={faBagShopping} style={headerIconBagStyle} onMouseEnter={() => {setHeaderIsHoverBag(true)}} onMouseLeave={() => {setHeaderIsHoverBag(false)}}/>
        </HeaderItemStyled>
        </li>
      </HeaderStyled>
    </nav>
    )
}