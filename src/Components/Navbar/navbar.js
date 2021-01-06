import React,{Component} from 'react' 
import {MenuItems} from "./menuItems"
import './navbar.css'

class Navbar extends Component {
    render(){
        return(
            <nav className="NavbarItems"> 
                <h1>Unsplash App</h1>
                    <ul className="nav-menu">
                        {MenuItems.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
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