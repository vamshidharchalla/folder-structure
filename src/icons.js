import React from 'react'

const MinusSquareO = props => (
    <img src="https://s3.amazonaws.com/maventus-us-east/minify/images/folder.png" {...props} />
);

const PlusSquareO = props => (
    <img src="https://s3.amazonaws.com/maventus-us-east/minify/images/close_folder.png" {...props} />
);

const CloseSquareO = props => (
    <i {...props}> - </i>
)

export { PlusSquareO, MinusSquareO, CloseSquareO }
