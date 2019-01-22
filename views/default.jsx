var React = require('react');


class Default extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <title>App</title>
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="style.css"/>
                    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossOrigin="anonymous" />
                    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossOrigin="anonymous" />
                    <script src="script.js"/>
                </head>
                <body>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="glyphicon glyphicon-menu-hamburger"></span>
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <a className="btn btn-default dropdown-item" href="/">Home</a>
                                            <a className="btn btn-default dropdown-item" href="/events">Events</a>
                                        </div>
                                    </div>
                                </li>
                                <a className="navbar-brand" href="/">Project 2</a>
                                <li className="nav-item active">
                                    <a name="login" className="nav-link" href="/users/login">Log In <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a name="logout" className="nav-link" href="/users/logout">Log Out <span className="sr-only">(current)</span></a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Type Here" aria-label="Search" />
                                <button className="btn btn-dark my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
};

module.exports = Default;