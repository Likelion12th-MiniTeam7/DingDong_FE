import {Link} from "react-router-dom";


function GoToTestBtn() {
    return (
        <>
            <Link to={'/test'}>
                <button> 테스트 페이지 이동</button>
            </Link>


        </>

    );
}

export default GoToTestBtn;