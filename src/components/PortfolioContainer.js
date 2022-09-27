import React, { useState } from "react";
import Home from "./pages/home"

// export 
export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home')
    const renderPage = () => {
        if (currentPage === 'Home') {
            
            return <Home />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            {renderPage()}
        </div>
    )
}

