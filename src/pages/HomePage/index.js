import styled from "styled-components";
import {Link} from "react-router-dom";
import {HomeLogo} from "../../components/icons/logos";

function HomePage() {
    return (
        <>
            {/*<h1>*/}
            {/*    홈페이지 입니다.*/}
            {/*</h1>*/}

            <Link to={'/main'}>
                <DomWrap>
                    <ItemWrapper>
                        <HomeLogo/>
                        <p>어ㅈ쩌구 저쩌구 슬로건</p>
                    </ItemWrapper>
                </DomWrap>
            </Link>
        </>

    );
}

export default HomePage;

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

const ItemWrapper = styled.div`
    
    `
