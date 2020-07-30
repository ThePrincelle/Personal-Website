import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {
                                resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                                    return(
                                        <li key={item.url}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                <i className={item.className} />
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="row">
                        <div className="col-full cl-copyright">
                            <span style={{ color: "#D3D3D3"}}>
                                Copyright &copy; {new Date().getFullYear()} | Maxime Princelle 🏳️‍🌈
                            </span>
                        </div>
                    </div>

                    <div id="go-top" style={{ display: "none" }}><a className="smoothscroll" title="Back to Top" href="#nav-bar"><i className="icon-up-open" /></a></div>
                </div>
            </footer>
        );
    }
}
