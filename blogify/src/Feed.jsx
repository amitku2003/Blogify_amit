import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Feed = () => {
    return (
        <>
            <Header />
            <div className="feed">
                <div className="left"></div>
                <div className="center"></div>
                <div className="right"></div>
            </div>
            <Footer />
        </>
    );
}

export default Feed; 