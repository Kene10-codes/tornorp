import React from 'react'
import { Helmet } from 'react-helmet';

const BgColor = () => {
    return (
        <div>
            <Helmet>
                <style>{'body { background: #F5F2FE; }'}</style>
          </Helmet>
        </div>
    )
}

export default BgColor
