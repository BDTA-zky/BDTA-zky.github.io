/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","4ee5736b7016c5e3b4920f9263148e5f"],["/archives/2023/04/index.html","9d13e1dc8e597a60711b5e6515249c1f"],["/archives/2023/04/page/2/index.html","534a4d9864eb41e40599d5ed16f1181a"],["/archives/2023/05/index.html","6a85874be961d5bd2cdc4a96350b552d"],["/archives/2023/05/page/2/index.html","d95d2c66b3b2cdc2330ec35209db89b1"],["/archives/2023/05/page/3/index.html","1ddcdfc6aa2ed6dad5ec4fad9e4a5dba"],["/archives/2023/05/page/4/index.html","57660a4a785802b81d3928616561a677"],["/archives/2023/05/page/5/index.html","138b300bb1ec35973a0a6582073cf20a"],["/archives/2023/05/page/6/index.html","a03592a0e557b9079332626d4d592336"],["/archives/2023/06/index.html","9ba0a14d9b822c94959efebbfc977cfe"],["/archives/2023/07/index.html","e0e9815ea498bd2baa95963326bed1b0"],["/archives/2023/07/page/2/index.html","9061df80602ab1ffaeba72f2751616ad"],["/archives/2023/09/index.html","166a9a4893633dc9681de5728b320af1"],["/archives/2023/index.html","aed168b5c13eca093df4432819b340da"],["/archives/2023/page/10/index.html","f5e8b97c94d7506e6212a8ef805fffaa"],["/archives/2023/page/2/index.html","58d3919a9011ef9a9730903646f24d18"],["/archives/2023/page/3/index.html","ff2934993c8c36d0c33b3c1bde621b37"],["/archives/2023/page/4/index.html","72634076d5495cc6a20587889633cd7a"],["/archives/2023/page/5/index.html","68b76485d1081e3921894a3a9c3ca7fc"],["/archives/2023/page/6/index.html","2017d413c09dafed195603131bd87dd8"],["/archives/2023/page/7/index.html","6ce1fcdd2711a0e7616e82e9e1afb34f"],["/archives/2023/page/8/index.html","f92ed109b72695b910722fcf80f375fe"],["/archives/2023/page/9/index.html","4ef861be4f0a85e958fea910df7bc0cb"],["/archives/index.html","3ee5b6ec1192d9c00efd854477e2904e"],["/archives/page/10/index.html","a416c2bdf03c8644c813780914f3005b"],["/archives/page/2/index.html","6ac54ba0745a78988d32062c749610ad"],["/archives/page/3/index.html","4411bf3954a5a3fd4d39b2a441e9a93f"],["/archives/page/4/index.html","b03845846194543dd10d15428b286e2a"],["/archives/page/5/index.html","cd5853a40d767d8508af4ec3893132d5"],["/archives/page/6/index.html","78c51ab5e1e2c202332c7e3189e0e135"],["/archives/page/7/index.html","2327f3dc9ef27f6afd9ee78a0a29eca9"],["/archives/page/8/index.html","6d62edb948288cb5303514d34e865f36"],["/archives/page/9/index.html","92b6df28dc8e2c085a67803a513c0d14"],["/categories/index.html","e75a6355f207b6ddb023e48c8b8ff797"],["/categories/java/index.html","6c9ff7e33c9a6813cb2ba10b411f582a"],["/categories/java/page/2/index.html","114cbadf647c5d6a27e106c6b7ee592a"],["/categories/java/page/3/index.html","400092ff6235f8bf34d4d11664c36781"],["/categories/java/page/4/index.html","5be2d59890c108aecafe218d90c2772e"],["/categories/java/page/5/index.html","7e30229fce99b13ac4ac6661396e4d00"],["/categories/java/page/6/index.html","ef9ac5d751b1fa4347d30d31696dc74e"],["/categories/java/算法/index.html","76dc48fbbe35aa7dffa10f087f1bab4b"],["/categories/java/算法/page/2/index.html","83761fd77ba27d92034f47e0d562357b"],["/categories/java/算法/page/3/index.html","a382e88054599160245c2a0122ae3364"],["/categories/java/算法/page/4/index.html","ab9ecbf8c289eaa9923c6d8ab4445885"],["/categories/java/算法/蓝桥杯/index.html","91163996106112f34a83133ec92843b1"],["/categories/java/算法/蓝桥杯/page/2/index.html","4ad198baf57483960322ca51b32ada28"],["/categories/java/算法/蓝桥杯/page/3/index.html","be9a1b61acaf9f403d6055726d7fb230"],["/categories/java/算法/蓝桥杯/page/4/index.html","a242814e336b143961507edf5b846b0d"],["/categories/java/蓝桥杯/index.html","d0d1fd7cc0e20e658743fea301129762"],["/categories/java/蓝桥杯/page/2/index.html","15735c455673ffb287594ed44decfc4f"],["/categories/python/index.html","fc9aab3b98c4bc1f0d78e56bbda47fb4"],["/categories/python/page/2/index.html","e206807232b78c113b315045b7105c95"],["/categories/python/page/3/index.html","2fdfced24b1d8c84908392b60a2870f1"],["/categories/python/蓝桥杯/index.html","bc14a6f86169e295c0d3f9a6f555cf0a"],["/categories/python/蓝桥杯/page/2/index.html","3f2470788849f917abf880572fe6563b"],["/categories/python/蓝桥杯/page/3/index.html","c13e88ab4434254592abb13973d87bc4"],["/categories/python/蓝桥杯/冒泡排序/index.html","b48ea3cd1c203588b3c7fafe029e0085"],["/categories/python/蓝桥杯/结构体/index.html","671f31b4f21fb8c0b46f11c222a9fc68"],["/categories/python/蓝桥杯/链表/index.html","c811c23681f486629fba6593013e1861"],["/categories/教程/index.html","061d44b15db13c76a457df0e70499e76"],["/categories/日常习题/index.html","913987a5b56009027d41e071de9ff561"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1a959f0b6037f94a4833e6a594c3f838"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","05f460a36b400c4033a28a66883de104"],["/page/10/index.html","b7f59320c8baa4a6e4d2a2e64fd29326"],["/page/2/index.html","3f346c34b75ce219a2fed9492a3cf822"],["/page/3/index.html","60d795271d2faa3a3f8debdd2f435ab9"],["/page/4/index.html","942535e9469e0b3a088be42dd1117d47"],["/page/5/index.html","c521ce7253973c591e79171df7a35744"],["/page/6/index.html","9c867d3f3718f47a39d138362e67a1eb"],["/page/7/index.html","a25ec5d681dd6a1a878ece79c828b684"],["/page/8/index.html","247ca29707bfea2b48aa95699cdec244"],["/page/9/index.html","f80629ba913589cb24137455d719762b"],["/posts/0.html","3fddb6801aa98ec90cc2b3bf6fc724fd"],["/posts/01.html","1496801953a0b7449cef6170e5da6a25"],["/posts/02.html","bc4f28412a6cff6462744fb837278100"],["/posts/03.html","113a1ed9c73966ada6c2da10b84e21ca"],["/posts/04.html","22d8882d66f6e65e5c44987384d32ddd"],["/posts/05.html","74acb3af99e1929a00b8a3373536aa1b"],["/posts/06.html","e9428f3f797c53ca33aa0e50dae9542b"],["/posts/08.html","585cbd9d41ed77da707e2fd9e868be77"],["/posts/09.html","5c891d28c071fcc78c9a624d587a286f"],["/posts/10.html","699176b45d73ddbf6d8253d0cf5dad97"],["/posts/11.html","3ee41f2f7dc8bf403b337a1cecc64c1a"],["/posts/12.html","e93d558bdff9dda9dd5861ddf67e3eee"],["/posts/13.html","a2820c94d61b43c8828bc38945844b56"],["/posts/14.html","3d3caec954e40e73dafc830af4db8b4f"],["/posts/15.html","f68c7059f3a1effb40574f1d41f6dccd"],["/posts/16.html","ad700bcb818e0dce3c243df102c36ef5"],["/posts/17.html","0765f9fcadad3a92944dc26b32b0498e"],["/posts/18.html","ce96ecdecb60ba69a1978364f5d02a0f"],["/posts/19.html","750733b00e1b2edd743fe698209abf1b"],["/posts/20.html","563f43eda1850dabb64cb2ffb92ce95b"],["/posts/21.html","5dfeb712e5677e850ff9b55c3a759af1"],["/posts/22.html","bd84f28a9e5268700b2e22f24f7ac708"],["/posts/23.html","9871e6b9b2a1125190fedc8c8d984e9c"],["/posts/24.html","d3458f233b5bb0fc48dfb76d80a4c25a"],["/posts/25.html","495267aee1977cbf6f020d5b72d99cae"],["/posts/26.html","3db760b3bcfbfe42f246988d34afa6a6"],["/posts/undefined.html","3c59c4aa90aca73da53a8b2e9132037d"],["/sw-register.js","5b7ec330d10670a7755416b38c80cad5"],["/tags/index.html","53e68da0fd699aa81de55e3964fb6126"],["/tags/java/index.html","170023e0f877600b7bc185d82abd3339"],["/tags/java/page/2/index.html","074fb1804c8981fc5860fd21913aabdd"],["/tags/java/page/3/index.html","e4e3c6e0c4dd8fe6c6ff4e9448a57753"],["/tags/java/page/4/index.html","7135e22e65855638a3dcf6ff85b7bc72"],["/tags/java/page/5/index.html","869420d490bacb6ae3d365af487917cf"],["/tags/java/page/6/index.html","49089c66d7eecb395f2934ee7e7b582e"],["/tags/python/index.html","05627d4befb352310ac3679df1cb4746"],["/tags/python/page/2/index.html","5c85fcfb6e34650588b3e361825c6244"],["/tags/python/page/3/index.html","a0a8f4bd60078694aaaaf4d8ceb09c71"],["/tags/冒泡排序/index.html","bf8bf7ca03e4f2c28a32a6c57e793183"],["/tags/算法/index.html","35d1a80e14f692a380c0ef8a54341786"],["/tags/算法/page/2/index.html","ba4c6143d944702e82211f68977bdfc5"],["/tags/算法/page/3/index.html","7a07c6ed041cdefa2f4342524d1af837"],["/tags/算法/page/4/index.html","e3af9cb32fa94db72730b97c587c5cbf"],["/tags/结构体/index.html","9b6e3c1215a31751dd0d40483895bc4c"],["/tags/蓝桥杯/index.html","1964d5ae648d0426e564e68c351c9c87"],["/tags/蓝桥杯/page/2/index.html","55a34d6bccf96b8f660f276a7164f299"],["/tags/蓝桥杯/page/3/index.html","83f995966440e06aadd91933bf345946"],["/tags/蓝桥杯/page/4/index.html","436e272a56c9d9ca391d38a0ec854696"],["/tags/蓝桥杯/page/5/index.html","3b936bf1b5b9e58d0f0c2413009a61e6"],["/tags/蓝桥杯/page/6/index.html","cd4525ca40457dc8fe6d08125511495c"],["/tags/蓝桥杯/page/7/index.html","5466f3acbb03490fd94747f4edf6ea7b"],["/tags/蓝桥杯/page/8/index.html","70a69990cbbda3ff075956f4128fbe3b"],["/tags/资源教程/index.html","17d13f7fee291c75743307e250bcdcce"],["/tags/链表/index.html","91fb8e207bedcb7df5e51560e5458e18"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
