
import allclubs from '../../mockdata/mainpage/allclubs.json'
import TestMockData from "../../components/TestPage/TestMockData";
import manager_user from "../../mockdata/mypage/manager_user.json"

import {useParams} from "react-router-dom";
import axios from "axios";
import {getCookie} from "../../auth/cookie";
import {useEffect, useState} from "react";


function TestPage() {
    // json.에서 불러온 데이터 새로운 변수에 저장
    const data = allclubs.clubs;
    console.log(data);
    const user_data = [manager_user];
    console.log(user_data)

    //동적 라우팅
    const params = useParams();

    const user_id = getCookie('user_id');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    `https://dingdong7.pythonanywhere.com/mypage/${user_id}`,
                    { withCredentials: true }
                );
                console.log('response:', response);

            } catch (error) {
                console.log('error:', error);

            }
        }
    }, [user_id]);


    return (
        <>
            <TestMockData data={data} params={params}/>

        </>
    );
}

export default TestPage;


