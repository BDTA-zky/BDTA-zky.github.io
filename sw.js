/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","0af1a73843ef900caf77e25718f9438f"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","c1c89c1b14135680881d56f8fdcb666a"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","d4c2eb047d62e96fc42582bb1428aa84"],["/2023/04/22/验证码（random类）/index.html","766aba318eb195f15e6d058bcfe4a3c7"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","0b7acd4e2214041093333a1477bc3ff4"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","bfe2a14c875ce3758b839063bd2dda64"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","61a801bb9427136a5d7a5e66e38c4be1"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","3281679897e54325ac46f478ed2dde98"],["/2023/04/23/蓝桥杯-山（java）/index.html","5742ab40794128ee5f24699cb84bcde0"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","805e33f6452a28fc830675bdee39b1d5"],["/2023/04/23/蓝桥杯-时间显示/index.html","8c2c9861ceaa13da4113056fb6dd1901"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","825ff676d08e77d0091efa34f350cc52"],["/2023/04/23/蓝桥杯-特别数的和/index.html","3b436691e70d50a3cda3ac93a0e8e87e"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","639bac9060650b56dba2f1ca013249f5"],["/2023/04/27/案例2-1 商品入库（java）/index.html","3f0a9bd214deef62547360f5fad540da"],["/2023/04/27/猜数字（python）/index.html","ac93eae1bf2b557cb655c96cb30ec28b"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","b4fc4f53c2d1fb29f723e7546affebbd"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","c30f4a79243ecb87bbdd7a648d102082"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","32e849d824d3f4a2210ba7b2c06edc83"],["/2023/05/02/数字三角形（JAVA）/index.html","63619d5d07d4f58adf20592770132392"],["/2023/05/05/k倍区间（JAVA）/index.html","d0ddf413dab966a7d7aeb61a878454cb"],["/2023/05/05/作物杂交（JAVA）/index.html","f6710bf96c7f1b75f470ccc24212aa2e"],["/2023/05/05/包子凑数（JAVA）/index.html","65df5c1429d15f098396ed2756f80f7e"],["/2023/05/05/取球博弈（JAVA）/index.html","cecffa013c1c6f655a8bfbcf65edf455"],["/2023/05/05/回文日期（JAVA）/index.html","980e463102a3e129fb88e5de199eda62"],["/2023/05/05/砝码称重（JAVA）/index.html","e3f95ceb8fc5e6ea475aaa9a2adf9c1c"],["/2023/05/05/等差数列（JAVA）/index.html","da558678e7efcbde4c3a674a212cfa5a"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","1eb62fa64f7f67097e0c13141e1eab02"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","b6fa46f69a96714783fb643f8f214032"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","85764eac86db44bc92d08d78547a46f2"],["/2023/05/05/蓝桥杯--排序（python）/index.html","ddbc236c9d25948135668c39227ef458"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","28e21e11d0e7358a860217191f5322f2"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","70b02618b0360ef766bd946c418154f6"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","eeaebf3a24132b25eebb532508dbaf0f"],["/2023/05/05/蓝桥杯--空间（python）/index.html","5332db4cf0b9b7c51c4de35b3de00264"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","56631f4bdda83512e8a0cd13f5588126"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","d8734fe98629efe3035bc2daf84cb62b"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","453105d6f679bc7bd3641d09c31c12dc"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","46c362887ba311c25f3242af67d7f26a"],["/2023/05/05/蓝桥杯--质数（python）/index.html","0c0d874f8249a87734789c82086ff1f9"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","92a5d292c48f0e680b871f2e9f8d510f"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","b0f6b27bbfc5d1d9d93fbb65ecadb7d2"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","d4c98366059b1079e5f68306e78b3e14"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","e4c8cbcbf82f78e46da8e2338395aec8"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","41a9ee72fcefca1f979eb1a36ffacae3"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","2446223fa247de9ebbdc29d3af26e36d"],["/2023/05/05/质数拆分（JAVA）/index.html","232623ab8651c29e30381c272c6949cf"],["/2023/05/05/闹钟定时程序（python）/index.html","5d716fa3848b6a83e551bd9042f8f01e"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","35fb6711073ed657e6a2ee98c9ec3988"],["/2023/05/07/GCD（JAVA）/index.html","021b9ff243ba9021727a42f583e30bb2"],["/2023/05/07/七段码（JAVA）/index.html","3d8d530db360b393bd259943503c291f"],["/2023/05/07/全排列的价值（JAVA）/index.html","0bb8446cf94cf6842666f5b1102b21d7"],["/2023/05/07/双向排序（JAVA）/index.html","9d1036aacc2c1d2a8e33b0d504889457"],["/2023/05/07/四平方和（JAVA）/index.html","08898bf8d4c9e015c1ed092fda1eafe7"],["/2023/05/07/回文日期（JAVA）-1/index.html","ba10180b98efa4f46ce25d453013d8fe"],["/2023/05/07/山（JAVA）/index.html","38f78592bb8a8030bcf4b0194245a6c5"],["/2023/05/07/数位排序（JAVA）/index.html","ed7fb0490195c3494f999f72487db4b4"],["/2023/05/07/数组切分（JAVA）/index.html","138c193292f40ef8a430ad2c093446e3"],["/2023/05/07/最优清零方案（JAVA）/index.html","071e2ab6e236c78fa11e83e661e51794"],["/2023/05/07/最少刷题数（JAVA）/index.html","feb727a9f17e981caa3b3409654c072b"],["/2023/05/07/杨辉三角形（JAVA）/index.html","2c59ea3d4c2818237befe009a85be246"],["/2023/05/07/求和（JAVA）/index.html","53bd046e3799768d891ace961f9b332c"],["/2023/05/07/求阶乘（JAVA）/index.html","72243fab1439cedb5afb971b36fe6fed"],["/2023/05/07/牌型种数（JAVA）/index.html","57bf559c6a5f96f574fa8907adc7f59b"],["/2023/05/07/猜字母（JAVA）/index.html","30946a1202bde442e71ddbdb5da7064a"],["/2023/05/07/路径（JAVA）/index.html","0dc673559e580660a5e33bf0fd364934"],["/2023/05/07/青蛙过河（JAVA）/index.html","f25f8444d0a806dd42d678d38fe798a7"],["/2023/05/16/重合次数（JAVA）/index.html","82b4efc6f208d563f26be8210b1dad68"],["/2023/05/22/左移右移（JAVA）/index.html","1fbad872481feffd51312598cb42f2c3"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","dc6b5f252d04192c528daafd11c99020"],["/2023/05/28/本质上升序列（JAVA）/index.html","ce05cdf9fe33b80928ef50ef9e53490e"],["/2023/06/07/方格填数（JAVA）/index.html","161a27b2b7a201fbe450a5a8d1148b9c"],["/2023/06/09/合根植物（JAVA）/index.html","ee63f04d0cf958a26a8c5687b1a95237"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","bf21f632f0e572284e97500788a149a8"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","bdb2b3deffb656538db8b60999dd52eb"],["/about/index.html","b3efb34c9dc2e2f6e33e3506bddbe8f0"],["/archives/2023/04/index.html","690f62ac4e29d21bb4d0a0eb5c8e847e"],["/archives/2023/04/page/2/index.html","9e36c681f9156141f73877ba65aa819f"],["/archives/2023/05/index.html","cf3742ccc35be0e9379fef1d121f1476"],["/archives/2023/05/page/2/index.html","7acd69de14dd42f1fd8f398797906de8"],["/archives/2023/05/page/3/index.html","f97784ff545d6aeba21704679c820fb4"],["/archives/2023/05/page/4/index.html","350a7087afb206a7afb5c467571ebc38"],["/archives/2023/05/page/5/index.html","49feeafa8e50a1468de135d461364dcc"],["/archives/2023/05/page/6/index.html","1fea6cabb770b1345191cc84819f7c53"],["/archives/2023/06/index.html","f8c312e79eb581a883c5d74e199686b4"],["/archives/2023/07/index.html","4285178b4ba92fa1f4931976a7f9af43"],["/archives/2023/index.html","aca0b22a56561dbc022867fbc86adab9"],["/archives/2023/page/2/index.html","93ccf0b5504f8af972f39fb2f4332c1b"],["/archives/2023/page/3/index.html","2fc8c7ffebc91b156e3037a95d84a03d"],["/archives/2023/page/4/index.html","2b74415b4211b64a214c4721adae6cd2"],["/archives/2023/page/5/index.html","8eac0ed20b6eeacc2b879bed1b2911a2"],["/archives/2023/page/6/index.html","6015d2db3ef396c03a55c121143ce6c1"],["/archives/2023/page/7/index.html","7d8393a4c5653b7664608d86ff8e5d9d"],["/archives/2023/page/8/index.html","6203060a47190142c10d54864b0681a1"],["/archives/index.html","7f49d57e568cab72e00497326ff7f20a"],["/archives/page/2/index.html","b3581084184b65f88e16a89c853f3c37"],["/archives/page/3/index.html","1d0481e58f9fdc84555fdc3ce4c081f3"],["/archives/page/4/index.html","e7d961b02a2ee9f294cf1a03dd4ec0c2"],["/archives/page/5/index.html","db7b4c3a6d3a07838a4ecdf572d3e62e"],["/archives/page/6/index.html","9b3394336a6d932105cb6b8167ce1040"],["/archives/page/7/index.html","843067077f218d12b72c83f9dfee8eec"],["/archives/page/8/index.html","8e59b0b63693f3681b3c4979fe51c49c"],["/categories/index.html","2404f01f8d2101e01411cd349b679e1b"],["/categories/java/index.html","fa1897ab5d0e3ea37691a53ef797da3e"],["/categories/java/page/2/index.html","c715ebb792fea0666eac11e499f7c7cf"],["/categories/java/page/3/index.html","90555d95630c705e6d5e8c570b3476ad"],["/categories/java/page/4/index.html","55bc672d629d8baad257b49a183aa4cd"],["/categories/java/page/5/index.html","d27da7fce01a927b27326754008d36ca"],["/categories/java/算法/index.html","9c7faab2b553ff7b772540646ad1373f"],["/categories/java/算法/page/2/index.html","5513ad90c465e74e49ddfc31da1e9b81"],["/categories/java/算法/page/3/index.html","db95132b4a684cc916e8dca996e8dfe1"],["/categories/java/算法/page/4/index.html","c22b56eeeb28cdf3c50d1b9901d0076f"],["/categories/java/算法/蓝桥杯/index.html","f1b4f5ec99612d40c77f0748505cfeb2"],["/categories/java/算法/蓝桥杯/page/2/index.html","62b43ac11178fef66b29789ec63ab00a"],["/categories/java/算法/蓝桥杯/page/3/index.html","d54db08df40dfb74ddda3cce82c5edc0"],["/categories/java/算法/蓝桥杯/page/4/index.html","ce57a4489cc533070c0365daacc767a4"],["/categories/java/蓝桥杯/index.html","7cbe1b4bbbf11981ddff3e54fae6b0ef"],["/categories/python/index.html","43acbbed335d5bc4014654235c9e3b99"],["/categories/python/page/2/index.html","d7578af8c610ec9a828cdd40b379e122"],["/categories/python/page/3/index.html","3666abfb797f8deae28151e81440af32"],["/categories/python/蓝桥杯/index.html","43956b144c8601092fc24d6c92328739"],["/categories/python/蓝桥杯/page/2/index.html","2ebe9bcc59a5fbd5fa403d3dda2820cd"],["/categories/python/蓝桥杯/page/3/index.html","e2fa8fcc7b712314f0d9deafba196fcc"],["/categories/python/蓝桥杯/冒泡排序/index.html","158a3605dc40770e21ce8a26838de768"],["/categories/python/蓝桥杯/结构体/index.html","8c3220afe92bbe8d5920b695786a052a"],["/categories/python/蓝桥杯/链表/index.html","da915217e91433599bd16e6f241c9c79"],["/categories/教程/index.html","f71da4f95615e54b5a40128b8c09696e"],["/categories/日常习题/index.html","5b5ccdae9f2429e10ec858bb1bc28907"],["/css/index.css","22943828075c56a01cb0542ca0eca399"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","54f9dce0dee9b11fb1546d0ee0fd91c0"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","376769ce33979d1c9b1457d1d09f2373"],["/page/2/index.html","7f2285ce1cb49de0b905da4ea4399395"],["/page/3/index.html","8d2ec8a0bc78dd6eb281ab51e08c7311"],["/page/4/index.html","bda54162b4585b68dfe9fb33ea008278"],["/page/5/index.html","656688da0ff27fc74eb01b4ab506f772"],["/page/6/index.html","8609801438a1f7992d8d6cf337dac5e2"],["/page/7/index.html","9cb17767b66887d42bc5ad51ce6d653b"],["/page/8/index.html","72f691cc832b96dfc3059939985acb47"],["/sw-register.js","0170da671be75f8a2db0a6632aa8cf78"],["/tags/index.html","9d2b7bee8fa7f4ffdadb8b1dd232fb39"],["/tags/java/index.html","be0c99d1c90d7ee6e5cd9f75cde6cc6e"],["/tags/java/page/2/index.html","950bb8996d939afd5e5e70ee85ee497b"],["/tags/java/page/3/index.html","0f1d5812d88b64c76c8e4fbc18267c4c"],["/tags/java/page/4/index.html","3627a53204489d6a5a9341b124f951cf"],["/tags/java/page/5/index.html","290718c2012be22984227611c5d77602"],["/tags/python/index.html","8601a1fbcf10c48344e25d4f527bdc2d"],["/tags/python/page/2/index.html","a83217158fa5cd649566332f32ac2e7c"],["/tags/python/page/3/index.html","64800e6beb8cd7f91aab229fa504a76a"],["/tags/冒泡排序/index.html","95618d234d7feed74adc56b6bd9a1c67"],["/tags/算法/index.html","19ea4c74401a2a631fe50be95d7b9310"],["/tags/算法/page/2/index.html","ed5428c9b559f127ed88b34a6dc558aa"],["/tags/算法/page/3/index.html","a3c349e1ed65585b8fd5253263e9cd05"],["/tags/算法/page/4/index.html","fda685144e44cef0f63b3c11381fa523"],["/tags/结构体/index.html","4f6a73bd8e056b79f4f3695ded6a39ec"],["/tags/蓝桥杯/index.html","c7850e63d6bb9e4ebcc4dfe6d1a1a4ed"],["/tags/蓝桥杯/page/2/index.html","ffd1a315b0b7b3b0562b3fe2859eb36a"],["/tags/蓝桥杯/page/3/index.html","23e0bc7c375e47b307b8ac0a5cf7f8bb"],["/tags/蓝桥杯/page/4/index.html","4ae55a9e284901f534c2524c6599d45e"],["/tags/蓝桥杯/page/5/index.html","e18cca98f15cfdf7d53f46d678f4c3f2"],["/tags/蓝桥杯/page/6/index.html","435e1c7e5ee0cce2d856e9d9a6a8d846"],["/tags/蓝桥杯/page/7/index.html","c1c4e797b8f35e07d49c2df28a36e44d"],["/tags/资源教程/index.html","1238b91fd1a1ea316aa8f0a5af65e612"],["/tags/链表/index.html","57e11eb83b75cac269ca0e1c01bd98c7"]];
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
