import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    // Если токен существует и срок его действия не истек, верните `true`.
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    // Расшифруйте токен, чтобы узнать время его действия, установленное сервером
    const decoded = decode(token);
    // Если время истечения срока действия меньше текущего времени (в секундах), токен просрочен и мы возвращаем `true`.
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // Если срок действия токена не истек, верните `false`.
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign("/");
    // window.location.reload();
  }
}

export default new AuthService();
