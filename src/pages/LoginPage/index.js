import {Logo} from "../../components/Icons/logos";
import LoginItems from "../../components/LoginPage/LoginItems";
import styled from "styled-components";

function LoginPage() {

    return (
        <>
            <DomWrap>
                <ItemWrap>
                    <LogoBox>
                        <Logo/>
                    </LogoBox>
                    <ItemsBox>
                        <LoginItems/>
                    </ItemsBox>
                </ItemWrap>
            </DomWrap>
        </>

    );
}

export default LoginPage;


const DomWrap = styled.div`
    margin-top: 100px;
    border-radius: 400px 400px 0 0;
    height: 100%;
    display: flex;
    justify-content: center;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 200px 200px 0 0;
        margin-top: 50px;
    }
`

const ItemWrap =styled.div`
`

const LogoBox = styled.div`
    display: flex;
    align-items: start;
    justify-content: center;
    width: 130px;
    height: 130px;
 
`

const ItemsBox = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    width: 130px;
    height: 130px;
    @media (max-width: ${({theme})=> theme.mobile}) {
        margin-top: 130px;
    }
    
`