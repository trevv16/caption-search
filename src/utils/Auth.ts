class Auth {
  static authenticateUser(token: any) {
    localStorage.setItem('authToken', token);
  }

  static isUserAuthenticated() {
    return localStorage.getItem('authToken') !== null;
  }

  static deauthenticateUser() {
    localStorage.removeItem('authToken');
  }

  static getToken() {
    return localStorage.getItem('authToken');
  }
}

export default Auth;
