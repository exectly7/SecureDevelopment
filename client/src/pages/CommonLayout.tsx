import Header from "../components/common/Header.tsx";
import Footer from "../components/common/Footer.tsx";
import AppContainer from "../components/common/AppContainer.tsx";
import {Outlet} from "react-router";
import "./CommonLayout.css";

export default function CommonLayout() {
    const links = [
        {label: "Как это работает", url: "/"},
        {label: "Контакты", url: "/"},
    ]

    return (
        <>
            <div className="common-layout">
                <Header buttons={links}/>
                <div className="common-layout__app-wrapper">
                    <AppContainer>
                        <Outlet/>
                    </AppContainer>
                </div>
            </div>
            <Footer/>
        </>
    )
}