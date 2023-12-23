import styled from "styled-components";



//Highlighted products
export const HighlightedProducts = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
`;


export const HighlightedProductsItemImg = styled.img`
    height: 50px;
`;

export const HighlightedProductsItemText = styled.span`
    font-size: 11px;
    font-family: "MyriadProRegular";
    color: rgba(22, 22, 23, .8);
`;

interface HighlightedProductsItemSubTextProps {
    novo?:boolean,
    fontsize?: string,
    marginTop?: string
}

export const HighlightedProductsItemNew = styled.span<HighlightedProductsItemSubTextProps>`
    font-size: ${(props) => props.fontsize ? props.fontsize + 'px' : '9px'};
    font-family: "MyriadProRegular";
    color: #f56300;
    visibility: ${(props) => props.novo ? 'visible' : 'hidden'};
    margin-top: ${(props) => props.marginTop ? props.marginTop : '0px'}
`;

export const HighlightedProductsItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3px;
    cursor: pointer;

    &:hover ${HighlightedProductsItemText} {
        color: rgb(127, 140, 255);
    }
`;

export const InfoLineHeader = styled.div`
    height: 38px;
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f7;
    color: rgba(22, 22, 23, .8);

    p {
        font-family: "MyriadProRegular";
        font-size: 14px;
        font-weight: 400;


        a {
            color: #06c;
            text-decoration: none;

        }

        a:hover {
            text-decoration: underline;
        }
    }
`;

interface MainBannerProps {
    backgroundColor?: string
    color?: string
    paddingTop?: string
    paddingBottom?: string
}

export const MainBanner = styled.div<MainBannerProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: ${(props) => props.paddingTop ? props.paddingTop : '60px'};
    padding-bottom: ${(props) => props.paddingBottom ? props.paddingBottom : '60px'};
    background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'white'};

    font-family: "MyriadProRegular";
    color: ${(props) => props.color ? props.color :  '#1d1d1f'};
    font-weight: bold;

    h1 {
        font-size: 45px;
        margin-top: 5px;
        margin-bottom: 0;
    }

    h2 {
        font-size: 20px;
        margin: 0;
    }

    p {
        font-family: "MyriadProLight";
        font-weight: 900;
        margin-top: 22px;
    }
`;

export const BuyButton = styled.div`
    font-family: "MyriadProRegular";
    cursor: pointer;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    font-size: 1em;
    //line-height: 1.1764805882;
    font-weight: 400;
    letter-spacing: -0.001em;
    min-width: 28px;
    padding: 0.5em 1.1em;
    border-radius: 40px;
    background: #0071e3;
    color: #fff;
`

export const LearnMore = styled.a`
    color: #06c;
    text-decoration: none;
    font-weight: 100;
    font-size: 1em;

    &:hover {
        text-decoration: underline;
    }
`

interface buttonsAreaProps {
    flex_direction: "row" | "column"
    fontSize: string
    marginTop?: string
    gap: string
}

export const ButtonsArea = styled.div<buttonsAreaProps>`
    display: flex;
    flex-direction: ${(props) => props.flex_direction};
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.gap};
    cursor: pointer;
    font-size: ${(props) => props.fontSize};
    margin-top: ${(props) => props.marginTop ? props.marginTop : '0px'};
`;

interface MainBannerImgProps {
    width?: string
}

export const MainBannerImg = styled.img<MainBannerImgProps>`
    margin-top: 45px;
    width: ${(props) => props.width ? props.width : 'auto'};
`;

export const MacOptionsArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 60px;

    font-family: "MyriadProRegular";
    color: '#1d1d1f';
    font-weight: bold;

    h1 {
        font-size: 45px;
        margin-top: 5px;
        margin-bottom: 0;
    }

    .MacOptionsButtonsArea {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 50px;
        border-bottom: 1px solid #d2d2d7;
        font-size: 17px;
        margin-top: 40px;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    .MacOptionsInfoArea {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 100px;
        margin-top: 80px;
    }
`;

interface MacOptionButtonProps {
    borderSize: string
    textAlign: string
    colorText: string
}

export const MacOptionButton = styled.div<MacOptionButtonProps>`
    height: 100%;
    width: 95px;
    color: ${(props) => props.colorText};
    border-bottom: ${(props) => props.borderSize} solid #1D1D1F;
    text-align: ${(props) => props.textAlign};
    cursor: pointer;
`;

export const MacOptionInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    width: 200px;

    img {
        width:100%;
        text-align: right;
    }

    .MacOptionsInfoTitle {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        text-align: center;
        margin-top: 6px;
        margin-bottom: 6px;
    }

    .MacOptionChip {
        font-weight: 100px;
    }

    .MacOptionPrice {
        font-family: "MyriadProLight";
        margin-top: 15px;
    }

    .MacOptionColors {
        height: 14px;
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 5px;
    }
`;

interface MacOptionsInfoColorIconProps {
    color: string
}

export const MacOptionsInfoColorIcon = styled.div<MacOptionsInfoColorIconProps>`
    background-color: ${(props) => props.color};
    width: 12px;
    height: 12px;
    border-radius: 50%;
`;