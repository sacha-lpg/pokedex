import styled from '@emotion/styled';

const StyledSelect = styled.select`
    color: var(--blue);
`;

const StyledErrorMessage = styled.div`
    font-size: 12px;
    color: var(--red-600);
    width: 400px;
    margin-top: 0.25rem;
    &:before {
        content "❌ ";
        font-size: 10px;
    }
    @media (prefers-color-scheme: dark){
        color: var(--red-300);
    }
`;

const StyledLabel = styled.label`
    margin-top: 1rem;
`;

export {StyledErrorMessage, StyledSelect, StyledLabel};