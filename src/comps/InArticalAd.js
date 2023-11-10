import React, { useEffect } from 'react'

const googleAdId = 'ca-pub-7173673170921420';

const InArticalAd = (props) => {

    const { currentPath } = props

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [])

  return (
    <>
	  <ins className="adsbygoogle"
        style={{display:"block",textAlign:"center",height:"180px"}}
        data-ad-format="fluid"
         data-ad-layout-key="in-article"
        data-ad-client={googleAdId}
        data-ad-slot={props.slot}>
    </ins>
    </>
  )
}


export default InArticalAd;
