import http from 'k6/http';
export default function() {
  http.get('https://shipit-v8.eks.example.com/');
}

