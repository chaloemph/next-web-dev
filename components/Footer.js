import React from "react"

const Footer = (props)=> {
    const {company, email} = props
    return (
            <footer className="footer mt-auto py-3">
                <div className="container title text-uppercase">
                    <span className="text-danger">Powered by  {company}</span>  | email: {email}
                </div>
            </footer>
    )
}

export default Footer