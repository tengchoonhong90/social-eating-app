var React = require('react');
var Default = require('./default');

class LoginPage extends React.Component {
    render() {
        return (
            <Default>
                <div className="container login-container">
                    <div className="row">
                        <div className="col-md-6 login-form-2">
                            <div className="login-logo">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            </div>
                            <h3>Register as New User</h3>
                            <form method="POST" action="/users/regNew">
                            <div className="form-group">
                                <input name="username" type="text" className="form-control" placeholder="Username *"/>
                            </div>
                            <div className="form-group">
                                <input name="email" type="text" className="form-control" placeholder="Email *"/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" className="form-control" placeholder="Password *"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Register" />
                            </div>
                            </form>
                        </div>
                        <div className="col-md-6 login-form-2">
                            <div className="login-logo">
                                <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                            </div>
                            <h3>Login</h3>
                            <form method="POST" action="/users/logIn">
                            <div className="form-group">
                                <input name="username" type="text" className="form-control" placeholder="Your Username *"/>
                            </div>
                            <div className="form-group">
                                <input name="password" type="password" className="form-control" placeholder="Your Password *"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Login" />
                            </div>
                            <div className="form-group">

                                <a href="#" className="btnForgetPwd" value="Login">Forget Password?</a>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Default>
        )
    }
}

module.exports = LoginPage;