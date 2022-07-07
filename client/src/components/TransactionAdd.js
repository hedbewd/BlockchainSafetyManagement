import React from 'react';

function TransactionAdd({disabled, children}) {
    return <button disabled={disabled}>{children}</button>;
}


export default TransactionAdd;