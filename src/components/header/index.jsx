import React, { useEffect } from 'react'

import Nav from '../nav'
import Banner from '../banner'
import Uploader from '../uploader'
import About from '../about'

const Header = () => {
    const [currentRoute, setCurrentRoute] = React.useState('')
    useEffect(() => {
        setCurrentRoute(window.location.pathname)
    }, [currentRoute])
    return (
        <header className='py-6 relative'>
            <Nav />

            {/* banner */}
            {
                currentRoute === '/' && <Banner />
            }
            {
                currentRoute === '/upload' && <Uploader />
            }
            {
                currentRoute === '/about' && <About title='Watch your video' />
            }
            {/* banner */}
        </header>
    )
}

export default Header