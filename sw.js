/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","3a8d67216ad747a5ef65b5d4e25149ae"],["/archives/2023/04/index.html","3c571d5624a33a73299f924cddd0a4f1"],["/archives/2023/04/page/2/index.html","61e62d6c1cc54fad04b626c5e4c3e302"],["/archives/2023/05/index.html","a17443f188fffc4191ff871e6548da17"],["/archives/2023/05/page/2/index.html","d3ebd8ce2fb207f797b2605b6b1c102b"],["/archives/2023/05/page/3/index.html","dbe747ec344a2d7576a095a439b55ccc"],["/archives/2023/05/page/4/index.html","71bd087cf0678c8d147569fd6d9832d4"],["/archives/2023/05/page/5/index.html","e89e8a11e5efbbe25013304126532031"],["/archives/2023/05/page/6/index.html","9c75290efd2d887d0433fe61253a0c33"],["/archives/2023/06/index.html","942cb958737dcaccdaf1d0793475efe3"],["/archives/2023/07/index.html","3bff87e110e58627e51f7106fabdc005"],["/archives/2023/07/page/2/index.html","645e16c2f0405e278a008df6cea36b7e"],["/archives/2023/09/index.html","f915d94a02cef1668819d2528009aa36"],["/archives/2023/index.html","8b54ae12f71bbbc32105131ed3bb5e95"],["/archives/2023/page/10/index.html","8b1ae7f6031415c681d3393bbf0ba210"],["/archives/2023/page/2/index.html","6ba8ab0f752c8f0c7c02d86172c781af"],["/archives/2023/page/3/index.html","960dbe643271904ba583b07ec9f613ca"],["/archives/2023/page/4/index.html","235f6762a08dd2bfaa9259045147510b"],["/archives/2023/page/5/index.html","771bb7e0b942c217f06057e1daf86e55"],["/archives/2023/page/6/index.html","13a6f0f118bfda8407870cd718a99b3a"],["/archives/2023/page/7/index.html","1702a24bac95e75f3c2562703a03314f"],["/archives/2023/page/8/index.html","ef4baae885c3e707c2231d2161a7c9a1"],["/archives/2023/page/9/index.html","b08156b6005a0ec6d038aebf8215e831"],["/archives/index.html","efef6b554e44c6e3694633861e535fb0"],["/archives/page/10/index.html","fb390113be9c591a929087efaaa2bcbd"],["/archives/page/2/index.html","3e0c97d2088966ed3bbb15c3e207b008"],["/archives/page/3/index.html","d051d98d62ae33785a8d614240a09220"],["/archives/page/4/index.html","f759da5a08bf21f75703c2dd769734db"],["/archives/page/5/index.html","71495d10a52490d6d342ec13fc072c34"],["/archives/page/6/index.html","6448dcc2453b41ed0f40e6d5cfb4fc23"],["/archives/page/7/index.html","1fa68e2e1173bf3b783cf6d793f0587f"],["/archives/page/8/index.html","773d42ab8eb29d6840f936ae44e8e931"],["/archives/page/9/index.html","f04f78ae7e0d44cd5f76750563325a81"],["/categories/index.html","57ea56a03437a24444fd6f867f111d7c"],["/categories/java/index.html","6ca30330f5e9bb66b091f000cac4dfa3"],["/categories/java/page/2/index.html","439deefaecad806c73cca44a770c6ef4"],["/categories/java/page/3/index.html","750ec6aae5e3d5090163945c0b48aecf"],["/categories/java/page/4/index.html","8f0212f872a452371cc1d8a7881c21f4"],["/categories/java/page/5/index.html","20e286f681f654d9e513a0f00b5cfca9"],["/categories/java/page/6/index.html","75581b52aeedcd765d7d14267ba88eaa"],["/categories/java/算法/index.html","a5dd8e9d5494315ee83f961590d9beed"],["/categories/java/算法/page/2/index.html","6d77cf692b6943e5e6751c7360a9a722"],["/categories/java/算法/page/3/index.html","213cfab63b7c6702059fbd77c1d26795"],["/categories/java/算法/page/4/index.html","e295153107b98f7fff925ebfe3d6be07"],["/categories/java/算法/蓝桥杯/index.html","1371d73e699af8f828e55bd9375a0fe2"],["/categories/java/算法/蓝桥杯/page/2/index.html","ee02e53bd4081be6a9cb0b035de108f4"],["/categories/java/算法/蓝桥杯/page/3/index.html","102b84647601e2572efd190f537629ae"],["/categories/java/算法/蓝桥杯/page/4/index.html","da2f6c7c49e8a43b8575754e3cba3b44"],["/categories/java/蓝桥杯/index.html","299b495eb99ef5b80b09f361af806ceb"],["/categories/java/蓝桥杯/page/2/index.html","2ac5188b2d64c0e9b40fa2a3f623ebd5"],["/categories/python/index.html","cbb18feeca8cda25f2da06ed027c5791"],["/categories/python/page/2/index.html","4e89ee95cc892015dc22b6bfc44dd4d3"],["/categories/python/page/3/index.html","e161510e0eb7e0b183756a49d18fbbdc"],["/categories/python/蓝桥杯/index.html","3b7b5bfd4a359a440f7676084392f567"],["/categories/python/蓝桥杯/page/2/index.html","062845d5064f29c0b881a6d431ea2d44"],["/categories/python/蓝桥杯/page/3/index.html","cbb56efeaa71a3127cd9d70a1ad21563"],["/categories/python/蓝桥杯/冒泡排序/index.html","1084a039b4dcbe5bd874ad04190575fa"],["/categories/python/蓝桥杯/结构体/index.html","2a8b14283c086986e6121b2c1927927b"],["/categories/python/蓝桥杯/链表/index.html","87898b1e1cc4caf54ffed754d0fb1854"],["/categories/教程/index.html","6c3bfc0a0969e3286707d7d7cc873519"],["/categories/日常习题/index.html","76a7f1bc108e1c626d1345265653e759"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","01bcede66a8b6ffa30c7fbddc70939cb"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","23f5727706d1800be3314cb06ce46e92"],["/page/10/index.html","7f04a44f1675d71f1cfff3731288b4d2"],["/page/2/index.html","e921c739c748ece9ff0d44726d2f870f"],["/page/3/index.html","f4201d32823a55962647d93bba3eac30"],["/page/4/index.html","35bd616f28413eeabee41c7582ef32ab"],["/page/5/index.html","93657fc5d61613c637c8205abc6ca523"],["/page/6/index.html","7aad7af45d2b792e41f3dfe9af18c7e0"],["/page/7/index.html","89ae9a34acda0168906d8b5382356c7c"],["/page/8/index.html","83fd458332cea991392a9a26d02a28bd"],["/page/9/index.html","d4e6ebf87a030a0a1c83b8851831929b"],["/posts/0.html","31e4019378b51b86e6dc019c342b95a4"],["/posts/01.html","27f7da6d7bdaa626ec627574f86290e3"],["/posts/02.html","18d0dc91743737dae2df42cd6197f374"],["/posts/03.html","2a021db2e24d68e0b015a4417a3ef225"],["/posts/04.html","fd232d7f7a842ee39f251481fa07c428"],["/posts/05.html","975f37f65482024101eeb8b22c39667d"],["/posts/06.html","cffbd67963fc9c63419225a9053f7013"],["/posts/08.html","c18cdb0fd62fe60dea6252f7a44da3e4"],["/posts/09.html","0aedee1e89ff61cf8993882031f3358d"],["/posts/10.html","0575d0394e87ac71f3c50a9f111691c2"],["/posts/11.html","6fa058d15bed884b53e29ef97e953978"],["/posts/12.html","3c76c5448f3d04435541b01a252e3306"],["/posts/13.html","a81a2bd3ed1328ccefbe5c3abe8d85f5"],["/posts/14.html","01c691105fb5bb71f603f61ea2fd0a30"],["/posts/15.html","18fbee7dc6667eafdb89b420cebab5ee"],["/posts/16.html","b07ef1d7b82006071005d570afbc1d77"],["/posts/17.html","828cd3f0aaa67b25c67a783da9ab2113"],["/posts/18.html","a711fc66364c9364e174812254b73be8"],["/posts/19.html","f645e45c114cbcb47f1676f1809699b0"],["/posts/20.html","a4e14b51e46fdb816fd51df88eb21d6b"],["/posts/21.html","93c20bab9d113873b7cd7a0f5e9f3af3"],["/posts/22.html","2c9a1d961e8b41f26be8ea22f690d44a"],["/posts/23.html","9134727b34246323aee3ed92add377dc"],["/posts/24.html","620ba7e501c5a48eb92238a753a5a61f"],["/posts/25.html","b07aec1f0d589d1d76cc4d1b919457ae"],["/posts/26.html","e005cecff7037647cc8895238c1939e5"],["/posts/undefined.html","e6bb32bf8d91d9cc01fe440fdcfcab0d"],["/sw-register.js","2633f5b3fd45bbde313ccc3ea00e90d5"],["/tags/index.html","ef471c4c406a8a5cdfdd102218c2ee36"],["/tags/java/index.html","81e90c3193dc52d53ee7bf2bd13ba8ec"],["/tags/java/page/2/index.html","32d23922cf6eae397a9d2cc0202f7eec"],["/tags/java/page/3/index.html","5097dcfdd7efd0f5b4c5c01f1201eac1"],["/tags/java/page/4/index.html","b7a26efcca6bd766eaf20cb11045bf34"],["/tags/java/page/5/index.html","5901030b92213012351202e58b5ad752"],["/tags/java/page/6/index.html","66ce0f9f9e1961ca78e87f07d5e46c56"],["/tags/python/index.html","ba6a3e813e856b0a1ff4296625a25ace"],["/tags/python/page/2/index.html","ad815afafa8caed6d47380268f7b39a0"],["/tags/python/page/3/index.html","62c3ea7240165ba283461788e711d42f"],["/tags/冒泡排序/index.html","23689cd30eeafec707aec0e54021723b"],["/tags/算法/index.html","fca80f79427f23f63160646d8c318a36"],["/tags/算法/page/2/index.html","2ac26739ba8b733a568a68d1a35dcc15"],["/tags/算法/page/3/index.html","1706a5e60532f47ce880ef11a17d8401"],["/tags/算法/page/4/index.html","bda315c74323fa87e51bc51ada39ee49"],["/tags/结构体/index.html","bf969f89dd09e14fc6da81f45fe7533c"],["/tags/蓝桥杯/index.html","13fc0be949878c72f65adb56c11ce42f"],["/tags/蓝桥杯/page/2/index.html","7c5a76fbb65a398f2e861514c3e42d16"],["/tags/蓝桥杯/page/3/index.html","1a9708e42c6958e493dca38fdd109a7e"],["/tags/蓝桥杯/page/4/index.html","a1eec6e90bbcc2269ec77f94401d84f5"],["/tags/蓝桥杯/page/5/index.html","694821261b0a4182206fe02805744e2c"],["/tags/蓝桥杯/page/6/index.html","d4f55bd0958366a6efb74722386c01d7"],["/tags/蓝桥杯/page/7/index.html","46ce1a1b210802a48d1daf893e8e83c9"],["/tags/蓝桥杯/page/8/index.html","f484aeb2401d10f23fdae58f8a3ffd0f"],["/tags/资源教程/index.html","dcce557f229bb5a1fbdc2ee090b1526d"],["/tags/链表/index.html","d5b4d8eb6449464e31b41889b6f9a143"]];
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
