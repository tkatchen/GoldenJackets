import React, {Component} from 'react';
import {MenuItems} from "./MenuItems";

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="Navbar-logo">React</h1>
                <div className="Menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item,index) => {
                        return(
                            <li>
                                <a className={MenuItems.cName} href={item.url}>
                                    {item.title}
                                </a>    
                            </li>
                        )
                    })}
                    
                </ul>
            </nav>
        )
    }
    
}

export default Navbar