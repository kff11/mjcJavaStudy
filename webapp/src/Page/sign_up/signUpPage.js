import React from "react";
import {Link} from "react-router-dom";
import Header from "../../common/component/header";
import '../sign_up/signUpPage.css'

function signUpPage() {
    return (
        <div>
            <Header/>
            <div className={"inner signup_body"}>
                <h1>회원가입</h1>
                <input
                    className={"signup_input"}
                    placeholder="닉네임"
                    maxLength={10}
                /><br/>
                <input
                    className={"signup_input"}
                    placeholder="ID"
                    maxLength={10}
                /><br/>
                <input
                    className={"signup_input"}
                    placeholder="비밀번호"
                    minLength={4}
                    maxLength={18}
                /><br/>
                <input
                    className={"signup_input"}
                    placeholder="비밀번호 확인"
                    minLength={4}
                    maxLength={18}
                /><br/>
                <Link to="/user/profile">
                    <button className={"signup_btn"}>회원가입</button>
                </Link>
            </div>
        </div>
    );
}

export default signUpPage;