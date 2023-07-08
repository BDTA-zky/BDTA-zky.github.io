/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","9f7db61b895671bee223b687c76b6f40"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","b554d9b5b0ebb103e622559cdd72ed81"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","0228685441dfbcfd2a115c479e5300e8"],["/2023/04/22/验证码（random类）/index.html","ca6642c8276998afe19d499382b1aa81"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","5363de39fb687820899ab3844766d861"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","07b515cb6b13ac7d90d76db1588be870"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","4ad892579a812f7da14d7fd696190a39"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","13c60d99557ed3898af8ad26f937d9c1"],["/2023/04/23/蓝桥杯-山（java）/index.html","f58b322da5d8a78dc31b460d150e31b2"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","a24ab7945a4b8b44ca9803105d0e36bf"],["/2023/04/23/蓝桥杯-时间显示/index.html","dd75ff00c146246a9082c1a08a39216f"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","bb40ac605f748abb8b689b9742c01188"],["/2023/04/23/蓝桥杯-特别数的和/index.html","670397eab3b859c8075cd70a3f689633"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","cea837195c20b71974a112d8ef6e45d7"],["/2023/04/27/案例2-1 商品入库（java）/index.html","218e8094a286d9de8dcf0364df6e528d"],["/2023/04/27/猜数字（python）/index.html","fe877fde4e6bbc21fdca70ad4a9adb4c"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","1236ca0548aed4856c6085f635fdc17f"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","bffce48710a87b24c65966cf4c8c9d21"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","2721126e7591de0e454ba9976da0e2ff"],["/2023/05/02/数字三角形（JAVA）/index.html","2e3252527c5a5311a002444df680a021"],["/2023/05/05/k倍区间（JAVA）/index.html","3b3abf659205a6e73f1de926242f74d2"],["/2023/05/05/作物杂交（JAVA）/index.html","d001c4c97d008f1e75755992fe43c041"],["/2023/05/05/包子凑数（JAVA）/index.html","c8471a8bcc5e052aa8dc39e18f368bca"],["/2023/05/05/取球博弈（JAVA）/index.html","5b5c3bbff311e4f893a1ded3010d09b3"],["/2023/05/05/回文日期（JAVA）/index.html","c70e850a82a77fbb5cf17a87887e4642"],["/2023/05/05/砝码称重（JAVA）/index.html","35ea6b1d3f0ad319444c42210b66c00f"],["/2023/05/05/等差数列（JAVA）/index.html","6d38abc3406c67633c585b4d74aa5990"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","c83994e54921a684d8b8c5cd5eb4bc01"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","dccec6c3a0b43fb90a1d4666a90f5c6c"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","02f064524ca60b2469446ea9f456913c"],["/2023/05/05/蓝桥杯--排序（python）/index.html","baa3ee8656408276eca2f3b08f7c75db"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","9579055cdcffbfa56107a82c72091b0e"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","6102eb8e3926850583f971b8d7205221"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","3beac493ea533c6150db43562856f439"],["/2023/05/05/蓝桥杯--空间（python）/index.html","228927f3c6e93a22192088cde7de5dbd"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","de7b3efd285dea941780aa022a480032"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","369a81e3aca6e27ea63872b1a32d2daa"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","f9e21db4379af779c2c01407ba5b2b08"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","2d735301a142dc72f093f6bd656d941a"],["/2023/05/05/蓝桥杯--质数（python）/index.html","c76d983bc92d2409d58056f62db7186f"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","5b7ec725cdfcde56913037cc9aea4ada"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","db0565f3b06109b94af7400cb006edb9"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","ec15b7bc51def876d55524fcd5d74547"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","e5b02a51b66fed91d89e2c3719596808"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","6a1818680a2111e4a747a2ba5dead4e5"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","a9f760e4a40ce9fb989ccedec042cd75"],["/2023/05/05/质数拆分（JAVA）/index.html","7aa0415ac4cc3d1df944ebcbfdcb4c95"],["/2023/05/05/闹钟定时程序（python）/index.html","fffd36c799b53fb17e3e676aff5f8dff"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","9429dde8cf43cd5411cabebd1fcdf09f"],["/2023/05/07/GCD（JAVA）/index.html","63f7f0fa939dddae44722069c0459630"],["/2023/05/07/七段码（JAVA）/index.html","9ce60551fcdd2efa62251b97d21bd816"],["/2023/05/07/全排列的价值（JAVA）/index.html","3e1915ed4d9eaefe39146964613f7ae6"],["/2023/05/07/双向排序（JAVA）/index.html","6beefa8c8f9b9accc34e89d6c36dbf4d"],["/2023/05/07/四平方和（JAVA）/index.html","0fbeccc754accf3f06d2fe39a60f3cc2"],["/2023/05/07/回文日期（JAVA）-1/index.html","d06534942ed9e691b1b9477f9c062fde"],["/2023/05/07/山（JAVA）/index.html","35334e4b07cee4fd1941eaa475975993"],["/2023/05/07/数位排序（JAVA）/index.html","68662861dbdf36d5c97b2de90600c5ee"],["/2023/05/07/数组切分（JAVA）/index.html","144a14bf419c4f3f69076e2ef59699b3"],["/2023/05/07/最优清零方案（JAVA）/index.html","033b6d17b15ecc55728caf4bb85ebc18"],["/2023/05/07/最少刷题数（JAVA）/index.html","3dc10cc4fc9a33312f13b62b0542e676"],["/2023/05/07/杨辉三角形（JAVA）/index.html","f8c5604b5b33940b25400a347a3acafe"],["/2023/05/07/求和（JAVA）/index.html","4ee381c2e549701349e4397033940989"],["/2023/05/07/求阶乘（JAVA）/index.html","4046245bd0fe3ceb0e179d3fe42b94fc"],["/2023/05/07/牌型种数（JAVA）/index.html","25ef670d9bcb198932ec35fb289ef9c3"],["/2023/05/07/猜字母（JAVA）/index.html","2a7c626b2ef4d9df88ac18a8d32b1a7b"],["/2023/05/07/路径（JAVA）/index.html","5a8e5e19bd1f2f5740f4f1dd6d129747"],["/2023/05/07/青蛙过河（JAVA）/index.html","dc1b49b34a817d6ebf0294c0ec601d67"],["/2023/05/16/重合次数（JAVA）/index.html","e0adfd6f6eee5855c6a017717b209972"],["/2023/05/22/左移右移（JAVA）/index.html","fce9edd68b2e23c9413ae511b3c225a6"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","f87d385ac90ebd060cb241f49c1e73b4"],["/2023/05/28/本质上升序列（JAVA）/index.html","5053c1123ca53288b04913448a6673ae"],["/2023/06/07/方格填数（JAVA）/index.html","fc486ad0ebb7048c01dbfd478a99ccd5"],["/2023/06/09/合根植物（JAVA）/index.html","5ac280e47c561fa39aab8e9e0515d938"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","7fab66c4120eaa04614aa74f09ea5933"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","f357abc008f0cf88a416b618ef01c248"],["/about/index.html","115fe2e10671fc203abab9bfb8bfeca3"],["/archives/2023/04/index.html","e79004c3e5380dc7ca4bd7f149e45a78"],["/archives/2023/04/page/2/index.html","18bdbe224104fb215db10c97251b39ac"],["/archives/2023/05/index.html","6f14552dbc2306ad9605b0fe03c7d350"],["/archives/2023/05/page/2/index.html","25def4016b9ebc19a840ff6222ab1949"],["/archives/2023/05/page/3/index.html","9ecc99ce8e6de27dc2756a7045abe61b"],["/archives/2023/05/page/4/index.html","19d8e38c01dea04314f6a8722b97e44c"],["/archives/2023/05/page/5/index.html","6d71b70ff59a07d09b107e1855eed797"],["/archives/2023/05/page/6/index.html","86386f45a91a3ddeb84e35ea9422468a"],["/archives/2023/06/index.html","bc04eba48e35043074ff38c11e66ea83"],["/archives/2023/07/index.html","14714eabb0c6b300ae24ba46a1e7ab2e"],["/archives/2023/index.html","5d217dab68f74f2e71ecfc317e056cab"],["/archives/2023/page/2/index.html","1947897726460557621e17ae3f1d5f9d"],["/archives/2023/page/3/index.html","d8af99f0fe57bb5e68ee67bafa95cb2c"],["/archives/2023/page/4/index.html","4f7eca1c61e1b5defae6f5c34533d207"],["/archives/2023/page/5/index.html","1d124db268e4fdec14bb11490b9885e1"],["/archives/2023/page/6/index.html","835506bf975d46a3be1588959689e472"],["/archives/2023/page/7/index.html","f659edfe5022accfd676060276acd384"],["/archives/2023/page/8/index.html","53f41df8236a056206faf93de26831ff"],["/archives/index.html","88b7d5481036a27bf773020042099035"],["/archives/page/2/index.html","09d7a68a5b7a09b568f294c107e4c139"],["/archives/page/3/index.html","d90029a5901c40e6d3b9ae4e8a01319d"],["/archives/page/4/index.html","c68750667b0202fb9aad573bb31131bb"],["/archives/page/5/index.html","3a356b67d03777ac4dbaf6d0363ead67"],["/archives/page/6/index.html","ee27cca018bab0133f35e9de36f3c7d7"],["/archives/page/7/index.html","2332ab3386a26fdc6096c4ae3764dd99"],["/archives/page/8/index.html","c6a77fe7667da74d11eb49bc9ae50df5"],["/categories/index.html","7da618aefe64e42ac2ca22992af91b0d"],["/categories/java/index.html","9f2171a1ec986317f7bdbb69cfd20bb7"],["/categories/java/page/2/index.html","aa81b299cf0277f66a961ef68c4e86e1"],["/categories/java/page/3/index.html","1085d9ff8598a17775163515ea32e644"],["/categories/java/page/4/index.html","732d18e6886c74c2ee128a0e205d0cba"],["/categories/java/page/5/index.html","97913f83c7fd2869675b9239ff4dca23"],["/categories/java/算法/index.html","11d5f65d3135f634714bcce76cbd3e29"],["/categories/java/算法/page/2/index.html","a3eeaccb457842e3f2becfdf2e9e7f33"],["/categories/java/算法/page/3/index.html","2c41e0bed31eb0e39c3da08d9b311c49"],["/categories/java/算法/page/4/index.html","a594fe4b8168583664be54b9d19dc160"],["/categories/java/算法/蓝桥杯/index.html","0a8d341a86e06da1f0c6bb8aa87d8593"],["/categories/java/算法/蓝桥杯/page/2/index.html","c4fe4d251554f2cb058dbc37632531d6"],["/categories/java/算法/蓝桥杯/page/3/index.html","888fab2c4e1b069b6c5a5a224b0648cd"],["/categories/java/算法/蓝桥杯/page/4/index.html","32894c8a14f2827b01eb06d71b458368"],["/categories/java/蓝桥杯/index.html","3e0f870fb0f3a763004d48ee00096019"],["/categories/python/index.html","37a227e53f6eaa308203867356d6add6"],["/categories/python/page/2/index.html","0e0a2c4a80906f589f2c240acae804ab"],["/categories/python/page/3/index.html","5d26aa7501313c142524df2b449d5dd3"],["/categories/python/蓝桥杯/index.html","8bbe3fb2ddd74cb790ba3ce78e5019b7"],["/categories/python/蓝桥杯/page/2/index.html","dea0e94c03e809893e5325decf517e27"],["/categories/python/蓝桥杯/page/3/index.html","e84863879b4530b419302479248b7ba4"],["/categories/python/蓝桥杯/冒泡排序/index.html","d7160ae68f11878d61bcb0af38769584"],["/categories/python/蓝桥杯/结构体/index.html","7f63951f1dcd81a39b7a2a4ca1154853"],["/categories/python/蓝桥杯/链表/index.html","90dcfee4f4d3de8043b38f83c23ad90c"],["/categories/教程/index.html","9f2c6dfd6c7bb81bd6ac74f1abd8d1c5"],["/categories/日常习题/index.html","6cad7da9bb75cbba31c11bddb8461042"],["/css/index.css","3b47ccc8e4a10acd7f94bda57eb0aa35"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","beed6dd37ed51981fdb89edcf3e8ba54"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","16feb3fc4e4819571531c83bb70971b7"],["/page/2/index.html","d6673c9da320d38607309c8e50e66d88"],["/page/3/index.html","ed73e102dde37421683f176212ce3588"],["/page/4/index.html","9fd8e8dac56574292bd8ff40f5038e13"],["/page/5/index.html","03f526c02173c1d465fa6d6448229156"],["/page/6/index.html","07ac212489538d90552e8e7fde4dad60"],["/page/7/index.html","e3ec973d7f827c29b4100a50d2c0a5b9"],["/page/8/index.html","ebf6508121fa79de095907c98caaf667"],["/sw-register.js","4e3e2ae96d7867b75f2b135a488ec0d4"],["/tags/index.html","fb3caf41dd4aa214177850de37a3e303"],["/tags/java/index.html","a7306aab355cc3686b2771e6ce2ab706"],["/tags/java/page/2/index.html","75032f071ea7a99d71102f62b5eeca43"],["/tags/java/page/3/index.html","f894c02c1bdf56dbf34b6409a4f84fa9"],["/tags/java/page/4/index.html","4599e06ee219cc3846213b35bee0699f"],["/tags/java/page/5/index.html","1769094f88b46daeedfea738a4174d61"],["/tags/python/index.html","914eaca0f1e3beab1a7f063b0e0cfb00"],["/tags/python/page/2/index.html","63bd3dd457c828d7316f555640ff78d6"],["/tags/python/page/3/index.html","298a80e64bdf1cd8640a64b497cb713d"],["/tags/冒泡排序/index.html","12a37d33f68e708645c435d43e6d23c0"],["/tags/算法/index.html","450b42a159ef7ff0a09e9bd57b601c1c"],["/tags/算法/page/2/index.html","55a8de07ef731751e63158ea06ebe430"],["/tags/算法/page/3/index.html","251c264b225196d1a9a4358bf5d6acb9"],["/tags/算法/page/4/index.html","fcc8fc1a7b6832385ed52995642bd7c5"],["/tags/结构体/index.html","e5bcf534c37cf2d0f082649a62354c21"],["/tags/蓝桥杯/index.html","1474a1b2d0c5691d15c211bcbd6b785b"],["/tags/蓝桥杯/page/2/index.html","725c6b038f9e03d0e4c4ac49e4453cf2"],["/tags/蓝桥杯/page/3/index.html","0359b3800ee31eb6f0def26e0e3cdfe1"],["/tags/蓝桥杯/page/4/index.html","0abf3201c9c0d140c1c829ceb3db5a27"],["/tags/蓝桥杯/page/5/index.html","e9e3fffdbd50b0ded9fc29a835df71f2"],["/tags/蓝桥杯/page/6/index.html","55db899e25d5b221e3104cd0c4cdfe11"],["/tags/蓝桥杯/page/7/index.html","55b37ba3ea09fbc8888b17b5f1e434b9"],["/tags/资源教程/index.html","4c229ec6216275ecaea01094ff99093f"],["/tags/链表/index.html","d5cf6902c7973aefd98695a6bf727226"]];
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
