import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import About from "./pages/About"
import Work from "./pages/Work"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume";

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
        } else if (currentPage === 'Resume') {
            return <Resume />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Header handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}

