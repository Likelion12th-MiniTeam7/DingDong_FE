import styled from "styled-components";
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";

import QrPopup from "../Popup/QrPopup";

function TestMyPageMockData({data}) {
    const [isShowQr, setIsShowQr] =useState(false)

    const handleQrPopup = ()=>{
        setIsShowQr(!isShowQr)
    }
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <>  
            {isShowQr && <QrPopup onChange={handleQrPopup} qr_code={"https://www.notion.so/hufsglobal/HUFS-12-e23a2e85170c4dca85a689949b424309"}/>}
            {data.map((item)=>(
                <Wrapper key={item.user_id}>
                    <ItemBox>
                        <InfoClub>{item.name}의 동아리 {item.register_clubs.map((i)=>(
                        <span>{i.name}</span>
                        ))}
                        </InfoClub>
                    </ItemBox>
                    <BtnItemBox>
                        <BtnQR onClick={handleQrPopup}><p>출석 QR<br/>생성하기</p></BtnQR>
                        <BtnModify>
                            <Link to={'/mypage/clubedit'} selected={currentPath === '/mypage/clubedit'}>
                                <p>동아리 정보</p><p>수정하기</p>
                            </Link>
                        </BtnModify>
                    </BtnItemBox>
                </Wrapper>
            ))}
        </>

    );
}

export default TestMyPageMockData;


const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 1fr;
    margin-bottom: 35px;
`;
const ItemBox = styled.div`
    color: ${({theme})=> theme.colors.darkGray};
    margin-bottom: 20px;
`;
const InfoClub = styled.div`
    font-size: 20px;
    span{
        font-weight: bold;
        font-size: 25px;
    }
`;
const BtnItemBox = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    grid-gap:44px;
    justify-content: center;
    color: ${({theme})=> theme.colors.darkGray};
    
`;
const BtnQR = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 18px;
        line-height: 1.3;
    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;
const BtnModify = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        margin: 0;
        font-size: 18px;
    }
    width: 140px;
    height: 130px;
    border-radius: 20px;
    border: 2px solid ${({theme})=> theme.colors.lightGray};
    &:hover{
        border: 2px solid ${({theme})=> theme.colors.mainColorDark};
    }
`;