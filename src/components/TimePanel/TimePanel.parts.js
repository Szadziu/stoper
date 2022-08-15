import styled from 'styled-components';

export const Timer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80%;
    max-width: 450px;
    height: 150px;
    border-radius: ${({ theme }) => theme.borderRadius.s};

    background-color: ${({ theme }) => theme.colors.primary};

    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: ${({ theme }) => theme.letterSpacing.xxl};

    @media (min-width: 500px) {
        height: 200px;
        font-size: ${({ theme }) => theme.fontSize.xxl};
    }
`;
