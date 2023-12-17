import styled from "styled-components";

//Theme variables
const theme = {
    header: {
        height: '44px'
    }
}

//Header componentsS

interface HeaderProps {

}
export const HeaderStyled = styled.ul`
    height: ${theme.header.height};
    width: --vw;
    background: rgba(22, 22, 23, .8);
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
`;

export const HeaderItemContainer = styled.li`

`;

export const HeaderItemStyled = styled.div`
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
    display: boolean
}

export const HeaderDropdownContainer = styled.div<HeaderDropdownContainerProps>`
    width: --vw;
    padding-bottom: 70px;
    background-color: white;
    position: absolute;
    left: 0;
    right: 0;
    display: ${(props) => props.display ? 'flex' : 'none'};
    flex-direction: row;
`;

export const HeaderDropdownColumnStyled = styled.div`
    display: flex;
    flex-direction: column;
`;
