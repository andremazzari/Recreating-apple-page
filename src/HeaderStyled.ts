import styled from "styled-components";

//Header componentsS

export const Header = styled.div`
    height: 44px;
    width: 100%;
    background: rgba(22, 22, 23, .8);
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 35px;
`;

export const HeaderItem = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(218, 218, 218, .8);
    font-family: 'MyriadProRegular';
    font-size: 12px;
    letter-spacing: .05em;

    &:hover {
        color: rgba(255, 255, 255, .8)
    }
`;

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
    font-size: 10px;
    font-family: "MyriadProRegular";
    color: rgba(22, 22, 23, .8);
`

interface HighlightedProductsItemSubTextProps {
    novo?:boolean
}

export const HighlightedProductsItemSubText = styled.span<HighlightedProductsItemSubTextProps>`
    font-size: 8px;
    font-family: "MyriadProRegular";
    color: #f56300;
    visibility: ${(props) => props.novo ? 'visible' : 'hidden'};
`

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