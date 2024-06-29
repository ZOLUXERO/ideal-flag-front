import "./styles.css"
import Header from "../header"
import React from "react"

interface PageProps {
    content: React.ReactNode;
}


const Page: React.FC<PageProps> = ({ content }) => {
    return (
        <div className="shape rect rectangle-8df946556b72 centered">
            <Header />
            {content}
        </div>
    )
}

export default Page;