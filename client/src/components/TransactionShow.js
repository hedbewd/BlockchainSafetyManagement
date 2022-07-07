import React from 'react';

function TransactionShow({disabled, children}) {
    return <button disabled={disabled}>{children}</button>;
}

export default TransactionShow;