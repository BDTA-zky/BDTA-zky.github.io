/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/CentOS7安装时直接跳过了安装信息摘要页面的解决方法/index.html","4749c555e0667d5ef9754f2c300d365d"],["/GCD（JAVA）/index.html","45150b160c9202afbe862a4ab7c78510"],["/Hexo-GitHub搭建个人博客/index.html","daf7c9eb74a32b18a622626877a541df"],["/LeetCode35：搜索插入位置（二分法-根据边界区间闭合问题的两种写法）/index.html","91c509a2db21b49956580c54e592beec"],["/LeetCode46-全排列（dfs算法）/index.html","0f042cdc9283f1b7497c8ab32cb332f9"],["/Python150题day01/index.html","113a6b6aa25b7b9f5f84e384335e84ba"],["/Python150题day02/index.html","6c2eb7f31feed2eca832767b0106ef9a"],["/Python150题day03/index.html","fea88a5e1f952df72ef642f1a4dc80c9"],["/Python150题day04/index.html","83e2490bdd90f60591f6ea8ef8ba80a7"],["/Python150题day05/index.html","8017090f3bed9d1670b2a1f24116643d"],["/Python150题day06/index.html","13984f4285b522261363f90f843e317a"],["/Python150题day07/index.html","3604e740ddcfb5817c46dbcb20d388df"],["/Python150题day08/index.html","67189328be842e2bca74d535b4c65578"],["/Python150题day09/index.html","70def9ff7caddc846b7d1eac822a1538"],["/Python150题day10/index.html","40db4d3954e03c88bf0f7f8f5ca7fc29"],["/Python150题day11/index.html","e4e78e4506ab086942fcaba538ddf28d"],["/Python150题day12/index.html","2906d4ec32d8018f1c76b201de4675b2"],["/Python150题day13/index.html","309e88710f00e3d7194e789c62002e23"],["/Python150题day14/index.html","8ad7cc62734035219df4b7888e5d1b62"],["/Python150题day15/index.html","db66ecdf88ccd08d2884830e04d2a87f"],["/Python150题day16/index.html","8c938b1a129cc90efc68885d5a507aa4"],["/Python150题day17/index.html","e816eb698756b8a487846d315fcd722c"],["/Python150题day18/index.html","05139c9788159e59bdd3c4a9a144bba6"],["/Python150题day19/index.html","786c5e016ac0b3849f99d35bc28974c6"],["/Python150题day20/index.html","6519ea52a2a202faa9310bd24bed34dc"],["/Tomcat部署项目后，验证码不显示问题/index.html","84ddb27ff75741245d7055ed328ec4ce"],["/about/index.html","6782b76b045764869b963b01f1f43680"],["/archives/2023/04/index.html","c190d948b2c6618bcc8c904b18350f02"],["/archives/2023/04/page/2/index.html","800f7a75ee04fff10969a076082f1174"],["/archives/2023/05/index.html","e17d9819607efe4cbd7f69685c1bfe64"],["/archives/2023/05/page/2/index.html","db16a710c9039c35fc3fae9635bf45d0"],["/archives/2023/05/page/3/index.html","e7a7ba4cf385c814e2afd9725a20be4a"],["/archives/2023/05/page/4/index.html","624c79b236dd16a804f0a04bdc09ada7"],["/archives/2023/05/page/5/index.html","469cce15baeda148bc550483feb56859"],["/archives/2023/05/page/6/index.html","408fc78da75f549ccf9331b57eb1a7df"],["/archives/2023/06/index.html","95c2c8e894bf4e448eee1b7646f3c076"],["/archives/2023/07/index.html","5d0838631fc40b5d1ebb7db62228fd85"],["/archives/2023/07/page/2/index.html","8c55ee05e2d4ffc34e4bf3c441b08f3f"],["/archives/2023/09/index.html","4f66f9da27f15087c379fbd87258c9d0"],["/archives/2023/12/index.html","e085815c924420fbe04c117d5d23e320"],["/archives/2023/12/page/2/index.html","c94b83cf9c0c208ecdac11f8d2454033"],["/archives/2023/index.html","93ab6b24c3d8abfba804a23de0a04faf"],["/archives/2023/page/10/index.html","84f93a16fff61401ceb41b242f8e635a"],["/archives/2023/page/11/index.html","5d37e32372e75417767056b4909d177c"],["/archives/2023/page/2/index.html","495af7a3313d4577e504ce1b1f0202f8"],["/archives/2023/page/3/index.html","1fc6874819ca26c2303ede3c7d3a2751"],["/archives/2023/page/4/index.html","670f4a368c3be790f1660f5902347351"],["/archives/2023/page/5/index.html","c4d54f7650d46cd25566c90bfe0b6058"],["/archives/2023/page/6/index.html","cb89cb544ec97fda1ee17c4e52ade221"],["/archives/2023/page/7/index.html","1c997dafd7f28fa4cf1f920213b217f7"],["/archives/2023/page/8/index.html","5443cef8745a0e62725b4612244c8cd7"],["/archives/2023/page/9/index.html","421d4433f8e5c71d041958acf3d7ba37"],["/archives/index.html","31b3043195bded068475a624ef81b5c7"],["/archives/page/10/index.html","d4e1f7ea1ac0587a1836647f1c4c327b"],["/archives/page/11/index.html","b1a96360056e4390c4cc7a2d5d61a4bb"],["/archives/page/2/index.html","f0ac4842861ee578f346c3e1eca168f9"],["/archives/page/3/index.html","83d7a825d3fef46c640f56c5771c71dd"],["/archives/page/4/index.html","f14749bc3c7d721bb3f97351baa308de"],["/archives/page/5/index.html","ab3b6edba74e47177ae06af4c712a126"],["/archives/page/6/index.html","8e561f29f22fed879033f80f1e355da4"],["/archives/page/7/index.html","89e36df3842e137ea6c47e194f588eab"],["/archives/page/8/index.html","89be2f8a9f1bd57ff6de810bee868ec2"],["/archives/page/9/index.html","ac0a78ddd0c5f65b87cb88bcb2b1ae29"],["/categories/index.html","77242dc4250176855e680645229efc93"],["/categories/java/index.html","b8250a8662b9379c13439a6ffb4148ad"],["/categories/java/page/2/index.html","7d7c834140c1c81b1aaf237ba140afe8"],["/categories/java/page/3/index.html","89fea6620ac8e2757798ad3f4bd4ffb0"],["/categories/java/page/4/index.html","8d957db7a544ecd77d00f0a421007fa5"],["/categories/java/page/5/index.html","732a0e661313bfd9ee49765622637f16"],["/categories/java/page/6/index.html","62abcd48da08744b729ad0abbc2e8ce2"],["/categories/java/算法模拟题/index.html","cbe75b44e58cfc9cfb525f83a8cff205"],["/categories/java/算法模拟题/page/2/index.html","351a49613ef62d6d22e5218460dcd7c3"],["/categories/java/蓝桥杯真题/2014年省赛/index.html","5b2dd1c27b2cfa371490eabd96ba6fff"],["/categories/java/蓝桥杯真题/2016年省赛/index.html","123ae12f2f2bb6d24ad2a9ba1c5401f7"],["/categories/java/蓝桥杯真题/2017年国赛/index.html","589a6e66da34fac20a74329922c927f4"],["/categories/java/蓝桥杯真题/2017年省赛/index.html","1357808c526ae67a79919d4745cdc0ff"],["/categories/java/蓝桥杯真题/2019年国赛/index.html","d3498fe5dd3521c56bca1980803962da"],["/categories/java/蓝桥杯真题/2019年省赛/index.html","0f29b7ef718240dc957d996b1fb804a1"],["/categories/java/蓝桥杯真题/2020年国赛/index.html","bfdc73a63cbe72125005088f33cb5995"],["/categories/java/蓝桥杯真题/2020年省赛/index.html","a9afb000dbdcc43b7c90ef064a1d1e82"],["/categories/java/蓝桥杯真题/2020年省赛/page/2/index.html","ccabd16d05647760b66634d52646d96a"],["/categories/java/蓝桥杯真题/2021年模拟赛/index.html","f80b4e8cb6c079680c94c82b3daa058f"],["/categories/java/蓝桥杯真题/2021年省赛/index.html","51febf7e06262a01c4282f015dc84cd2"],["/categories/java/蓝桥杯真题/2022年国赛/index.html","f7762accb3ee41c485c4dba77057c4b8"],["/categories/java/蓝桥杯真题/2022年省赛/index.html","0ef233ccc0b73cf5cde3ecc0db4ceded"],["/categories/java/蓝桥杯真题/2022年省赛/page/2/index.html","58b0882eedffd64ad009e89181e60666"],["/categories/java/蓝桥杯真题/index.html","d166429169cd66da1b48a1332844fa75"],["/categories/java/蓝桥杯真题/page/2/index.html","a08939a5019e0b2316c0f450b657ee32"],["/categories/java/蓝桥杯真题/page/3/index.html","e2ebd391271f93c673bbc2429d5bc7cf"],["/categories/java/蓝桥杯真题/page/4/index.html","df027234a49d0eb95fb585ad28da6198"],["/categories/java/蓝桥杯真题/page/5/index.html","8f48936bf9109533bb38d561af7f9c21"],["/categories/python/index.html","f547998b02b41dd0d9a600aa6f08b09e"],["/categories/python/page/2/index.html","6c1218fc4d51517c833430999897eb2d"],["/categories/python/page/3/index.html","312959de38df796daa23c4e9f8f5219b"],["/categories/python/page/4/index.html","c47d7030e1b4efb35c4d6ddb758cf79b"],["/categories/python/page/5/index.html","d8ec2074ba857085a0d93c93be552058"],["/categories/python/入门150题专栏/index.html","49bc58cd36c35237ada987e1fea3345f"],["/categories/python/入门150题专栏/page/2/index.html","93263510f42a7ba4f45b346c5f6e2112"],["/categories/python/算法模拟题/index.html","533e16c77560c9b0a88c75aba1168814"],["/categories/python/蓝桥杯真题/2012年省赛/index.html","56bf00119e53aa722ee65db663542507"],["/categories/python/蓝桥杯真题/2015年省赛/index.html","6db1af8a39bda4430b789dfb541a1651"],["/categories/python/蓝桥杯真题/2017年省赛/index.html","2e95302e92711979f71e0291044bd14f"],["/categories/python/蓝桥杯真题/2019年国赛/index.html","010925fbf87f304e34e4cc6249864453"],["/categories/python/蓝桥杯真题/2019年省赛/index.html","5d6b1393f0c15591ca90b15af2511f83"],["/categories/python/蓝桥杯真题/2020年省赛/index.html","9afe4915f969b240a82f733374d2afd5"],["/categories/python/蓝桥杯真题/2021年省赛/index.html","d2c5c852c3042263c714db00a9e38ed3"],["/categories/python/蓝桥杯真题/2022年省赛/index.html","560cc8d3978d2ca9f753ee5308dd51cb"],["/categories/python/蓝桥杯真题/2023年省赛/index.html","dd80c9602e4c4d57f9fd877d10a61405"],["/categories/python/蓝桥杯真题/index.html","25ae27ddd0f86145d8a45bade9e15a08"],["/categories/python/蓝桥杯真题/page/2/index.html","9e3f2cea539c70402c589ace17b23098"],["/categories/python/蓝桥杯真题/page/3/index.html","08a9db71977469fecfe4f2c95aa7d099"],["/categories/资源教程/index.html","e9b1429be4fa24540dffaa351e1e87cc"],["/css/index.css","11ac858473f45f3b46b3652552f4e8fe"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/hexo-offline-popup（提升hexo框架博客访问速度）/index.html","0126e1b533ef5a3a0df83d0485f2b153"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/index.html","94ebe2a0543756cb357b90c55891d4bf"],["/js/main.js","5a6ecf34399a1729b115064d2f283227"],["/js/search/algolia.js","786b8da5325888c55c04e6b6687bf9f5"],["/js/search/local-search.js","1ec55c21e97cc170ee4dadaf96b44806"],["/js/tw_cn.js","bc064917c366036544975274bb20a01d"],["/js/utils.js","0dccc99f6a5b70b9ccfbf58d2c6eec5b"],["/k倍区间（JAVA）/index.html","f6664f2341ee3badde13f1deee5c7c62"],["/link/index.html","b01712cdb4b97cf6a44b731376ddf4bb"],["/page/10/index.html","b4f2408e595086128a84c5c07dccd395"],["/page/11/index.html","01c1e2e47c9330f9b48988c7fe79163f"],["/page/2/index.html","d626f7845db8bf1db26f11ee88b41579"],["/page/3/index.html","c7dd7d6728466f7ebe410e0d30665253"],["/page/4/index.html","a6fa4079d3273b6dc75708178ee52340"],["/page/5/index.html","3da69b1d51f1c3d6209ebff1cad14377"],["/page/6/index.html","002b581b793e8c3ce93b91dce25e0d9a"],["/page/7/index.html","68dc1d7c357063df35a6a83ce0bee2b7"],["/page/8/index.html","e5e2548c79bb95d82aa253476f277412"],["/page/9/index.html","f7efb1b0a3ba0d21998f1460d627d0b9"],["/sw-register.js","3125337fd33bc625a0e8522d4aa56ef8"],["/tags/GCD/index.html","a0a53d535f433b4f004abb6d56a9c149"],["/tags/dfs算法/index.html","6448a15c7463a41b84ba6ab492fef66d"],["/tags/index.html","63cd91522ea38a7eaf077d0833ba7280"],["/tags/java/index.html","f130c309bab81d02aa6dc5ec2d0e94c1"],["/tags/java/page/2/index.html","fb00a12e900c20f9f2b5d3e5855adfb9"],["/tags/java/page/3/index.html","5d5f8c04c303d3e1593131f9e640003f"],["/tags/java/page/4/index.html","d69222cf356da7cc03cc055e324cb51f"],["/tags/java/page/5/index.html","f78721a3ce1ebbeb5a89bbccf4968b0c"],["/tags/java/page/6/index.html","55f94ca2de8723ff26184ca74cac11e7"],["/tags/python/index.html","1dc255205dc857b098a9e5b5e7ac9c94"],["/tags/python/page/2/index.html","900599ec66480ef5aedc417b183985d6"],["/tags/python/page/3/index.html","889ca88c6712cebb996d5ee3b28f8574"],["/tags/python/page/4/index.html","d2cae81db12618f93d93307d90c32da2"],["/tags/python/page/5/index.html","520235344ab6a9ee54005cc927a9c046"],["/tags/random类/index.html","9b030e34f5d50cc0d786258d82b5fbe5"],["/tags/二分法/index.html","bc55a2c17cebcb469e1787b9af9f7991"],["/tags/入门150题专栏/index.html","0983d7157db4abdeb1c6b5ea68d75de3"],["/tags/入门150题专栏/page/2/index.html","5159b532f4d004842aa681e886145ac8"],["/tags/冒泡排序/index.html","3a7c90695db0e51421773807110ad062"],["/tags/力扣/index.html","2ef3194c526ed576f5d52ed39d8a1042"],["/tags/动态规划/index.html","c3f8f47c7f9e33d25b20791592050204"],["/tags/字符串/index.html","8a53c8b18e4dac5521871f217e23c209"],["/tags/并查集/index.html","be2daac70f099230686863f169822d59"],["/tags/搜索/index.html","8d1d39a5e9d9c2af344cfc08e090fb29"],["/tags/暴力/index.html","7e2be2159ed5919d8921c850229d20a4"],["/tags/构造/index.html","cefb5852250a33b661f6e2e8137a40a9"],["/tags/枚举/index.html","afb63f56b74dceb0ddc52a752fc1f433"],["/tags/算法/index.html","44e29cd48ec88757ecf1d54c2df37915"],["/tags/算法模拟题/index.html","067c388083fca1a75f53aa035cff39f8"],["/tags/线段树/index.html","2a10618ba89c72d4f05bd84e1ba4c4a7"],["/tags/结构体/index.html","a7f08927fc6a5889fbf42f1152a41149"],["/tags/蓝桥杯/index.html","c0a5fbf5f1694743ccae47c778470cbd"],["/tags/蓝桥杯/page/2/index.html","9b90273b01f5bff1d3d01462712fbbaa"],["/tags/蓝桥杯/page/3/index.html","e8b0835976e4d57d3a050d74a453126f"],["/tags/蓝桥杯/page/4/index.html","ed38dbfc634e4b38b699ceb7734f272b"],["/tags/蓝桥杯/page/5/index.html","08624af34c6cb23cf23971444d0edcea"],["/tags/蓝桥杯/page/6/index.html","248fecba7da3a0d1eef30ed8e3a83a20"],["/tags/蓝桥杯/page/7/index.html","cfd6fc2c035905950a79a0d19473b0c5"],["/tags/蓝桥杯真题/index.html","3a6ae1472f171b228dc69083a3d627af"],["/tags/资源教程/index.html","aa94d9e80945bea914d0027ea20e7f77"],["/tags/递归/index.html","6da5d2a08c03001d77f244965d546baa"],["/tags/链表/index.html","eda26c99fb6e8b0c059ed40f8d09f963"],["/typora/index.html","4856aa6e2502659e3dde0b5cc022113f"],["/七段码（JAVA）/index.html","287632c9dbb41377059eebf0a23f3532"],["/作物杂交（JAVA）/index.html","ebb9ec471ab63f869411f2e170ab2432"],["/全排列的价值（JAVA）/index.html","83dee9dacc18430d40dc797cbf36a557"],["/包子凑数（JAVA）/index.html","25a71c4fcb8d8601b74fe2f41634850c"],["/双向排序（JAVA）/index.html","a02dd9c6eacd78ae2037c7bc830152c4"],["/取球博弈（JAVA）/index.html","600b24251fdcbbc33495e3a15c5a8f81"],["/合根植物（JAVA）/index.html","f5ebf34d8d9fb308f01c8264a38925fd"],["/四平方和（JAVA）/index.html","8dcf3b72d9ee10c7086642b1eb099960"],["/回文日期（JAVA）-1/index.html","1dc8da22c7a0b82cf78eeaa5971ad937"],["/回文日期（JAVA）/index.html","366e3cde3b29f1c720b83817f5e8f570"],["/山（JAVA）/index.html","af4721f2c37de38bd59108d7145b4ac3"],["/左移右移（JAVA）/index.html","7740d769e488984eb73757a651cccafc"],["/成绩排序（java）/index.html","f1e91693c53db28b3b7925c35bb822d4"],["/数位排序（JAVA）/index.html","5b3a83b6f469933865c065765cbeb5ab"],["/数字三角形（JAVA）/index.html","65145a4fa4eb6381b64785a497f158d2"],["/数字加密和解密/index.html","e8fb7906fa2523bb3b43ded62edde8c4"],["/数组切分（JAVA）/index.html","be7061ec60583e69a289c27f5b72960b"],["/方格填数（JAVA）/index.html","6f75f5f549bf6b5e1fb1c5b1225040b6"],["/最优清零方案（JAVA）/index.html","17a3e43c849d56c04967abfa95c6b2bd"],["/最少刷题数（JAVA）/index.html","54624471ee4f9552f4a59daeb3e98b07"],["/本质上升序列（JAVA）/index.html","3840262f90efbc2649c95014d94ed217"],["/杨辉三角形（JAVA）/index.html","935b9dc698067540e34e9c3951070e4b"],["/案例2-1 商品入库（java）/index.html","4f745e555db483d00120f174a212cf77"],["/案例2-2-小明都可以买什么/index.html","114fc4fdca6d46b606f91978ec23c1cd"],["/案例3-1-基于控制台的购书系统/index.html","8556a788d1f46d29c8465ec59a6e2b8a"],["/案例4-7-经理与员工工资案例/index.html","09ec4ccac7ac3233e97a4d989d00e37c"],["/求和（JAVA）/index.html","21845ddcd77343cdde219716cb46c213"],["/求阶乘（JAVA）/index.html","27dda9cd4d8d5fa1b6e7698820160961"],["/牌型种数（JAVA）/index.html","e878656106ec273218294468c91a47b5"],["/猜字母（JAVA）/index.html","d708c6742fcb55b2d624350275193684"],["/猜数字（python）/index.html","4a73a5da6b41019b0fafbf2247e668fb"],["/砝码称重（JAVA）/index.html","d9ebdb57fc5325075711a45036c0a332"],["/等差数列（JAVA）/index.html","c85a1681516fc4783a52af431cd1b66a"],["/蓝桥杯--单词分析（python）/index.html","56774f12d7838e9da7184b78ecafae1a"],["/蓝桥杯--回文日期（python）/index.html","eec01b82a863f260a643f78f300470e9"],["/蓝桥杯--字母数（python）/index.html","3cd7f49db7b4168f3f1ceafc176dbb35"],["/蓝桥杯--成绩分析（python）/index.html","b7e890b758e198dad5f2e2ce96c10bfb"],["/蓝桥杯--成绩统计（python）/index.html","219d1884a7f2743d63224b1088e847a3"],["/蓝桥杯--排序（python）/index.html","9d30d6596e12359f95ddf059e4e7c1c1"],["/蓝桥杯--数位排序（python）/index.html","957cd0905d2f8f9930f99cd1cde4b943"],["/蓝桥杯--猜生日（python）/index.html","f53bc812c31fdf821bde350e29854be4"],["/蓝桥杯--猴子吃桃（python）/index.html","2e361f8d23707b55b5a38b7f287fe3d1"],["/蓝桥杯--石头剪刀布（python）/index.html","4fe7d274e0c5739e38fead8b27d9274c"],["/蓝桥杯--移动距离（python）/index.html","cc9dcc6a1a6455164dbf1ebf9f208868"],["/蓝桥杯--空间（python）/index.html","ca0795e38527236b994b749d67846985"],["/蓝桥杯--等差数列（python）/index.html","c29070f5301b71bc4a1311a5de960f22"],["/蓝桥杯--纸张尺寸（python）/index.html","ebdc69f2ccbc20bfe11c4ddeb94881f2"],["/蓝桥杯--结构体之时间设计（python）/index.html","5901adaad3927b77930e9151b09276fa"],["/蓝桥杯--货物摆放（python）/index.html","b6afa4b2ffb92d3922cfa23f6a55724e"],["/蓝桥杯--质数（python）/index.html","97cec0e9e63e2e58e84487a105a49938"],["/蓝桥杯--购物单（python）/index.html","cd4a9193852c14eb2119295e9829e08b"],["/蓝桥杯--跑步锻炼（python）/index.html","4b7efa04164b3b8d0a853cd8fad62d9a"],["/蓝桥杯--迷宫（python）/index.html","0775355688a75b53832d3d58240623ba"],["/蓝桥杯--递增序列（python）/index.html","f03498697945be86185f9f3f4b885d93"],["/蓝桥杯--链表之节点删除（python）/index.html","be82c835eb5987da133b2231033b8766"],["/蓝桥杯--门牌制作（python）/index.html","8d3fe566fe186b4b72db8573ed139479"],["/蓝桥杯-592门牌制作/index.html","ed9e1e16603feb952c0234bb1f2df6d0"],["/蓝桥杯-单词分析（java）/index.html","296704c86a3b371aafa13275fe85395a"],["/蓝桥杯-字符统计/index.html","6bacd87c08483eeff7fc0856b1fb8ded"],["/蓝桥杯-山（java）/index.html","b75e118ea6cec64c3a9685e69ce497a0"],["/蓝桥杯-成绩统计(java)/index.html","754efda79a02e02ad0f8a81c5f29d2c7"],["/蓝桥杯-数列求值/index.html","a41877b4a3ab56ac3405fcb1c510960f"],["/蓝桥杯-数字三角形（java）/index.html","b2e86b639036d8e25d95962691254cfa"],["/蓝桥杯-既约分数/index.html","83b1a37185d3cf86390be1b648461a62"],["/蓝桥杯-时间显示/index.html","c4b17f63509c36ae8d4563786e2f70a1"],["/蓝桥杯-最少刷题数/index.html","71b6123d98d3e37aad1e805fbba4310c"],["/蓝桥杯-特别数的和/index.html","c3b6669c5a46fab7e370c00858f63c4d"],["/蓝桥杯-蛇形填数/index.html","e8cb6e54dbbc4c2ff2701169d0280f76"],["/蓝桥杯-跳跃（dp）/index.html","3358db3d057287574b34a7d4e6200236"],["/蓝桥杯-链表数据求和操作/index.html","ecc6c77f771cface8f1cde4dd5ea0928"],["/蓝桥杯-阶乘计算（二分）/index.html","ba8d7402edf992aa81366dffe3ce2776"],["/蓝肽子序列（JAVA）/index.html","265a3b4b412bfdcbabb62199f691e92e"],["/计算球体积/index.html","8c3d62dac19e99078a21fbc94b4f0630"],["/计算矩阵边缘元素之和（java算法优化）/index.html","ca4faef5f9b37898fdb226d1c0c850a8"],["/质数拆分（JAVA）/index.html","1ce505fd7450f5462e68bab54e24d2f3"],["/路径（JAVA）/index.html","6f7ca95629b94ed02a497a4c8dbb439b"],["/重合次数（JAVA）/index.html","f7e9b9fe526a51b147c5431d44aef112"],["/闹钟定时程序（python）/index.html","a326c54c9d2807c70df65be5faab39ff"],["/青蛙过河（JAVA）/index.html","569e7d95a0da658ba6f0729685a48c84"],["/验证码（random类）/index.html","10f5d7ec06e2cb17dd4477eed94e442f"]];
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
