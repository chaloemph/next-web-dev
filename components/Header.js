import React, {Component} from 'react'
import Link from 'next/link'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
        // setInterval(()=>this.tick(), 1000)
    }

    componentDidMount() {
        this.timerID =  setInterval(()=>this.tick(), 1000)
        // console.log('componentDidMount');
    }

    componentDidUpdate() {
        // console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
        // console.log('componentWillUnmount');
    }

    tick() {
        this.setState({date: new Date()})
    }

    render() {
        return (
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">
                            {/* <img src="/static/images/logo/logo.png" alt=""/> */}
                            Amang Blogs
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <Link href="/">
                                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                            </Link>
                            </li>
                            <li className="nav-item"><a className="nav-link">|</a></li>
                            <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link">About</a>
                            </Link> 
                            </li>
                            
                        </ul>
                        <div className="ml-auto">
                            <span style={{color:'white'}}>Header time : {this.state.date.toLocaleTimeString()}</span>
                        </div>
                        
                        </div>
                    </nav>
                </header>
        )
    }
}

export default Header