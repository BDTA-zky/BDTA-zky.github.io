/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3c9c386d74dc80476e039a8362d3b000"],["/archives/2023/04/index.html","509456879b0351a7994a10a1788fcde9"],["/archives/2023/04/page/2/index.html","ca57b9080db5e5c3ad8bb7711d5e1433"],["/archives/2023/05/index.html","bd27dc17bb4b098eccb0a4d00a761bd8"],["/archives/2023/05/page/2/index.html","2c87ecd53a9d0ff0a8932f769b30f404"],["/archives/2023/05/page/3/index.html","3c2407064f29c435ee38d4a5523ee83f"],["/archives/2023/05/page/4/index.html","0e77896cd6552109c63a9bd7ef16db00"],["/archives/2023/05/page/5/index.html","84cfa3daf098d2c5054722ee35b5cebb"],["/archives/2023/05/page/6/index.html","4b2078fe682591744f6389a45b6f2feb"],["/archives/2023/06/index.html","aadb46527ac47a216ccdc807181abee9"],["/archives/2023/07/index.html","abdca4ca1cf39b14371d81d3460fdc7e"],["/archives/2023/07/page/2/index.html","5e3f86125b57aaca8f915d8888beecf2"],["/archives/2023/09/index.html","cfad7ef5aa76c7af59bdd6715c101b4c"],["/archives/2023/index.html","287cbbb48927d63570080a772a7e7e76"],["/archives/2023/page/10/index.html","04da8df7adeaca8dc7d84766c98b10fe"],["/archives/2023/page/2/index.html","0e60847067a757135723c4d5dc3292eb"],["/archives/2023/page/3/index.html","dd3a7e45858bb7956538e6ff713b81ce"],["/archives/2023/page/4/index.html","b35f2d250641a16d637807251e22373c"],["/archives/2023/page/5/index.html","1f573b511eaeb9c0b9bdb692691a744c"],["/archives/2023/page/6/index.html","5012095ce8419eed7c60dc5946fdbcae"],["/archives/2023/page/7/index.html","47d9f791c9a0db823a73f986224542c2"],["/archives/2023/page/8/index.html","513f15bd638a138cf0de9fe9e65ade50"],["/archives/2023/page/9/index.html","3d417f16c358f61d0047419f8fcef371"],["/archives/index.html","118e58a0fe323afdee757d081b492b12"],["/archives/page/10/index.html","37628a3ef2e90a35228a787b13a4fb4d"],["/archives/page/2/index.html","2d7d86a0949efe17ed3fd60f4fd953f0"],["/archives/page/3/index.html","66520db6cd0b4935cf66f060d50c04f9"],["/archives/page/4/index.html","ebabb3e7960d809c2bb867adda5392df"],["/archives/page/5/index.html","2da929a5064f497acb45f92fe8f911e6"],["/archives/page/6/index.html","7764e28e1855e4862b1e865aee849bbd"],["/archives/page/7/index.html","9fb11658c112bab1f80334c1c2bde234"],["/archives/page/8/index.html","d5846355149d584054bfe1daeb932f4b"],["/archives/page/9/index.html","122bbe104d3411e4df63ca4c00fb3746"],["/categories/index.html","c737d8ddcc347a87a7ddb50bb7780645"],["/categories/java/index.html","c3b136f7473d660b562381986715f0f1"],["/categories/java/page/2/index.html","84ca3a1adb9965a3fe4b110f617e49f1"],["/categories/java/page/3/index.html","7011b7bec8dcf497a41e85108e2a4171"],["/categories/java/page/4/index.html","46146a2126ee1dfb96e1a58585fc56f9"],["/categories/java/page/5/index.html","2a838457c2dbcb66918dee4c99002385"],["/categories/java/page/6/index.html","ac00c47f44052b8b4c4fd914c2594b5e"],["/categories/java/算法/index.html","f56c8ff49051ef262595456b4063f8bf"],["/categories/java/算法/page/2/index.html","dd2a1d3d87857e456f5a15aaf5fb9a40"],["/categories/java/算法/page/3/index.html","1a9e41413f31ff5960bb74cfc84fec6a"],["/categories/java/算法/page/4/index.html","eb7341356698cb0f3d023c3ae37af529"],["/categories/java/算法/蓝桥杯/index.html","f3b759f28b31eb533fa54b9b2bde24f9"],["/categories/java/算法/蓝桥杯/page/2/index.html","ae4479df4e46b2c37feed625f7e97fc9"],["/categories/java/算法/蓝桥杯/page/3/index.html","62a4e85948606455cd018edabaa84587"],["/categories/java/算法/蓝桥杯/page/4/index.html","b0611f45aad423dd926bfa7bfb5f2880"],["/categories/java/蓝桥杯/index.html","0817422fef34c210446ebf4c09a39669"],["/categories/java/蓝桥杯/page/2/index.html","5f4157c33084457c839f7ce07ccb326a"],["/categories/python/index.html","19de1a454db7a586e2008f05d1a7f16e"],["/categories/python/page/2/index.html","d165256073844d8876a1df524f6c0ef5"],["/categories/python/page/3/index.html","1238cbf3482dfa9ed3da5303c0c7a7be"],["/categories/python/蓝桥杯/index.html","193199f0cb8218ca6bb8d19391c18e94"],["/categories/python/蓝桥杯/page/2/index.html","2a2f830b254b95ee23be60180b5bea23"],["/categories/python/蓝桥杯/page/3/index.html","84d96a24d3efccf6eb589943bfc57ef8"],["/categories/python/蓝桥杯/冒泡排序/index.html","12079bc37f4316b9acebe86043b5be8f"],["/categories/python/蓝桥杯/结构体/index.html","1886edb24a46f7fcd0b502013152636e"],["/categories/python/蓝桥杯/链表/index.html","a0d087fce4c3132230544c955b76cbb9"],["/categories/教程/index.html","6060271b06cec55b72584864dacca37f"],["/categories/日常习题/index.html","55ebc66b6aa4d5e5dd82e10375486890"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8fa1cdc38f16eea538833e498db87a68"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","42d5c97eac562564f25098265b0d790b"],["/page/10/index.html","0609727a8238359ebd4f092c13feead7"],["/page/2/index.html","37b3b8e88992267286eb3b86214ba4a6"],["/page/3/index.html","0dd91057279ca9345613c75c9159383b"],["/page/4/index.html","17c4ac1e275f4455b98320a74af861de"],["/page/5/index.html","0625808c5494223425082fd5fed04102"],["/page/6/index.html","d10bde2acb6f15fcc61eec1d140a4577"],["/page/7/index.html","5ac3d6bff3a495b103f5951ebc656457"],["/page/8/index.html","d5300bb33b47749a6943d0ffaaaf7e48"],["/page/9/index.html","6bee40faebdf3af0ca8fe0ba61ce3673"],["/sw-register.js","ac344d26b55314bcabbf8ac0fe79aa10"],["/tags/index.html","effa506c5c561ba655cca777ed93bd75"],["/tags/java/index.html","eaa782bee62eaf860bb383c2c17eda5c"],["/tags/java/page/2/index.html","e4f6161b4a7469ae01af0d74f5c4a5b8"],["/tags/java/page/3/index.html","392b9b2da34ae1ccf72d17831dfa9d88"],["/tags/java/page/4/index.html","137bad577c921cf09aeb7fe710008c1d"],["/tags/java/page/5/index.html","8c2c8e889a21dfcdd75be20810942e90"],["/tags/java/page/6/index.html","501e3e5fabb57ca9656423ef968fba24"],["/tags/python/index.html","ecddd44cd16a72e762a1f81182bc46f1"],["/tags/python/page/2/index.html","5f460f828e3dda8c44222b6dd6b42c19"],["/tags/python/page/3/index.html","c3e807c3a68365a55a24e4bf5c3b717c"],["/tags/冒泡排序/index.html","cdbd56766cf109f576f82c9a43ff7dad"],["/tags/算法/index.html","318d93168fccb6a0926e80db01a2e508"],["/tags/算法/page/2/index.html","c3a055385164236837829939310b8f8a"],["/tags/算法/page/3/index.html","5d7318513f1ff255ee5e4b746d032bf8"],["/tags/算法/page/4/index.html","9b169a7e42ff65de7188ba7fad38f96a"],["/tags/结构体/index.html","5fb93214320cc29c0046fb1fc2a93295"],["/tags/蓝桥杯/index.html","5d42630b530aa083c25282accf2e54cd"],["/tags/蓝桥杯/page/2/index.html","3d58961a660161b135d63e6bc272d6f6"],["/tags/蓝桥杯/page/3/index.html","d49e1ad21736162a1d7a692dbfa747e2"],["/tags/蓝桥杯/page/4/index.html","816ac9d3dffc7db2fe558c2ae529ddff"],["/tags/蓝桥杯/page/5/index.html","0f7ba577514ad38c52bc0d337b9836e0"],["/tags/蓝桥杯/page/6/index.html","693227fdf9402ed7e68886378a81c37f"],["/tags/蓝桥杯/page/7/index.html","990d96b8ff7e5629d770935b8600147e"],["/tags/蓝桥杯/page/8/index.html","8f90ac1446961b4f36de5ca68b2cdeb8"],["/tags/资源教程/index.html","7a90b89f972b7c4d0a16112f0f7dc680"],["/tags/链表/index.html","ad62ee07c94b9997a856fb7490b6ef92"]];
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
