import styled from "styled-components";
import {Logo} from "../../components/Icons/logos";
import LoginInputItems from "../../components/LoginPage/LoginInputItems";

function LoginPage() {
    return (
        <>
            <DomWrap>
                <ItemWrap>
                    <LogoBox>
                       <Logo/>
                    </LogoBox>
                    <CompononetBox>
                        <LoginInputItems/>
                    </CompononetBox>

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
    //align-items: center;
    background: ${({theme}) => theme.backgroundColor.mainColor};
    @media (max-width: ${({theme})=> theme.mobile}) {
        border-radius: 200px 200px 0 0;
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

const CompononetBox = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    width: 130px;
    height: 130px;
`