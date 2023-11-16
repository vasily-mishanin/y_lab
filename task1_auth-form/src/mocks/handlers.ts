import { HttpResponse, http } from 'msw';

// This handler will intercept any rest request in your project.
export const handlers = [
  http.get('/login', () => {
    return HttpResponse.json('Hello world!');
  }),
];
