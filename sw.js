/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","3ca41fd4b3336b9d4c72d71b81224b5b"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","dd6bf23432213d12f2571fb8bb4a7b47"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","3c03a51d1d1fe9a4058fecdc47192c1d"],["/2023/04/22/验证码（random类）/index.html","1ee091614e40fe557091cd76f02c70a3"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","952b19fe19cdb06ed52d328fda2ff4ec"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","03f17df118113ac49f89637a22571bd0"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","a245ab28b8c0c0d8183ce090d614439c"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","d1060da778e82153d1277cc33520e3ad"],["/2023/04/23/蓝桥杯-山（java）/index.html","971be7cb42a99317752c1da0b742bd19"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","970d539571436c824d9d18f5483daa28"],["/2023/04/23/蓝桥杯-时间显示/index.html","a1644e1167d30a6deef1f7b82917f4bf"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","39e8f4116e85df5caa560d2d61c358c4"],["/2023/04/23/蓝桥杯-特别数的和/index.html","aa533e1d497fa820d465693301131165"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","d384c350ef4110d09f0616d6eadadec7"],["/2023/04/27/案例2-1 商品入库（java）/index.html","62d29ba8586718d19826b73511ac132f"],["/2023/04/27/猜数字（python）/index.html","0ded6937f20e1b64263dcd5ae4afdda6"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","68a21cc4fb2fc928e49539a2775dd907"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","08d46a4f72d0378a0e090911916a1b40"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","481de4ac665f04d998f14b3d2a5767e1"],["/2023/05/02/数字三角形（JAVA）/index.html","1aaa8a75ce95e2c7fdfb1ece473dca81"],["/2023/05/05/k倍区间（JAVA）/index.html","aefd04a70570717c3d8205537053dff1"],["/2023/05/05/作物杂交（JAVA）/index.html","6639e1f68b823b122b675d66ae64d093"],["/2023/05/05/包子凑数（JAVA）/index.html","dfc70c369c4d3c3f6b2685dc4a2a1884"],["/2023/05/05/取球博弈（JAVA）/index.html","b3c7f85df4e3e09a1879eb66360b0cd6"],["/2023/05/05/回文日期（JAVA）/index.html","c100aa499108e043b27e9c1f53e264c7"],["/2023/05/05/砝码称重（JAVA）/index.html","afa853095f1c8548b9485532c23776b8"],["/2023/05/05/等差数列（JAVA）/index.html","1c69ee798e1e9c1ecc1a7456b25f942b"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","f0ded91e3ef003d67d11aa30190a6a11"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","99f633b18cf635d25f7528269b122fa0"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","dc3a4d971edd2bce4ca53b6d10d66439"],["/2023/05/05/蓝桥杯--排序（python）/index.html","b3ce00b2db58672159fb19827ea6a3c0"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","830d350304bf2eec7737664fac3acefe"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","4016331e5fe305650bd0bd6a3913c17a"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","6124aae198e5bea06a47abaf28279204"],["/2023/05/05/蓝桥杯--空间（python）/index.html","44a641aaf5641ce89016c5fb270f33ab"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","73e0cbecbbe65deede7f6c82376ae6df"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","132940f610d49298e424828ba8054dd2"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","48b69d2f7c7b99595aaf866d1ebe1090"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","da1778f6d951d514543f2a31827be3b6"],["/2023/05/05/蓝桥杯--质数（python）/index.html","a887595d9d14e8ffd7d49cb3053ce740"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","56e02a5668a113a9a150da669cc260ad"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","4832c88afe9a35b9069393a71147c97f"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","f0e6e3a069545bb7faab12b119ff086f"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","713666845b604f816fcf1cf3337aedee"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","3728525d257fcd3fd7be2746f5ab71a6"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","3b34331ce3b4a34915e32cb8c90ea2f3"],["/2023/05/05/质数拆分（JAVA）/index.html","701515121b4ebe3acabce73caf345ac9"],["/2023/05/05/闹钟定时程序（python）/index.html","e64088cecda842a2dc709d4d80ca3959"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","02835299953398e38f174d0f08f173b6"],["/2023/05/07/GCD（JAVA）/index.html","fefcda797373f3abbc5a074e9215c659"],["/2023/05/07/七段码（JAVA）/index.html","b21c32f46385dbf735b1602550434827"],["/2023/05/07/全排列的价值（JAVA）/index.html","0312e527bae07848afd64f53505448f5"],["/2023/05/07/双向排序（JAVA）/index.html","d0cddd92494252f7841fb2ff2411f3ba"],["/2023/05/07/四平方和（JAVA）/index.html","d5e77db7df89b1f70dd7cfe81ff09f1b"],["/2023/05/07/回文日期（JAVA）-1/index.html","07f1d9bc988eeee6da7bb534a84e9485"],["/2023/05/07/山（JAVA）/index.html","1b2d3cf1a864610256c1a96321175b40"],["/2023/05/07/数位排序（JAVA）/index.html","862248a7fdf740cdbd99350b7ba4fbc6"],["/2023/05/07/数组切分（JAVA）/index.html","55555ca8a946b928926c04a7f5f671ec"],["/2023/05/07/最优清零方案（JAVA）/index.html","e5fbdf14d6063da007ca81391e44124e"],["/2023/05/07/最少刷题数（JAVA）/index.html","6864e230f3af33d31927547262a0aff7"],["/2023/05/07/杨辉三角形（JAVA）/index.html","311faa51477fba2ae55cbc090d690b05"],["/2023/05/07/求和（JAVA）/index.html","aeca027410fd84b4feeca7f6235fcee4"],["/2023/05/07/求阶乘（JAVA）/index.html","a88506f77d351157c9f69c67c70195b5"],["/2023/05/07/牌型种数（JAVA）/index.html","b66b7e209d4f4bf7dc0747688e922417"],["/2023/05/07/猜字母（JAVA）/index.html","8cf6bb150991e3af37802ae03ed0b0bf"],["/2023/05/07/路径（JAVA）/index.html","2321488fc4b338965ca7896adf568f88"],["/2023/05/07/青蛙过河（JAVA）/index.html","01c2beca01da0f546870b3eef5229439"],["/2023/05/16/重合次数（JAVA）/index.html","1ede9b59e003aca3f78d03d40e678c0c"],["/2023/05/22/左移右移（JAVA）/index.html","4acc8abf11c6ff862be0b12fb6f20670"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","f62850218be66be33521dabf480049f3"],["/2023/05/28/本质上升序列（JAVA）/index.html","d3618c31b0badbd2280e6aac94d56f05"],["/2023/06/07/方格填数（JAVA）/index.html","5436a8bf9aa19c2b63bf8a92aff20c2d"],["/2023/06/09/合根植物（JAVA）/index.html","7014de32e18f39e7d9b386b95ae7a67d"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","74f0d3e0210f6a802706ce22114ce4fb"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","6d03b6467c5e8c8dd03e59b3d13b055c"],["/about/index.html","6563733579140a46e3f0ddba833378b8"],["/archives/2023/04/index.html","a77a5b1fe483a9c1419673363e7f68f2"],["/archives/2023/04/page/2/index.html","818ecf11404edb09550a1c338e219fbd"],["/archives/2023/05/index.html","1dd33f155910bf38d54455f06b57269d"],["/archives/2023/05/page/2/index.html","c76a01049819593c999d990f97da6744"],["/archives/2023/05/page/3/index.html","2d3b466b181d0fac44898981c4f47185"],["/archives/2023/05/page/4/index.html","b41502d0994ce47522630039f1619307"],["/archives/2023/05/page/5/index.html","49b622fe73950a132b6f2028b7e1d2ab"],["/archives/2023/05/page/6/index.html","e4a7887cb99111fcd6b76c0599d86cc5"],["/archives/2023/06/index.html","791641eef49c99f8d84b16ce1b1c566b"],["/archives/2023/07/index.html","be08f6d275abb7648267713f94026305"],["/archives/2023/index.html","c755ad0571887a51ff6d4d5f5418987e"],["/archives/2023/page/2/index.html","c2c517d1bc9f567ff4db36e8a882a82e"],["/archives/2023/page/3/index.html","ae226184c82a60bab68bed9d083e8ee5"],["/archives/2023/page/4/index.html","62b7f2a19d5da7a4297b8fba21181526"],["/archives/2023/page/5/index.html","e2fc88feaebc64ddb1ded5bc9414ba18"],["/archives/2023/page/6/index.html","837de6c967bd8bb1bf452c1e52bd9b2e"],["/archives/2023/page/7/index.html","e7e65bf269d12fb3213ab1a77670dece"],["/archives/2023/page/8/index.html","e9b650ee5daf90fefbbaaa7a3bda86f8"],["/archives/index.html","b8cabc59f7511f5cb3535db7a55b2bd0"],["/archives/page/2/index.html","9e9d5d23881424595930d00254611b0f"],["/archives/page/3/index.html","358111df495e401d6b6ac2c75260f52f"],["/archives/page/4/index.html","505493ca3c73a39c3fcece9d47996350"],["/archives/page/5/index.html","f0cc24d06c6c0c370a7f81a908739d49"],["/archives/page/6/index.html","e587db84babc09d0d1bacf65667472dc"],["/archives/page/7/index.html","68b4734325f50356985852f3b8245c5a"],["/archives/page/8/index.html","d2ec17189a4067478cf1394398129a4c"],["/categories/index.html","630f0cac9fda0140020caa4e30842263"],["/categories/java/index.html","8d2559e65f4c7615d4468d405a1a6c42"],["/categories/java/page/2/index.html","87bc960448c83d7aa9592c687526b17e"],["/categories/java/page/3/index.html","cccd5e8808acb4adf85cdee524abd4f9"],["/categories/java/page/4/index.html","d0c7326d71abacaac0d6a045dc5b755a"],["/categories/java/page/5/index.html","17e9bac78644202e6370a47a1965ce89"],["/categories/java/算法/index.html","13c1b9859173d86ea873345bc2dd7f51"],["/categories/java/算法/page/2/index.html","6231b3cf18c6ecd070086f4f9e5188b0"],["/categories/java/算法/page/3/index.html","790341d35f0e8efaf7f314d9c693c09a"],["/categories/java/算法/page/4/index.html","3969cb004ddc2207ecf82290691a2a26"],["/categories/java/算法/蓝桥杯/index.html","54a7cbb8e2747cb0ffc383d0402e3bc0"],["/categories/java/算法/蓝桥杯/page/2/index.html","5a9da78167d2bb10ba64de5239f21a87"],["/categories/java/算法/蓝桥杯/page/3/index.html","1f828614b22f513841dc62e2378cd6fe"],["/categories/java/算法/蓝桥杯/page/4/index.html","584fd493efdcd7c516117fb621b4325e"],["/categories/java/蓝桥杯/index.html","feb2a934578ed6afca6cb3fd3ead3909"],["/categories/python/index.html","e74eec1c35f2b6d6a25aa0521548961a"],["/categories/python/page/2/index.html","9365d56fe08a0bae8df79c20f2c2092d"],["/categories/python/page/3/index.html","11b73fad86786fa1476e7596b2422720"],["/categories/python/蓝桥杯/index.html","84206c51a41c11ec4bf3d8e99c46f7d7"],["/categories/python/蓝桥杯/page/2/index.html","04a84715a855dcf14d92ec8520ec6db1"],["/categories/python/蓝桥杯/page/3/index.html","cf4ef379933c4457cc04a1abf31dfbb6"],["/categories/python/蓝桥杯/冒泡排序/index.html","fac268de6c868a8e95b5c7474c1803f4"],["/categories/python/蓝桥杯/结构体/index.html","27a70f37614c5405895ff9b1e144ea1b"],["/categories/python/蓝桥杯/链表/index.html","19d042c1445d78c9bb920c3a3c50037e"],["/categories/教程/index.html","096d2d62c96a650868363f784cf45161"],["/categories/日常习题/index.html","be7f08ec1217ac3fa9938aab4f7ec3f0"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","2be38b4401164e3b59fff580292265c7"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","4988b1358f5ba816d054ffaeff1a665c"],["/page/2/index.html","3843cf39e3d4b988603a75db8f9471ba"],["/page/3/index.html","0eedb2a50a2eae7bb40fbe56740e77ca"],["/page/4/index.html","dc41e4e96907b031ffa5e8904376ffc2"],["/page/5/index.html","b3e6f6132c2f7340050a62be6ffa1eff"],["/page/6/index.html","c5e1e5d64ab4836dd3f39248c495bb92"],["/page/7/index.html","4910295634363944a3577833a7c15c24"],["/page/8/index.html","a59ac595309fb7665ebde7fd23d9b09f"],["/sw-register.js","410d42b79d3acf401b3e4272c9f34f17"],["/tags/index.html","5d8cc082dcbf654799e924729d1da1b3"],["/tags/java/index.html","afc5307a1780c5e068110f7d4e09ba0f"],["/tags/java/page/2/index.html","0d26316c4c301bf139a245d4ad84c1e7"],["/tags/java/page/3/index.html","6802a3c098eb0821c4eae16f2c74381d"],["/tags/java/page/4/index.html","bea3fb9549e32c16f72f42123aab47a7"],["/tags/java/page/5/index.html","ab4a1e3eb440af1c35d3e50bae4ffeb3"],["/tags/python/index.html","9ef46d683a9367f57196b65fdea3e49a"],["/tags/python/page/2/index.html","c24bc35f2b2c089fca8c82c3ab067c8e"],["/tags/python/page/3/index.html","e1bebb7a5b9b53947d22223dfd6ee91e"],["/tags/冒泡排序/index.html","04e3a99ebaeb8729f214d80aa758839d"],["/tags/算法/index.html","c18ea917da40056c9f9fb8e2e9c06e2a"],["/tags/算法/page/2/index.html","05562f69058052597f98a0e420a90fac"],["/tags/算法/page/3/index.html","fe9565e8f01fd4981177653ef957d5e5"],["/tags/算法/page/4/index.html","c69a185116b7c2aff27cf2bea375b5f5"],["/tags/结构体/index.html","7c15258950e9a06a286063fedbefb154"],["/tags/蓝桥杯/index.html","b50fdc33d856f7b303fec02356731614"],["/tags/蓝桥杯/page/2/index.html","74d64caad9d3e1eafd79f3bdaa3a3e5d"],["/tags/蓝桥杯/page/3/index.html","652af6ef76bb5a1519421a8e4e8a9d6a"],["/tags/蓝桥杯/page/4/index.html","bea2990bde729270e0e371640c19256e"],["/tags/蓝桥杯/page/5/index.html","7e3ebcc178900d943c40a90560f3bd6b"],["/tags/蓝桥杯/page/6/index.html","55af8c8d7e2c5829401fc17d24253569"],["/tags/蓝桥杯/page/7/index.html","8908e841df9c8c33befe256c15522c75"],["/tags/资源教程/index.html","21a93246d853b822f04dd900f5b38927"],["/tags/链表/index.html","d7f280d136d951453b584388db939a15"]];
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
