var areaNum = {
    "北京市":"010",
    "上海市":"021",
    "天津市":"022",
    "重庆市":"023",
    "石家庄市":"0311",
    "保定市":"0312",
    "承德市":"0314",
    "邯郸市":"0310",
    "唐山市":"0315",
    "秦皇岛市":"0335",
    "沧州市":"0317",
    "衡水市":"0318",
    "廊坊市":"0316",
    "邢台市":"0319",
    "张家口市":"0313",
    "太原市":"0351",
    "长治市":"0355",
    "大同市":"0352",
    "晋城市":"0356",
    "晋中市":"0354",
    "临汾市":"0357",
    "吕梁市":"0358",
    "朔州市":"0349",
    "忻州市":"0350",
    "运城市":"0359",
    "阳泉市":"0353",
    "呼和浩特市":"0471",
    "包头市":"0472",
    "赤峰市":"0476",
    "鄂尔多斯市":"0477",
    "呼伦贝尔市":"0470",
    "通辽市":"0475",
    "乌兰察布市":"0474",
    "乌海市":"0473",
    "兴安盟":"0482",
    "沈阳市":"024",
    "大连市":"0411",
    "鞍山市":"0412",
    "丹东市":"0415",
    "抚顺市":"0413",
    "锦州市":"0416",
    "营口市":"0417",
    "本溪市":"0414",
    "朝阳市":"0428",
    "阜新市":"0418",
    "葫芦岛市":"0429",
    "辽阳市":"0419",
    "盘锦市":"0427",
    "铁岭市":"0410",
    "长春市":"0431",
    "吉林市":"0432",
    "白城市":"0436",
    "白山市":"0439",
    "辽源市":"0437",
    "四平市":"0434",
    "松原市":"0438",
    "通化市":"0435",
    "哈尔滨市":"0451",
    "大庆市":"0459",
    "齐齐哈尔市":"0452",
    "佳木斯市":"0454",
    "大兴安岭地区":"0457",
    "黑河市":"0456",
    "鹤岗市":"0468",
    "鸡西市":"0467",
    "牡丹江市":"0453",
    "七台河市":"0464",
    "绥化市":"0455",
    "双鸭山市":"0469",
    "伊春市":"0458",
    "南京市":"025",
    "苏州市":"0512",
    "常州市":"0519",
    "连云港市":"0518",
    "泰州市":"0523",
    "无锡市":"0510",
    "徐州市":"0516",
    "扬州市":"0514",
    "镇江市":"0511",
    "淮安市":"0517",
    "南通市":"0513",
    "宿迁市":"0527",
    "盐城市":"0515",
    "杭州市":"0571",
    "宁波市":"0574",
    "嘉兴市":"0573",
    "绍兴市":"0575",
    "温州市":"0577",
    "舟山市":"0580",
    "湖州市":"0572",
    "金华市":"0579",
    "丽水市":"0578",
    "台州市":"0576",
    "合肥市":"0551",
    "芜湖市":"0553",
    "安庆市":"0556",
    "蚌埠市":"0552",
    "亳州市":"0558",
    "巢湖市":"0565",
    "池州市":"0566",
    "滁州市":"0550",
    "阜阳市":"0558",
    "黄山市":"0559",
    "淮北市":"0561",
    "淮南市":"0554",
    "六安市":"0564",
    "马鞍山市":"0555",
    "宿州市":"0557",
    "铜陵市":"0562",
    "宣城市":"0563",
    "福州市":"0591",
    "厦门市":"0592",
    "泉州市":"0595",
    "龙岩市":"0597",
    "宁德市":"0593",
    "南平市":"0599",
    "莆田市":"0594",
    "三明市":"0598",
    "漳州市":"0596",
    "南昌市":"0791",
    "赣州市":"0797",
    "九江市":"0792",
    "景德镇市":"0798",
    "吉安市":"0796",
    "萍乡市":"0799",
    "上饶市":"0793",
    "新余市":"0790",
    "宜春市":"0795",
    "鹰潭市":"0701",
    "济南市":"0531",
    "青岛市":"0532",
    "威海市":"0631",
    "烟台市":"0535",
    "潍坊市":"0536",
    "泰安市":"0538",
    "滨州市":"0543",
    "德州市":"0534",
    "东营市":"0546",
    "菏泽市":"0530",
    "济宁市":"0537",
    "聊城市":"0635",
    "临沂市":"0539",
    "莱芜市":"0634",
    "日照市":"0633",
    "淄博市":"0533",
    "枣庄市":"0632",
    "广州市":"020",
    "深圳市":"0755",
    "珠海市":"0756",
    "东莞市":"0769",
    "佛山市":"0757",
    "惠州市":"0752",
    "江门市":"0750",
    "中山市":"0760",
    "汕头市":"0754",
    "湛江市":"0759",
    "潮州市":"0768",
    "河源市":"0762",
    "揭阳市":"0663",
    "茂名市":"0668",
    "梅州市":"0753",
    "清远市":"0763",
    "韶关市":"0751",
    "汕尾市":"0660",
    "阳江市":"0662",
    "云浮市":"0766",
    "肇庆市":"0758",
    "海口市":"0898",
    "三亚市":"0898",
    "南宁市":"0771",
    "北海市":"0779",
    "崇左市":"0771",
    "防城港市":"0770",
    "桂林市":"0773",
    "贵港市":"0775",
    "河池市":"0778",
    "贺州市":"0774",
    "柳州市":"0772",
    "来宾市":"0772",
    "钦州市":"0777",
    "玉林市":"0775",
    "梧州市":"0774",
    "郑州市":"0371",
    "洛阳市":"0379",
    "开封市":"0378",
    "许昌市":"0374",
    "安阳市":"0372",
    "平顶山市":"0375",
    "鹤壁市":"0392",
    "焦作市":"0391",
    "济源市":"0391",
    "漯河市":"0395",
    "南阳市":"0377",
    "濮阳市":"0393",
    "三门峡市":"0398",
    "商丘市":"0370",
    "新乡市":"0373",
    "信阳市":"0376",
    "驻马店市":"0396",
    "周口市":"0394",
    "武汉市":"027",
    "襄樊市":"0710",
    "十堰市":"0719",
    "黄石市":"0714",
    "鄂州市":"0711",
    "恩施市":"0718",
    "黄冈市":"0713",
    "荆州市":"0716",
    "荆门市":"0724",
    "随州市":"0722",
    "宜昌市":"0717",
    "天门市":"0728",
    "潜江市":"0728",
    "仙桃市":"0728",
    "孝感市":"0712",
    "咸宁市":"0715",
    "长沙市":"0731",
    "岳阳市":"0730",
    "湘潭市":"0732",
    "常德市":"0736",
    "郴州市":"0735",
    "凤凰市":"0743",
    "衡阳市":"0734",
    "怀化市":"0745",
    "娄底市":"0738",
    "邵阳市":"0739",
    "益阳市":"0737",
    "永州市":"0746",
    "株洲市":"0733",
    "张家界市":"0744",
    "成都市":"028",
    "绵阳市":"0816",
    "资阳市":"0832",
    "巴中市":"0827",
    "德阳市":"0838",
    "达州市":"0818",
    "广安市":"0826",
    "广元市":"0839",
    "乐山市":"0833",
    "泸州市":"0830",
    "眉山市":"0833",
    "内江市":"0832",
    "南充市":"0817",
    "攀枝花市":"0812",
    "遂宁市":"0825",
    "宜宾市":"0831",
    "雅安市":"0835",
    "自贡市":"0813",
    "贵阳市":"0851",
    "安顺市":"0853",
    "毕节市":"0857",
    "铜仁市":"0856",
    "遵义市":"0852",
    "昆明市":"0871",
    "玉溪市":"0877",
    "楚雄市":"0878",
    "大理市":"0872",
    "红河市":"0873",
    "曲靖市":"0874",
    "西双版纳市":"0691",
    "昭通市":"0870",
    "拉萨市":"0891",
    "日喀则市":"0892",
    "山南市":"0983",
    "西安市":"029",
    "安康市":"0915",
    "宝鸡市":"0917",
    "汉中市":"0916",
    "商洛市":"0914",
    "铜川市":"0919",
    "渭南市":"0913",
    "咸阳市":"0910",
    "延安市":"0911",
    "榆林市":"0912",
    "兰州市":"0931",
    "白银市":"0943",
    "定西市":"0932",
    "金昌市":"0935",
    "酒泉市":"0937",
    "陇南市":"0939",
    "临夏市":"0930",
    "平凉市":"0933",
    "庆阳市":"0930",
    "武威市":"0935",
    "天水市":"0938",
    "张掖市":"0936",
    "西宁市":"0971",
    "海东市":"0972",
    "海北市":"0970",
    "海南市":"0974",
    "银川市":"0951",
    "石嘴山市":"0952",
    "吴忠市":"0953",
    "中卫市":"0953",
    "乌鲁木齐市":"0991",
    "塔城市":"0901",
    "哈密市":"0902",
    "和田市":"0903",
    "阿勒泰市":"0906",
    "阿图什市":"0908",
    "博乐市":"0909",
    "克拉玛依市":"0990",
    "奎屯市":"0992",
    "石河子市":"0993",
    "昌吉市":"0994",
    "吐鲁番市":"0995",
    "库尔勒市":"0996",
    "阿克苏市":"0997",
    "喀什市":"0998",
    "伊宁市":"0999",
    "嘉峪关市":"0937",
    "丽江市":"0888",
    "阿坝藏族羌族自治州市":"0837",
    "凉山彝族自治州市":"0834",
    "陵水黎族自治县市":"0898",
    "迪庆藏族自治州市":"0887",
    "保山市":"0875",
    "神农架林区":"0719",
    "衢州市":"0570",
    "甘孜藏族自治州市":"0836",
    "文山壮族苗族自治州市":"0876",
    "德宏傣族景颇族自治州市":"0692",
    "澳门特别行政区":"1853",
    "香港特别行政区":"1852",
    "台湾":"1886"
};