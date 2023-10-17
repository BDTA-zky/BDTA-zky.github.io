/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","e410be9b6cd57b205c9f04bcedaed633"],["/GCD（JAVA）/index.html","1838113275069959f1cc6c096a3894da"],["/Hexo-GitHub搭建个人博客/index.html","cb4848712694980aba6b7c2c006a7672"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","2dcb0a846a691ae3e20834bac638e5bc"],["/LeetCode46-全排列（dfs算法）/index.html","ebbdb1d14d905ca5a1233f00eff49cdc"],["/Python150题day01/index.html","20220945633a1b34c4a359011f4ac05b"],["/Python150题day02/index.html","9f88d272e5eda2f4d6a1f9ada7860cb5"],["/Python150题day03/index.html","8314fd483d49f8df609e979dd38adbda"],["/Python150题day04/index.html","dfd060ece69c628539fa19f24847638a"],["/Python150题day05/index.html","3a5a384116b93c3bc0dbe19bd1ec3aa7"],["/Tomcat部署项目后，验证码不显示问题/index.html","870fc16844b1fefe5bf995d294d878f5"],["/about/index.html","d13427ac6422815a6fc60e86d25cdf66"],["/archives/2023/04/index.html","26bcd15e2259a06a71df6872fe9aaf3a"],["/archives/2023/04/page/2/index.html","c5ba62b0684d7389442a35cc2824e278"],["/archives/2023/05/index.html","28415f8b93efbe8f57c8e58ddc6dec70"],["/archives/2023/05/page/2/index.html","0b600c81c7aab01d1fa2e17d564f346f"],["/archives/2023/05/page/3/index.html","e92d52d21d23ec3e4f8b20a4f2784a8c"],["/archives/2023/05/page/4/index.html","6d0884d2fb80b1f812a19cb428aefd4d"],["/archives/2023/05/page/5/index.html","9d18e8e672a48f74b5aed9191ad346a3"],["/archives/2023/05/page/6/index.html","1543c95a1882cce0ac874da565699d34"],["/archives/2023/06/index.html","3f758c3ded19b2da7b87b3ab99004574"],["/archives/2023/07/index.html","6f5568f81a3455b7963b4a9d4829527d"],["/archives/2023/07/page/2/index.html","dfcd36295c60f810100dd310148bfb8e"],["/archives/2023/09/index.html","05f782a29b379b2dc19398eecfd5bc70"],["/archives/2023/index.html","c1bcc31a79b00e82d57cba115c16b5d0"],["/archives/2023/page/10/index.html","e42ab024bebb7ccf3cbf01a92eb4568d"],["/archives/2023/page/2/index.html","ce70f130244ca3fa11ea1a2f25285f52"],["/archives/2023/page/3/index.html","93ca6d75fda0046d1e89649d8428e579"],["/archives/2023/page/4/index.html","a172e1b7357e8fac2ea5b6f318b4c9a0"],["/archives/2023/page/5/index.html","834cff18ecb00b732cedcfde1fa974c9"],["/archives/2023/page/6/index.html","d3645469cc2abbf48a6b43d4858e8b05"],["/archives/2023/page/7/index.html","0fe370460301c41c80a8b6996d7d6333"],["/archives/2023/page/8/index.html","0f20e6df438cc6b79648d6e2a382b289"],["/archives/2023/page/9/index.html","6a6a15a03cdbece807be1039d8d73256"],["/archives/index.html","a38a8741365bfa26d9a112060c95db72"],["/archives/page/10/index.html","e46390dcf4d89f8dbc339f28f2c4ca0f"],["/archives/page/2/index.html","2121d894a56eba799eeb148a524fcc51"],["/archives/page/3/index.html","449b4959d796e22fd981950405ac9837"],["/archives/page/4/index.html","16a4db0e777a7ee97852dd65e0fbdffd"],["/archives/page/5/index.html","85fd01c2d5825d0bdb899ffc2a391163"],["/archives/page/6/index.html","03b968870b4b55a99438499ad2897695"],["/archives/page/7/index.html","f4762f0fbd3b31d48ed75a536b8ba01b"],["/archives/page/8/index.html","ddd8bd53bc079c47f5c0e167f5924893"],["/archives/page/9/index.html","22b8774f6bf8543ad06e13584838dd6a"],["/categories/index.html","c2d3b39686dd39d2b621f909947c1175"],["/categories/java/index.html","e5edd0640b52cb9db79d871d8e1853ce"],["/categories/java/page/2/index.html","8dc9e3b35fe1e74553283ac255b50ce1"],["/categories/java/page/3/index.html","4a899d60ea481832ff439a0014d34445"],["/categories/java/page/4/index.html","3e70ea27b8f066888ae10cdf33b0c566"],["/categories/java/page/5/index.html","07c5e7546a5d91c6252a1b1116d996b6"],["/categories/java/page/6/index.html","b7302b93b35c9aa9d7066523fa94f486"],["/categories/java/算法模拟题/index.html","21a393c07d44cab8529efccf813167b6"],["/categories/java/算法模拟题/page/2/index.html","149cfe3202b8a8f7ce159191a9646237"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","36e9051dd9f3d1a3020370dc3cb72e69"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","c51d1ed5630636c65b0106332b8bd43b"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","22f5c7806529e7581e7acfdf67ad3844"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","990c2a1717f3fb51fe30b7ff6a879a76"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","5952a8478cdca836c97f06ccd66180d4"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","5a71cd7c6b1404392f6e48508be325f0"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","fbec4382fb7f035ba7a725f7282799f0"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","7136590233b773c6e30abb158d563d28"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","11ba08e6ccf4a3a62c4d6ca8ea538b9f"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","7c76c999134f17dd8b794246366ce86b"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","25fd5b41dcbe59ef6e4121ffe8ae542b"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","80a0aa44730a082452b19dd638d98649"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","509d375553def70c636998aa3f35f2a8"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","b99310b114e6567febdf0be4060b6664"],["/categories/java/蓝桥杯真题/index.html","3596d9212924f717ed97f1ef3c279f3a"],["/categories/java/蓝桥杯真题/page/2/index.html","cff923bf664e59402896955e61ade961"],["/categories/java/蓝桥杯真题/page/3/index.html","172617fd505c0f7a2bd0da073de7b408"],["/categories/java/蓝桥杯真题/page/4/index.html","7ac782cfd44b0e89484a088db1fb840d"],["/categories/java/蓝桥杯真题/page/5/index.html","84bb3e68f05b94742a0cbecedba74720"],["/categories/python/index.html","d93836c60c130b9b139b56f703c863c5"],["/categories/python/page/2/index.html","74f4be6a35269fa6d8c59b40a46900a2"],["/categories/python/page/3/index.html","7cd7c469344be1e958ee2460727e4cd7"],["/categories/python/入门150题专栏/index.html","fbfd8065816e368a735b36f7a0b06d10"],["/categories/python/算法模拟题/index.html","27d43684bc03197b1581393b25934e15"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","b7731f7f1c85e97ad3e7feef01e645d5"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","5d575867b9b2b30b040e3a4cbe46d209"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","fb53a9308bff4db10e46e29c2fb03839"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","090e83af602fabb5117261d8f673359a"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","3a373f557fca6a4a7d58c745effeddff"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","06af157eccc3d15bb69d59e4db353125"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","e2ed11f968bc416790b8f5750edd4952"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","e7ef1bb831c5e612935848ac97bedb9e"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","5d5730e35f08b15176ad6bf5ce9aee6a"],["/categories/python/蓝桥杯真题/index.html","f74fe1200a00075ecd1ccb3e45c09c2e"],["/categories/python/蓝桥杯真题/page/2/index.html","1646ca062dc49f39fca8eb5ac239fd47"],["/categories/python/蓝桥杯真题/page/3/index.html","324eb4334bd1d238eb054ec123a92dab"],["/categories/资源教程/index.html","be423b72ed96ebdc8d96d00635682ba3"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","b2ddb3d135837cdb4054b2f2071439e3"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","c0f23a56734b130d85416c7622bdf643"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","e600d4105e1a7c74dab8e6e2ee71d663"],["/link/index.html","b78aa64a5eb0df40d84d5aae096297a6"],["/page/10/index.html","f616ac41a35deeebc8611a1381840565"],["/page/2/index.html","80dfa57bc6fa73524fbf78ea5669f778"],["/page/3/index.html","a990379551bc0098a771948230d369f4"],["/page/4/index.html","f66970f64469cf1938ad84ffdaca45e6"],["/page/5/index.html","9274d6504433371f59749b0ccc775886"],["/page/6/index.html","1df080da79bfa2d92fffaeb03ba3f76e"],["/page/7/index.html","8198b8ddbe3b787bda79717df888eef1"],["/page/8/index.html","329a5dbe27489772d9aae070e52fcaf9"],["/page/9/index.html","880b57ed42c2ac9e96887e073556371c"],["/sw-register.js","761697cd811e5b5f3da5a15af643b7b4"],["/tags/GCD/index.html","3c9472242ec751b4c6fe1092980e1ac2"],["/tags/dfs算法/index.html","c5c97fb3219fcab4138ca5c7b4d990d2"],["/tags/index.html","72f7b071abb2ba4e266096b03a368a4b"],["/tags/java/index.html","3603b23610cdc4390e6de2fabf8e084d"],["/tags/java/page/2/index.html","6f4747b125336f32f386630a66299b9f"],["/tags/java/page/3/index.html","d696b96b39a4c3964998636fd104af58"],["/tags/java/page/4/index.html","f7e865d4c12c2c4f05868527a07f4880"],["/tags/java/page/5/index.html","900316755132899352363e790077bb65"],["/tags/java/page/6/index.html","77e5224979cebc56cf3315399733d359"],["/tags/python/index.html","9ac403ecba6ee3539e34abeb4192807d"],["/tags/python/page/2/index.html","5c13ba75c2901b601c919e299eb469a8"],["/tags/python/page/3/index.html","f3557ddfcf1c20ddca715cb0254c5aac"],["/tags/random类/index.html","72606b099908255e8afa620a60a35b13"],["/tags/二分法/index.html","17b2c5033732d9266e433507b87ebd01"],["/tags/入门150题专栏/index.html","8277e7a096aeeac7d47d2841e4b46b65"],["/tags/冒泡排序/index.html","1baf97a83b8a2f1f8c1ec5d42eafe815"],["/tags/力扣/index.html","f89adb90f6e235743cd4e1302cba51c4"],["/tags/动态规划/index.html","2660b4733b286442400405fa52884c04"],["/tags/字符串/index.html","e066a32c156cb4cd7e13f6bec3496d06"],["/tags/并查集/index.html","e8d938bcb053ba623d6d03ffd77b9f68"],["/tags/搜索/index.html","9b490fd71f56782023a009546e668030"],["/tags/暴力/index.html","8866a18961117bc74ae36cb8eafcb299"],["/tags/构造/index.html","5a8ea2d93fbbc6049899ed65fe2678cd"],["/tags/枚举/index.html","97c13fdc96949a188ea9758063a2d838"],["/tags/算法/index.html","080dc57ad48f034459a6ffede8a44de0"],["/tags/算法模拟题/index.html","866a220b97422fcd83d7222526eb582e"],["/tags/线段树/index.html","761fe68d269c615828fc988da1acc662"],["/tags/结构体/index.html","6d2552dc1392fc01c37e3dfb7b0ec357"],["/tags/蓝桥杯/index.html","e06cc05fcda0429905bdfa1be9bca9c3"],["/tags/蓝桥杯/page/2/index.html","ee80c98986fa73ff30b44e2fd0216b19"],["/tags/蓝桥杯/page/3/index.html","556a27779b6f590c555b378ef1e52b5d"],["/tags/蓝桥杯/page/4/index.html","c9ead9814a9c1c684e4a99febde64b32"],["/tags/蓝桥杯/page/5/index.html","2cf706355eaf1b7b73c24bab2006b0e4"],["/tags/蓝桥杯/page/6/index.html","b64021c66048c0d38ff27ed0e087873f"],["/tags/蓝桥杯/page/7/index.html","969fee6ab4cfcd2ccd8f279a3fe93453"],["/tags/蓝桥杯真题/index.html","c76717e1e40cae6c20212abfcc26ea58"],["/tags/资源教程/index.html","61ccaf439ed21c908ce688656259e37e"],["/tags/递归/index.html","bb7cb050f38762616656b341456e294d"],["/tags/链表/index.html","c93cc29c2eff29666b40b250eebe3eff"],["/typora/index.html","ec3c3c0e7a1a1ab179608e703b7b9f1d"],["/七段码（JAVA）/index.html","f35ef08bc6173396935eccd2f5a17512"],["/作物杂交（JAVA）/index.html","3d38de21d7792be1217120bc05554edf"],["/全排列的价值（JAVA）/index.html","2381544ebaf36c9c5c4583b46a59a273"],["/包子凑数（JAVA）/index.html","34522f72788bff0f9361488eb72bda3f"],["/双向排序（JAVA）/index.html","219bd00bcc3eefdda1919a86033c0c91"],["/取球博弈（JAVA）/index.html","224d6d748cd792b6ee83c465bbbaa007"],["/合根植物（JAVA）/index.html","3541e24df500df51ffd494a24dda10f0"],["/四平方和（JAVA）/index.html","e65c55ac1605c9dbc9c9527e200b36d4"],["/回文日期（JAVA）-1/index.html","5d9aeabecaf3e6e60e644776bd67f276"],["/回文日期（JAVA）/index.html","9d66a3ab4bbcff9f6549d7ed3bd5647b"],["/山（JAVA）/index.html","5eeb3ad809b450a1c766e0a2e9f97b3c"],["/左移右移（JAVA）/index.html","890c90a1ac40d54f5892edeb0c65127e"],["/成绩排序（java）/index.html","cbf16b1528fe9c79fbd3c39d63ff24af"],["/数位排序（JAVA）/index.html","e8ffecf4a25f8b74b58c27498c7ad4f9"],["/数字三角形（JAVA）/index.html","4066d03c6e8a4a33bfd72fa024888f36"],["/数字加密和解密/index.html","46b0d189cd5035f7578be0edb5b4f1e3"],["/数组切分（JAVA）/index.html","b988b7d7399afe1290a0cd62a85071d7"],["/方格填数（JAVA）/index.html","471bcbb3d94abc986f2377fdd551083c"],["/最优清零方案（JAVA）/index.html","24cf279f80c76492f446ad3f186c9868"],["/最少刷题数（JAVA）/index.html","aeb59f641fc4d95486fda4c53c6c4ac3"],["/本质上升序列（JAVA）/index.html","3cae529e9672d8de3ed94a36bb462aa8"],["/杨辉三角形（JAVA）/index.html","bfa1fe310929ca5c40a2f896c4712dd7"],["/案例2-1 商品入库（java）/index.html","39a86a77812bf3186e06bb5b7d3e22f2"],["/案例2-2-小明都可以买什么/index.html","d41381295f73f844e692e5bd59581074"],["/案例3-1-基于控制台的购书系统/index.html","e5ef124547d9cf7a77811e672f4908b5"],["/案例4-7-经理与员工工资案例/index.html","5f9a492f12bc77bec7699070e4162fa6"],["/求和（JAVA）/index.html","99592f57b03818610e0b02fd625d761c"],["/求阶乘（JAVA）/index.html","90bbfc77e1d12d65624373253e8f1c35"],["/牌型种数（JAVA）/index.html","dcde59b8e83a04fb7ec41329b80a06d5"],["/猜字母（JAVA）/index.html","acf65911fa7adecddad095cbefafcf55"],["/猜数字（python）/index.html","593e25feede94c2999927eebf15e8444"],["/砝码称重（JAVA）/index.html","2f53033d5e973bb2291ac1279ec8c17d"],["/等差数列（JAVA）/index.html","54ea1219368736d1259a1c2abda52f92"],["/蓝桥杯--单词分析（python）/index.html","d537fbe003bce73146d71e4a60f03d7e"],["/蓝桥杯--回文日期（python）/index.html","85f9c0908b8596d352ac2522c061cbf3"],["/蓝桥杯--字母数（python）/index.html","a7914bc65ec571f11c91fc914056ca21"],["/蓝桥杯--成绩分析（python）/index.html","edba46a2c6dac114cfb3dec2ace1bcc3"],["/蓝桥杯--成绩统计（python）/index.html","0b170a7ede444f71cc6d29cb8929dcbb"],["/蓝桥杯--排序（python）/index.html","c06e60c32d259d118fdbf628ed931d14"],["/蓝桥杯--数位排序（python）/index.html","9308e22ce92ff52c756ed950c43ad4c8"],["/蓝桥杯--猜生日（python）/index.html","557457a9645e416b622eeb26388684c0"],["/蓝桥杯--猴子吃桃（python）/index.html","70663cb3837c4a1065ea1184b42795e2"],["/蓝桥杯--石头剪刀布（python）/index.html","a260d5896dbb9924efbdc4f9e9ad96e7"],["/蓝桥杯--移动距离（python）/index.html","18a6672671c332e0214cc3710b03ce5f"],["/蓝桥杯--空间（python）/index.html","cbeafb51a786a6ff9563800a69a48994"],["/蓝桥杯--等差数列（python）/index.html","506891b4c8c86ae4b007cc8c8e3419a8"],["/蓝桥杯--纸张尺寸（python）/index.html","7c9df880d58cb737ed4a8e5ef9ec57ed"],["/蓝桥杯--结构体之时间设计（python）/index.html","167bde0e204b44a73ed9194229ae4adb"],["/蓝桥杯--货物摆放（python）/index.html","f9a82fc32023d9bfebb838fa552802ad"],["/蓝桥杯--质数（python）/index.html","276171dcefa5aaf4eb6af0bf94f03613"],["/蓝桥杯--购物单（python）/index.html","d4f8e981d1c9fe3423dfa41d1327c1c7"],["/蓝桥杯--跑步锻炼（python）/index.html","085218bcfb32b996f1f32d79253ccc8c"],["/蓝桥杯--迷宫（python）/index.html","e9c980439645fd569e804e4ade889836"],["/蓝桥杯--递增序列（python）/index.html","50ca3b5044271439ac1ec33338d09794"],["/蓝桥杯--链表之节点删除（python）/index.html","ea996ed4b8c9bd84f280c341a83c93fc"],["/蓝桥杯--门牌制作（python）/index.html","5d7470f63a52b62b0b1369761d185360"],["/蓝桥杯-592门牌制作/index.html","b57ac80edc3ebb93140478d2f2a7398d"],["/蓝桥杯-单词分析（java）/index.html","6c0070e277125f7c7f48e9c5a68cd02b"],["/蓝桥杯-字符统计/index.html","3de0db2bf34be7efc08253705401a779"],["/蓝桥杯-山（java）/index.html","66ef697331b6088f2f54c4ce5db87e0d"],["/蓝桥杯-成绩统计(java)/index.html","36417a138183cf6b229742f1fa98928c"],["/蓝桥杯-数列求值/index.html","bb14f3e89489719aa577d4fa31d0baed"],["/蓝桥杯-数字三角形（java）/index.html","d32187473417b4b3b17618f68dccfbc5"],["/蓝桥杯-既约分数/index.html","348484bc96ab0722f9655560d7f06f1d"],["/蓝桥杯-时间显示/index.html","26d9a71d8be63b20a81e3228807ee039"],["/蓝桥杯-最少刷题数/index.html","118291b87260e7fa27a2013158722c02"],["/蓝桥杯-特别数的和/index.html","6f47b23f0f17336576ebdaf24d96ecd4"],["/蓝桥杯-蛇形填数/index.html","1489f7f8f33cc836ac3705ec507cf64e"],["/蓝桥杯-跳跃（dp）/index.html","f6d625414983876e02cbf314b30b766c"],["/蓝桥杯-链表数据求和操作/index.html","350ba4354a331a5442e8da493b594e16"],["/蓝桥杯-阶乘计算（二分）/index.html","2ca5afd88577d0fb345228ff71e38195"],["/蓝肽子序列（JAVA）/index.html","fa9596c992e5adb7d7991d6f9818073e"],["/计算球体积/index.html","c17ef3473d3a041caa7e1c8cb79738ac"],["/计算矩阵边缘元素之和（java算法优化）/index.html","e40dae7ac339e1f0f75a21cbcb7cee75"],["/质数拆分（JAVA）/index.html","56c486ee57d3556d069f49193a22519e"],["/路径（JAVA）/index.html","a3d8b41fc0a040bd580b24ccf8929afd"],["/重合次数（JAVA）/index.html","6bdd0d1cbcd46c217091acbac16f6dd0"],["/闹钟定时程序（python）/index.html","c7f068edfd41743f44c261e5b01ce095"],["/青蛙过河（JAVA）/index.html","8a48697018edd6fa3dee71766e45b8d9"],["/验证码（random类）/index.html","83c6b7c02e4cf5c93dabceda80d04f5d"]];
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
