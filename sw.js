/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","9e9bf54b1b10b766437ea18b5bfbf469"],["/GCD（JAVA）/index.html","93b187a61fdde5cb2c4eb964698bbb46"],["/Hexo-GitHub搭建个人博客/index.html","e09998cad6a7eaa0ab824921928e0912"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","9f6a4a6c240fe017002f501d248a68b3"],["/LeetCode46-全排列（dfs算法）/index.html","54b53f4723d74d537866be88144b4fe4"],["/Python150题day01/index.html","6829bee264fca8e955159694a361841e"],["/Python150题day02/index.html","cdcb4a2ad50f60e3001ca2ef5256c7e9"],["/Python150题day03/index.html","28dd2f73ea336a201f97bfcf832b6f94"],["/Python150题day04/index.html","e3181e65cfbd61ad0a8fa7b020387486"],["/Python150题day05/index.html","bc4c80a025b17c277cb31b7237139db4"],["/Tomcat部署项目后，验证码不显示问题/index.html","7fe389c04e2f992b9583c67b63d226f9"],["/about/index.html","0e12236155b5b16b02f7405da25afded"],["/archives/2023/04/index.html","d639a344eb2558aaae477d86b273cdd2"],["/archives/2023/04/page/2/index.html","c704d3b5b8591b77d103a0a8687e0fb3"],["/archives/2023/05/index.html","90b6565d9e776a48533c78dc279fd540"],["/archives/2023/05/page/2/index.html","fb8f262179061b236c53ce9364a674bb"],["/archives/2023/05/page/3/index.html","ff93fce26b80b12bc9253903ab0dbbcb"],["/archives/2023/05/page/4/index.html","b1d8dbd284d15bc1f2fe9d36dc41a554"],["/archives/2023/05/page/5/index.html","4d9229ab039494b13ef66031b0d36ca6"],["/archives/2023/05/page/6/index.html","18148baca46572f81d706ab8b5bf4824"],["/archives/2023/06/index.html","26f90efefcf24092c3bc44c004e83e07"],["/archives/2023/07/index.html","614011ef550e0ff5f28245a495519d86"],["/archives/2023/07/page/2/index.html","2964a0a40e93ed44f378cb09e05bf742"],["/archives/2023/09/index.html","b71ddf4318cd0afbb5e93df28599a6f0"],["/archives/2023/10/index.html","7fd8887be7fd9e071cc9343ff6e58f9e"],["/archives/2023/index.html","a9edd5bfb49b5531736c8f4de6b6b40c"],["/archives/2023/page/10/index.html","e94beb3b7c3408a26b017da6ec5fe6b1"],["/archives/2023/page/2/index.html","ed5c60b83961e4360eddd7329f5da640"],["/archives/2023/page/3/index.html","1ac32f4e5ea583460918130e58bfd959"],["/archives/2023/page/4/index.html","ec4c1c148739b94ee71074b8082b081b"],["/archives/2023/page/5/index.html","126bc9cacf84dff1a4b00c4f3b9ce892"],["/archives/2023/page/6/index.html","74f87fd790d56a151db2ff80a3428718"],["/archives/2023/page/7/index.html","e1bcbf6d3d7059a27a8721afe5b7781a"],["/archives/2023/page/8/index.html","2913d8bccf07de6cf0ace01c3c07ab08"],["/archives/2023/page/9/index.html","121478f36c7a1fdbefca90efb9f97073"],["/archives/index.html","a04d0fbe4822a7421f9e72d7936fe7bf"],["/archives/page/10/index.html","cb765dc02f7e7295dc6fa53acefa1e21"],["/archives/page/2/index.html","af926e846fdaccb9b6e1b39506b3d771"],["/archives/page/3/index.html","ba8701a48bb8807680b2c870b325e11d"],["/archives/page/4/index.html","5977296d60ee0d721b58cd0afcee6cb8"],["/archives/page/5/index.html","c660feb75485efbb9e7c4572fd09501b"],["/archives/page/6/index.html","bf50c3b0325630d8e2dca1331df6ce87"],["/archives/page/7/index.html","91e98af5bb0c6bce11da748e738fa01d"],["/archives/page/8/index.html","b0bb013116932a5d08d7c7d195105b64"],["/archives/page/9/index.html","fb5cb4f20a0935fe93ec8e99e2f3129d"],["/categories/index.html","96340f26aad9f399213c1df506ee98ad"],["/categories/java/index.html","0a97188c83fbb4f4635369c809106236"],["/categories/java/page/2/index.html","be8a8e727af3dfe47c4f86d8ced0d34c"],["/categories/java/page/3/index.html","f080917ad5e315f969a8410ba4f611d6"],["/categories/java/page/4/index.html","f3a236fdedddc88a5d6d8854f8ad32cd"],["/categories/java/page/5/index.html","12842d49981af8331ad172f8a7b160ba"],["/categories/java/page/6/index.html","9abd177f53889be6354d3ffb6057a258"],["/categories/java/算法模拟题/index.html","a3867ab4279b21a7817c50ce5481fa71"],["/categories/java/算法模拟题/page/2/index.html","032c064605fe1f82477b6e67358cacd6"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","9bffc1ef0b55b2b85eec53119b08f4ed"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","045d53193a6b9ca4ce9bb315bfec00ea"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","fd512aa81661752d03ae0e309bacb876"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","b6cfc1c4c9dfc16c8d67aab8151b4fe2"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","620125518998d50add94f5c9f3ae2e10"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","e20045acfd7503facc04691a83d8e6bb"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","2c9ea0493787a749d87e4a8c41a04f88"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","0fee9f410bb9ba719091e701de9e95a6"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","d7af094cbb4fdb86a5dfb4699006be3e"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","85938461f3d269e5899eae22e4eac8f6"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","093228b849a97be480fe97aee45fcbc9"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","d410a176a0f210dcb1ca6875ce9a61ef"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","7bf99fd57a905e36cf1ba6052d02a8da"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","87c57346ae305f7950811fb00e862001"],["/categories/java/蓝桥杯真题/index.html","0f55bfa79a5c0fe86a5c4a2f948e0466"],["/categories/java/蓝桥杯真题/page/2/index.html","1f4657ec61c9e9245e579f1dcb81e869"],["/categories/java/蓝桥杯真题/page/3/index.html","4ba3984c75da27cb862a4f2c1f000c95"],["/categories/java/蓝桥杯真题/page/4/index.html","e0ed6239ecca24ede460d8051becbfed"],["/categories/java/蓝桥杯真题/page/5/index.html","7c36fb46cc16512fd0293786e88f2ef1"],["/categories/python/index.html","c41204b4bd522367a50d8f7a8a13925f"],["/categories/python/page/2/index.html","0f20781d030588ab925b832df253c3eb"],["/categories/python/page/3/index.html","d0704d708c2308a2faa8c6156053fef7"],["/categories/python/入门150题专栏/index.html","efaf48e1e695d69af5d9eda873dfc240"],["/categories/python/算法模拟题/index.html","735192711e4f7665ed8bc2dc4a70f40c"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","b9041871161e2ab5423ede863fd717a4"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","f5729cd932e23b20d0f09656a57d1bce"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","d9fcaa571c6920c13aefc53c91334e1c"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","da2233768b31a416acbb8a263da8f711"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","ba200b47600bfb2b58605ea6c5761d84"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","c956b5d3294ccc0a4d0ddbbb93f668ad"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","1505c55d5b72bdf0ede016849897c171"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","9601c8e81db6588b1f2032db250af5ce"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","ca4aa9d11c949f2f04b39a1e18b28d34"],["/categories/python/蓝桥杯真题/index.html","9cd41eba857e7d6ecb1f073e6e17b0ab"],["/categories/python/蓝桥杯真题/page/2/index.html","9e6f3b456eb4a3091eab1dd2b55b1c5b"],["/categories/python/蓝桥杯真题/page/3/index.html","64d00e1b4e5a8f8c244f8399997b227e"],["/categories/资源教程/index.html","cd5deb4ef65b7af72a97e4b2253a89c5"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","1cc5b2239b06afb6e93e20f172116517"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","6e78707e41c79aa0c377f963641fca75"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","782f10f98fffc7643e6bdd5c631db2f3"],["/link/index.html","255249ebd13d016abf46200e57bff4cc"],["/page/10/index.html","bd3330d051c9db44a3642afa0e48e703"],["/page/2/index.html","512745f53bf40ea937bad7037424090b"],["/page/3/index.html","af2bccc0bfe9c4cc35d3d7e8fcb07544"],["/page/4/index.html","109d45033d7a552497de3d69132f76cc"],["/page/5/index.html","91e3931eb2e69d9d259fef8848788fb6"],["/page/6/index.html","53706ff50033a2e8fb3cfa60d05743db"],["/page/7/index.html","639dfcc4a9c7594ed805f652b43b55ce"],["/page/8/index.html","9be3c8d3f7aa914f3e43d92cd0d0a10f"],["/page/9/index.html","3e6e4a753859aa5db8d96b6b95a74d3e"],["/sw-register.js","d493484c927b0da4ef024420e4463181"],["/tags/GCD/index.html","b65530d6401b13473b09bf591971e532"],["/tags/dfs算法/index.html","f37e26836bcc071dfa44391b11f95479"],["/tags/index.html","942abfe11b634d4c7eb7ef5cd15a1669"],["/tags/java/index.html","1404f308ef33426c8b4fed7d0694b682"],["/tags/java/page/2/index.html","f2de75982617f6931358ce440dfcc24a"],["/tags/java/page/3/index.html","9df56346b8ca1f92a96e77842b45f951"],["/tags/java/page/4/index.html","2c3b58d1076fdc273fe528670130b1c9"],["/tags/java/page/5/index.html","ee7b82984ef08316e2a176dd01caeb70"],["/tags/java/page/6/index.html","105c3cecf172c9f24b12e115627c0241"],["/tags/python/index.html","c80a089af62f7c9b8b275eb468702b5d"],["/tags/python/page/2/index.html","e6d53dc7f6e3d8ff1f3ba5c4016c44b5"],["/tags/python/page/3/index.html","14309e9f230f7013a019bd592905cb88"],["/tags/random类/index.html","d49021648796701e9458131cb5ec5cb7"],["/tags/二分法/index.html","16ac73365fcda82f59f0ffa0fda8de86"],["/tags/入门150题专栏/index.html","0df420d41213877087ba088d61bbaddc"],["/tags/冒泡排序/index.html","7c040d2cd8eb0ec13acd3b36b92937d2"],["/tags/力扣/index.html","9fe2f5ba111e74db934a71cee3a841af"],["/tags/动态规划/index.html","c5671aaed101b57ccbd443bcbe969dd0"],["/tags/字符串/index.html","5673918b210b64349ce8ff00a89f9d1a"],["/tags/并查集/index.html","57cfcce06a7bfe31e8481fa45aab9efc"],["/tags/搜索/index.html","b7344b72848403fbe396bd5edb6bdde8"],["/tags/暴力/index.html","8e8cf550171efb70155691cfa0ba1108"],["/tags/构造/index.html","791dc141464c48f9a3cce405a714926b"],["/tags/枚举/index.html","cae4a8164775bd9b795e1438d99721d8"],["/tags/算法/index.html","4bdb93c73550e39fa9388cab56e4db0a"],["/tags/算法模拟题/index.html","e5b9ebbd0759410369d9c3f775b08494"],["/tags/线段树/index.html","08568e3de184f805d6ab23ce01d238f0"],["/tags/结构体/index.html","823e3399462979783c7f8c30419493fc"],["/tags/蓝桥杯/index.html","b059fdff3633ad0a7fc9f723cc5f63b2"],["/tags/蓝桥杯/page/2/index.html","6395ff28fc2030d405985bd746b9e9c1"],["/tags/蓝桥杯/page/3/index.html","ec4a3514feb977c1d3e0aa8e14ad889d"],["/tags/蓝桥杯/page/4/index.html","deaaa7a98e73e61e979853fe100550f0"],["/tags/蓝桥杯/page/5/index.html","b5640bea7372887084cef6fd4df3da2e"],["/tags/蓝桥杯/page/6/index.html","b2cfc5ff0335a198095e6bffe384d5ab"],["/tags/蓝桥杯/page/7/index.html","807e440ea28a907aa80ae22e5f7afb17"],["/tags/蓝桥杯真题/index.html","377fb107a59a025d355693ed19b60e04"],["/tags/资源教程/index.html","890de799df41f8d43a95862e4fd9a1d4"],["/tags/递归/index.html","5dd3c567ee3979afa1bcda6c5ac23e99"],["/tags/链表/index.html","e6976abee6837e16e89c41910e16d83e"],["/test/index.html","b0182a1e0d3c69926f34e9ba6b7aef3c"],["/typora/index.html","2058d0e32eceab141b2f9d4b42c88e23"],["/七段码（JAVA）/index.html","4e7a25092ef48f9779a7cae2f6e880e2"],["/作物杂交（JAVA）/index.html","1e78011651d0a796a042742dd6d83941"],["/全排列的价值（JAVA）/index.html","2d9f7527e8ac30ab7b6a08337b3b6cc9"],["/包子凑数（JAVA）/index.html","77c0271fba40e74ed3d1217dc82a6301"],["/双向排序（JAVA）/index.html","b440021218c0cda382bc3a95afe2a2e7"],["/取球博弈（JAVA）/index.html","6e8250be6866c5a160b09428b24c0401"],["/合根植物（JAVA）/index.html","141c31d17fb667404df8bb41cc1a92fd"],["/四平方和（JAVA）/index.html","b9a35456eb45f35b900d2fff668ef5f9"],["/回文日期（JAVA）-1/index.html","7351f2b2cfdc3560ae5caf089e467f99"],["/回文日期（JAVA）/index.html","a3527f56ae4ae677eb602404524f6fd1"],["/山（JAVA）/index.html","b37bd6d3c97e2a2b67a6da8777362f27"],["/左移右移（JAVA）/index.html","7dd5cadeb6623d1fd16c6bb38824ef4c"],["/成绩排序（java）/index.html","afc187423e385fb186ea200d9f328d07"],["/数位排序（JAVA）/index.html","2d1736256281a86999c9ddb853f5f210"],["/数字三角形（JAVA）/index.html","047f424c4ed33452ccf6c0189f01719d"],["/数字加密和解密/index.html","3bed5dea4b6e8f0ec5df943f6cf369d9"],["/数组切分（JAVA）/index.html","d6a7aaaa2c647ae713099a0116d5154f"],["/方格填数（JAVA）/index.html","36a4cb24c98fc875e5c512db96595510"],["/最优清零方案（JAVA）/index.html","803f9897ae59f87b29b628395d52d912"],["/最少刷题数（JAVA）/index.html","dd64171c53e70565d5dd0199057ba420"],["/本质上升序列（JAVA）/index.html","fb5c7dc2eefa8704aebb337fc90e3fa6"],["/杨辉三角形（JAVA）/index.html","944c741cdbff67cdb8d6f6bad72aa198"],["/案例2-1 商品入库（java）/index.html","7a8c0281f7a9d571553896bfe99d8077"],["/案例2-2-小明都可以买什么/index.html","e296ab13557701b45dae948bf16bf44a"],["/案例3-1-基于控制台的购书系统/index.html","fe0f118f9d10eed85c29de8f49116c0a"],["/案例4-7-经理与员工工资案例/index.html","745f0eb3ae943c5eb7b79a47f6badc82"],["/求和（JAVA）/index.html","1f4ebaa2327e27c92e510f591705f6c4"],["/求阶乘（JAVA）/index.html","b382a5975a9a311de262b8f66744dc36"],["/牌型种数（JAVA）/index.html","8883566741a1b9ca4f1915370dfa7c64"],["/猜字母（JAVA）/index.html","87e64ec02af2873c873f05071cc408ea"],["/猜数字（python）/index.html","e1376da6b7967500db7b7fe61a206c1e"],["/砝码称重（JAVA）/index.html","de9274f198e145dbec8f0ec7b60230d4"],["/等差数列（JAVA）/index.html","e28d8786d5ecc187cc391896047e7b8c"],["/蓝桥杯--单词分析（python）/index.html","553ed362a27fe06eb7d21c0f06b999c9"],["/蓝桥杯--回文日期（python）/index.html","13a2c325a6f3c39f1a99049624fe5e4a"],["/蓝桥杯--字母数（python）/index.html","404c24ad6ce581225802db92d0acf4f7"],["/蓝桥杯--成绩分析（python）/index.html","3a0f49962d09aca851a2a2dfc3ba0903"],["/蓝桥杯--成绩统计（python）/index.html","9fa92b21c5268a2ee018c951e96b78c2"],["/蓝桥杯--排序（python）/index.html","b51e49f06710225c14b260e7df4ca96b"],["/蓝桥杯--数位排序（python）/index.html","6933056cafe8f93a1bf37696ed46babc"],["/蓝桥杯--猜生日（python）/index.html","ce58c608baec3cf9b6ae0a3a954b05af"],["/蓝桥杯--猴子吃桃（python）/index.html","d62ed621aa545734b44589c98a4c6be0"],["/蓝桥杯--石头剪刀布（python）/index.html","68437830193c99fa0bfb758264d242cf"],["/蓝桥杯--移动距离（python）/index.html","1ff82ba03af0e0552d9ab0ed7b3f5cf5"],["/蓝桥杯--空间（python）/index.html","db997f8720f5ac8f269dbf8fc2bd5908"],["/蓝桥杯--等差数列（python）/index.html","e08586613bc4d5ea9d87f286756669ce"],["/蓝桥杯--纸张尺寸（python）/index.html","58360abfffe1c9ae4d868ded099ee639"],["/蓝桥杯--结构体之时间设计（python）/index.html","a1affeefd356f0bcd55adc629f6d86dd"],["/蓝桥杯--货物摆放（python）/index.html","e4b55b9725d4555a7f80d836afa4dac6"],["/蓝桥杯--质数（python）/index.html","a100258fc6d2c392666d345ef43f180f"],["/蓝桥杯--购物单（python）/index.html","90e5b75343fabe6bbc61304d2b278a30"],["/蓝桥杯--跑步锻炼（python）/index.html","bf5904d4df8c0ad13a8bfa66cb536217"],["/蓝桥杯--迷宫（python）/index.html","53c1149144779c79bb94d1eb176f2022"],["/蓝桥杯--递增序列（python）/index.html","8a13182fe66a38e0417380e5f2ff1c90"],["/蓝桥杯--链表之节点删除（python）/index.html","cc5e8b7f8e0fa36c2b5814f1dd474693"],["/蓝桥杯--门牌制作（python）/index.html","5bed5603549271676ad81b1dd666f44e"],["/蓝桥杯-592门牌制作/index.html","7270c630ca88d569bae7f0f5243fdc71"],["/蓝桥杯-单词分析（java）/index.html","551d29a6d6d1038c2a0485c638932a5c"],["/蓝桥杯-字符统计/index.html","cb708d36e1536673a8b53abea973eed3"],["/蓝桥杯-山（java）/index.html","b53a786450553ac742e5f5185254df8c"],["/蓝桥杯-成绩统计(java)/index.html","125021cbb71acfe1279354851fbeb7ab"],["/蓝桥杯-数列求值/index.html","55e44d85370cc9fd82b24a8e3742a555"],["/蓝桥杯-数字三角形（java）/index.html","d5c9d3614a768aecf278bb4f6a33b9d5"],["/蓝桥杯-既约分数/index.html","123795b089a9d5c8ceffca02dffe469f"],["/蓝桥杯-时间显示/index.html","f180343272bc074538f7d5e76e78d6e9"],["/蓝桥杯-最少刷题数/index.html","28c56059cd8c80e101b320a2a9a9d1c0"],["/蓝桥杯-特别数的和/index.html","623261f2f326423ceaaf353d9147dab8"],["/蓝桥杯-蛇形填数/index.html","130754f4d62df9315819086752037bde"],["/蓝桥杯-跳跃（dp）/index.html","158442d7d9c07844d3726f0dda7e36da"],["/蓝桥杯-链表数据求和操作/index.html","35ced65da6f5ab1ce8d86528090a2ac0"],["/蓝桥杯-阶乘计算（二分）/index.html","85b4392af3e860ae7f2f230385bba280"],["/蓝肽子序列（JAVA）/index.html","7d8944e4d2cf856765d9d44bd263e2f4"],["/计算球体积/index.html","14c76fcc15f87e4eb5f38fb9bd93afbb"],["/计算矩阵边缘元素之和（java算法优化）/index.html","f88e8b2dcfe58e96d2417f3758ac4216"],["/质数拆分（JAVA）/index.html","4155e53c96dccfd691b2c672bf65cffd"],["/路径（JAVA）/index.html","c12def9684369bbf6f40238ead2373e9"],["/重合次数（JAVA）/index.html","98b9ea51f0abbad5230844d19abd843c"],["/闹钟定时程序（python）/index.html","df7ff8382aa6dfc732a4fd15be688b72"],["/青蛙过河（JAVA）/index.html","04f9d1b4c43bf2e93501305c7c069ab3"],["/验证码（random类）/index.html","9ae6a8e70e1c5b9c43290beb60633277"]];
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
