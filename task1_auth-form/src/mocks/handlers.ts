import { HttpResponse, http } from 'msw';
import { User } from '../context/hooks/useUser';

// This handler will intercept any rest request in your project.

// alex@mail.com
// qwe123! => hashed => 11311910149505133

const authenticatedUsers: User[] = [
  {
    email: 'alex@mail.com',
    password: '11311910149505133',
    authToken: 'kisdbvksrgvbwef49745y3248bfq',
  },
];

type LoginRequest = {
  email: string;
  password: string;
  authToken?: string;
};

export type LoginResponse = {
  email: string;
  authToken: string;
};

export const handlers = [
  http.post('/login', async ({ request }) => {
    const body = (await request.json()) as LoginRequest;
    let existedUser: User | undefined;

    if (body.authToken) {
      existedUser = authenticatedUsers.find(
        (user) => user.authToken === body.authToken
      );
    } else {
      existedUser = authenticatedUsers.find(
        (user) => user.email === body.email && user.password === body.password
      );
    }

    if (existedUser) {
      return HttpResponse.json(
        { email: existedUser.email, authToken: existedUser.authToken },
        { status: 200, statusText: 'User successfully authenticated' }
      );
    }

    return new HttpResponse(null, {
      status: 401,
      statusText: 'Invalid email or password',
    });
  }),
];
