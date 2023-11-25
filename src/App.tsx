import React, {useState} from 'react';
import './assets/css/fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faBagShopping} from '@fortawesome/free-solid-svg-icons';
import {Header, HeaderItem, HighlightedProducts, HighlightedProductsItem, HighlightedProductsItemImg, HighlightedProductsItemText, HighlightedProductsItemSubText} from './HeaderStyled';

import macbookAir from './assets/images/macbookAir.svg';
import macbookPro from './assets/images/macbookPro.svg';
import iMac from './assets/images/iMac.svg';
import macMini from './assets/images/macMini.svg';
import macStudio from './assets/images/macStudio.svg';
import macPro from './assets/images/macPro.svg';
import macCompare from './assets/images/macCompare.svg';
import macDisplays from './assets/images/macDisplays.svg';
import macAcessories from './assets/images/macAcessories.svg';
import macOS from './assets/images/macOs.svg';
import macShop from './assets/images/macShop.svg';


function App() {

  const [headerIsHoverApple, setHeaderIsHoverApple] = useState(false);
  const [headerIsHoverMagnifying, setHeaderIsHoverMagnifying] = useState(false);
  const [headerIsHoverBag, setHeaderIsHoverBag] = useState(false);

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
    <>
    <nav>
      <Header>
        <HeaderItem>
          <FontAwesomeIcon icon={faApple} style={headerIconAppleStyle} onMouseEnter={() => {setHeaderIsHoverApple(true)}} onMouseLeave={() => {setHeaderIsHoverApple(false)}}></FontAwesomeIcon>
        </HeaderItem>

        <HeaderItem>
          Store
        </HeaderItem>
          
        <HeaderItem>
          Mac
        </HeaderItem>

        <HeaderItem>
          iPad          
        </HeaderItem>

        <HeaderItem>
          iPhone
        </HeaderItem>

        <HeaderItem>
          Watch
        </HeaderItem>

        <HeaderItem>
          Vision
        </HeaderItem>

        <HeaderItem>
          AirPods
        </HeaderItem>

        <HeaderItem>
          TV & Home
        </HeaderItem>

        <HeaderItem>
          Entertainment
        </HeaderItem>

        <HeaderItem>
          Accessories
        </HeaderItem>

        <HeaderItem>
          Support
        </HeaderItem>

        <HeaderItem>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={headerIconMagnifyingStyle} onMouseEnter={() => {setHeaderIsHoverMagnifying(true)}} onMouseLeave={() => {setHeaderIsHoverMagnifying(false)}}/>
        </HeaderItem>

        <HeaderItem>
        <FontAwesomeIcon icon={faBagShopping} style={headerIconBagStyle} onMouseEnter={() => {setHeaderIsHoverBag(true)}} onMouseLeave={() => {setHeaderIsHoverBag(false)}}/>
        </HeaderItem>
      </Header>
    </nav>

    <HighlightedProducts>
      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macbookAir} alt="mackbookAir"/>
        <HighlightedProductsItemText>MacBook Air</HighlightedProductsItemText>
        <HighlightedProductsItemSubText novo>New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macbookPro} alt="macbookPro"/>
        <HighlightedProductsItemText>MacBook Pro</HighlightedProductsItemText>
        <HighlightedProductsItemSubText novo>New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={iMac} alt="iMac"/>
        <HighlightedProductsItemText>iMac</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macMini} alt="macMini" style={{width: "45px"}}/>
        <HighlightedProductsItemText>Mac mini</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macStudio} alt="macStudio"/>
        <HighlightedProductsItemText>Mac Studio</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macPro} alt="macPro"/>
        <HighlightedProductsItemText>Mac Pro</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macCompare} alt="macCompare"/>
        <HighlightedProductsItemText>Compare</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macDisplays} alt="macDisplays"/>
        <HighlightedProductsItemText>Displays</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macAcessories} alt="macAcessories"/>
        <HighlightedProductsItemText>Accessories</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macOS} alt="macOS"/>
        <HighlightedProductsItemText>Monterey</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macShop} alt="macShop"/>
        <HighlightedProductsItemText>Shop</HighlightedProductsItemText>
        <HighlightedProductsItemSubText >New</HighlightedProductsItemSubText>
      </HighlightedProductsItem>
    </HighlightedProducts>
    </>
  );
}

export default App;
