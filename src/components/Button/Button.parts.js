import styled from 'styled-components';

export const ControlButton = styled.button`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 120px;
    padding: ${({ theme }) => theme.padding.m};
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    border-top: 1px solid ${({ theme }) => theme.colors.white};

    background-color: transparent;
    color: ${({ active }) => (active ? 'rgba(255,255,255,0.5)' : '#fff')};

    font-size: ${({ theme }) => theme.fontSize.m};

    outline: none;
    pointer-events: ${({ active }) => (active ? 'none' : '')};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
    }

    &:focus {
        background-color: ${({ theme }) => theme.colors.accent_1};
        color: black;
    }
`;
