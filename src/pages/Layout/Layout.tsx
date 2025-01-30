import { Outlet } from "react-router-dom";
import { Header } from "../../components/header/header";
import { SearchBar } from "../../components/searchBar/serachBar";
import { Footer } from "../../components/footer/footer";
import { LayoutStyles } from "./layout.styled";
import { GlobalStyle } from "../../GlobalStyle.styled";

export function Layout() {
    return (
        <>
            <GlobalStyle />
            <LayoutStyles>
                <Header />
                <SearchBar />
                <Outlet />
                <Footer />
            </LayoutStyles>
        </>
    )
}