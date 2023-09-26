import React from "react";
import './footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <>
            <div className="back">
                <div className="footer-text">
                Made by Rajinderpal Singh
                    </div>                
            </div>
            </>
        );
    }
}

export default Footer;