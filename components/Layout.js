import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import "../static/css/style.scss"

class Layout extends Component {
    render() {
        const {children, title = 'amang blog'} = this.props
        return (
            <div>
                <Head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
                    <title>{title}</title>
                </Head>
                <Header/>
                <div className="my-3">
                    {children}
                </div>
                <Footer company="amang" email="amang@mail.com"/>
            </div>
        )
    }
}

export default Layout