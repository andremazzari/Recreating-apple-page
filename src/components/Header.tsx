import React, {useState, useRef, createContext, useEffect, useContext} from 'react';

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
    let paddindLeft = useContext(DropdownMenuPaddingContext);
    console.log(menuItem.title + "   " + paddindLeft);
  
    return (
      <>
        <HeaderItemContainer onMouseEnter={() => {setDropdown(true)}} onMouseLeave={() => {setDropdown(false)}}>
          <HeaderItemStyled>{menuItem.title}</HeaderItemStyled>
          {menuItem.submenu ? <HeaderDropdownMenu display={dropdown} submenu={menuItem.submenu} paddingLeft={paddindLeft}/> : ''}
        </HeaderItemContainer>
      </>
    )
  }
  
  
  type HeaderDropdownMenuProps = {
    display: boolean,
    submenu: submenuType,
    paddingLeft: number | null
  }
  
  function HeaderDropdownMenu ({display, submenu, paddingLeft}: HeaderDropdownMenuProps) {
    let first;
    return (
      <>
        <HeaderDropdownContainer display={display} paddingLeft={paddingLeft}>
          
          {submenu.map((menu_column, index) => {
            index == 0 ? first = true : first = false;
            return (
              <HeaderDropdownMenuColumn menuColumn={menu_column} first={first}/>
            )
          })}
        </HeaderDropdownContainer>
      </>
    )
  }
  
  type HeaderDropdownMenuColumn = {
    menuColumn: submenuColumnType,
    first: boolean
  }
  function HeaderDropdownMenuColumn({menuColumn, first}: HeaderDropdownMenuColumn) {
    return (
      <>
      <HeaderDropdownColumnStyled first={first}>
        <span className='column-title'>
          {menuColumn.title}
        </span>
        {menuColumn.items.map(item => <span className='column-item'>{item}</span>)}
      </HeaderDropdownColumnStyled>
      </>
    )
  }

const DropdownMenuPaddingContext = createContext<number | null>(null);

export function Header () {

    //States
    const [headerIsHoverApple, setHeaderIsHoverApple] = useState(false);
    const [headerIsHoverMagnifying, setHeaderIsHoverMagnifying] = useState(false);
    const [headerIsHoverBag, setHeaderIsHoverBag] = useState(false);

    const [dropdownMenuPadding, setDropdownMenuPadding] = useState<number | null>(null);

    //Refs
    const firstHeaderElement = useRef<HTMLDivElement | null>(null);

    //Effects
    useEffect(() => {
        const viewportResize = () => {
            if (firstHeaderElement.current) {
                setDropdownMenuPadding(firstHeaderElement.current.getBoundingClientRect().left)
            }
        }
        
        // Run the function once to initialize the state with the correct values.
        viewportResize();

        // Attach the event listener
        window.addEventListener('resize', viewportResize);

    }, []);

    //Styles
    const headerIconColor = 'rgba(220, 220, 220, 0.8)';
    const headerIconColorHover = 'rgba(255, 255, 255, 0.8)';

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
        <DropdownMenuPaddingContext.Provider value={dropdownMenuPadding}>
            <HeaderStyled>
                <li>
                    <HeaderItemStyled ref={firstHeaderElement}>
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
        </DropdownMenuPaddingContext.Provider>

    </nav>
    )
}