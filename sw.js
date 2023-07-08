/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","d1b5a7d8dcf1c399f43a28e387359667"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","1ae518e1973269cc24662385a3d3341f"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","4cf353cca2122ef325214330e5d857bc"],["/2023/04/22/验证码（random类）/index.html","f5cdee562785830c44e27c3f86ae1753"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","98bbe6ddb94d09bb99a3931940608965"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","2b11949a80f241109b2690c68fcd992a"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","4c4ccc4f74c1684141cad8897c0f1317"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","37db3f1672b905781edca4ff3a5d0aa3"],["/2023/04/23/蓝桥杯-山（java）/index.html","c60bfbf8b3ce596b6bbcbcfbfe828e1d"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","5db9c7a4e6f9dce86a17717aaa88d418"],["/2023/04/23/蓝桥杯-时间显示/index.html","97a76bdec636960437128dc098f93d62"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","c85782f3d7501e9b4a509dd837b78458"],["/2023/04/23/蓝桥杯-特别数的和/index.html","dfd67d3d523f64701e5f6575351be986"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","e7d53f34c7e5ab06fde598720f5c487c"],["/2023/04/27/案例2-1 商品入库（java）/index.html","6982aba1837499df1248c81d6d1a8c93"],["/2023/04/27/猜数字（python）/index.html","3e7957b28d8b177779aa696633ae0ff2"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","729b31c7731ec320a7453dfa5e86f590"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","221446b0c2aca704805e3ea5426e14ee"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","40e9e4f81382c128ef7958152e78c86c"],["/2023/05/02/数字三角形（JAVA）/index.html","015623e63d2d297353a3ebe3f47f11ed"],["/2023/05/05/k倍区间（JAVA）/index.html","50c5ea8e41c3545c100216b7f9da8f70"],["/2023/05/05/作物杂交（JAVA）/index.html","0e30c1f68fe7cb27850c5bb4612f76a9"],["/2023/05/05/包子凑数（JAVA）/index.html","d90877b98482bc978e347885716217a3"],["/2023/05/05/取球博弈（JAVA）/index.html","5c7d02cf5d4773d416fed67b09f7f9a4"],["/2023/05/05/回文日期（JAVA）/index.html","8293340d7b050dd0ea925251ffd77f09"],["/2023/05/05/砝码称重（JAVA）/index.html","be488885a4cf8c9b19850a782b97bd23"],["/2023/05/05/等差数列（JAVA）/index.html","b060c4efcc174cf87d24f3cd8adbbbd9"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","6341abd92f0e92e0364e77309e6bd89d"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","67ef01c16e711c33219339a79414c6fc"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","991990e354692a30ff89d2c89947b30b"],["/2023/05/05/蓝桥杯--排序（python）/index.html","42f57646e14ba94e87a7a651ec56010c"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","5de6e5e7603a3a8a65a54184df843c20"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","37f7db3fb76cf796788810765ddcaa54"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","796d5c582efe21089ec1788b2529a373"],["/2023/05/05/蓝桥杯--空间（python）/index.html","e2e3cba99766cf43361eaaf904d4a2ac"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","126a975d0c6bf0f91b24a59cbe6fb551"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","2d72a271757f4acc315c73b407b8b5bf"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","2190bcd32fcb1872f0ca1ca1af9e5bce"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","616c4a4f564330a79cd60c90009570f3"],["/2023/05/05/蓝桥杯--质数（python）/index.html","e3c65dcf47d739321d8ddfc7326a7323"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","4c9665140c56ac1d109164c6ddc2bb07"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","a1974025b24382f71919867fda26152e"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","a1227f219ca03fb6680431bbc022b4f8"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","b05838daf8120662e2e225c0ef70b629"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","cc287a9114c5cfea60c3abbe52193cca"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","de60f6640247536becedcc81e7ee5876"],["/2023/05/05/质数拆分（JAVA）/index.html","e649a94d7c0258236a645b1dbe2cd508"],["/2023/05/05/闹钟定时程序（python）/index.html","e4c53d57d5a34956264c5709f6ba1255"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","c0fc4ebe47d438738348868b7dfa2037"],["/2023/05/07/GCD（JAVA）/index.html","6efc3bbf4dcdc9b2ffc10d4e11dcb1f0"],["/2023/05/07/七段码（JAVA）/index.html","cf8fcaa3874b6db285c6c87625da7a9a"],["/2023/05/07/全排列的价值（JAVA）/index.html","c17a3ee89936f580b8cd79b303bd1d55"],["/2023/05/07/双向排序（JAVA）/index.html","2a00713308c8ac6627a55ccc0425a978"],["/2023/05/07/四平方和（JAVA）/index.html","7ccdcf2ca88d62066cee64fff1bc94d0"],["/2023/05/07/回文日期（JAVA）-1/index.html","15fe85bc840f1c5720901f7e894c95eb"],["/2023/05/07/山（JAVA）/index.html","784b67226a2e0d9c7420649378b418f2"],["/2023/05/07/数位排序（JAVA）/index.html","7d06536fc7cb3d3cde7b08f75fe313a4"],["/2023/05/07/数组切分（JAVA）/index.html","fe77f937f4c75cc63034b896eefdc404"],["/2023/05/07/最优清零方案（JAVA）/index.html","7ce273137c7b0b05063ba7bf93d33f36"],["/2023/05/07/最少刷题数（JAVA）/index.html","ced134a1f4ba9f8cf490eae17d5fdce3"],["/2023/05/07/杨辉三角形（JAVA）/index.html","049942e22a1d5ed29d1a12c7a02481c1"],["/2023/05/07/求和（JAVA）/index.html","85d9c9ba22ec9bf908a6bf59813adbeb"],["/2023/05/07/求阶乘（JAVA）/index.html","cf711a435fffd523ddfb81b8c85efb3a"],["/2023/05/07/牌型种数（JAVA）/index.html","e0fb90499c30cee126b34b4ae7748c40"],["/2023/05/07/猜字母（JAVA）/index.html","809ad960ad402f7b295020f09f7de568"],["/2023/05/07/路径（JAVA）/index.html","81b5f88912103a9a7ed066bdc4587b78"],["/2023/05/07/青蛙过河（JAVA）/index.html","2629c98f5e3078425662f653c9ae0387"],["/2023/05/16/重合次数（JAVA）/index.html","760fae25cd365991e08545bb8d64e28b"],["/2023/05/22/左移右移（JAVA）/index.html","c6da459a7b0ad44b556cb3296ed1c458"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","ca93e50ba947d1c3af421b45b130a52f"],["/2023/05/28/本质上升序列（JAVA）/index.html","fdaa4b8abc2b0656b51804000e7035c2"],["/2023/06/07/方格填数（JAVA）/index.html","01466d8dbac43bbd4ceb439d89d68ad6"],["/2023/06/09/合根植物（JAVA）/index.html","77edd858a3410042fd434af2d2263f89"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","4a20b4bdb5e3bb7d0c3d3cfa997e2520"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","2cbb44984a0f14e06d099b78026e41eb"],["/about/index.html","315c6d1665580ad0d9ba185662f5ad12"],["/archives/2023/04/index.html","ba5db72fcdb2444d90bc3728838ee7e5"],["/archives/2023/04/page/2/index.html","670b265c9fbfecf810ecb1a4d46d41b1"],["/archives/2023/05/index.html","ee3d676da064810c1f4ae52256f8a4e6"],["/archives/2023/05/page/2/index.html","7cc720b4651f42c92e9427cfdd31b8e2"],["/archives/2023/05/page/3/index.html","f1d6d03462d98077da4e54c7e25d2286"],["/archives/2023/05/page/4/index.html","2894b47b2c7d5856f659ee5f759e4931"],["/archives/2023/05/page/5/index.html","d0b275a6b935c801f13017e00b4507c2"],["/archives/2023/05/page/6/index.html","029aac61a6b0753a7b38134df35d9347"],["/archives/2023/06/index.html","33c339720f5297b011e1ed55d1d53fc0"],["/archives/2023/07/index.html","7a2805c818e298685e54113c9a1e7a30"],["/archives/2023/index.html","b72064d944c5d17db5a89f21a8e05ff9"],["/archives/2023/page/2/index.html","5876db567524e8aaa6ff9e30b5a08803"],["/archives/2023/page/3/index.html","14650abe260eb7dd2191f28649e41233"],["/archives/2023/page/4/index.html","19a019f07c9734afb43010a5fd9a4ae3"],["/archives/2023/page/5/index.html","9ac0ffead562bd642eacd40d1d974a09"],["/archives/2023/page/6/index.html","c720e0259d95c08da1a4271f3fc06634"],["/archives/2023/page/7/index.html","a57e2c609ad9bd97d4b98a18861007d7"],["/archives/2023/page/8/index.html","b0c3ff773885c1fd00a423201b1308b4"],["/archives/index.html","31fa8beef7d15e2928e1339a642a1879"],["/archives/page/2/index.html","324c38405b8fe465e6d356cce548fa90"],["/archives/page/3/index.html","9b3604dd8eec232b64a1850f2e253a80"],["/archives/page/4/index.html","b8b0f31c80165b36afdd6a123218197b"],["/archives/page/5/index.html","bf89fa3ecee83109706eaeb2d68def51"],["/archives/page/6/index.html","73f714e3177489b8d36f162247c2e927"],["/archives/page/7/index.html","ce29a0fc9a6ff8284c797d29649c2f23"],["/archives/page/8/index.html","a2220f173e31f5ef9597a5c5f7811d3d"],["/categories/index.html","9b7d3f616fdb3b0e12715bd88e3a2517"],["/categories/java/index.html","716d619aa93d2c24c35a80c613283eff"],["/categories/java/page/2/index.html","4ddf8a50f5d9981e44d2fffea2f82e46"],["/categories/java/page/3/index.html","60cc705c88a6567cdfc5f15da9668056"],["/categories/java/page/4/index.html","113f3caa8bb90015f97f8cdcca8f7bd7"],["/categories/java/page/5/index.html","400536dcc7bf703e7913729f20964553"],["/categories/java/算法/index.html","36a05b8b2dd467fb866af34457643fd8"],["/categories/java/算法/page/2/index.html","84397ea522f072f6903b1dbf9b88e6bb"],["/categories/java/算法/page/3/index.html","ddbc70cf2b8e9717c8854b640c593c90"],["/categories/java/算法/page/4/index.html","de80274e86aa7ad55de2b04a91c3bdfc"],["/categories/java/算法/蓝桥杯/index.html","c2001ab2b84c10a228f46577448e8681"],["/categories/java/算法/蓝桥杯/page/2/index.html","079c5dce098a389efabaa92067b7b1f9"],["/categories/java/算法/蓝桥杯/page/3/index.html","c546a3a75ef0183a31b5437f8681c6e7"],["/categories/java/算法/蓝桥杯/page/4/index.html","30539129ec07d7b59abc336ddd6e0702"],["/categories/java/蓝桥杯/index.html","840edbe2cb265af2e8bdeecc872b17a1"],["/categories/python/index.html","fde42960606ddf4ae0c1ba24b595d813"],["/categories/python/page/2/index.html","205e2ceaf421512f178eaad66946ec72"],["/categories/python/page/3/index.html","a97472b47a80dc6cc72dfd0d2ce611d6"],["/categories/python/蓝桥杯/index.html","44e1ac29a782e33cf579e9d89191ad9d"],["/categories/python/蓝桥杯/page/2/index.html","6c47a9a74711143634cca02710d14e01"],["/categories/python/蓝桥杯/page/3/index.html","c1638bb8b9f1bd89e99bc33841bd922f"],["/categories/python/蓝桥杯/冒泡排序/index.html","e94f7ece6e2bd9537c336bfad4e97f06"],["/categories/python/蓝桥杯/结构体/index.html","4eb8399b68b17e46c47843b0a57191ba"],["/categories/python/蓝桥杯/链表/index.html","02761238f42e5116f8988660635fce2a"],["/categories/教程/index.html","640c13b7f390f2ad2eb3b83e79bb0bb9"],["/categories/日常习题/index.html","3ed89324ebc9a5ce023e922271d80d16"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","d4152074b868bb9b997306eae5b2d8d2"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","35666cba01eaaf6ffc62708995077daf"],["/page/2/index.html","5c44fb3051b509a2fab270e9b088e3f0"],["/page/3/index.html","a83d613a1e180b619af094fb664e0317"],["/page/4/index.html","0fe37cd0ac84110c93d0b5be0882c7fd"],["/page/5/index.html","c230e21b4caaf840a8c20014b695fdbb"],["/page/6/index.html","a1a612e920dce85a545e2ed6e33a4698"],["/page/7/index.html","fd7678c32ab0c2027deb1e5db524bdb4"],["/page/8/index.html","70bd2cbe72ce0e8e61aa93bb49fd625b"],["/sw-register.js","02617d4306477fb1d95c58285302b7a1"],["/tags/index.html","805aba1b928eb9ee3133764ceb31e17c"],["/tags/java/index.html","4fb586669cbb7a56844e968595b0d027"],["/tags/java/page/2/index.html","5f37e34be3e6d1a644cbd54e113d0aeb"],["/tags/java/page/3/index.html","9e457d5bf30c39e54593cbf9b3305c05"],["/tags/java/page/4/index.html","4f2b5ce56a23382f46f81209120ad1b0"],["/tags/java/page/5/index.html","dc1c02e459f401e77a60eca092160f57"],["/tags/python/index.html","fa6ddd912121d10a51d3e6ca6de783c5"],["/tags/python/page/2/index.html","c18cfa6663f959fa166372c3d4a4b91f"],["/tags/python/page/3/index.html","023126ea0a8db14018ccf4750d0d2d18"],["/tags/冒泡排序/index.html","be155666cac6683d2e4628c2ddd75eb9"],["/tags/算法/index.html","19e3ef27e55888d4a5a73de8e12a2b05"],["/tags/算法/page/2/index.html","2e3a814202bb6da7a091cebf8a0895af"],["/tags/算法/page/3/index.html","c214b2d0bf9d2daf620b580c53cb3695"],["/tags/算法/page/4/index.html","7ce3bb5f10904573c91b40ddbbc756be"],["/tags/结构体/index.html","8f3742b2c21d0c01f49e5a12259e0ffa"],["/tags/蓝桥杯/index.html","20fa30a4390a0c723924b19b9b520a85"],["/tags/蓝桥杯/page/2/index.html","f0282df1c3dad329dcdaf43c4d5f68b1"],["/tags/蓝桥杯/page/3/index.html","eba2b755ca3a004e5a711e03fdc5199f"],["/tags/蓝桥杯/page/4/index.html","cbec917fa21cf7d9976f583c59e9cebd"],["/tags/蓝桥杯/page/5/index.html","43c158ef8d8dbe72b9a3f0a8c197a5e9"],["/tags/蓝桥杯/page/6/index.html","ffcaee27751f0eef31ffc98546b57ab6"],["/tags/蓝桥杯/page/7/index.html","1045fc1b201135bd4ae636b572d82fab"],["/tags/资源教程/index.html","1f4e029f234b670b141f6c24aad9c965"],["/tags/链表/index.html","e74fb4cc6f5ab80cc20ce6e4d784327c"]];
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
