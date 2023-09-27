import { useNavigate } from "react-router-dom";

export const useRedirect = () => {
    const navigation = useNavigate();

    const goRegister = () => {

        navigation("/register")
    }

    const goLogin = () => {

        navigation("/login") 
    }
    const goForgotPassword = () => {

        navigation("/fogotPassword")
    }
    const goChangePassword = () => {

        navigation("/changePassword")
    }

    const goBack = () => {
        navigation(-1)
    }


    return {
        goLogin,
        goRegister,
        goForgotPassword,
        goChangePassword,
        goBack
    }
}