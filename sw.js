/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","0af1a73843ef900caf77e25718f9438f"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","a40c3270d3332787a709c7d0534273fc"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","d4c2eb047d62e96fc42582bb1428aa84"],["/2023/04/22/验证码（random类）/index.html","766aba318eb195f15e6d058bcfe4a3c7"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","0b7acd4e2214041093333a1477bc3ff4"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","bfe2a14c875ce3758b839063bd2dda64"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","61a801bb9427136a5d7a5e66e38c4be1"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","3281679897e54325ac46f478ed2dde98"],["/2023/04/23/蓝桥杯-山（java）/index.html","5742ab40794128ee5f24699cb84bcde0"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","805e33f6452a28fc830675bdee39b1d5"],["/2023/04/23/蓝桥杯-时间显示/index.html","8c2c9861ceaa13da4113056fb6dd1901"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","825ff676d08e77d0091efa34f350cc52"],["/2023/04/23/蓝桥杯-特别数的和/index.html","3b436691e70d50a3cda3ac93a0e8e87e"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","639bac9060650b56dba2f1ca013249f5"],["/2023/04/27/案例2-1 商品入库（java）/index.html","3f0a9bd214deef62547360f5fad540da"],["/2023/04/27/猜数字（python）/index.html","ac93eae1bf2b557cb655c96cb30ec28b"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","b4fc4f53c2d1fb29f723e7546affebbd"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","c30f4a79243ecb87bbdd7a648d102082"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","32e849d824d3f4a2210ba7b2c06edc83"],["/2023/05/02/数字三角形（JAVA）/index.html","63619d5d07d4f58adf20592770132392"],["/2023/05/05/k倍区间（JAVA）/index.html","d0ddf413dab966a7d7aeb61a878454cb"],["/2023/05/05/作物杂交（JAVA）/index.html","f6710bf96c7f1b75f470ccc24212aa2e"],["/2023/05/05/包子凑数（JAVA）/index.html","65df5c1429d15f098396ed2756f80f7e"],["/2023/05/05/取球博弈（JAVA）/index.html","cecffa013c1c6f655a8bfbcf65edf455"],["/2023/05/05/回文日期（JAVA）/index.html","980e463102a3e129fb88e5de199eda62"],["/2023/05/05/砝码称重（JAVA）/index.html","e3f95ceb8fc5e6ea475aaa9a2adf9c1c"],["/2023/05/05/等差数列（JAVA）/index.html","da558678e7efcbde4c3a674a212cfa5a"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","1eb62fa64f7f67097e0c13141e1eab02"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","b6fa46f69a96714783fb643f8f214032"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","85764eac86db44bc92d08d78547a46f2"],["/2023/05/05/蓝桥杯--排序（python）/index.html","ddbc236c9d25948135668c39227ef458"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","28e21e11d0e7358a860217191f5322f2"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","70b02618b0360ef766bd946c418154f6"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","eeaebf3a24132b25eebb532508dbaf0f"],["/2023/05/05/蓝桥杯--空间（python）/index.html","5332db4cf0b9b7c51c4de35b3de00264"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","56631f4bdda83512e8a0cd13f5588126"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","d8734fe98629efe3035bc2daf84cb62b"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","453105d6f679bc7bd3641d09c31c12dc"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","46c362887ba311c25f3242af67d7f26a"],["/2023/05/05/蓝桥杯--质数（python）/index.html","0c0d874f8249a87734789c82086ff1f9"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","92a5d292c48f0e680b871f2e9f8d510f"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","b0f6b27bbfc5d1d9d93fbb65ecadb7d2"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","d4c98366059b1079e5f68306e78b3e14"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","e4c8cbcbf82f78e46da8e2338395aec8"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","41a9ee72fcefca1f979eb1a36ffacae3"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","2446223fa247de9ebbdc29d3af26e36d"],["/2023/05/05/质数拆分（JAVA）/index.html","232623ab8651c29e30381c272c6949cf"],["/2023/05/05/闹钟定时程序（python）/index.html","5d716fa3848b6a83e551bd9042f8f01e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","35fb6711073ed657e6a2ee98c9ec3988"],["/2023/05/07/GCD（JAVA）/index.html","021b9ff243ba9021727a42f583e30bb2"],["/2023/05/07/七段码（JAVA）/index.html","3d8d530db360b393bd259943503c291f"],["/2023/05/07/全排列的价值（JAVA）/index.html","0bb8446cf94cf6842666f5b1102b21d7"],["/2023/05/07/双向排序（JAVA）/index.html","9d1036aacc2c1d2a8e33b0d504889457"],["/2023/05/07/四平方和（JAVA）/index.html","08898bf8d4c9e015c1ed092fda1eafe7"],["/2023/05/07/回文日期（JAVA）-1/index.html","ba10180b98efa4f46ce25d453013d8fe"],["/2023/05/07/山（JAVA）/index.html","38f78592bb8a8030bcf4b0194245a6c5"],["/2023/05/07/数位排序（JAVA）/index.html","ed7fb0490195c3494f999f72487db4b4"],["/2023/05/07/数组切分（JAVA）/index.html","138c193292f40ef8a430ad2c093446e3"],["/2023/05/07/最优清零方案（JAVA）/index.html","071e2ab6e236c78fa11e83e661e51794"],["/2023/05/07/最少刷题数（JAVA）/index.html","feb727a9f17e981caa3b3409654c072b"],["/2023/05/07/杨辉三角形（JAVA）/index.html","2c59ea3d4c2818237befe009a85be246"],["/2023/05/07/求和（JAVA）/index.html","53bd046e3799768d891ace961f9b332c"],["/2023/05/07/求阶乘（JAVA）/index.html","72243fab1439cedb5afb971b36fe6fed"],["/2023/05/07/牌型种数（JAVA）/index.html","57bf559c6a5f96f574fa8907adc7f59b"],["/2023/05/07/猜字母（JAVA）/index.html","30946a1202bde442e71ddbdb5da7064a"],["/2023/05/07/路径（JAVA）/index.html","0dc673559e580660a5e33bf0fd364934"],["/2023/05/07/青蛙过河（JAVA）/index.html","f25f8444d0a806dd42d678d38fe798a7"],["/2023/05/16/重合次数（JAVA）/index.html","82b4efc6f208d563f26be8210b1dad68"],["/2023/05/22/左移右移（JAVA）/index.html","1fbad872481feffd51312598cb42f2c3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","dc6b5f252d04192c528daafd11c99020"],["/2023/05/28/本质上升序列（JAVA）/index.html","ce05cdf9fe33b80928ef50ef9e53490e"],["/2023/06/07/方格填数（JAVA）/index.html","161a27b2b7a201fbe450a5a8d1148b9c"],["/2023/06/09/合根植物（JAVA）/index.html","ee63f04d0cf958a26a8c5687b1a95237"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","bf21f632f0e572284e97500788a149a8"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","bdb2b3deffb656538db8b60999dd52eb"],["/about/index.html","1a11b2eaa35620907aa2dc219c248a1b"],["/archives/2023/04/index.html","d8a4bc2e52584162218d2405d825eb1c"],["/archives/2023/04/page/2/index.html","782256c78ab63bedf2d7e69704d7e833"],["/archives/2023/05/index.html","88300c23ce2666ff906527bc0de84fa9"],["/archives/2023/05/page/2/index.html","120a96bbb9c45c08d9153a11a384fb4c"],["/archives/2023/05/page/3/index.html","7e17a06a8e3891cc552e84b515cbe0f5"],["/archives/2023/05/page/4/index.html","982b6272d6b8582e6f8c3c1eac34186a"],["/archives/2023/05/page/5/index.html","c9a783983782484e6c690c37fe371717"],["/archives/2023/05/page/6/index.html","eed1fdfcb80172da7c62baed8146347a"],["/archives/2023/06/index.html","a009a251511dc4575d86871cd367e4d1"],["/archives/2023/07/index.html","4ba01902a16d1c6394e489968f350c76"],["/archives/2023/index.html","a460148b9ff6c35a90a981cdae74bf83"],["/archives/2023/page/2/index.html","745ffc924dd2a7ed4cf83355bfc633be"],["/archives/2023/page/3/index.html","f012e37ab957afca32b527970f4a9645"],["/archives/2023/page/4/index.html","346b414418c08bfd398eedd3ca352581"],["/archives/2023/page/5/index.html","205cce0f2c809c48912b51e2dd79769a"],["/archives/2023/page/6/index.html","54bad1d0cffcadbc63779095b0cd049c"],["/archives/2023/page/7/index.html","3c3a744c671dae3163f837a21a27a530"],["/archives/2023/page/8/index.html","8909d3c53b744948a94158f64fa0e9aa"],["/archives/index.html","71ed20c781728a9ef59eeb8511282668"],["/archives/page/2/index.html","044905e26db81e0a6628c528e5cff47e"],["/archives/page/3/index.html","15c9c66bbb7388449fbb0b9125327cce"],["/archives/page/4/index.html","0ce1dedbe3add828522b3ecaaa6a7a2c"],["/archives/page/5/index.html","ead5a1f847b8c2800a858245fa5bc591"],["/archives/page/6/index.html","dacef0a0f0a105350bd57468cbc3bf76"],["/archives/page/7/index.html","7547a81b5adeaf407795bd3aa9e8621e"],["/archives/page/8/index.html","b0099d16b69944da4910b7e8ce3c7838"],["/categories/index.html","71d2e0f8902c7f19e0b17952c82a1523"],["/categories/java/index.html","2d44e43d3ab8c12c7d734796b590400b"],["/categories/java/page/2/index.html","3d2a907f5d2410052875a0461e3bb8a9"],["/categories/java/page/3/index.html","118e73ed08ecfe35de6d823629ff1525"],["/categories/java/page/4/index.html","79d60c3545cd34f0407d1c7d1fdf43e8"],["/categories/java/page/5/index.html","86a1207f77668df86de52b7ae76ef4a7"],["/categories/java/算法/index.html","fd8c4e0f6e603cd713890d49aff6da5d"],["/categories/java/算法/page/2/index.html","4714dbc4f8f629de9811e7234229c081"],["/categories/java/算法/page/3/index.html","da8c83c5a0f74de0661629383da02933"],["/categories/java/算法/page/4/index.html","3cea441b3fbcc4eda7f208e02127f734"],["/categories/java/算法/蓝桥杯/index.html","4204609a7038b51aee1230adbf17696b"],["/categories/java/算法/蓝桥杯/page/2/index.html","1976881b1738937456159171f43a6d3d"],["/categories/java/算法/蓝桥杯/page/3/index.html","8eb5db64c5d7eed49bcb98c8740b0e5e"],["/categories/java/算法/蓝桥杯/page/4/index.html","6cb40b956079e056e0dc59f9546f1320"],["/categories/java/蓝桥杯/index.html","b36f1007205a91895f229d0aa0b71db0"],["/categories/python/index.html","4d840ac4062609e38a4146bea9a6f3e3"],["/categories/python/page/2/index.html","3ff178eca368e0f4d3124d31cd5455a5"],["/categories/python/page/3/index.html","7f36408c6e53f2aacc539c08b797a06c"],["/categories/python/蓝桥杯/index.html","9c6433c696fa3b1198df452be177e5f2"],["/categories/python/蓝桥杯/page/2/index.html","245331f0ebcc0d6ee636f6a5666ac801"],["/categories/python/蓝桥杯/page/3/index.html","fb72cd898e3a26aa3c59966265209fb0"],["/categories/python/蓝桥杯/冒泡排序/index.html","d48ae0b628e0b788e0e68d73fa03efb6"],["/categories/python/蓝桥杯/结构体/index.html","3e03e1c200f7b30a8968ce328be9bf6e"],["/categories/python/蓝桥杯/链表/index.html","0c466facfe5d6ca3274f950e39115b9e"],["/categories/教程/index.html","b33297b06335d0cc6aacc54eab257fd3"],["/categories/日常习题/index.html","2a1f1a8689ba63a24acc9ce0e158442b"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","56338c9b0b3a62531a8ceb2462d7a003"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","fa7601d9115b64fa20d65fc600ddf9c0"],["/page/2/index.html","9c18ca1e62111190d12e4076901b280c"],["/page/3/index.html","eadfa79d3a68884eb97327d93786f5e4"],["/page/4/index.html","b1f77c0275d9eecced58fe4d320cccd3"],["/page/5/index.html","6e15b20a793fbfc6504f1a5d631f8e62"],["/page/6/index.html","c6c51cbd9c4f2e387fd47579c8ef1af7"],["/page/7/index.html","7ea9531b699e9dd138a96f4cb78f0be7"],["/page/8/index.html","cb3cba65e00bd74ad38d8a543f6de3c0"],["/sw-register.js","a7e69585951fbf1c261d93b4fbd911e5"],["/tags/index.html","a180bdefa49733474f9bff4de2dda793"],["/tags/java/index.html","d05e35e16a126ba1d570888a9decef1f"],["/tags/java/page/2/index.html","d3970f2b3972ef25199851df6ad0c410"],["/tags/java/page/3/index.html","f71ae2da7b00fd382e42bbd32f35fe6d"],["/tags/java/page/4/index.html","0acb8dce286f5477a4e91c10e4a031d2"],["/tags/java/page/5/index.html","5234f3ce36c686602678ed9731efca47"],["/tags/python/index.html","d94d10b4a37db488571baf43ef112405"],["/tags/python/page/2/index.html","ee6788f4e90a944d3219349824fb0ceb"],["/tags/python/page/3/index.html","7ef4302b990464f2c5ea82899d2b45fe"],["/tags/冒泡排序/index.html","ade8699df713f571d666bf49b3b9e8c8"],["/tags/算法/index.html","42865c9068bc7e188f1d710b2e3d6623"],["/tags/算法/page/2/index.html","22f3f4d09075fabbf4b878d5588f6cec"],["/tags/算法/page/3/index.html","1b8a6a69b50e25eaf07ac7823f8c56a1"],["/tags/算法/page/4/index.html","e0cb361ca930114f1e75eb87e00e987d"],["/tags/结构体/index.html","bf3a0d4847b799f5cf74aa3004284fb0"],["/tags/蓝桥杯/index.html","a6be42afc643dad9c117afafc85ff424"],["/tags/蓝桥杯/page/2/index.html","f6c52d4ff9c852094caf82cfc560af91"],["/tags/蓝桥杯/page/3/index.html","d0e032066e6a0d74816cae9adb603105"],["/tags/蓝桥杯/page/4/index.html","1571b55686ec70b2d065233b9316635a"],["/tags/蓝桥杯/page/5/index.html","17dac6be8ebd7880e2638a8a6e11b849"],["/tags/蓝桥杯/page/6/index.html","cc925637d483d9e3afcae4f0eab5c561"],["/tags/蓝桥杯/page/7/index.html","3a7e23035e93b2a72e360a283e7192e1"],["/tags/资源教程/index.html","e485998581fa37b3dab651ca44d5f271"],["/tags/链表/index.html","b5812be36fce12b3e376c5a16778f5f2"]];
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
