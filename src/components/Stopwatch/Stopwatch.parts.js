import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    height: 100vh;
    max-width: 1600px;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 100%;
    max-width: 600px;
    height: 500px;
    border-radius: ${({ theme }) => theme.borderRadius.s};

    background-color: black;

    @media (min-width: 500px) {
        gap: 100px;
    }
`;

export const Controls = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    width: 100%;
    max-width: 450px;
    margin-top: ${({ theme }) => theme.margin.l};

    @media (min-width: 500px) {
        flex-direction: row;
        justify-content: space-between;

        width: 80%;
        margin: 0;
    }
`;

export const FontAuthor = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.xs};
    opacity: 0.5;
`;

export const Link = styled.a`
    all: unset;
`;
