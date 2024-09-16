import { Component } from 'react';
import './Header.css'


class Header extends Component{
    render(){
        return(
            <div className="header">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-0">
                        <div className="col-xs-12  col-sm-4 col-md-2 col-lg-2 col-xl-2 col-xxl-2">
                            <div className="logo">MOVIE<span>MASTER</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;