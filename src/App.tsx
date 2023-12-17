import React, {useState, useEffect} from 'react';
import './assets/css/fonts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {HighlightedProducts, HighlightedProductsItem, HighlightedProductsItemImg, HighlightedProductsItemText, HighlightedProductsItemNew,
        InfoLineHeader,
        MainBanner, BuyButton, LearnMore, ButtonsArea, MainBannerImg,
        MacOptionsArea, MacOptionButton, MacOptionInfoContainer, MacOptionsInfoColorIcon} from './AppStyled';
import {Header} from './components/Header';

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
import macbookAirJpeg from './assets/images/macbook.jpeg';
import macbookProJpeg from './assets/images/macpro.jpeg';
import macBookImage1 from './assets/images/macBookImage1.png';
import macBookImage2 from './assets/images/macBookImage2.png';
import macBookImage3 from './assets/images/macBookImage3.png';
import macDesktopImage1 from './assets/images/macDesktopImage1.png';
import macDesktopImage2 from './assets/images/macDesktopImage2.png';
import macDesktopImage3 from './assets/images/macDesktopImage3.png';



type flexDirection = "row" | "column";

interface ButtonsAreaElementProps {
  flex_direction: flexDirection;
  fontSize: string;
  marginTop: string;
  gap: string
}


function ButtonsAreaElement({flex_direction, fontSize, marginTop, gap}: ButtonsAreaElementProps) {

  let buttonLinkIconStyle = {
    fontSize: '0.64em',
    marginLeft: '4px'
  }

  return (
    <ButtonsArea flex_direction={flex_direction} fontSize={fontSize} marginTop={marginTop} gap={gap}>
          <BuyButton>Buy</BuyButton>
          <LearnMore>Learn more<FontAwesomeIcon icon={faChevronRight} style = {buttonLinkIconStyle}/></LearnMore>
    </ButtonsArea>
  )
}

interface MacOptionInfoProps {
  macInfo: {
    title: string,
    colors: string[],
    new: boolean,
    chip: string,
    imageUrl: string,
    price: string
  }
}

function MacOptionInfo({macInfo}:MacOptionInfoProps) {

  return (
    <>
      <MacOptionInfoContainer>
        <img src={macInfo.imageUrl}/>

        <div className='MacOptionColors'>
          {macInfo.colors.map(color => <MacOptionsInfoColorIcon color={color} />)}
        </div>

        {macInfo.new == true ? <HighlightedProductsItemNew novo fontsize='12' marginTop='15px'>New</HighlightedProductsItemNew> : <HighlightedProductsItemNew marginTop='15px' fontsize='12'>New</HighlightedProductsItemNew>}       

        <div className='MacOptionsInfoTitle'>
          <h2>
            {macInfo.title}
          </h2>

          <span className='MacOptionChip'>
            {macInfo.chip}
          </span>
        </div>
        
        <span className='MacOptionPrice'>From ${macInfo.price}</span>

        <ButtonsAreaElement flex_direction="column" fontSize='12px' marginTop = '20px' gap='15px'/>
      </MacOptionInfoContainer>
    </>
  )
}

