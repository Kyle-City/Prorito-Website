// products.js - 灵活的参数结构
const productData = [
  {
    category: "演播室灯光",
    subCategory: "平板柔光灯",
    id: 1,
    name: "超高清4K演播室影视平板灯",
   image: [
      "images/products/flat-light-1-main.jpg", // 主图
      "images/products/flat-light-1-detail1.jpg", // 细节图1
      "images/products/flat-light-1-detail2.jpg" // 细节图2
    ],
    params: [
      { name: "功率", value: "200W" },
      { name: "显色指数", value: "CRI≥97" },
      { name: "适用场景", value: "演播室、直播间" },
      { name: "色温范围", value: "3200K-5600K" } // 这个参数只有该产品有
    ],
    description: "高显指无频闪，适合4K超高清拍摄场景"
  },
  {
    category: "会议室灯光",
    subCategory: "电动翻转面光灯",
    id: 3,
    name: "智能电动翻转面光灯",
    image: [
      "images/products/flat-light-1-main.jpg", // 主图
      "images/products/flat-light-1-detail1.jpg", // 细节图1
      "images/products/flat-light-1-detail2.jpg" // 细节图2
    ],
    params: [
      { name: "功率", value: "180W" },
      { name: "显色指数", value: "CRI≥96" },
      { name: "翻转角度", value: "0-180°" }, // 独有参数
      { name: "控制方式", value: "远程/本地" }, // 独有参数
      { name: "安装方式", value: "吸顶/吊杆" } // 独有参数
    ],
    description: "电动角度调节，支持远程控制"
  },
  {
    category: "控制与配件",
    subCategory: "调光台",
    id: 5,
    name: "8路智能调光台",
    image: [
      "images/products/flat-light-1-main.jpg", // 主图
      "images/products/flat-light-1-detail1.jpg", // 细节图1
      "images/products/flat-light-1-detail2.jpg" // 细节图2
    ],
    params: [
      { name: "控制路数", value: "8路" },
      { name: "通讯协议", value: "DMX512" }
    ],
    description: "简易操作，适配所有影视灯"
  }
];