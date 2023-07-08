/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","7b0534737a0a1232130f01569ab673a0"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","190bfeb26a70ab3991fb362acf353045"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","6bdb9947bd0484faa60be5a99c178302"],["/2023/04/22/验证码（random类）/index.html","69dcacc18da6e647c1aeff13202871b2"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","b22b5e106ab98f29ee4c8e532b5e754b"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","132e2b28a301aa4332234ec59cf9d5c2"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","b784fc485a1079df260959c459a12450"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","a53075bc4f07da7c9c8fe73ef758a7d9"],["/2023/04/23/蓝桥杯-山（java）/index.html","fae33580aac2a762821a3a5cb638a171"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","ec95a2cb0493d614067b1a6ccea61d1f"],["/2023/04/23/蓝桥杯-时间显示/index.html","7de8e888af9d61b980dfdec2dc7977b2"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","915b15f33902d8d81811b7cc9e3fc1f3"],["/2023/04/23/蓝桥杯-特别数的和/index.html","9a34b52e11ffadbbfc17aad36f292388"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","2260ff2de0e78af7af461731e73f467f"],["/2023/04/27/案例2-1 商品入库（java）/index.html","0a49bf6df439a0b93bf88628a76dc3d3"],["/2023/04/27/猜数字（python）/index.html","f967b703987703114c97f04733d9fe9e"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","c0951352420357ec33f3ceba59b1fd28"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","d8387f392108957efdc020ff9e11fcec"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","f4f14a6fe207f7f90847d61a850e0ea9"],["/2023/05/02/数字三角形（JAVA）/index.html","0c13af8333bd8a894f72197cfef6fca2"],["/2023/05/05/k倍区间（JAVA）/index.html","098e9d16102b8ec5d0fac79c21efa261"],["/2023/05/05/作物杂交（JAVA）/index.html","d0fcb7d7b7cdea8b9f8c5521f0b23dcc"],["/2023/05/05/包子凑数（JAVA）/index.html","9cbc35fd2498e2643d99e87375a90d31"],["/2023/05/05/取球博弈（JAVA）/index.html","2e14643937dc30cd51c07d1e1e5fc8fb"],["/2023/05/05/回文日期（JAVA）/index.html","67ea461dd9ca3eee18761c90e013bd20"],["/2023/05/05/砝码称重（JAVA）/index.html","a9658cf7e4b237fd6cca791578f064ba"],["/2023/05/05/等差数列（JAVA）/index.html","c5ffa6346be48cffb4ca93ccc27ab236"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","92caeb4cd5808a2342ec8c0ee53945af"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","17226108e5248deeacb4816e2d212dfd"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","8f667a97de48db8d3fe76cb07e2da361"],["/2023/05/05/蓝桥杯--排序（python）/index.html","46ee3bb24f6ecc0c174cdaad49f11cc1"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","94d45fedbbee2e2b5ee76034d04a8410"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","ab73483abad094307a8fca55b708b593"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","e57e17bb494274ea7cc3baac2694c6d4"],["/2023/05/05/蓝桥杯--空间（python）/index.html","a9846c527b8c4a8322f70b6537be2dd0"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","dadfbc3f296074ae33cabed08d81e244"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","2ae0069f05a66f9ea8e7fdd4a37378d4"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","f7802987a4c12ed3b257531003e9650c"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","0f194576f23d82e7a2e58c03a4151e0f"],["/2023/05/05/蓝桥杯--质数（python）/index.html","a0158a392c65ebc2ef96eb7fd3ee01a3"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","390b35ff849963a10d02423550cd3a8b"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","ea85dd4b9712d9eb5fdd47e6ebca67d1"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","abeb4ff5660b6f4fc1439f1b8d03775c"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","a58c9fc909c56a8416e0c2fc61b7ffb7"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","21764c0e93c3bd584031844af0e271f6"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","eb12c69505464b011dbf4aebe89b3abd"],["/2023/05/05/质数拆分（JAVA）/index.html","e0b12b41cbd60c53edd15704dc9c4c46"],["/2023/05/05/闹钟定时程序（python）/index.html","e387ae937caf7996349a5d5635f3fedd"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","4d02e3607d0c9ffc650c755a93fdbe78"],["/2023/05/07/GCD（JAVA）/index.html","eb3d658df27ee4f502b3f0c836ada3a2"],["/2023/05/07/七段码（JAVA）/index.html","dba5ebd016fd632c17254e96dd62f7af"],["/2023/05/07/全排列的价值（JAVA）/index.html","cabdeb17e3774e098a85d0935ddec32a"],["/2023/05/07/双向排序（JAVA）/index.html","304a6941b4a1a6cda110c367f5cde0c7"],["/2023/05/07/四平方和（JAVA）/index.html","f5c9cff603d7cb3c250748bc923c2a9a"],["/2023/05/07/回文日期（JAVA）-1/index.html","7eb04195097b2d437ec4fb1698a7f2be"],["/2023/05/07/山（JAVA）/index.html","0441f0b2aa9508d777cab5cb622ea4ab"],["/2023/05/07/数位排序（JAVA）/index.html","dfcadb7a57cb55266b97340862c48b79"],["/2023/05/07/数组切分（JAVA）/index.html","d153087a6d2deb5d23d077fffefa4ab1"],["/2023/05/07/最优清零方案（JAVA）/index.html","c73fb6d6b2d3a26a6d6a2dc7cfb21f11"],["/2023/05/07/最少刷题数（JAVA）/index.html","87ebef424ddf6b1a16631435e8f8b939"],["/2023/05/07/杨辉三角形（JAVA）/index.html","33bbabcd5239482a37311af386db99c7"],["/2023/05/07/求和（JAVA）/index.html","d8ac802e334eb4b05d4698552c9cab79"],["/2023/05/07/求阶乘（JAVA）/index.html","776ce8f0bdbde4637f2d508220a8e319"],["/2023/05/07/牌型种数（JAVA）/index.html","ef257c971ff49cbe34937fd220c810c9"],["/2023/05/07/猜字母（JAVA）/index.html","42338100e2a5e84609857398d4050808"],["/2023/05/07/路径（JAVA）/index.html","0d6f5828717ff4be1690b5d345852d50"],["/2023/05/07/青蛙过河（JAVA）/index.html","6f083a5a974adb8f5d037e69296ba2d2"],["/2023/05/16/重合次数（JAVA）/index.html","c1f949934cc46fe704146f695a88166d"],["/2023/05/22/左移右移（JAVA）/index.html","e6877f260f6373adc4145728f21f2441"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","56f1bb2897d90935f314d46bd3f7dfbf"],["/2023/05/28/本质上升序列（JAVA）/index.html","3931a0472763cec781ac4c38405586e1"],["/2023/06/07/方格填数（JAVA）/index.html","9a9c75a727b1e53bf9ea6f5bcef85a93"],["/2023/06/09/合根植物（JAVA）/index.html","5fba6bb7afc031f1c7bb0dfb736fc6ea"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","e782023da17de59a25b0f0b13e50adb1"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","6134277b7226688a074528a0301355ca"],["/about/index.html","27a475d164d1cab09d5d1c757f31619a"],["/archives/2023/04/index.html","d4372d0b47375a90b5dc40bb9ecb4c25"],["/archives/2023/04/page/2/index.html","e53461ca0299d7aff5b6b46332e53cbf"],["/archives/2023/05/index.html","a539662d93629a692befcf390e42a5c2"],["/archives/2023/05/page/2/index.html","368548bb3002e797462098da76a00161"],["/archives/2023/05/page/3/index.html","060ed204d0bbee6beb9feccea46ad47c"],["/archives/2023/05/page/4/index.html","42c4ab69b5b43e39b7a44eea840a333e"],["/archives/2023/05/page/5/index.html","d19e173fe408ae8a548197485fbe7069"],["/archives/2023/05/page/6/index.html","39be1f864fc3d70082be53e79d45ca81"],["/archives/2023/06/index.html","4f5db2b28c5b5a217c7d890460918a40"],["/archives/2023/07/index.html","d61e591dd9c769b64261034832bd6371"],["/archives/2023/index.html","abe43f612070c42acfdcaa47559f7747"],["/archives/2023/page/2/index.html","612616d51e4ddf76aca6177e69e5efe1"],["/archives/2023/page/3/index.html","a6ba70090a14229e492b3e8636756843"],["/archives/2023/page/4/index.html","b9a1c433989bd3d8af3e4f0a8ca3419e"],["/archives/2023/page/5/index.html","bb1a0fa5e64e71a11374d26d54901c28"],["/archives/2023/page/6/index.html","25a321b71340e04d12673056702f63c3"],["/archives/2023/page/7/index.html","a58e099e8d1e74eb1da4dfccacecab98"],["/archives/2023/page/8/index.html","fe4fa29373690f3754ee3baf1cef6d52"],["/archives/index.html","3105bea7b9d5b50c66ffeac3d4761986"],["/archives/page/2/index.html","c3caa03b55589a4a158a579a756d475a"],["/archives/page/3/index.html","09e1268d68f95e4cdafebbdc34216f4e"],["/archives/page/4/index.html","039810231e20eff69f44e23959fc7a7c"],["/archives/page/5/index.html","34abcd724c30f97e188f7fcdc14eb8f6"],["/archives/page/6/index.html","288850902b8cf6ff895ee2e570df2fd5"],["/archives/page/7/index.html","f8c256873700e560863ac3f13cc0209a"],["/archives/page/8/index.html","0a9c5881319cde997189a8c8e4696943"],["/categories/index.html","4363a9160be34349148aa79ba13f4489"],["/categories/java/index.html","e9346417c370764c6f133ee6c8642325"],["/categories/java/page/2/index.html","db3fbc86b537e222473340f493375db7"],["/categories/java/page/3/index.html","7050d558ed4726f23142a0c5da69e75c"],["/categories/java/page/4/index.html","03b85cf3a48e58ba742ecfe55135010f"],["/categories/java/page/5/index.html","865f24e699d8420077356ff8c82ebe85"],["/categories/java/算法/index.html","7da73cb1270dc96fad2b5d090c254756"],["/categories/java/算法/page/2/index.html","b1917cc23b35cc2eedeb181e59cab943"],["/categories/java/算法/page/3/index.html","30299ccbaa40369c85e382551a02b585"],["/categories/java/算法/page/4/index.html","8c42d37ac65c4e0f30488323a7d697d1"],["/categories/java/算法/蓝桥杯/index.html","2e10ceb0f8a4555626a2c3e7aa192ad4"],["/categories/java/算法/蓝桥杯/page/2/index.html","a19aa258bda4c4d7432afb7081ecb59d"],["/categories/java/算法/蓝桥杯/page/3/index.html","3dd5cb060a36917a53156b678eaca456"],["/categories/java/算法/蓝桥杯/page/4/index.html","d22ae3d93606a2e100d03c8e962f5e61"],["/categories/java/蓝桥杯/index.html","65ee4c931f656238645504bb4864498c"],["/categories/python/index.html","4e1ae8650b53c6e40d18d7489b07769f"],["/categories/python/page/2/index.html","54a8e3e4c061e78b65f5b573de1d9dff"],["/categories/python/page/3/index.html","0ca1a2ccabe21826674783a9ae247ca9"],["/categories/python/蓝桥杯/index.html","6964a138ec5770c648574ec399090290"],["/categories/python/蓝桥杯/page/2/index.html","4c8fadb9e3e48628d509ebccc385bbe2"],["/categories/python/蓝桥杯/page/3/index.html","2f98b9a41f03208370d967bfb8b44f6e"],["/categories/python/蓝桥杯/冒泡排序/index.html","ada04036ec352a4d90ede63ba3255ea8"],["/categories/python/蓝桥杯/结构体/index.html","93b47fa00809294f259b2a669987a453"],["/categories/python/蓝桥杯/链表/index.html","063a38bd763ac3d8613c9cb11a5f3d17"],["/categories/教程/index.html","601aff895522b245a3479d4854ebf6ac"],["/categories/日常习题/index.html","53b9830fbd90000da35e12f9e1158710"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","3869be91abb30923237ed58e7e97326e"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","808cad566ae32548b2ee5e44161b50bb"],["/page/2/index.html","3f2be4f5db0b939c916467a2f63222f0"],["/page/3/index.html","e3d2cc9ffd3487377c2c4e9bb856487f"],["/page/4/index.html","7f76ee0de43958e60d195ebe744a1aa2"],["/page/5/index.html","802a7e628984365c8e39f946c5255034"],["/page/6/index.html","b7a01f7121a3838a07de0e8edd848b76"],["/page/7/index.html","7560c082dca424c7ffcf7947be968bc1"],["/page/8/index.html","8a022bb93da8ac749e1e9cc53b02efbb"],["/sw-register.js","f51a3718d5eadff6aee8b83605c36c30"],["/tags/index.html","3ec6bf8042837cbd942de3438cad0143"],["/tags/java/index.html","7f9a00ad83e11bdaf33e416da4d3a839"],["/tags/java/page/2/index.html","ee155a14a362dfaf9e95d805c05d2a98"],["/tags/java/page/3/index.html","08b2e3e91ec84f7207ab4a9d33002c8c"],["/tags/java/page/4/index.html","cce10db724777e5d456274884064fdd3"],["/tags/java/page/5/index.html","d660c3d021792cb371ca879c68108df1"],["/tags/python/index.html","8735bb853e51db6c8ff091400a41d408"],["/tags/python/page/2/index.html","ef85ba0701a36e802dcd0bb88a9e2802"],["/tags/python/page/3/index.html","ef7079b0d5ecec29bd864b400ffe7871"],["/tags/冒泡排序/index.html","8b60a50446e1a61684f1bb06d3635364"],["/tags/算法/index.html","abcf61a8d82c0a0128f7bc178ad9f088"],["/tags/算法/page/2/index.html","f6c4fb44a651212dc0556a1883e3f3e2"],["/tags/算法/page/3/index.html","c03ab2ea29682168c8d936669486e179"],["/tags/算法/page/4/index.html","91ffe92638e381b8770f11204599341c"],["/tags/结构体/index.html","5fe778236b2edfaa151ac4adeb840178"],["/tags/蓝桥杯/index.html","707a8e67c126dfbdda4944a6aa317ca0"],["/tags/蓝桥杯/page/2/index.html","478b9ed910059d955b1ca41293912342"],["/tags/蓝桥杯/page/3/index.html","46cce2f20b3033ee94e4614b14609c85"],["/tags/蓝桥杯/page/4/index.html","b7f727f5c2e48dfc64b467f3eeff7ceb"],["/tags/蓝桥杯/page/5/index.html","d98677de1917eda417888ee6d3cff909"],["/tags/蓝桥杯/page/6/index.html","6d34333230e2566474f25d5e14e3d492"],["/tags/蓝桥杯/page/7/index.html","c468971affc8032629b1a83a07ada64c"],["/tags/资源教程/index.html","8983f970b55b4656088e268da86fb6a4"],["/tags/链表/index.html","2220f56af8e6b6bb5ebf025d3b69fd8e"]];
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
