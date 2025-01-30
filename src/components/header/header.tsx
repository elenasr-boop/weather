import * as S from "./header.styled";
import logo from "/logo.png";

export function Header () {
    return (
    <S.Header>
        <S.Logo src={logo} alt="Logo"/>
        <S.LinkFromHeader href="/" >Прогноз погоды в вашем городе!</S.LinkFromHeader>
    </S.Header>
)
}