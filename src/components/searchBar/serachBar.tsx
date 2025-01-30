import { useState } from 'react';
import * as S from './searchBar.styled.ts';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
    const [request, setRequest] = useState('');
    const navigate = useNavigate();

    function search() {
        console.log(`Вы пытаетесь найти погоду в ${request}`);
        navigate(`/forecast/${request}`);
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