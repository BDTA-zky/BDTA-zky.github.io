/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","8ef161ef296b6718c4c9cfe837a28d28"],["/GCD（JAVA）/index.html","f4563eb4cf5c7861699f5b05af09043b"],["/Hexo-GitHub搭建个人博客/index.html","80cd36b7575dcc44ec40555e4545e94c"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","d941d8abb8490beb2cb1174c1e979f89"],["/LeetCode46-全排列（dfs算法）/index.html","b40c4898da4aa1f555b59b17b42802e1"],["/Python150题day01/index.html","1a0f45bb1446734e9ef96a2d54d3681e"],["/Python150题day02/index.html","37ffd2319575af1b571cae2ba7488907"],["/Tomcat部署项目后，验证码不显示问题/index.html","debe83cbe08393acab749c1f57b16beb"],["/about/index.html","b32ec018b52cfc8c5ca2225a20c2866d"],["/archives/2023/04/index.html","28e895a01777a7502be815a71b1a650e"],["/archives/2023/04/page/2/index.html","afcc7b050ab38b102b9082f85025e760"],["/archives/2023/05/index.html","29e8b6df56a575376d63db79643b8f21"],["/archives/2023/05/page/2/index.html","02a3eee6d2ae931a08560587d4bff5ed"],["/archives/2023/05/page/3/index.html","5bb712cc57d691c89fa6ee59d4a0db42"],["/archives/2023/05/page/4/index.html","59deaaa6bf48cf3beab37dbb46d86b7b"],["/archives/2023/05/page/5/index.html","84b5f5169f430acaa933802be9141419"],["/archives/2023/05/page/6/index.html","aaaef023f93a319ef971a8429b5b3502"],["/archives/2023/06/index.html","fddf7824b09e48e4423ca88fc6aafef3"],["/archives/2023/07/index.html","c037b37162cf709c92555f357addfa73"],["/archives/2023/07/page/2/index.html","af05685cf3124d68f7cbd45629b0f39b"],["/archives/2023/09/index.html","f651cefaddb3b4a651fb6127fc450161"],["/archives/2023/index.html","742454f1f2f421b86e396f63a0dcce11"],["/archives/2023/page/10/index.html","f7cae956741169b52c5985ce9e3c2862"],["/archives/2023/page/2/index.html","fa6bdadcdd76c190a4f99f6431eb661c"],["/archives/2023/page/3/index.html","6d5cbb3e7d3dea191894f292e71d74be"],["/archives/2023/page/4/index.html","3f5b1ad8a3980acd3aa264f5501d9718"],["/archives/2023/page/5/index.html","46346ab6294acc9f668fdfd068c68511"],["/archives/2023/page/6/index.html","53a82535792afb204a14c1a14886d929"],["/archives/2023/page/7/index.html","21dab4026394ecadb83186c2c8922c08"],["/archives/2023/page/8/index.html","71a97f5ee5d9b4095111f23f5389b068"],["/archives/2023/page/9/index.html","1bf17f8aa66520935808dea9e3054b98"],["/archives/index.html","8ccdd6714a39e6d50349eeac04ec5872"],["/archives/page/10/index.html","1efe26c732b077e7142938177487adf9"],["/archives/page/2/index.html","374f200398777ea0318faf566398463d"],["/archives/page/3/index.html","b2012cc8ff4e9eda5207cf7739d2fca0"],["/archives/page/4/index.html","a47a9f6ae37e6b48b152e7e6cd079b41"],["/archives/page/5/index.html","26a4ccd25c8184cedacc857fa60e6bac"],["/archives/page/6/index.html","f9825ec8a929dfbbf8cefd3e5a8f630a"],["/archives/page/7/index.html","f9f821a08ee800a3a4ba61f85cfaa141"],["/archives/page/8/index.html","ea11b6378a6496f333a45aed1fe55ad3"],["/archives/page/9/index.html","c8f422dcdb8dbabecef0abd282dd7fd7"],["/categories/index.html","c801dca131732cae208b1cebadf091ac"],["/categories/java/index.html","f05f21f5c5ad864fa2e92f99a8f22806"],["/categories/java/page/2/index.html","5624191ab0217a237e69b593b9f939fe"],["/categories/java/page/3/index.html","98e3d2d9ad94be3fd7bb99f51170be42"],["/categories/java/page/4/index.html","1a4c1cfd4229c08876b74d0a51f7c8ec"],["/categories/java/page/5/index.html","fd45f9b141304214b5c49d113c4157e1"],["/categories/java/page/6/index.html","d79bb961591498a4ffa0dac0510052c2"],["/categories/java/算法/index.html","52c06fe5752cd5bc48162d14caa91aef"],["/categories/java/算法/page/2/index.html","6c302cd3525d902eab8176d0d3f3c31b"],["/categories/java/算法/page/3/index.html","c8512f60456c1796d18eb27ba1b869e9"],["/categories/java/算法/page/4/index.html","72bb350303b6c3215322bf15ab62c412"],["/categories/java/算法/蓝桥杯/index.html","eb149f982b2393d496193a1bc4340232"],["/categories/java/算法/蓝桥杯/page/2/index.html","ccf1f5e40883d1e7f7a6b0e534e8f8e1"],["/categories/java/算法/蓝桥杯/page/3/index.html","25212647fa5cd835f4332eaea5bcfc1e"],["/categories/java/算法/蓝桥杯/page/4/index.html","2b7ab8ab70e01f09fe70f965adc88b39"],["/categories/java/蓝桥杯/index.html","e09a229a17bbe1afa92afb4f8e2304fc"],["/categories/java/蓝桥杯/page/2/index.html","05f0317515b62d97d7280d3d21988b6a"],["/categories/python/index.html","a3ab95ccfb0f849627b986c085f8c67e"],["/categories/python/page/2/index.html","ef3e61982a61a548aff0d482678f23c9"],["/categories/python/page/3/index.html","2519775fc8d4c111d7c14e81777a984f"],["/categories/python/蓝桥杯/index.html","d4051267a30649840ffd6d86aa58df9b"],["/categories/python/蓝桥杯/page/2/index.html","4fe271ad60305db8f7aadef5f92f50f8"],["/categories/python/蓝桥杯/page/3/index.html","81d3922ade1ef54795d2880267c5dbcc"],["/categories/python/蓝桥杯/冒泡排序/index.html","b37d29ced133684c44c8a5f4e61811e4"],["/categories/python/蓝桥杯/结构体/index.html","1458a86957e231688c3dd65adfc1034e"],["/categories/python/蓝桥杯/链表/index.html","4e34bf4b8a1f565ece950401b6c40f6a"],["/categories/教程/index.html","07df664b0153825a7c4650d7402f3f79"],["/categories/日常习题/index.html","58bfc5471839a6e5a9794f02c02360d8"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","5929958e4a6f5d252534f134ffb94121"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","edf6e1ef9c1d7c58e3fe996f72461480"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","70508ee4bc6f42913d35d0fe80243c7f"],["/link/index.html","460649845767de6c6e37ec42d7689443"],["/page/10/index.html","978c4d6356aca6d15e84cb7f851a40a3"],["/page/2/index.html","8592966c829a1eb635a475f0822b9d3e"],["/page/3/index.html","92fd50a0f2834012f46e3b877cb6ece4"],["/page/4/index.html","0ed8057d145c71c8d6a44b4c2271833b"],["/page/5/index.html","65350654a605eb011f24264bcc33ab31"],["/page/6/index.html","e6fafeb0f1b731bd560edea3f18086c7"],["/page/7/index.html","5924538328aa499438178d9bb6029b9c"],["/page/8/index.html","c73a963d23630bbfbe55e86b14ff1af5"],["/page/9/index.html","8a7d351bbab511ab1a593e2accc57673"],["/sw-register.js","5899c2c5e936f8822bdc581dcbe401d2"],["/tags/index.html","9d061a8d36d6ee4bae7ca5e83b9e4b57"],["/tags/java/index.html","caaa818c672491b97ae6fbcafcee7c9a"],["/tags/java/page/2/index.html","d05336961913e4475f0b7bceb7989163"],["/tags/java/page/3/index.html","ee47ccef2c483700cd56b480057354f5"],["/tags/java/page/4/index.html","1a04e411a3498914502b0b0222f9f4cd"],["/tags/java/page/5/index.html","a93e3e83a2beba1c44c1262134307fa3"],["/tags/java/page/6/index.html","453ab3436884ce37e970e280c0fa8251"],["/tags/python/index.html","a08264f0c70864e4e5e3d1afd1f1b71d"],["/tags/python/page/2/index.html","5ee39bc8e18cc9cc6c0764c22f2ff58f"],["/tags/python/page/3/index.html","474feb1d244748965451096457d5d0b6"],["/tags/冒泡排序/index.html","abf6e6d30d360f89ed3c480af08415e4"],["/tags/算法/index.html","576807c7e877ee9a4a6bcbd17b4ca76a"],["/tags/算法/page/2/index.html","27d012d574fc575dbddbd245c2fb3c0b"],["/tags/算法/page/3/index.html","ac658f15cd4b18d234380713d7a590fe"],["/tags/算法/page/4/index.html","0d49bb677ba3825e012ba40db4b1ca9f"],["/tags/结构体/index.html","1a74f8a55d5746a296a3289e50e3a195"],["/tags/蓝桥杯/index.html","de61a5494940bce9ff6aa586ba20b872"],["/tags/蓝桥杯/page/2/index.html","25ac5c77bb4b36b792b3b4d17c7c5d1c"],["/tags/蓝桥杯/page/3/index.html","eddb15b6e755bc7abe87229144470670"],["/tags/蓝桥杯/page/4/index.html","a59e959bee9ebfdad146ca5e618e87d1"],["/tags/蓝桥杯/page/5/index.html","6c5dfda4fe8bcd407999e14544ef2365"],["/tags/蓝桥杯/page/6/index.html","387692084d5b9f4f5003b9521bfe2033"],["/tags/蓝桥杯/page/7/index.html","6703b3c9593d0c4a3a6b44b5cce05656"],["/tags/蓝桥杯/page/8/index.html","ea72ece133506e5d29e57a566047f2d9"],["/tags/资源教程/index.html","8b8db4442237a7a021a3e3885b148763"],["/tags/链表/index.html","4918f496a4793a01d033d40dc287bd11"],["/typora/index.html","618bed3300cd51809a3ed35b73adb013"],["/七段码（JAVA）/index.html","8c3a624815288e2dfd2a12e5d9ff4f99"],["/作物杂交（JAVA）/index.html","5666aceb2b7c7db076a881214b1458c2"],["/全排列的价值（JAVA）/index.html","800cbd0abc4a5cb4a0cb4ec3f73d7c4f"],["/包子凑数（JAVA）/index.html","78f7c9d510394e8976976222f539c718"],["/双向排序（JAVA）/index.html","6a0c31ddce5cd31d78bb4e7197adc61a"],["/取球博弈（JAVA）/index.html","ee30bcb99a6f1f326697160cd30c15f3"],["/合根植物（JAVA）/index.html","97abf2e71a00694239b6d133f555ac13"],["/四平方和（JAVA）/index.html","36c07265fce2d96fdd408c143dc6d591"],["/回文日期（JAVA）-1/index.html","10b4b9733c78c4ba877d34df3c27f345"],["/回文日期（JAVA）/index.html","51fd9fce4dbf226935cd425d7b3d8751"],["/山（JAVA）/index.html","1775ee4b5bfb4bbdad61275ff364d9e4"],["/左移右移（JAVA）/index.html","636895b0481224547b442095522cd677"],["/成绩排序（java）/index.html","e56d6b87ffaef0e72e8ac5358a861a16"],["/数位排序（JAVA）/index.html","e76a41e8af4d0260f164111492056ccd"],["/数字三角形（JAVA）/index.html","2ea273b446818e0620d410d8d6778091"],["/数字加密和解密/index.html","0a34307305318b45fa1968f6c0fc0d9f"],["/数组切分（JAVA）/index.html","718c18b9bc0d05b4f89e0bfb07dbcbe4"],["/方格填数（JAVA）/index.html","e4bd804dbcca75a63286fbb428fdf5ac"],["/最优清零方案（JAVA）/index.html","477c076672e754229b54f0fae71b92ee"],["/最少刷题数（JAVA）/index.html","ed0b31f670cb6012658fca657f212c53"],["/本质上升序列（JAVA）/index.html","285c84916f5029cb67694611413843c5"],["/杨辉三角形（JAVA）/index.html","ecbbddda23ba1071ca913d50190d5c56"],["/案例2-1 商品入库（java）/index.html","b4554f00166be80deb46d16aa7c73904"],["/案例2-2-小明都可以买什么/index.html","6a77ea8bb9610fcce9a7370351627ec5"],["/案例3-1-基于控制台的购书系统/index.html","2cd678ab3d232f32fb68c1ff012475e8"],["/案例4-7-经理与员工工资案例/index.html","27bc87e7cef5630a81aa53c291cf2cb5"],["/求和（JAVA）/index.html","f28b81c51868f524d2d80b204982398f"],["/求阶乘（JAVA）/index.html","c5cd9dcb671caeca3c459823a3e3f769"],["/牌型种数（JAVA）/index.html","e98dffa38f17c6602ad70202e7e4ad65"],["/猜字母（JAVA）/index.html","24351ec23bb3c35fb1c23806b78110f6"],["/猜数字（python）/index.html","1cb36de45c5c96cb2f185d71f96a3dc5"],["/砝码称重（JAVA）/index.html","61ac69c413fdc4c99636e63d35e6032e"],["/等差数列（JAVA）/index.html","e0ab153ec1ca71dd834ae6f36e16cd5c"],["/蓝桥杯--单词分析（python）/index.html","77154899ebaf735c782e04888117c33a"],["/蓝桥杯--回文日期（python）/index.html","474a25007506e8dfe49675480ca2feb4"],["/蓝桥杯--字母数（python）/index.html","e1cb197a8b18c339ff16dd72a12d049f"],["/蓝桥杯--成绩分析（python）/index.html","8f2c7e86c8057b8fb394a32bff145bbb"],["/蓝桥杯--成绩统计（python）/index.html","f43f5899ffb6ce1e55c53c5806ccfd5d"],["/蓝桥杯--排序（python）/index.html","5dd2cf857c926aa8074775c602aea525"],["/蓝桥杯--数位排序（python）/index.html","8a91d6ae090eb0e0d2b43006b2ff5f53"],["/蓝桥杯--猜生日（python）/index.html","f03f6b6d673b0b20e71e7b8729d32551"],["/蓝桥杯--猴子吃桃（python）/index.html","63f6b224c3ddedc2cc55f61e8e082e9f"],["/蓝桥杯--石头剪刀布（python）/index.html","8a9955c43fc7873a558aadbafb98bf73"],["/蓝桥杯--移动距离（python）/index.html","ee7c9d86322db0de474fc855c4117182"],["/蓝桥杯--空间（python）/index.html","78ca2e100eb9ed2215be4b3d1629a2f6"],["/蓝桥杯--等差数列（python）/index.html","0c6f930b9cbe95f38577aafd7bb1e772"],["/蓝桥杯--纸张尺寸（python）/index.html","506510cf804c64c82c53aeb65207f22a"],["/蓝桥杯--结构体之时间设计（python）/index.html","cef618bcb66037cfe8a31b7a6ce0f786"],["/蓝桥杯--货物摆放（python）/index.html","924b79d805d4a7c97d8db67895a1f35b"],["/蓝桥杯--质数（python）/index.html","f3919b0d9d6f4ebd5f4c1602bef32768"],["/蓝桥杯--购物单（python）/index.html","7650c5c4590d61fd3d7d6f71f633e1a3"],["/蓝桥杯--跑步锻炼（python）/index.html","85bb3fe23ba868a4090200f18eb5abbf"],["/蓝桥杯--迷宫（python）/index.html","837fd0ddbce7f27e8a445a0ac4766c70"],["/蓝桥杯--递增序列（python）/index.html","7b272a77c853156addb59069741a7a28"],["/蓝桥杯--链表之节点删除（python）/index.html","aeed1ee1d43b14a76626f0681503b0c5"],["/蓝桥杯--门牌制作（python）/index.html","3d3558b9e402efe5aa0c28f6e7e503d8"],["/蓝桥杯-592门牌制作/index.html","448fbaefe0e095fa2936c14f16ab55fa"],["/蓝桥杯-单词分析（java）/index.html","32fefe9100dcb03993796189db64cb2c"],["/蓝桥杯-字符统计/index.html","89bf92b767f4758ec19fc775ec4512d4"],["/蓝桥杯-山（java）/index.html","00909200b5617fff06a2c82c04c7eb66"],["/蓝桥杯-成绩统计(java)/index.html","9667c27eca7df0e0a6c21f636db580c2"],["/蓝桥杯-数列求值/index.html","4dcfefc7d65be84cf00ae9a38d552ade"],["/蓝桥杯-数字三角形（java）/index.html","d241ef1c80d300b05ccdee23aed645eb"],["/蓝桥杯-既约分数/index.html","f8b2f840cd3cccc754e027d1b637524c"],["/蓝桥杯-时间显示/index.html","79713f9783496bdf52e9730d8bb86655"],["/蓝桥杯-最少刷题数/index.html","5829252a2870ebd23eec3b0d355aa139"],["/蓝桥杯-特别数的和/index.html","6a1e9b095c0ff08f1ee310fbc1bce095"],["/蓝桥杯-蛇形填数/index.html","89a7209b9d39a04020a9582e0b2a06c0"],["/蓝桥杯-跳跃（dp）/index.html","a425641d0b49e572d7c74b614aa17cf7"],["/蓝桥杯-链表数据求和操作/index.html","66494aa62e85c56e5def54ef9d0f0dad"],["/蓝桥杯-阶乘计算（二分）/index.html","e342d3ae0ca50c5a3d3a385ef1bf366e"],["/蓝肽子序列（JAVA）/index.html","7dd2db42ca4c2539f50667d7bd3c744a"],["/计算球体积/index.html","a134260eae706167ae7e1273d939d52e"],["/计算矩阵边缘元素之和（java算法优化）/index.html","938b831d9715c38a5e2da1710e216d53"],["/质数拆分（JAVA）/index.html","e380d27c318904299f26da01df7ae607"],["/路径（JAVA）/index.html","729fab81524b4b2766a8f6dbdf94b836"],["/重合次数（JAVA）/index.html","45f638dad6c34e274d0e235c7594eff3"],["/闹钟定时程序（python）/index.html","264d60def6ac61b6a1b073771002cfc5"],["/青蛙过河（JAVA）/index.html","ca594237e08f13528181943f3dce743d"],["/验证码（random类）/index.html","65e042ec4aa232a73f87615d22aceb46"]];
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
