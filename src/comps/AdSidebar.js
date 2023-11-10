import React, { useEffect } from 'react'

const googleAdId = 'ca-pub-7173673170921420';


const AdSidebar = (props) => {

    const { currentPath } = props

    useEffect(() => {
        window.adsbygoogle = window.adsbygoogle || []
        window.adsbygoogle.push({})
    }, [])

  return (
    <>
	<ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-format="auto"
        // data-ad-layout-key="auto"
        data-ad-client={googleAdId}
        data-ad-slot={props.slot}
        data-full-width-responsive="true">
    </ins>
    </>
  )
}


export default AdSidebar;
