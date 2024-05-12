import {useSelector} from "react-redux";
import styled from "styled-components";

function Profile() {
    const user = useSelector((state) => state.user.value)
    return (
        <Wrap>
            <p>Profile Page</p>
            <p> Name : {user.student_id} </p>
            <p> Age : {user.pw} </p>
        </Wrap>
    );
}

export default Profile

const Wrap = styled.div`
    font-size: 20px;
    padding: 10px;
    margin: 10px;
    border: 2px solid cadetblue;
    border-radius: 20px;
    p{
        padding: 10px;
        font-size: 20px;
        
    }
`