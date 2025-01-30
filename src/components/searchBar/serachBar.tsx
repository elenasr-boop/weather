import { useState } from 'react';
import * as S from './searchBar.styled.ts';

export function SearchBar() {
    const [request, setRequest] = useState('');

    function search() {
        console.log(`Вы пытаетесь найти погоду в ${request}`);
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target;
        setRequest(value);
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            search();
        }
    }

    return (<S.Wrapper>
        <S.Seacrh placeholder='Введите название населенного пункта' onChange={handleInputChange} onKeyUp={handleKeyPress} type='text' />
    </S.Wrapper>)
}