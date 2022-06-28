import React from 'react';

import styled from "styled-components";

function TransactionAdd({disabled, children}) {
    return <button disabled={disabled}>{children}</button>;
}

const StylingButton = styled.button`
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid lightgray;
    background: white;
`;

export default TransactionAdd;