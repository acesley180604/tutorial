export interface User {
  username: string;
  email: string;
}

export function saveUser(user: User): void {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): User | null {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
}

export function removeUser(): void {
  localStorage.removeItem('user');
}

export function isLoggedIn(): boolean {
  return !!getUser();
}

