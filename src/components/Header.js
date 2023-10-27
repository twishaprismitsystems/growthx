import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Header extends Component {
    constructor(){
        super();
        let path = window.location.pathname;
        this.state = {
            loading : "none",
            activetab:0,
            activelink:path
        }
    }
    
    componentDidMount(){
            let all = document.createElement('script')
            all.setAttribute('src', '/assets/js/all.min.js')
            document.head.appendChild(all);  
            
            let wow = document.createElement('script')
            wow.setAttribute('src', '/assets/js/wow.min.js')
            document.head.appendChild(wow); 
            
            let core = document.createElement('script')
            core.setAttribute('src', '/assets/js/core.min.js')
            document.head.appendChild(core);
            
            let menu = document.createElement('script')
            menu.setAttribute('src', '/assets/js/menu.js')
            document.head.appendChild(menu);

            this.handleClick = this.handleClick.bind(this);
    }

    setactive = (slug) => {
        this.setState({ activetab:slug })
    }

    checkactive(slug){
        if(slug === '' && this.props.location.pathname === '/'){
            return "active"
        }
        if(this.props.location.pathname === slug){
            return "active";
        }
        return '';
    }

    handleClick(e, index , url) {
        e.preventDefault();
        this.setState(prevState => ({
            activelink: url.link
        }));
    }

    render() {
        return (
            <React.Fragment>
            <a href="!#" id="scroll" className="back_to_top show" >
                <span className="rocket_x" >
                    <picture className="d-block">
                        <source srcSet="assets/img/rocket_ani_1.webp" type="image/webp" />
                        <source srcSet="assets/img/rocket_ani_1.png" type="image/png" />
                        <img data-src="assets/img/rocket_ani_1.png" loading="lazy" width="60" alt="Make Your Business More" className="lazyload img-fluid" />
                    </picture>
                    <span className="rocket_fire">
                        <picture className="d-block rocket_fire_before">
                            <source srcSet="assets/img/rocket_fire_before.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_fire_before.png" type="image/png" />
                            <img data-src="assets/img/rocket_fire_before.png" loading="lazy" width="212" height="117" alt="Digital Marketing Solutions" className=" lazyload img-fluid" />
                        </picture>
                        <picture className="d-block rocket_fire_after">
                            <source srcSet="assets/img/rocket_fire_after.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_fire_after.png" type="image/png" />
                            <img data-src="assets/img/rocket_fire_before.png" loading="lazy" width="212" height="117" alt="Digital Marketing Solutions" className="img-fluid lazyload" />
                        </picture>
                    </span>
                </span>
            </a>

            {/* NavBar */}
            
            {
            this.props.headerdata.length !== 0 ?
            <nav className="navbar navbar-expand-lg " id="scrollspy">
                <div className="container"> <Link className="navbar-brand d-lg-none" to="/">
                    <picture className="d-block img">
                        <source srcSet={this.props.headerdata.mobile_logo+".webp"} type="image/webp" />
                        <source srcSet={this.props.headerdata.mobile_logo+".png"} type="image/png" />
                        <img src={this.props.headerdata.mobile_logo+".png"} width="100" height="53" alt="Growth-X" title="Growth-X" />
                    </picture>

                </Link>

                    <button className="navbar-toggler" type="button" data-trigger="#main_nav"><i className="fas fa-bars"></i></button>
                    
                    <div className={"navbar-collapse"} id="main_nav">
                        <div className="offcanvas-header mt-3">
                            <button className="btn  btn-close float-right"><i className="fas fa-times"></i></button>
                        </div>
                        <ul className="navbar-nav mx-auto " id="">
                            {
                                this.props.headerdata.menu.map((item,index)=>
                                    item.logo === '' ?
                                    <li key={index} onClick={ () => this.setactive(item.link) } className={'nav-item '+this.checkactive(item.link) } > <Link className="nav-link" to={item.link}> {item.text} </Link> </li>
                                    :
                                    <li key={index} className="nav-item d-none d-lg-block" > 
                                    <Link className="nav-link lg_logo" to="/">
                                        <picture className="d-block">
                                            <source srcSet={item.logo+".webp"} type="image/webp" />
                                            <source srcSet={item.logo+".png"} type="image/png" />
                                            <img src={item.logo+".png"} width="72" height="71" alt="Growth-X" title="Growth-X" />
                                        </picture>
                                    </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            :
            null
        }
        </React.Fragment>
        )
    }
}


export default withRouter(Header);