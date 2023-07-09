/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/04/17/typora/index.html","057427cc3c2b18025fb9fb7c9fe6a240"],["/2023/04/18/Hexo-GitHub搭建个人博客/index.html","0c6d78059e8513f3ef632d214e7d8dd9"],["/2023/04/22/蓝桥杯-阶乘计算（二分）/index.html","bb31d194451b4d300263460f1f5c2837"],["/2023/04/22/验证码（random类）/index.html","ef5f3287139d8d91f338418ae8c44d2e"],["/2023/04/23/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","9f08da2ae2af7d2403ac9d35689e04a1"],["/2023/04/23/LeetCode46-全排列（dfs算法）/index.html","b33350452eb5a19c77a8c92da5f2fcc4"],["/2023/04/23/蓝桥杯-592门牌制作/index.html","8813e05eb0c106d55a35ad1e5e9edb8a"],["/2023/04/23/蓝桥杯-单词分析（java）/index.html","6d595c24ad6d70853de26159622190b5"],["/2023/04/23/蓝桥杯-山（java）/index.html","43f121fa2cdf938e8f016cef2e95cf87"],["/2023/04/23/蓝桥杯-成绩统计(java)/index.html","e9241d2535e315e3b0419381152aa6b6"],["/2023/04/23/蓝桥杯-时间显示/index.html","49c3c4ac126d4cb00d676e6add546273"],["/2023/04/23/蓝桥杯-最少刷题数/index.html","2db0d22fc81c7dbff43d46d42d2c51ca"],["/2023/04/23/蓝桥杯-特别数的和/index.html","ffed119e065a6e0b62657a885edcda3e"],["/2023/04/23/蓝桥杯-跳跃（dp）/index.html","326a005a77c06c5b875e3ce7c8645665"],["/2023/04/27/案例2-1 商品入库（java）/index.html","ffbd23cdf79adbf426385ee9dbe9d1a7"],["/2023/04/27/猜数字（python）/index.html","c5292a1802fb87f59bbf039eff706849"],["/2023/04/27/蓝桥杯--单词分析（python）/index.html","1d04ac7e5d8654f3e36a5c647a512bc7"],["/2023/04/27/蓝桥杯--成绩统计（python）/index.html","6726fd444a54ef9785675395ae508541"],["/2023/04/27/蓝桥杯--移动距离（python）/index.html","bcf7c3086e3ae7f2b34eccf0475b10ae"],["/2023/05/02/数字三角形（JAVA）/index.html","018695bc2bf2b226b73bcf73cd8f23bf"],["/2023/05/05/k倍区间（JAVA）/index.html","e04704af4426aa0fc56af238168fe688"],["/2023/05/05/作物杂交（JAVA）/index.html","a22cfa7d0e60b02e9b497ec02481be18"],["/2023/05/05/包子凑数（JAVA）/index.html","169969f0190c0a53bf6a1aefc4dc42e9"],["/2023/05/05/取球博弈（JAVA）/index.html","acb3ddbba66e9c602efea1793406daea"],["/2023/05/05/回文日期（JAVA）/index.html","21ee72ea819453e1c3b1cd715d350510"],["/2023/05/05/砝码称重（JAVA）/index.html","26c7f274d2251bedeebd5593daaac7d1"],["/2023/05/05/等差数列（JAVA）/index.html","26dc8c09964dbdd4ea1b1f927c940220"],["/2023/05/05/蓝桥杯--回文日期（python）/index.html","5aac9248b0e84cdd0460f85fdba3aba8"],["/2023/05/05/蓝桥杯--字母数（python）/index.html","34d122c24d13bc2f0e8fb448dead812b"],["/2023/05/05/蓝桥杯--成绩分析（python）/index.html","ffe7e2dcf8e3b5d4944ca9ca61792db6"],["/2023/05/05/蓝桥杯--排序（python）/index.html","c12b48612578e1531bafc259986c260e"],["/2023/05/05/蓝桥杯--数位排序（python）/index.html","09752aac49b9a49e2f259f359ede8f54"],["/2023/05/05/蓝桥杯--猴子吃桃（python）/index.html","f86b0cfa4c489ef41c454f55948fe58e"],["/2023/05/05/蓝桥杯--石头剪刀布（python）/index.html","9806ac17d8c3d2630db21ece0452fb1f"],["/2023/05/05/蓝桥杯--空间（python）/index.html","7c3adbaa65cf92214d1cca074f45e5c7"],["/2023/05/05/蓝桥杯--等差数列（python）/index.html","ebdd61a6ff56e53a1ee91902fd8ecc35"],["/2023/05/05/蓝桥杯--纸张尺寸（python）/index.html","c9d3d60a81b6de5b9f49ab18147c79a7"],["/2023/05/05/蓝桥杯--结构体之时间设计（python）/index.html","29bf56f82a0fb4ae3e95370d8c1b3852"],["/2023/05/05/蓝桥杯--货物摆放（python）/index.html","f7d56e3e5b700178bd4a101a68332d55"],["/2023/05/05/蓝桥杯--质数（python）/index.html","c4ca38abad7d874cf9fe34dd675d189c"],["/2023/05/05/蓝桥杯--购物单（python）/index.html","fd764ba788f73d52ca12285a0e3aa69e"],["/2023/05/05/蓝桥杯--跑步锻炼（python）/index.html","46bd431d4bf802644e7431132c75cef4"],["/2023/05/05/蓝桥杯--迷宫（python）/index.html","ea4eca0a159a666510c60ba238b71426"],["/2023/05/05/蓝桥杯--递增序列（python）/index.html","f55596cb1ef595753459ad4441a8b050"],["/2023/05/05/蓝桥杯--链表之节点删除（python）/index.html","d17db8a44aef9df348d54c29da8cb361"],["/2023/05/05/蓝桥杯--门牌制作（python）/index.html","3e039db2b17abff4d27c45ac0172b316"],["/2023/05/05/质数拆分（JAVA）/index.html","b3ae85fd85dd212e78b339698f20ade0"],["/2023/05/05/闹钟定时程序（python）/index.html","e5b0b55ac7a6eadfb487d966937c380c"],["/2023/05/06/蓝桥杯--猜生日（python）/index.html","446d195ae12e1877818a2730fc55ed4b"],["/2023/05/07/GCD（JAVA）/index.html","328f98dab599db558d8e20c68111afb1"],["/2023/05/07/七段码（JAVA）/index.html","9ee19ba1e0459167cf51dcf4cedbbe4e"],["/2023/05/07/全排列的价值（JAVA）/index.html","3c2f1ce459c956707333411f0ae8f225"],["/2023/05/07/双向排序（JAVA）/index.html","1be2d5facaf46db59227b53b35d03677"],["/2023/05/07/四平方和（JAVA）/index.html","54591157a464affca355aa0f5cdb5494"],["/2023/05/07/回文日期（JAVA）-1/index.html","f678f52b62f60fa6c6faf2bad155a1c6"],["/2023/05/07/山（JAVA）/index.html","9ecbd49afefb4ffad2f4693ebca284b0"],["/2023/05/07/数位排序（JAVA）/index.html","cfd119b81e83d38a19856c9a2547e1c6"],["/2023/05/07/数组切分（JAVA）/index.html","d28b8148a83e50a954fa3c7adf1d2d26"],["/2023/05/07/最优清零方案（JAVA）/index.html","cf54883551b41413414d47b0ba90427d"],["/2023/05/07/最少刷题数（JAVA）/index.html","61096f39b0c3622bc70d09d2d0e499e1"],["/2023/05/07/杨辉三角形（JAVA）/index.html","00d1e2690e46ce93f54aba360c9de7a1"],["/2023/05/07/求和（JAVA）/index.html","70d73cd6aa3eb4cbee5247176dbddff8"],["/2023/05/07/求阶乘（JAVA）/index.html","74caf40131fb1dbd6cd208960dc420b7"],["/2023/05/07/牌型种数（JAVA）/index.html","a1e61024e858e8dfce164bda728223f1"],["/2023/05/07/猜字母（JAVA）/index.html","346ae296bb2a96c7966b4c3bf843524b"],["/2023/05/07/路径（JAVA）/index.html","48e220c2a36d826a1a43aea07863486d"],["/2023/05/07/青蛙过河（JAVA）/index.html","ad492a42ab3bd55a8dfdace965371e21"],["/2023/05/16/重合次数（JAVA）/index.html","f786895ffcc49aef6e5bf74c534e7317"],["/2023/05/22/左移右移（JAVA）/index.html","6150e258a9c65cb1e08dabc12e544b54"],["/2023/05/26/蓝肽子序列（JAVA）/index.html","5f4f13a0f79ee82b725723d780a869bd"],["/2023/05/28/本质上升序列（JAVA）/index.html","bde520ffa242a3ee557d7fe68c7f4ce1"],["/2023/06/07/方格填数（JAVA）/index.html","8d0c816d1c8b31ad13136a5010dee486"],["/2023/06/09/合根植物（JAVA）/index.html","19986973b44d1452e91ba2ea3508111c"],["/2023/07/06/Tomcat部署项目后，验证码不显示问题/index.html","f3faaac8e1e49ba0a36b1a60380f858f"],["/2023/07/06/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","3970c9cf9d2e2fd2bdcc4f35df818472"],["/2023/07/08/成绩排序（java）/index.html","6fd925c70337269483d6954b11f2dba3"],["/2023/07/08/数字加密和解密/index.html","ee52f1794b090063f6e44e40bcc7eca0"],["/2023/07/08/案例3-1-基于控制台的购书系统/index.html","2309a32c2be09aa68967125a7ca04709"],["/2023/07/08/案例4-7-经理与员工工资案例/index.html","8fa3c9aaf64a3430d13c7bc6333503d5"],["/2023/07/08/蓝桥杯-字符统计/index.html","90e4f009ee0ff7e243425ff6ecccb82f"],["/2023/07/08/蓝桥杯-数列求值/index.html","7384216ad772bf5ce7f869d2cae6bd6a"],["/2023/07/08/蓝桥杯-数字三角形（java）/index.html","bb7b481e761ce70ef21be2eb5800931e"],["/2023/07/08/蓝桥杯-既约分数/index.html","e745683f0ec7811304c19754817a4738"],["/2023/07/08/蓝桥杯-蛇形填数/index.html","59cb404aa6a8265ae1b42f00c3ef1cb0"],["/2023/07/08/蓝桥杯-链表数据求和操作/index.html","0a3481c7b39cac36e9c9b876cbdfc2f6"],["/2023/07/08/计算球体积/index.html","d6307dbe6f2ad0eab73206b672a46563"],["/2023/07/08/计算矩阵边缘元素之和（java算法优化）/index.html","fd0bc68eca4a299f1d90498bd3e9a95b"],["/2023/07/09/案例2-2-小明都可以买什么/index.html","08a506c706a71d94588b3eb48d78fa47"],["/about/index.html","62215d58c3db685f938191468eb19a9c"],["/archives/2023/04/index.html","e16075fe471be24dbee99746a847feed"],["/archives/2023/04/page/2/index.html","1f913520277d6a17e23763e6d665cd58"],["/archives/2023/05/index.html","06dac70d4ae3cfa8d757c6f93c8ae030"],["/archives/2023/05/page/2/index.html","c372f1d528f91ed3dcef6077c9385c6a"],["/archives/2023/05/page/3/index.html","5f69b55ad35248ba0edb74f6ccf65469"],["/archives/2023/05/page/4/index.html","219e8647525793670ae2d5aeda08880f"],["/archives/2023/05/page/5/index.html","2b25d6fdc747cf5061fd6f2034184c87"],["/archives/2023/05/page/6/index.html","9a608b86ca7d097380500557560c9cba"],["/archives/2023/06/index.html","63545fc30a9866ebabf74b07943e923f"],["/archives/2023/07/index.html","1b31bf67f5992cb47c2ebaaec3a4819d"],["/archives/2023/07/page/2/index.html","3aea80e8077253401740782170d9dbf2"],["/archives/2023/index.html","8bf2376eb03d6ec23505947d508e180d"],["/archives/2023/page/2/index.html","35218521d1412e4de27a1efcb42ebefc"],["/archives/2023/page/3/index.html","fc49a20614d204738cf366197bde6e9b"],["/archives/2023/page/4/index.html","84aa3f70caee81d3c6fcb37cd9720401"],["/archives/2023/page/5/index.html","419f6dba4dcc72b7566c85c835694f6b"],["/archives/2023/page/6/index.html","ab7a28aabd58226b28b79d50e8d0905e"],["/archives/2023/page/7/index.html","7f15015e7d3a072ded0c9a25502b9720"],["/archives/2023/page/8/index.html","2d867210492234b8ed0a8b5ed4eb246c"],["/archives/2023/page/9/index.html","cf4ac6601c90e158e276b5d3a89d690b"],["/archives/index.html","1fce7392cdc7b857003e2388297d0bcc"],["/archives/page/2/index.html","63b4b71d64f2c2c1c47bf9cece8d8ca7"],["/archives/page/3/index.html","bc06521fe8b89e34fb327ca9e81fdb5c"],["/archives/page/4/index.html","d92feece6b0c6abd24560929d1e5dcac"],["/archives/page/5/index.html","49699bc234120b341a0c7822d02b26dd"],["/archives/page/6/index.html","7164d02d1d53a0fb52a99c5eadd4dd69"],["/archives/page/7/index.html","c7502659bec95f16a2a046c67665ee9f"],["/archives/page/8/index.html","1127a6c8d2b53b47df049dea18bb7869"],["/archives/page/9/index.html","85ae93c23c7fc773bb2f54241c289b35"],["/categories/index.html","d0a6d015b644dc8756f1f84d33c2f8d8"],["/categories/java/index.html","9f7988d0510ae5d7920f7b40fefd9ab8"],["/categories/java/page/2/index.html","e8f8c54ab00a195181527b6dc29f433d"],["/categories/java/page/3/index.html","91c8a5dad3eef2646a85f9c3e126450f"],["/categories/java/page/4/index.html","997e52e92326d318592337a1246ebff6"],["/categories/java/page/5/index.html","95cefadc73d8797b87b91a3392205e32"],["/categories/java/page/6/index.html","56caea2b7239b5c915b7558761fcbd47"],["/categories/java/算法/index.html","198cf2905f91597bd34a23febbc461b1"],["/categories/java/算法/page/2/index.html","3240b292f0b52587df0f7edc2e4a60a1"],["/categories/java/算法/page/3/index.html","5fe979217af84400b109b64afd4a3484"],["/categories/java/算法/page/4/index.html","d369ad74bed4023b835cf818a918b5f8"],["/categories/java/算法/蓝桥杯/index.html","7cd0c86111e7b967b0fef81c61b4d22e"],["/categories/java/算法/蓝桥杯/page/2/index.html","f6babfc8bb29dc11e02f61bc83d9c1b0"],["/categories/java/算法/蓝桥杯/page/3/index.html","202e5ca6bbc4f6fa705eb6cb9f85f867"],["/categories/java/算法/蓝桥杯/page/4/index.html","5335100cd9b25c4ab8d26e2382a21462"],["/categories/java/蓝桥杯/index.html","4213fec32927058cba077581963d9d22"],["/categories/java/蓝桥杯/page/2/index.html","cc92971232a2dee718e62357998bbe2f"],["/categories/python/index.html","d1d39fa930de586595648361207387c8"],["/categories/python/page/2/index.html","d9246c3276e52d115a46c6e4648c09a3"],["/categories/python/page/3/index.html","f118a17f0ba0431f3e5cf3acea7a4f33"],["/categories/python/蓝桥杯/index.html","41867bc6c8ee32d82ce58d8d4332e0cb"],["/categories/python/蓝桥杯/page/2/index.html","003f0253a513fa36b690c4cf604228ae"],["/categories/python/蓝桥杯/page/3/index.html","52002569e10c2e4963fa28ca57bf3b51"],["/categories/python/蓝桥杯/冒泡排序/index.html","5b2cec72ea611c71885f0bcce02fd8b2"],["/categories/python/蓝桥杯/结构体/index.html","46b2e9f1a89a7f833e7f4bbbb237779e"],["/categories/python/蓝桥杯/链表/index.html","9a4ee0176f080a2bb22b72adac69b842"],["/categories/教程/index.html","0c48b04f33f38a906a4fbb5d1527f470"],["/categories/日常习题/index.html","5024d7eba0e552f616a5306a97d05cdd"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","424cb801becae59b3f4d62d82fafe4e9"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/link/index.html","28d582e2508fbb6fc40f32c6fe1699c1"],["/page/2/index.html","2b10290353f9ce01273952e6960d1094"],["/page/3/index.html","1e1fdbf223862130f084bc5c8a5f6cba"],["/page/4/index.html","6c56d99a509d221dfbfa509ff38396c7"],["/page/5/index.html","9d014f78401f408805f1c0af38897f9f"],["/page/6/index.html","6cf3dba2ba4fc512f5fd0e377b63a7b1"],["/page/7/index.html","555ff256d48b34b41940a97d3c490d7c"],["/page/8/index.html","c23462ab0491961e10989f2b7d7be134"],["/page/9/index.html","c011820918fd645ad939ac325a475c8c"],["/sw-register.js","76b5faffd20d792d6df9a35ee04bab92"],["/tags/index.html","0fdd0b07e933e063507bff709f5b05ea"],["/tags/java/index.html","f499d8399bf57236dde20235359e9ef9"],["/tags/java/page/2/index.html","3f23b63943b9cc19123942a9ee2ddebe"],["/tags/java/page/3/index.html","d5923679e639d41fa2727777756718bd"],["/tags/java/page/4/index.html","e9cf3252e59a523c3cf53efd4b1ee7be"],["/tags/java/page/5/index.html","a2985d996a70dab8bf49e75cc279b305"],["/tags/java/page/6/index.html","fe834436adf47cb090ea67d4dc26aab5"],["/tags/python/index.html","a56bfe9426142f9121790819fc9e6097"],["/tags/python/page/2/index.html","3b64e9bcc85db89add6621960b2980a3"],["/tags/python/page/3/index.html","801445a73223de328a41c9f02bbb6252"],["/tags/冒泡排序/index.html","8251b5883302ba76f3c054fb0c8f1533"],["/tags/算法/index.html","b5fb3e4affff23bd5b60a513fa57c85e"],["/tags/算法/page/2/index.html","8f5354f873f5726a661c6943cefa0e36"],["/tags/算法/page/3/index.html","1edf5625bb7ffe464d097a6bbc32bb06"],["/tags/算法/page/4/index.html","fd745d2951e5d6e967fb55264ef75302"],["/tags/结构体/index.html","073b3beb6a51021d0d7ebcd0fd50419b"],["/tags/蓝桥杯/index.html","359b2c0d1b0d579c651338617185ccb7"],["/tags/蓝桥杯/page/2/index.html","2373b37f595bfc4539cd4efea153d0d4"],["/tags/蓝桥杯/page/3/index.html","4a756977871bb6c3f5d36efd80f4fcaf"],["/tags/蓝桥杯/page/4/index.html","9a5a9178f4e02fc25c05f42cebcf906f"],["/tags/蓝桥杯/page/5/index.html","c083304be05e448a53ee7b3dab839632"],["/tags/蓝桥杯/page/6/index.html","ad642fa253cdd4826ca4ac462facb7b9"],["/tags/蓝桥杯/page/7/index.html","fb5f9b4c1e03d5f5dc5647b3dd128af0"],["/tags/蓝桥杯/page/8/index.html","8aad888b0a9301eae02290c02dd03163"],["/tags/资源教程/index.html","45f026f0703f645cb946c3f42a65efc0"],["/tags/链表/index.html","c14c3adc7ca3d1937417d3d1368d9120"]];
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
