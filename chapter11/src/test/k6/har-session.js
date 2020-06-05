import { group, sleep } from 'k6';
import http from 'k6/http';

// Version: 1.2
// Creator: WebInspector

export let options = {
    maxRedirects: 0,
};

export default function() {

	group("page_5 - http://shipitclicker.example.com:80/", function() {
		let req, res;
		req = [{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"Upgrade-Insecure-Requests": "1",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/stylesheet.css",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "text/css,*/*;q=0.1",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/img/shipit-640x640-lc.jpg",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/img/Richard-Cartoon-Headshot-Jaunty-180x180.png",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "image/webp,image/apng,image/*,*/*;q=0.8",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/app.js",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "*/*",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/api/v2/games/71o6wXE9kh9x_NHyWOy2M/score",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "*/*",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/api/v2/games/71o6wXE9kh9x_NHyWOy2M/deploys",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "*/*",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "get",
			"url": "http://shipitclicker.example.com:80/api/v2/games/71o6wXE9kh9x_NHyWOy2M/nextPurchase",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"DNT": "1",
					"Accept": "*/*",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(7.10);
		req = [{
			"method": "post",
			"url": "http://shipitclicker.example.com:80/api/v2/games/",
			"body": "{}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "put",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":0}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "put",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":0}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "put",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/nextPurchase",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"nextPurchase\",\"value\":0}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		sleep(1.59);
		req = [{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":4}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":4}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":8}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":8}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":6}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/score",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"score\",\"value\":7}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		},{
			"method": "patch",
			"url": "http://shipitclicker.example.com:80/api/v2/games/aJ7vbTPNbGAIHyus_ZcIy/deploys",
			"body": "{\"id\":\"aJ7vbTPNbGAIHyus_ZcIy\",\"element\":\"deploys\",\"value\":1}",
			"params": {
				"headers": {
					"Host": "shipitclicker.example.com:80",
					"Connection": "keep-alive",
					"Pragma": "no-cache",
					"Cache-Control": "no-cache",
					"DNT": "1",
					"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Origin": "http://shipitclicker.example.com:80",
					"Referer": "http://shipitclicker.example.com:80/",
					"Accept-Encoding": "gzip, deflate",
					"Accept-Language": "en-US,en;q=0.9"
				}
			}
		}];
		res = http.batch(req);
		// Random sleep between 20s and 40s
		sleep(Math.floor(Math.random()*20+20));
	});

}
