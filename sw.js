/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","67222d39eb3d43cf49ea97a0b125e158"],["/archives/2023/04/index.html","f5b5ce43f1db3ce3cb2bb1a23dca5915"],["/archives/2023/04/page/2/index.html","3df4f05ee9abc0c802686575c7a993f0"],["/archives/2023/05/index.html","b0c73883c6bbdad02c6b5ba1d1199104"],["/archives/2023/05/page/2/index.html","f22a0b51def058a8f379f974f7c840d9"],["/archives/2023/05/page/3/index.html","b6781529f8171bc1902c02e67ef31c11"],["/archives/2023/05/page/4/index.html","3e1280d61e4c3cefa5270fdfa071b828"],["/archives/2023/05/page/5/index.html","4f5a19ce7d40f19280afca78ae3d038b"],["/archives/2023/05/page/6/index.html","7af8e0d2ca736cff026b302a0d3b3c47"],["/archives/2023/06/index.html","dd80b51b853315fe05254db0501fa1cc"],["/archives/2023/07/index.html","b364bcf46e256d82df7251001bcecbef"],["/archives/2023/07/page/2/index.html","33a4afea47596cf4507bfef1ab07cff9"],["/archives/2023/09/index.html","74607a8f7f4c8b458848acc65e8c8bac"],["/archives/2023/index.html","76e2a6fcb73be2bb8ef8e14458620f0a"],["/archives/2023/page/10/index.html","d4fcf4f55bc1f57cf54dc1ef619e0e7f"],["/archives/2023/page/2/index.html","dd32e69f58027e309db2c4b8d917d028"],["/archives/2023/page/3/index.html","9b669e552cac452b52f519f51f30acc1"],["/archives/2023/page/4/index.html","06649fd2d03de7dcf4a8c7fa05f80e6b"],["/archives/2023/page/5/index.html","e930d52f5b841916d628420e37a4c31a"],["/archives/2023/page/6/index.html","1aef5e8144172bbd6187485c67f19423"],["/archives/2023/page/7/index.html","1a8fae7d62c6ae5fa61d7aeaf78ff704"],["/archives/2023/page/8/index.html","af514720f3de142965818a354aed228c"],["/archives/2023/page/9/index.html","28721e3c066f1b5210f461ad073aa085"],["/archives/index.html","eee8d609e8bc1cf403042609ba2820b5"],["/archives/page/10/index.html","8682b7da53c880bdbc90402310619e1a"],["/archives/page/2/index.html","18c7fc7f759f81c7fc3c8877b88b9f29"],["/archives/page/3/index.html","810e25e326e2367a8ccc67f88808be25"],["/archives/page/4/index.html","769c6eee1889d1e333096b91e1835334"],["/archives/page/5/index.html","321919e465d63fce49e59e99bd6781b2"],["/archives/page/6/index.html","fcb093537bbd2459c1669a1fe4b92249"],["/archives/page/7/index.html","1cc4f4cc1ba2899eadd3ee749202f4d9"],["/archives/page/8/index.html","94b2856f49eb799f17b1be709b238eb1"],["/archives/page/9/index.html","d94a6d86b0ae8dfc943d4bbdf19a2a18"],["/categories/index.html","4ad62bea5042fc1b6914a596da29e707"],["/categories/java/index.html","9b2f6003ec37bf05b4bf12cdaf646315"],["/categories/java/page/2/index.html","f7c4ea2aa6662961128d7bd27077c5ce"],["/categories/java/page/3/index.html","22e4e349cbfe90fbdb49844175fa5ec3"],["/categories/java/page/4/index.html","86f8ceb6e9ec6d5f0f1ab2642c243b35"],["/categories/java/page/5/index.html","18e1ad96cd62d766d00994c822b71b31"],["/categories/java/page/6/index.html","1f97525d6d47b773bd74324d24d345d2"],["/categories/java/算法/index.html","a830a9c08f12c9070dcabc050f168ae4"],["/categories/java/算法/page/2/index.html","beb3d3e154df1f902b6c68412b04ea37"],["/categories/java/算法/page/3/index.html","9aae07896e0c63a4250cf79bc16acbbc"],["/categories/java/算法/page/4/index.html","94792aae761da68532587e34c622f0e4"],["/categories/java/算法/蓝桥杯/index.html","b0e2db1d5aaf93f6287a9fe739057919"],["/categories/java/算法/蓝桥杯/page/2/index.html","7ba31eda50aa0e22e1220c46af84d960"],["/categories/java/算法/蓝桥杯/page/3/index.html","edd46a7719411b90935696be8737bbda"],["/categories/java/算法/蓝桥杯/page/4/index.html","2be390fb8416acd459c8639f6e5eec1c"],["/categories/java/蓝桥杯/index.html","9e08e0ed6b2d2f9dcd19dab759002500"],["/categories/java/蓝桥杯/page/2/index.html","04fdc102553301c09ed39872c716f72c"],["/categories/python/index.html","a696ee6491605b26774db7ecf99e4ddd"],["/categories/python/page/2/index.html","56e704ac97d24c4ccff2f454297be208"],["/categories/python/page/3/index.html","e22d2aee59391248505d0e5ef70ffbc7"],["/categories/python/蓝桥杯/index.html","5b0fdf4952c11c73b2cd011cd20cbc21"],["/categories/python/蓝桥杯/page/2/index.html","3f52e512653e83f4a37c56dcac732000"],["/categories/python/蓝桥杯/page/3/index.html","0ac5a3220da013163e3dcc6341056b10"],["/categories/python/蓝桥杯/冒泡排序/index.html","f59f8b68603703252277768384b57af5"],["/categories/python/蓝桥杯/结构体/index.html","4c5c24410e59c9e642fc303b983dc821"],["/categories/python/蓝桥杯/链表/index.html","8c40251439dad4153b1df930ad3ff6ce"],["/categories/教程/index.html","b0e46056368109bdac6cfae79e840bcc"],["/categories/日常习题/index.html","87d516e71612e9f7fd1d909e620694fb"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","1f2b02cfd337761c18e0059637e032fb"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","d77d020f76a3c639f9bad51f7411a875"],["/page/10/index.html","8ab676a37e8ebbddb976030b43eb3d0c"],["/page/2/index.html","7c6c36b8dfeaec8ac13af2b1dbb757a2"],["/page/3/index.html","7584402bd205995410fd057cf47ab46e"],["/page/4/index.html","2626d5b6335398c03143762ab8e0241c"],["/page/5/index.html","941e668c8b61d3af54d365fe290da816"],["/page/6/index.html","a9c85385db84306dc1cc8bd81f6c05ea"],["/page/7/index.html","f5dd89e93ea5b521182f0b8d0ae83d08"],["/page/8/index.html","ef450a2ba9323c2919ad83caff75e241"],["/page/9/index.html","1b16012583071ded6b86bd1973bea735"],["/sw-register.js","1ff568b5c6050b43fb034cfa048f4c82"],["/tags/index.html","8240132a6236986a2e2984cb7cf815cf"],["/tags/java/index.html","a832b6a1cfdb56e492d2f38eed2d31b1"],["/tags/java/page/2/index.html","b28c7f091f3421684f3c864c5ec7abdf"],["/tags/java/page/3/index.html","e7a10ead3800cccf0d6a7baed7ae1670"],["/tags/java/page/4/index.html","f7abf8e33cc30567036233770b2d927c"],["/tags/java/page/5/index.html","8c3d3f56836cadc85e6d87b03230f39f"],["/tags/java/page/6/index.html","bdb03c3fc9434a86b75f16cd3f483453"],["/tags/python/index.html","28e6fc2ab90e2dcde225fed6905ab258"],["/tags/python/page/2/index.html","f68ea7d4622aac1d971eeeedf723031a"],["/tags/python/page/3/index.html","6f2961fcad27aa9a833e4c3ff5b1254f"],["/tags/冒泡排序/index.html","8601801db32c6c96091cdafacc577b93"],["/tags/算法/index.html","a9e91beefdc402b6a7052d8b9930210c"],["/tags/算法/page/2/index.html","8c43d995f5451a19e3733587cce5a520"],["/tags/算法/page/3/index.html","82b176d32d6b6199a8ba052cde1d484c"],["/tags/算法/page/4/index.html","468bced3744d7d6aa888a12b74060940"],["/tags/结构体/index.html","7d77c3c3c95f45078aacc263d7cdc9c6"],["/tags/蓝桥杯/index.html","a826faf1926a105bc95f073b2f8a05d3"],["/tags/蓝桥杯/page/2/index.html","4b4fadaba4a7190ec3a6f0fa4e2e897c"],["/tags/蓝桥杯/page/3/index.html","c70a8fca7d9e34576cfaa56a1e2ac3d8"],["/tags/蓝桥杯/page/4/index.html","d50ae63dc5027ce4e95556a16a3364ed"],["/tags/蓝桥杯/page/5/index.html","716306b85a7d2b617e12e450a6e57d86"],["/tags/蓝桥杯/page/6/index.html","d8ea880a5dfa224888321d3e74b83ec6"],["/tags/蓝桥杯/page/7/index.html","81436c6a34ec30760de5b70af7659746"],["/tags/蓝桥杯/page/8/index.html","675706a9b7b6fdfd9ef1994c3757b4d2"],["/tags/资源教程/index.html","ac3da1cd1a06760714f98d0590a4d529"],["/tags/链表/index.html","e2b1c018455201434676ac94190b83d2"]];
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
