import React, { useState } from "react";
import NaviBar from "./naviBar"
import Footer from "./Footer"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"

// export 
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About')
    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />
        } else if (currentPage === 'Work') {
            return <Work />
        } else if (currentPage === 'Contact') {
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <NaviBar handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}

