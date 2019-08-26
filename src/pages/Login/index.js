import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

// Styles
import '../../styles/Login.css';

// Services
import { authUser } from '../../lib/services/auth';

// Utils
import { saveToken, getToken } from '../../lib/token-manager';

class Login extends Component {
  state = {
    email: '',
    password: '',
    showError: false,
    error: null,
  };

  componentDidMount() {
    if (getToken() != null) {
      this.props.history.push('/backoffice');
    }
  }

  handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;

    this.setState({
      [name]: value,
    });
  }

  doLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await authUser({
        email,
        password,
      });
      saveToken(response.token, response.company);
      this.props.history.push('/backoffice');
    } catch (error) {
      this.showErrorAlert(error);
    }
  }

  showErrorAlert = () => {
    this.setState({
      showError: true,
      error: 'Problema al autenticar',
    });
    setTimeout(this.dismissAlert, 3000);
  }

  dismissAlert = () => {
    this.setState({
      showError: false,
      error: '',
    });
  }

  render() {
    const {
      email,
      password,
      showError,
      error,
    } = this.state;

    return (
      <div className="container-login">
        <div className="wrap-login">
          <img
            className="logo"
            src="/statics/images/deerlab_logo.jpg"
            alt="Deerlab Logo"
          />
          <Form className="form-login">
            <Form.Group>
              <Form.Control
                type="email"
                placeholder="Insert your email"
                id="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Insert your password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            {
              showError ? (
                <Alert variant="danger">
                  {error}
                </Alert>
              ) : null
            }

            <Button variant="primary" type="submit" className="login-button" onClick={this.doLogin}>Login</Button>
          </Form>
        </div>
        <div className="company-footer">
          <span>
            Created by
            <a href="https://deerlab.studio" target="_blank" rel="noopener noreferrer"> Deerlab Studio</a>
          </span>
        </div>
      </div>
    );
  }
}

export default Login;
