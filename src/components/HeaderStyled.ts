import styled from "styled-components";

//Theme variables
const theme = {
    header: {
        height: '44px'
    }
}

//Header componentsS

export const HeaderStyled = styled.ul`
    height: ${theme.header.height};
    width: --vw;
    background: rgba(22, 22, 23, .8);
    position: relative;
    top: 0;
    right: 0;
    left: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 35px;
    list-style: none;
    z-index: 2;
`;


export const HeaderItemStyled = styled.li`
    height: ${theme.header.height};
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(218, 218, 218, .8);
    font-family: 'MyriadProRegular';
    font-size: 12px;
    letter-spacing: .05em;
    position: relative;
    top: 0;

    &:hover {
        color: rgba(255, 255, 255, .8)
    }
`;

interface HeaderDropdownContainerProps {
    display: boolean,
    paddingLeft?: number | null,
    height: number
}

export const HeaderDropdownContainer = styled.div<HeaderDropdownContainerProps>`
    width: --vw;
    background-color: white;
    font-family: "MyriadProRegular";
    position: absolute;
    left: 0;
    right: 0;
    //display: ${(props) => props.display ? 'flex' : 'none'};
    display: flex;
    max-height: ${(props) => props.display ? props.height + 'px' : '0'};
    flex-direction: row;
    gap: 50px;
    padding-top: ${(props) => props.display ? '40px' : '0'};
    padding-left: ${(props) => props.paddingLeft ? props.paddingLeft + "px" : '40px'};
    padding-bottom: ${(props) => props.display ? '70px' : '0'};

    z-index: 2;

    //sliding effect
    transition: max-height ${(props) => props.display ? '0.5s' : '0s'} ease-out;
    overflow: hidden;
`;

interface HeaderDropdownColumnStyledProps {
    first: boolean
}
export const HeaderDropdownColumnStyled = styled.div<HeaderDropdownColumnStyledProps>`
    display: flex;
    flex-direction: column;
    margin-right: ${(props) => props.first ? '60px' : '0'};
    cursor: pointer;

    .column-title {
        font-size: 13px;
        margin-bottom: 15px;
        color: rgba(80, 80, 80, .8);
    }

    .column-item {
        font-size: ${(props) => props.first ? '22px' : '13px'};
        font-weight: 900;
        margin-bottom: ${(props) => props.first ? '15px': '9px'};
    }
`;

export const BluredPage = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(200, 200, 200, 0.6);
    z-index: 1;
`