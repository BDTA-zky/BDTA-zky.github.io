/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","427f0097d1f58f384f677a2bc68ca788"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","526d406bc095aa290d54da33c83070a8"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","18f6defb093d7e891eaf59aca2c4652b"],["/2023/04/22/验证码（random类）/index.html","c871e8bca175593e22eb1794690f019e"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","d7be1d91982c7bb1e3aae9081b962d18"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","2018839521290f9f8f9e9511bd608576"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","964d2438f3c0ee03fd73df299b183770"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","2dc0c202a8889aab67786af944232efc"],["/2023/04/23/蓝桥杯-山（java）/index.html","ae342e5b301e02b51dafff4c404f4de6"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","28bb743f7618a57143506e7e8f9c47c8"],["/2023/04/23/蓝桥杯-时间显示/index.html","3802b86553216f6a0e589043b7390590"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","fbaa4261beeaf525e637e2bd58d27728"],["/2023/04/23/蓝桥杯-特别数的和/index.html","02bee83db01152cd606e46914421f21a"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","f55183b5ba187cae8e9646f22f4809c7"],["/2023/04/27/案例2-1 商品入库（java）/index.html","df518fae0f6b7f59e64609d2fd6ac7e3"],["/2023/04/27/猜数字（python）/index.html","29f8bd828ccf5509769c3d21e60ec7d0"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","71f2fd0b576329882e4851c0088f5725"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","3343ce7fa6faeb2d911a4771e844d7aa"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","c8184a3da33ee2793e5cef6d8a8ec2d1"],["/2023/05/02/数字三角形（JAVA）/index.html","128870e71721161fb0c595749f5b9a3d"],["/2023/05/05/k倍区间（JAVA）/index.html","a680dba5dcaa11d4e2117f00127f5399"],["/2023/05/05/作物杂交（JAVA）/index.html","73008f3cdde8932e192ba0478b098d65"],["/2023/05/05/包子凑数（JAVA）/index.html","f0d75a2511baed9a0c9d698ed8d223f5"],["/2023/05/05/取球博弈（JAVA）/index.html","994e5788616cc8ae8d63027f8b6cf383"],["/2023/05/05/回文日期（JAVA）/index.html","f27fb9d6de9ed916433d10d6ed094d12"],["/2023/05/05/砝码称重（JAVA）/index.html","685f93ab54fce67cabb56c89506aaf9b"],["/2023/05/05/等差数列（JAVA）/index.html","eb50babb0269149c3230fbc1a12f0394"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","cc89220ea8601852d92db58f581789a0"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","d10f4816dffbfc2dd035420c28c6db85"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","d766b1dadc3747962f853d7a696be3bd"],["/2023/05/05/蓝桥杯--排序（python）/index.html","fa9b84809dadf7c97f1013ef4605e7d0"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","7684743fdf9ebee7631fd6d1c9678627"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","61bea383e0c7222a0a1f7eef12f984ba"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","b7c075c248a9fae007db8c45a006d6db"],["/2023/05/05/蓝桥杯--空间（python）/index.html","9f80a9408d15f6589eb37ead007b5de6"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","d39aabaeb238e6c3fb2e2dd75d07be2b"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","5ba77469be8ce6f04748ad639e1210fe"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","fe6abddef168465d21bd91867624238c"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","8bc2c62fe73ab499fc20c965be20e46e"],["/2023/05/05/蓝桥杯--质数（python）/index.html","be5bb13f03922457e100171e2ad92ac5"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","ed1f2e9dd02f0f6d9ac8f7bd41b09a68"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","ea5b91e8b10142d98375f9a7356d475f"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","1eb59b1d2b04c203f4af92ae0fc15250"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","fa0b305d3bf1fb049368507c7c2c3f05"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","93e49d952ade97aa235503b28bf88f0b"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","0a7af1c6b52f17b3e7addbe3f6bc7d66"],["/2023/05/05/质数拆分（JAVA）/index.html","5f8911d95553fedd3ca9263c2b5db038"],["/2023/05/05/闹钟定时程序（python）/index.html","dd7c0bb2f2acc967fc60b230bde76a32"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","626182acc271d53b7720a1ecd7370a7b"],["/2023/05/07/GCD（JAVA）/index.html","ada3da1b2ed722aedfd66cc6cc4ca19f"],["/2023/05/07/七段码（JAVA）/index.html","b42fd03c0b133e7423b18d9e4f30d53a"],["/2023/05/07/全排列的价值（JAVA）/index.html","d2a42e03eda641fa077b71a65d38ddf0"],["/2023/05/07/双向排序（JAVA）/index.html","dd3b5962fa9813c665ebe6c6e65b1ba1"],["/2023/05/07/四平方和（JAVA）/index.html","8e09408edf591c46c4389a00bc01d35b"],["/2023/05/07/回文日期（JAVA）-1/index.html","9d749173173aa927234eec45e8ea5712"],["/2023/05/07/山（JAVA）/index.html","d29e3046e5e42ff8f73422997aeac59f"],["/2023/05/07/数位排序（JAVA）/index.html","c7562f3ef1cebdca39bdc8c169a94cd7"],["/2023/05/07/数组切分（JAVA）/index.html","4178de923bef7e694914d453d2c34565"],["/2023/05/07/最优清零方案（JAVA）/index.html","46a04433fed6b635c864fbad8b71cd4d"],["/2023/05/07/最少刷题数（JAVA）/index.html","c6f41bb66c04e32f094dffcf17f8b8a2"],["/2023/05/07/杨辉三角形（JAVA）/index.html","f53ec47318719f61202bfe97f51b3d63"],["/2023/05/07/求和（JAVA）/index.html","41b98bf8f671ed8e88b73af2a8d055e1"],["/2023/05/07/求阶乘（JAVA）/index.html","490b5b3c8fa0c13fb4ff62b9db6625c8"],["/2023/05/07/牌型种数（JAVA）/index.html","0cf2b835250576f9a8a2ca7fe040d44c"],["/2023/05/07/猜字母（JAVA）/index.html","14d31577d665e3ccb34c17645b589f33"],["/2023/05/07/路径（JAVA）/index.html","dbe970c4b63a9cbc4731e1856dc9ce3f"],["/2023/05/07/青蛙过河（JAVA）/index.html","3e5da92f3575e0d701af342236a3842a"],["/2023/05/16/重合次数（JAVA）/index.html","802c0c2247e6d944bb60b8c5fb11a0fb"],["/2023/05/22/左移右移（JAVA）/index.html","3d1d1da42b6d26247fab2bce8c55e54d"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","0e1727d8092bc54ac8a4680dbaba6359"],["/2023/05/28/本质上升序列（JAVA）/index.html","efd9ba315e1d96bd78e5490858443dc8"],["/2023/06/07/方格填数（JAVA）/index.html","ae09f19eda6aaddab4f4e045773c1010"],["/2023/06/09/合根植物（JAVA）/index.html","6d872af6a9541da9fe781a55c7b339e6"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","553700d0fb0e35bfdc6c6e448b004a78"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","197683c809ce0abd86e4eb10b8588fee"],["/about/index.html","dcb09ed923d488fedd00dd3516272f1d"],["/archives/2023/04/index.html","6404ac532f19a764ab820082853bed16"],["/archives/2023/04/page/2/index.html","9dc2cd41cf18bb86f48f4aee4975bc9d"],["/archives/2023/05/index.html","a2d2ceb85257ab616bcae6eb835c0090"],["/archives/2023/05/page/2/index.html","4460ec37ff870d32048e15a77779e5b1"],["/archives/2023/05/page/3/index.html","5845be95b0a3cc61355ace0b22b7063c"],["/archives/2023/05/page/4/index.html","d0f1a2d5619f04246a592510d78480a0"],["/archives/2023/05/page/5/index.html","b47b3ea1399536a51651136979ca66cb"],["/archives/2023/05/page/6/index.html","d4398eea7f0d76eac22724ec5dd6563f"],["/archives/2023/06/index.html","7b89aa4cd9b8ca54cbbaebb282f7bcf2"],["/archives/2023/07/index.html","aec3c32bbb05a98dc504b4768f1112bc"],["/archives/2023/index.html","52e693e0aa01e9a46adc77874bff4143"],["/archives/2023/page/2/index.html","25595991355de5ebb51e4d26370bd3aa"],["/archives/2023/page/3/index.html","8a774e98d2a6e3e78b2c61d29bfe899e"],["/archives/2023/page/4/index.html","c9602c2e1f1643c2dd2a46803cdb2391"],["/archives/2023/page/5/index.html","a3967e3f8e36dfae04ea88a1887750a3"],["/archives/2023/page/6/index.html","13305153c81ad809cd5d5953f4189b7c"],["/archives/2023/page/7/index.html","2a58aba871857d166f240b66311fa0b0"],["/archives/2023/page/8/index.html","1ffd43e8bb1783b751d4a930e18974ca"],["/archives/index.html","5359e620459dd35a996e83101891236f"],["/archives/page/2/index.html","6bb7541b4d4a5a83269fff3f6964ad92"],["/archives/page/3/index.html","b53be821008d5d196c6bee4bee9ea4d8"],["/archives/page/4/index.html","a16bbd627f1096b4cc262a1b5c569bc7"],["/archives/page/5/index.html","a19a073378ae2b7f83042c83d94dbf38"],["/archives/page/6/index.html","27a4c634c61b87af218cb6f31470e367"],["/archives/page/7/index.html","0de1a16636d781c94d1a216023d15d5a"],["/archives/page/8/index.html","7708aea6cb58c901bb2762fd9fe21461"],["/categories/index.html","31de05d638bda364e26ee7665fa5233d"],["/categories/java/index.html","946e096323bf2623b51eedae3162a041"],["/categories/java/page/2/index.html","b0c1653e65b81bc3b17da4f302660403"],["/categories/java/page/3/index.html","009a3a585a08f5b9e0e8f15f9dfe8887"],["/categories/java/page/4/index.html","549a55dd5c7970be5543850e136586e0"],["/categories/java/page/5/index.html","ead0c423f32cc0184eb1b104ae9a700b"],["/categories/java/算法/index.html","0be24c22e2080c65d42ddebeca3b332a"],["/categories/java/算法/page/2/index.html","eea437d3fc14dfc8fb5012cf5c73be38"],["/categories/java/算法/page/3/index.html","0da50ac03a1f5a820003dba1f2f2a7df"],["/categories/java/算法/page/4/index.html","df6e5048f8357b7645aa572533c6fbbc"],["/categories/java/算法/蓝桥杯/index.html","0065bf401eb9e5a9e6d5861fbaa9ead6"],["/categories/java/算法/蓝桥杯/page/2/index.html","0bd7e285a5253bee3a0cf6000cf597ad"],["/categories/java/算法/蓝桥杯/page/3/index.html","4e590d01567d851fd753e411816b66d5"],["/categories/java/算法/蓝桥杯/page/4/index.html","d1d7c969ea9488aa571f202ae3127e99"],["/categories/java/蓝桥杯/index.html","da5927a2e8f8d09ccae0f3a2d855b0cc"],["/categories/python/index.html","8dba2f5b9c3be374dcc93b89b2b38dbf"],["/categories/python/page/2/index.html","beadb9e8bace157fb44dc181c7f4cad2"],["/categories/python/page/3/index.html","430ef69d31fcc84a657430b9792b5319"],["/categories/python/蓝桥杯/index.html","98bce9ead205df2ac13a262dc65479da"],["/categories/python/蓝桥杯/page/2/index.html","0ab40a9388ffe04b61b3de77587c2797"],["/categories/python/蓝桥杯/page/3/index.html","6aa6e024ceda5be163e1c150a120e458"],["/categories/python/蓝桥杯/冒泡排序/index.html","f0350cb81ad0e1527113b593548ccdc0"],["/categories/python/蓝桥杯/结构体/index.html","f79c59c144250d8a6c5c9a34e9bf6b5f"],["/categories/python/蓝桥杯/链表/index.html","ae1f6023d9e2af8fc0bdc13ec7612a5e"],["/categories/教程/index.html","17dc7469af32a594e810c01894f0b2c5"],["/categories/日常习题/index.html","e42524e9efedc21a0d092e5f865b3a24"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6462f116df917c5399ef635f3d43fd86"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","6c368d278258dfef5a851cd2cd947df4"],["/page/2/index.html","5da495fa5a8f4975d150832b4cffdea3"],["/page/3/index.html","b5a1cefaeaf1b471566eaa2c329b73a5"],["/page/4/index.html","95858798ce0fd19ba2fde04b4e72cf8d"],["/page/5/index.html","50e2079649cf834974ed1f8e503de0fc"],["/page/6/index.html","3a2a1799b343c8c35160b70a4b83560e"],["/page/7/index.html","f8bbdfe1c00b64bc90a88fccd6856d6f"],["/page/8/index.html","60e0c698944e76ac671864cf4de81218"],["/sw-register.js","2c145ffb4d6f3fbf85065befc5c50798"],["/tags/index.html","322355c77a8e6cd1eed95d83f0c646c6"],["/tags/java/index.html","3ae540cf33dc210de9f445b22d837d50"],["/tags/java/page/2/index.html","b9ecd00ba7ada3f620a3f4ec26b22216"],["/tags/java/page/3/index.html","5a34a99d0d805068cee224786401f2b4"],["/tags/java/page/4/index.html","29d2e1b21a3285c65ecfc19b42a830ad"],["/tags/java/page/5/index.html","ee8586ed8d88cfd2ae9b7d8c9331733a"],["/tags/python/index.html","21a7dbd8a73d18b9cf2939543099f185"],["/tags/python/page/2/index.html","f389a66f979a3f3014463c3dc5259c5f"],["/tags/python/page/3/index.html","55dbc33b306ba8dff6545e4c84dc71b2"],["/tags/冒泡排序/index.html","f5f329c6171983e93854f979543a23f1"],["/tags/算法/index.html","89ee959ce2833479c87b7dcdad00fa91"],["/tags/算法/page/2/index.html","9103c546bb07c5d50053b212c7b31282"],["/tags/算法/page/3/index.html","8a0208d47de2d27339d73c27a37254f4"],["/tags/算法/page/4/index.html","adb506418b969bab32054b4c2e907cd3"],["/tags/结构体/index.html","b533e6076db8d3fdfc21057a0e15b49f"],["/tags/蓝桥杯/index.html","75d2526e54f9f76ad51dcd9551fffdce"],["/tags/蓝桥杯/page/2/index.html","2c3257f20cb99f214d79257c5ef779b0"],["/tags/蓝桥杯/page/3/index.html","a4a9475bb09020687265de4d135a2795"],["/tags/蓝桥杯/page/4/index.html","fe052debde9e63423c9ff5095143d9ca"],["/tags/蓝桥杯/page/5/index.html","6729be66b31d9d013d6a054408d8510e"],["/tags/蓝桥杯/page/6/index.html","8963e2be6bad869cead42de56d1087a1"],["/tags/蓝桥杯/page/7/index.html","5d1a7e158acc1d43878e860e10dd743f"],["/tags/资源教程/index.html","2f1bdb25ef4d3acfebd677a64f8f1f36"],["/tags/链表/index.html","7ee06233b4a260aa64ef2fc2416fdf3a"]];
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
