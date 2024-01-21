import React from 'react'

const Files = ({ files }) => {
    return (
        <div>
            {files.map(file => <span>{file}</span>)}
        </div>
    )
}

export default Files
