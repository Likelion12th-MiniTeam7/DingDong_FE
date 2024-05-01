import {Link} from "react-router-dom";
import styled from "styled-components";
import {HeaderLogo} from "../icons/logos";

function TestComponent() {
    return (
        <>
            <Link to={'/'}>
                <GotoBtn>
                    홈페이지로 이동하기
                </GotoBtn>
            </Link>
            <DomWrap>
                <ItemWrapper>
                    <HeaderLogo/>
                </ItemWrapper>
            </DomWrap>

        </>
    );
}

export default TestComponent;


const DomWrap = styled.div`
    margin-top: 55px;
    border-radius: 400px 400px 0 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 200px 200px 0 0;
    }
`

const GotoBtn = styled.button`
    border-radius: 20px;
    font-size: 20px;
    background: ${({theme}) => theme.backgroundColor.lightGray};
`
const ItemWrapper = styled.div`
 
    
    `
