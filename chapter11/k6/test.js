/*
 *Test script for k6.io docker container.
 *
 * This script tests:
 */

import http from 'k6/http'
import { sleep } from 'k6';

export default function() {
  const url = `http://${__ENV.HOSTIP}:3011/`;
  http.get(url);
//  sleep(1);
}
