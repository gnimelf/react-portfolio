import React, { useState } from "react";
import NaviBar from "./naviBar"
import Footer from "./Footer"
import Home from "./pages/Home"
import Work from "./pages/Work"

// export 
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        } else if (currentPage === 'Work') {
            return <Work />
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

