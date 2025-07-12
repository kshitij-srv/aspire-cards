import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/cards', async () => {
    const response = await fetch('/mock-cards-data.json');
    const data = await response.json();
    return HttpResponse.json(data, { status: 200 });
  }),
  http.get('/api/transactions', async () => {
    const response = await fetch('/mock-transactions-data.json');
    const data = await response.json();
    return HttpResponse.json(data, { status: 200 });
  })
];
