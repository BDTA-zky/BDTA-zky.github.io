/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","d7c59a55927afb8a040c6502ae8bac28"],["/GCD（JAVA）/index.html","a76fdee36b0f29395485ac8b7a6315df"],["/Hexo-GitHub搭建个人博客/index.html","9f5c869af5a8bfd1496a3ca47dec4cc0"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","dc446d59550b2642eb2e171e5494d313"],["/LeetCode46-全排列（dfs算法）/index.html","7fbc810e33e2dcd885ea768109783da7"],["/Python150题day01/index.html","2bd18d9d1c24b1f034007b8677159fa3"],["/Python150题day02/index.html","acb146119ee306fac0734652e0cdf6ee"],["/Python150题day03/index.html","abfc8eb8c35500201f3d2b7425189cfd"],["/Python150题day04/index.html","8298a25acad895b9ed62911280314cf4"],["/Python150题day05/index.html","a0cd94330b13c9ba29db66f1a8d849c0"],["/Tomcat部署项目后，验证码不显示问题/index.html","9b6a81476fcf0523334852cb1cb7e7db"],["/about/index.html","7a48baa093d88d4d3671e0a34da16c93"],["/archives/2023/04/index.html","83ecdccd20e685f94796cb8d4956c692"],["/archives/2023/04/page/2/index.html","81237aa1a1f11edd18a7aaca3f195fab"],["/archives/2023/05/index.html","bcad296ccfa7fa88a5309f736dc1b22c"],["/archives/2023/05/page/2/index.html","4ed5417ea176633c71c050b081dd343a"],["/archives/2023/05/page/3/index.html","94b2f6e1176a1f84e94fc99c79f862d4"],["/archives/2023/05/page/4/index.html","ca09633fbefbef0d1ce5e690c8e1ced8"],["/archives/2023/05/page/5/index.html","9bbbe3282162b3d025772cae94320d37"],["/archives/2023/05/page/6/index.html","4c05fa82351bb490377c45bc7eff9875"],["/archives/2023/06/index.html","6dc357f319c081fa89e0ace88ceddca7"],["/archives/2023/07/index.html","77c66d8ef9f44a5859a6317447cb262c"],["/archives/2023/07/page/2/index.html","b1fc3afdd37bb3304472632757caf46d"],["/archives/2023/09/index.html","b15ee24adc19334526268c33dbde717b"],["/archives/2023/index.html","36ad75485506a2b5d274efad5e9787b3"],["/archives/2023/page/10/index.html","a7828b42927a68c87bf7c097b10ee78f"],["/archives/2023/page/2/index.html","71bc95e3e3169ec49f4024de7693a4bb"],["/archives/2023/page/3/index.html","a5126d48a01d0e7cbfaa6d553a53bad4"],["/archives/2023/page/4/index.html","e5567263a830a87a22c994eede1c8a14"],["/archives/2023/page/5/index.html","20923c95e2397580906f8a980e91ecd2"],["/archives/2023/page/6/index.html","c819345032b6d6e8e35bd8c85d144b69"],["/archives/2023/page/7/index.html","e2b63d21f3416ef1bcb38f58e5df23eb"],["/archives/2023/page/8/index.html","80cc439e747d6bf45a4497272acf5880"],["/archives/2023/page/9/index.html","c7818d28dee8884c4a0da55522a23ade"],["/archives/index.html","309a83e4f593e83fbce9b66feda17ff1"],["/archives/page/10/index.html","24344e9311c8e463543bd8c8d54c2d7a"],["/archives/page/2/index.html","7fb0d1a36016018ebfed21cf7fd1a3dd"],["/archives/page/3/index.html","fd8359a64656f4a8da3618acb3fed7a2"],["/archives/page/4/index.html","5afc35ee7006a9865179544907a332b5"],["/archives/page/5/index.html","f6a552ee9517e1ac906827cae8d2c8db"],["/archives/page/6/index.html","91d6711c16adff399b9198d1931177c5"],["/archives/page/7/index.html","b1c8293048565f4c7b270218e9211d42"],["/archives/page/8/index.html","415d56a9bf953dfd7572bc58333240b6"],["/archives/page/9/index.html","0a35dae101d1d132eb07c7de3c956207"],["/categories/index.html","9270c906727dc73214228780c2420800"],["/categories/java/index.html","aa548a41d0fdc6ac9e1c39745f611787"],["/categories/java/page/2/index.html","4a0abc0740bae08a0eea983245919951"],["/categories/java/page/3/index.html","3a60ac72d875e381d5360d5b32b32756"],["/categories/java/page/4/index.html","399c18148c60f2e5661e3201d190d129"],["/categories/java/page/5/index.html","6561e8182032191bd39b0c9347a510e2"],["/categories/java/page/6/index.html","a32d06fc024c76c0ace1b19e03443a07"],["/categories/java/算法模拟题/index.html","a4da376f61b06683a076531c9c22b230"],["/categories/java/算法模拟题/page/2/index.html","4bd1eebe702668211ef89aec68eae2cf"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","e578c61e774a928d476a3ccf6cee4d5d"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","1ba7a6879ec183ad3cb954278d87ec48"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","4779356645b5f0e52a2122e2a3bf99dc"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","48493df262a522f235dccf9f260c57f5"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","97cdc045b0d02d9ada9b5d324940da99"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","b9c845eb1c11cc302b77c8022474fcd0"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","8f4d2ce6cad85eed8b7d49b68d60a044"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","5a99c631bfac97b363aa3bbbfa02e33a"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","ff6ee14b1b496404b2bec7bded24b7b9"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","3bea28edcac510204f6dbfb403ce53b3"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","a49850dd691fd56a9e8da91001cde76f"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","9a1813613faad8dd128cebb19c81b294"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","de95f2e98dd302893e8ca778c15fcdb8"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","38d8c8edea9d0d3c852a305aeebdf9ad"],["/categories/java/蓝桥杯真题/index.html","e5690fd5629fd17ca962bdb97a1f41a9"],["/categories/java/蓝桥杯真题/page/2/index.html","5b0383a5fbfb7afea62d54908e4cf255"],["/categories/java/蓝桥杯真题/page/3/index.html","c4868a85fb74b09be18f249be3c05797"],["/categories/java/蓝桥杯真题/page/4/index.html","83d876d3220900fa530a4b53f5441d49"],["/categories/java/蓝桥杯真题/page/5/index.html","acc000a98aee52ba1a212d5a018a091d"],["/categories/python/index.html","3ba97bf686d35d264adbe0fe7ffb3168"],["/categories/python/page/2/index.html","f5194bfd96d82e4ffd44120f396d9d8a"],["/categories/python/page/3/index.html","4aef02c4496e59ff2c2b59e1866b4bf5"],["/categories/python/入门150题专栏/index.html","e604ec05a0da11e4b96a343e059bb4cd"],["/categories/python/算法模拟题/index.html","ba32f9667f7d8cdfbdeba5791767420b"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","56340ed4eab2770ab036d307fb78f477"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","811adde869426040dc8347c955f0a133"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","3100cb2fd9cced3a53128ef4ba080deb"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","871a07218225a5c3f0027f1e31cf2ed1"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","961e8cfae471a43c416566cd79e06b1d"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","40f23fd8ff74d5d243b8fde5c65e0473"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","cf48bfaddfc4ee469c7442f60ff9bb5a"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","518ae1b49aacb0c331f48425ee96eb1d"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","5e1ca8155a0a7db25445e25429d899ef"],["/categories/python/蓝桥杯真题/index.html","6954b8fabde1b80a3d69c5d016f3c956"],["/categories/python/蓝桥杯真题/page/2/index.html","1b411f2bae6a569235b69bb2aa1e49f0"],["/categories/python/蓝桥杯真题/page/3/index.html","430d4bd526a28b7fab840e14f00c68c5"],["/categories/资源教程/index.html","923b160c9a14df04f2b685c2f6ab01ac"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","e6f897509fd2d388124e15d75d9d3932"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","8b687c1071d7fec03787a2516b674657"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","faea39dbd7011d5a832249d96ddf94ff"],["/link/index.html","2dacc2549302c4ee5db3a9c4454ceb4d"],["/page/10/index.html","a63fbd6f3103092ca710e8ae67bab0a6"],["/page/2/index.html","ff63f09bb9835edc7271e1c39c1ece11"],["/page/3/index.html","092ad996e8ea88502dd0eb2a6a6d3a86"],["/page/4/index.html","6f5e25221ee3fc568f22d84e12ca2ab3"],["/page/5/index.html","74e156fc31b4b0bc05dfc5f75c5fb64b"],["/page/6/index.html","a168301449b6ed1fecb0f6ea9683ff3d"],["/page/7/index.html","e5abdc53d97a058bdae3a7df5742a353"],["/page/8/index.html","a18a762842df288a70a4c3b08c440a52"],["/page/9/index.html","98c1f9630e4ec2dca820b5ec11715cbb"],["/sw-register.js","24fa453707c0e1ca869e9c8f6c88a399"],["/tags/GCD/index.html","29c64dd282f27a2792ea70a1ea22b769"],["/tags/dfs算法/index.html","2a81bfc8861dae9d3fbf4e382ee56d98"],["/tags/index.html","864acb9797853e232322f441760aa089"],["/tags/java/index.html","020e54f12d58b40171ade4303fdc4dbf"],["/tags/java/page/2/index.html","24205aba61959aa0a3c7fc4017fb9d04"],["/tags/java/page/3/index.html","15a598b642f2fe8f4b8082f6d442dda2"],["/tags/java/page/4/index.html","a2df1b890a3c9bcc72b69d033d6c77b9"],["/tags/java/page/5/index.html","d8dde045f7a93046427121914472f80c"],["/tags/java/page/6/index.html","51028558d1a33e39d89d4ad0130b8c9f"],["/tags/python/index.html","9addcadd7d6c8823c9ef56102e32875c"],["/tags/python/page/2/index.html","c98071822e061e353c80f0c045cdd09d"],["/tags/python/page/3/index.html","ead8f5955510b41fe647bd75684e0b56"],["/tags/random类/index.html","01c57fe5738c45d842157073140ec0f3"],["/tags/二分法/index.html","6e1e1c78b5ed27470a9ed22ecc8c803c"],["/tags/入门150题专栏/index.html","fb8118892c5440e188619ce33f3729f0"],["/tags/冒泡排序/index.html","cf448bb3b147cf0136d7c10b068f2c48"],["/tags/力扣/index.html","0d7cc301d14a2d439f48933b22ba1b71"],["/tags/动态规划/index.html","2f2d8b686710af0f4af275bc46728402"],["/tags/字符串/index.html","63eed6a4eecc9c9554753a18e46249c0"],["/tags/并查集/index.html","2104b33c1ed2fe18b6e66c05cd984172"],["/tags/搜索/index.html","8bcd84e003f2d63e4aa666856372c230"],["/tags/暴力/index.html","072123a8291bd2900d14ad29f580fd0c"],["/tags/构造/index.html","98024edb97b8d3ffb17d888bcda42e46"],["/tags/枚举/index.html","b38b2406dac5f62ac7d86bd2dc9f28b0"],["/tags/算法/index.html","9ad1edff5d53d016fa1146e0cdbaeebb"],["/tags/算法模拟题/index.html","c2d585d3141cb3f2d3618c9467f01f38"],["/tags/线段树/index.html","045b835f3a8c7de7487b52ad9651d45d"],["/tags/结构体/index.html","b00ab708bca6f3a68aa95e049564b139"],["/tags/蓝桥杯/index.html","271e62b0fb6ca62bf561ebb6aa07b260"],["/tags/蓝桥杯/page/2/index.html","1782aa80541ab900038c26d83a29ae13"],["/tags/蓝桥杯/page/3/index.html","9799f4b70ca6acfeee663f4948fd7333"],["/tags/蓝桥杯/page/4/index.html","b4871056e07a6628d111c858713bb5cc"],["/tags/蓝桥杯/page/5/index.html","a15e753302079a13712da1aa0fea4851"],["/tags/蓝桥杯/page/6/index.html","988e6e0c5a57802edcad6d05e4e4bfd5"],["/tags/蓝桥杯/page/7/index.html","014a34662b91f8712a514c9980257e68"],["/tags/蓝桥杯真题/index.html","2cd2fdc35d73a81b8de0a78af8903383"],["/tags/资源教程/index.html","22a55bf8f8485f0be2a674957ee83791"],["/tags/递归/index.html","85370a3174735df3f135010cd4a73c71"],["/tags/链表/index.html","5f8a929502a8ae659ef08d4191e2e6a8"],["/typora/index.html","94d2de14166ac9dbf44ea650f57d2ef5"],["/七段码（JAVA）/index.html","7d2d0aef8c8dbb17664ce40000ad5c4f"],["/作物杂交（JAVA）/index.html","f97c29d53e95362f466c95dd47b497b2"],["/全排列的价值（JAVA）/index.html","418c5ad2e8e5a6f510beee6eb4061a22"],["/包子凑数（JAVA）/index.html","fd22033293efac804a3075cbe3fe18d6"],["/双向排序（JAVA）/index.html","063d9e1751a32bcbfd365439eaa927c1"],["/取球博弈（JAVA）/index.html","3b136786efe2959943c47b3443419427"],["/合根植物（JAVA）/index.html","ee7357df97ea658dd5804ae13bc587af"],["/四平方和（JAVA）/index.html","65348410ca8be923f6b67ecf5b827351"],["/回文日期（JAVA）-1/index.html","8dc7715cc10a225a0bbef61a8a70b587"],["/回文日期（JAVA）/index.html","0bcd71f2b6216db83a091650c125dcb5"],["/山（JAVA）/index.html","ce83536a6d37ee7e3f9743bb63f8da82"],["/左移右移（JAVA）/index.html","ac92355024615828cca9a42cc945ffcf"],["/成绩排序（java）/index.html","fdde6f691e1ef844cc2254d8964cdd51"],["/数位排序（JAVA）/index.html","3c822477931c9b5a8683f4df8e75561b"],["/数字三角形（JAVA）/index.html","cd8e10795dce045bc2176595c6f4d2f5"],["/数字加密和解密/index.html","e177d7fd2f94bb835fef37c947098941"],["/数组切分（JAVA）/index.html","358e9ee0575a65170014fdd074de9333"],["/方格填数（JAVA）/index.html","de89ece2fd129ba2251fd4052e316c10"],["/最优清零方案（JAVA）/index.html","592226b2be6cb5d37a2f42527dcbfbb3"],["/最少刷题数（JAVA）/index.html","b898d8964bf48cf12dcd03aa0ae49c86"],["/本质上升序列（JAVA）/index.html","0e364801f11098491af922c482012718"],["/杨辉三角形（JAVA）/index.html","23ad9b770ede7651728f16cac2f47811"],["/案例2-1 商品入库（java）/index.html","39a86a77812bf3186e06bb5b7d3e22f2"],["/案例2-2-小明都可以买什么/index.html","502ab65bc85180f2b80994b7c28f7b2e"],["/案例3-1-基于控制台的购书系统/index.html","4db5b9c8248e69d75d50d2d6642fc34d"],["/案例4-7-经理与员工工资案例/index.html","ccb564b1366175f262e69b709f328a65"],["/求和（JAVA）/index.html","4c5c013366d1c84113cee9a154e70164"],["/求阶乘（JAVA）/index.html","41d97a896ad1b7bb3b33fa78ca179e35"],["/牌型种数（JAVA）/index.html","4aa0d4bfba3035293fe5f464bb8c8b79"],["/猜字母（JAVA）/index.html","02189fb9084466e0b185718c20861dbe"],["/猜数字（python）/index.html","593e25feede94c2999927eebf15e8444"],["/砝码称重（JAVA）/index.html","4ee546fb68783c7a902b61999cf7d356"],["/等差数列（JAVA）/index.html","1168b3fd9be8ec1c7b1226e7e1fae0c9"],["/蓝桥杯--单词分析（python）/index.html","d537fbe003bce73146d71e4a60f03d7e"],["/蓝桥杯--回文日期（python）/index.html","85f9c0908b8596d352ac2522c061cbf3"],["/蓝桥杯--字母数（python）/index.html","a7914bc65ec571f11c91fc914056ca21"],["/蓝桥杯--成绩分析（python）/index.html","edba46a2c6dac114cfb3dec2ace1bcc3"],["/蓝桥杯--成绩统计（python）/index.html","0b170a7ede444f71cc6d29cb8929dcbb"],["/蓝桥杯--排序（python）/index.html","c06e60c32d259d118fdbf628ed931d14"],["/蓝桥杯--数位排序（python）/index.html","9308e22ce92ff52c756ed950c43ad4c8"],["/蓝桥杯--猜生日（python）/index.html","557457a9645e416b622eeb26388684c0"],["/蓝桥杯--猴子吃桃（python）/index.html","70663cb3837c4a1065ea1184b42795e2"],["/蓝桥杯--石头剪刀布（python）/index.html","a260d5896dbb9924efbdc4f9e9ad96e7"],["/蓝桥杯--移动距离（python）/index.html","18a6672671c332e0214cc3710b03ce5f"],["/蓝桥杯--空间（python）/index.html","cbeafb51a786a6ff9563800a69a48994"],["/蓝桥杯--等差数列（python）/index.html","506891b4c8c86ae4b007cc8c8e3419a8"],["/蓝桥杯--纸张尺寸（python）/index.html","7c9df880d58cb737ed4a8e5ef9ec57ed"],["/蓝桥杯--结构体之时间设计（python）/index.html","167bde0e204b44a73ed9194229ae4adb"],["/蓝桥杯--货物摆放（python）/index.html","f9a82fc32023d9bfebb838fa552802ad"],["/蓝桥杯--质数（python）/index.html","276171dcefa5aaf4eb6af0bf94f03613"],["/蓝桥杯--购物单（python）/index.html","d4f8e981d1c9fe3423dfa41d1327c1c7"],["/蓝桥杯--跑步锻炼（python）/index.html","085218bcfb32b996f1f32d79253ccc8c"],["/蓝桥杯--迷宫（python）/index.html","e9c980439645fd569e804e4ade889836"],["/蓝桥杯--递增序列（python）/index.html","50ca3b5044271439ac1ec33338d09794"],["/蓝桥杯--链表之节点删除（python）/index.html","ea996ed4b8c9bd84f280c341a83c93fc"],["/蓝桥杯--门牌制作（python）/index.html","5d7470f63a52b62b0b1369761d185360"],["/蓝桥杯-592门牌制作/index.html","fc38ec76a305a77f1a3c63083f8a5530"],["/蓝桥杯-单词分析（java）/index.html","afb1805d75539fa31357e5b8f237abb6"],["/蓝桥杯-字符统计/index.html","53dc4da42c08f57a4b2951bf17426150"],["/蓝桥杯-山（java）/index.html","9b9a5b05af129bdf352c9cdf21636c1f"],["/蓝桥杯-成绩统计(java)/index.html","0b86e69534f4dbde7c7b7117b99a20f6"],["/蓝桥杯-数列求值/index.html","f7cd4fe4c8564e0949a84cd2d267c7fc"],["/蓝桥杯-数字三角形（java）/index.html","a4b1a79eb80118e89671a3b24d52ae27"],["/蓝桥杯-既约分数/index.html","a123c161bbb9433dc0f3ec13ad5accbd"],["/蓝桥杯-时间显示/index.html","e2eaad4ad630fcb3f69eb8a6961e8f9a"],["/蓝桥杯-最少刷题数/index.html","4eb79501bcc4650d4975cf650c312cb4"],["/蓝桥杯-特别数的和/index.html","1253c07ce2ffd47ba6e2177c1138ee49"],["/蓝桥杯-蛇形填数/index.html","89df6efb328861e87a8a72a408e29a75"],["/蓝桥杯-跳跃（dp）/index.html","6ba4dfbb08af299eeb75a6163c7fc8fc"],["/蓝桥杯-链表数据求和操作/index.html","5827fdeac3205933ef425a23757e8c0e"],["/蓝桥杯-阶乘计算（二分）/index.html","74ca6f8f9e4c027d9df429a2c0993f13"],["/蓝肽子序列（JAVA）/index.html","174b357268e4e5d19e5e6092ee17f6b8"],["/计算球体积/index.html","08aabdce135ae8235800873f5069a5bc"],["/计算矩阵边缘元素之和（java算法优化）/index.html","89d8db04ad742b5c1b42cdc29c876086"],["/质数拆分（JAVA）/index.html","a2eff5fb37e596b1708767c3ebbac455"],["/路径（JAVA）/index.html","7ca520927758ed314a0e8e98ba0aad82"],["/重合次数（JAVA）/index.html","a2b348419ed975ee0e15ac88da90141d"],["/闹钟定时程序（python）/index.html","c7f068edfd41743f44c261e5b01ce095"],["/青蛙过河（JAVA）/index.html","b3123fce1b085474b65e834c33155a17"],["/验证码（random类）/index.html","43554e2540c53577233e49f30ffb4cbe"]];
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
