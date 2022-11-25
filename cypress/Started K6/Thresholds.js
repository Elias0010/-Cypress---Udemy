import http from 'k6/http';

export const options = {
  stages: [
      { duration: '30s', target: 20 },
      { duration: '40s', target: 10 },
      { duration: '20s', target: 0 },
],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default function () {
  http.get('https://test-api.k6.io/public/crocodiles/1/');
}
