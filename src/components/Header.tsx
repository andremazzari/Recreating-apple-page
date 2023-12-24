import React, {useState, useRef, useEffect} from 'react';

import {HeaderStyled, HeaderItemStyled, HeaderDropdownContainer, HeaderDropdownColumnStyled, BluredPage} from './HeaderStyled';
import {HeaderMenuData, submenuType, submenuColumnType} from './HeaderData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import {faMagnifyingGlass, faBagShopping} from '@fortawesome/free-solid-svg-icons';
  
  
  type HeaderDropdownMenuProps = {
    display: boolean,
    submenu: submenuType | null | undefined,
    paddingLeft: number | null,
    dropdownMenuHeight: number
  }
  
  function HeaderDropdownMenu ({display, submenu, paddingLeft, dropdownMenuHeight}: HeaderDropdownMenuProps) {
    let first;
    // const [dropdownMenuHeight2, setDropdownMenuHeight] = useState(0);
    // const dropdownMenuElement = useRef<HTMLDivElement | null>(null);

    // useEffect(() => {
    //   if (dropdownMenuElement.current) {
    //     setDropdownMenuHeight(dropdownMenuElement.current.scrollHeight);
    //   }
    // })
    return (
      <>
        <HeaderDropdownContainer display={display} height={dropdownMenuHeight} paddingLeft={paddingLeft}>
          
          {submenu != null && submenu.map((menu_column, index) => {
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


export function Header () {
    //States
    const [headerIsHoverApple, setHeaderIsHoverApple] = useState(false);
    const [headerIsHoverMagnifying, setHeaderIsHoverMagnifying] = useState(false);
    const [headerIsHoverBag, setHeaderIsHoverBag] = useState(false);

    const [dropdownMenuIsHover, setDropdownMenuIsHover] = useState(false);
    const [dropdownMenuIndex, setDropdownMenuIndex] = useState<number | null>(null);
    const [dropdownMenuContent, setDropdownMenuContent] = useState<submenuType | null | undefined>(null);
    const [dropdownMenuHeight, setDropdownMenuHeight] = useState<number>(0);

    const [dropdownMenuPadding, setDropdownMenuPadding] = useState<number | null>(null);

    //Refs
    const firstHeaderElement = useRef<HTMLLIElement | null>(null);

    //Effects
    //effect to adjust the left padding of the dropdown menu
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

        return () => {
          window.removeEventListener('resize', viewportResize);
        }

    }, []);

    //effect to set the content of the dropdown menu
    useEffect(() => {
      if (dropdownMenuIndex != null && HeaderMenuData[dropdownMenuIndex].submenu !== undefined) {
        setDropdownMenuContent(HeaderMenuData[dropdownMenuIndex].submenu);
        setDropdownMenuHeight(HeaderMenuData[dropdownMenuIndex].max_height);
      } else {
        setDropdownMenuIsHover(false);
        setDropdownMenuContent(null);
      }
    }, [dropdownMenuIndex]);

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
    <>
      <nav onMouseLeave={() => {setDropdownMenuIsHover(false); setDropdownMenuIndex(null)}}>
        <HeaderStyled>
            <li>
                <HeaderItemStyled ref={firstHeaderElement}>
                    <FontAwesomeIcon icon={faApple} style={headerIconAppleStyle} onMouseEnter={() => {setHeaderIsHoverApple(true);setDropdownMenuIsHover(false); setDropdownMenuIndex(null)}} onMouseLeave={() => {setHeaderIsHoverApple(false)}}></FontAwesomeIcon>
                </HeaderItemStyled>
            </li>
            
            {HeaderMenuData.map((menuItem, index) => <HeaderItemStyled onMouseEnter={() => {setDropdownMenuIsHover(true); setDropdownMenuIndex(index)}}>{menuItem.title}</HeaderItemStyled>)}

            <li>
                <HeaderItemStyled>
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={headerIconMagnifyingStyle} onMouseEnter={() => {setHeaderIsHoverMagnifying(true);setDropdownMenuIsHover(false); setDropdownMenuIndex(null)}} onMouseLeave={() => {setHeaderIsHoverMagnifying(false)}}/>
                </HeaderItemStyled>
            </li>

            <li>
                <HeaderItemStyled>
                    <FontAwesomeIcon icon={faBagShopping} style={headerIconBagStyle} onMouseEnter={() => {setHeaderIsHoverBag(true);setDropdownMenuIsHover(false); setDropdownMenuIndex(null)}} onMouseLeave={() => {setHeaderIsHoverBag(false)}}/>
                </HeaderItemStyled>
            </li>
        </HeaderStyled>
        
        <HeaderDropdownMenu display={dropdownMenuIsHover} dropdownMenuHeight={dropdownMenuHeight} submenu={dropdownMenuContent} paddingLeft={dropdownMenuPadding}/> 

      </nav>
      
      {dropdownMenuIsHover && dropdownMenuIndex != null && dropdownMenuContent &&
      <BluredPage/>
      }
    </>
    )
}