function App() {

  //Effect to calculate the window width
  useEffect(() => {
    // Update CSS variable
    const updateWidth = () => {
      const viewportWidth = document.documentElement.clientWidth;
      document.documentElement.style.setProperty('--vw', `${viewportWidth}px`);
    };
  
    // Initial set of width
    updateWidth();
  
    // Add event listener for window resize
    window.addEventListener('resize', updateWidth);
  
    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  

  //Mac Options Area States
  type macOptions = 'notebook' | 'desktop';
  const [macOptionSelected, setMacOptionSelected] = useState<macOptions>('notebook');

  function macOptionsSelectedBorder(option:string):string {
    let borderThickness;
    if (option == macOptionSelected) {
      borderThickness = '1px'
    } else {
      borderThickness = '0px'
    }

    return borderThickness
  }

  function macOptionsSelectedColor(option:string):string {
    let color;
    if (option == macOptionSelected) {
      color = '#6e6e73'
    } else {
      color = '#d2d2d7'
    }

    return color
  }

  //Parameters

  //Mac Options Parameters
  type MacInfos = { [macType in macOptions]: MacOptionInfoProps['macInfo'][] }
  let macInfosObject: MacInfos = {
    notebook: [
      {
        title: 'MacBook Air 13"',
        colors: ['rgb(240, 228, 211)', 'rgb(125, 126, 128)', 'rgb(227, 228, 230)'],
        new: false,
        chip: 'Chip M1',
        imageUrl: macBookImage1,
        price: '999'
      },
      {
        title: 'MacBook Air 13"',
        colors: ['rgb(46,54,66)', 'rgb(240, 228, 211)', 'rgb(125, 126, 128)', 'rgb(227, 228, 230)'],
        new: false,
        chip: 'Chip M2',
        imageUrl: macBookImage2,
        price: '1099'
      },
      {
        title: 'MacBook Air 15"',
        colors: ['rgb(46,54,66)', 'rgb(240, 228, 211)', 'rgb(125, 126, 128)', 'rgb(227, 228, 230)'],
        new: true,
        chip: 'Chip M2',
        imageUrl: macBookImage3,
        price: '1299'
      }
    ],
    desktop: [
      {
        title: 'iMac',
        colors: ['rgb(240, 228, 211)', 'rgb(125, 126, 128)', 'rgb(227, 228, 230)'],
        new: false,
        chip: 'Chip M3',
        imageUrl: macDesktopImage1,
        price: '1299'
      },
      {
        title: 'Mac mini',
        colors: [],
        new: false,
        chip: 'Chip M2 or M2 Pro',
        imageUrl: macDesktopImage2,
        price: '599'
      },
      {
        title: 'MacBook Air 15"',
        colors: ['rgb(46,54,66)', 'rgb(240, 228, 211)', 'rgb(125, 126, 128)', 'rgb(227, 228, 230)'],
        new: false,
        chip: 'Chip M2 Ultra',
        imageUrl: macDesktopImage3,
        price: '6999'
      }
    ]
  }

  //Styles

  //Info Line Header Styles
  let infoLineHeadeLinkIconStyle = {
    fontSize: '10px'
  }

  //Main banner Styles
  let buttonLinkIconStyle = {
    fontSize: '0.64em',
    marginLeft: '4px'
  }

  return (
    <>
    <Header/>

    <HighlightedProducts>
      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macbookAir} alt="mackbookAir"/>
        <HighlightedProductsItemText>MacBook Air</HighlightedProductsItemText>
        <HighlightedProductsItemNew novo>New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macbookPro} alt="macbookPro"/>
        <HighlightedProductsItemText>MacBook Pro</HighlightedProductsItemText>
        <HighlightedProductsItemNew novo>New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={iMac} alt="iMac"/>
        <HighlightedProductsItemText>iMac</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macMini} alt="macMini" style={{width: "45px"}}/>
        <HighlightedProductsItemText>Mac mini</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macStudio} alt="macStudio"/>
        <HighlightedProductsItemText>Mac Studio</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macPro} alt="macPro"/>
        <HighlightedProductsItemText>Mac Pro</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macCompare} alt="macCompare"/>
        <HighlightedProductsItemText>Compare</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macDisplays} alt="macDisplays"/>
        <HighlightedProductsItemText>Displays</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macAcessories} alt="macAcessories"/>
        <HighlightedProductsItemText>Accessories</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macOS} alt="macOS"/>
        <HighlightedProductsItemText>Monterey</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>

      <HighlightedProductsItem>
        <HighlightedProductsItemImg src={macShop} alt="macShop"/>
        <HighlightedProductsItemText>Shop</HighlightedProductsItemText>
        <HighlightedProductsItemNew >New</HighlightedProductsItemNew>
      </HighlightedProductsItem>
    </HighlightedProducts>

    <InfoLineHeader>
      <p>
        Save on the purchase of the MacBook Air and MacBook Pro 13-inch at the Apple Education Store. <a href=''>Buy now <FontAwesomeIcon icon={faChevronRight} style = {infoLineHeadeLinkIconStyle}/></a>
      </p>
    </InfoLineHeader>

    <MainBanner paddingBottom='90px'>
      <HighlightedProductsItemNew fontsize = '17' novo>New</HighlightedProductsItemNew>
      <h1>
        MacBook Air
      </h1>
      <h2>
        Strikingly thin and fast.
      </h2>
      <p>
        From $1009.
      </p>

      <ButtonsAreaElement flex_direction='row' fontSize='17px' marginTop='0px' gap='20px'/>

      <MainBannerImg src={macbookAirJpeg} ></MainBannerImg>
    </MainBanner>

    <MainBanner backgroundColor='black' color='white'>
      <HighlightedProductsItemNew fontsize = '17' novo>New</HighlightedProductsItemNew>
      <h1>
        MacBook Pro 13 in
      </h1>
      <h2>
        Pro everywhere.
      </h2>
      <p>
        From $1599.
      </p>

      <ButtonsAreaElement flex_direction='row' fontSize='17px' marginTop='0px' gap='20px'/>

      <MainBannerImg src={macbookProJpeg} width = '750px'></MainBannerImg>
    </MainBanner>

    <MacOptionsArea>
      <h1>
        The ideal Mac for you
      </h1>

      <div className='MacOptionsButtonsArea'>
        <MacOptionButton borderSize={macOptionsSelectedBorder('notebook')} onClick={() => {setMacOptionSelected('notebook')}} textAlign='left' colorText={macOptionsSelectedColor('notebook')}>Notebook</MacOptionButton>
        <MacOptionButton borderSize={macOptionsSelectedBorder('desktop')} onClick={() => {setMacOptionSelected('desktop')}} textAlign='right' colorText={macOptionsSelectedColor('desktop')}>Desktop</MacOptionButton>
      </div>

      <div className='MacOptionsInfoArea'>
        {macInfosObject[macOptionSelected].map(macOption => <MacOptionInfo macInfo={macOption}></MacOptionInfo>)}
      </div>
      
    </MacOptionsArea>
    </>
  );
}

export default App;
