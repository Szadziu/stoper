import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.padding.m} 0;
    margin-top: ${({ theme }) => theme.margin.xxl};

    text-align: center;
    font-family: Veneer;
    font-size: ${({ theme }) => theme.fontSize.xxl};
`;
