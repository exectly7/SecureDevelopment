import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import CommonLayout from "./pages/CommonLayout.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import AuthLayout from "./pages/auth/AuthLayout.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import CodePage from "./pages/auth/CodePage.tsx";
import ForgetPage from "./pages/auth/ForgetPage.tsx";

function App() {
    return (
        <Routes>
            <Route element={<CommonLayout/>}>
                <Route index element={<HomePage/>}/>
            </Route>
            <Route element={<AuthLayout/>}>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
                <Route path="code" element={<CodePage/>}/>
                <Route path="forget" element={<ForgetPage/>}/>
            </Route>
        </Routes>
    )
}

export default App
