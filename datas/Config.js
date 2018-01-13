
module.exports = {
  ITEMS_SAVE_KEY: 'order_record_save_key',
  MEMBER_SAVE_KEY: 'MEMBER_SAVE_KEY',
  MEMBER_PHONE_SAVE_KEY: 'MEMBER_PHONE_SAVE_KEY',
  PACKAGE_FEE_SAVE_KEY: 'PACKAGE_FEE_SAVE_KEY',
  DEFAULT_PACKAGE_FEE: 3,
  DEFAULT_EXPRESS: 0,
  
  EXPRESS: [
    {
      name: '中通',
      value: 0
    },
    {
      name: '顺丰',
      value: 1
    }
  ],
  EXPRESS_FEE: [
    {
      '浙江': 5,
      '江苏': 5,
      '上海': 5,
      '安徽': 5,
      '北京': 9,
      '天津': 9,
      '广东': 9,
      '湖南': 9,
      '河北': 9,
      '湖北': 9,
      '江西': 9,
      '河南': 9,
      '山东': 9,
      '福建': 9,
      '四川': 11,
      '重庆': 11,
      '陕西': 11,
      '山西': 11,
      '广西': 11,
      '云南': 11,
      '贵州': 11,
      '辽宁': 11,
      '吉林': 11,
      '黑龙江': 11,
      '内蒙古': 15,
      '青海': 15,
      '甘肃': 15,
      '海南': 15,
      '宁夏': 15,
      '新疆': 20,
      '西藏': 20
    },
    {
      '浙江': 11,
      '江苏': 13,
      '上海': 13,
      '安徽': 13,
      '北京': 21,
      '天津': 21,
      '广东': 21,
      '湖南': 21,
      '河北': 21,
      '湖北': 21,
      '江西': 21,
      '河南': 21,
      '山东': 21,
      '福建': 21,
      '四川': 21,
      '重庆': 21,
      '陕西': 21,
      '山西': 21,
      '广西': 21,
      '云南': 21,
      '贵州': 21,
      '辽宁': 21,
      '吉林': 21,
      '黑龙江': 21,
      '内蒙古': 21,
      '青海': 21,
      '甘肃': 21,
      '海南': 21,
      '宁夏': 21,
      '新疆': 23,
      '西藏': 23
    }],
  GOOD_PRICE: {
    'A001': 139,
    'A0021': 135,
    'A0022': 155,
    'A003': 89,
    'A004': 99,
    'A005': 119,
    'A006': 49,
    'A007': 165,
    'A008': 89,
    'A009': 59,
    'A010': 79,
    'A011': 119,
    'A012': 99,
    'A013': 118,
    'A014': 99,
    'A015': 69,
    'A016': 79,
    'A017': 139,
    'A018': 69,
    'A019': 135,
    'A020': 119,
    'A021': 89,
    'A022': 119,
    'A023': 179,
    'A024': 119,
    'A025': 129,
    'A026': 129,
    'A027': 119,
    'A028': 129,
    'A029': 89,
    'A030': 119,
    'A031': 119,
    'A032': 139,
    'A033': 99,
    'A034': 119,
    'A035': 98,
    'A036': 119,
    'A037': 139,
    'A0381': 169,
    'A0382': 189,
    'A039': 89,
    'A040': 79,
    'A0411': 135,
    'A0412': 155,
    'A042': 139,
    'A0431': 99,
    'A0432': 119,
    'A044': 179,
    'A045': 99,
    'A046': 99,
    'A047': 89,
    'A048': 59,
    'A049': 129,
    'A050': 88,
    'A051': 119,
    'A052': 129,
    'A053': 79,
    'A054': 119,
    'A055': 119,
    'A056': 129,
    'A057': 79,
    'A0581': 135,
    'A0582': 145,
    'A059': 49,
    'A060': 99,
    'A061': 89,
    'A062': 89,
    'A063': 89,
    'A064': 99,
    'A065': 139,
    'A066': 99,
    'A067': 89,
    'A068': 178,
    'A069': 169,
    'A070': 69,
    'A071': 89,
    'A072': 89,
    'A073': 0,
    'A074': 0,
    'A075': 99,
    'A076': 169,
    'A077': 129,
    'A078': 49,
    'B001': 139,
    'B002': 199,
    'B003': 299,
    'B004': 189,
    'B005': 159,
    'B006': 239,
    'B007': 229,
    'B0081': 99,
    'B0082': 119,
    'B009': 119,
    'B010': 146,
    'B011': 199,
    'B012': 159,
    'B013': 288,
    'B014': 199,
    'B015': 199,
    'B016': 189,
    'B017': 148,
    'B018': 179,
    'B0191': 289,
    'B0192': 369,
    'B0193': 399,
    'B020': 129,
    'B021': 139,
    'B022': 229,
    'B023': 199,
    'B024': 148,
    'B025': 199,
    'B026': 229,
    'B027': 129,
    'B028': 148,
    'B029': 258,
    'B030': 148,
    'B031': 178,
    'B032': 219,
    'B033': 229,
    'B034': 186,
    'B035': 239,
    'B036': 219,
    'B037': 239,
    'B038': 199,
    'B039': 219,
    'B040': 199,
    'B041': 219,
    'B042': 159,
    'B043': 199,
    'B044': 166,
    'B045': 239,
    'B0461': 299,
    'B0462': 359,
    'B047': 0,
    'B0481': 198,
    'B0482': 218,
    'C001': 199,
    'C002': 168,
    'C003': 169,
    'C004': 168,
    'C005': 148,
    'C006': 178,
    'C007': 168,
    'C008': 178,
    'C009': 179,
    'C010': 149,
    'C011': 168,
    'C012': 128,
    'C013': 159,
    'C014': 139,
    'C015': 188,
    'C016': 229,
    'C017': 188,
    'C018': 229,
    'C0191': 189,
    'C0192': 219,
    'C020': 199,
    'C021': 199,
    'C022': 129,
    'C023': 165,
    'C0241': 179,
    'C0241': 219,
    'C025': 188,
    'C026': 139,
    'C027': 179,
    'C028': 129,
    'C029': 188,
    'C030': 149,
    'C031': 169,
    'C032': 168,
    'C033': 199,
    'C034': 169,
    'C035': 156,
    'C036': 136,
    'C037': 199,
    'C038': 179,
    'C039': 179,
    'C040': 149,
    'C041': 149,
    'C042': 166,
    'C043': 239,
    'C044': 199,
    'C045': 169,
    'C046': 199,
    'C047': 168,
    'C048': 178,
    'C049': 179,
    'C050': 198,
    'D001': 89,
    'D002': 95,
    'D003': 119,
    'D004': 119,
    'D005': 99,
    'D006': 85,
    'D007': 99,
    'D008': 89,
    'D009': 119,
    'D010': 89,
    'D011': 89,
    'D012': 129,
    'D013': 69,
    'D014': 119,
    'D015': 129,
    'D016': 89,
    'D017': 99,
    'D018': 99,
    'D019': 89,
    'D020': 95,
    'D021': 89,
    'D022': 99,
    'D023': 99,
    'D024': 88,
    'D025': 108,
    'D026': 85,
    'D027': 79,
    'D028': 85,
    'D029': 119,
    'D030': 75,
    'D031': 79,
    'D032': 65,
    'D033': 119,
    'D034': 69,
    'D035': 89,
    'D036': 129,
    'D037': 139,
    'D038': 98,
    'D039': 58,
    'D040': 89,
    'D041': 159,
    'D042': 89,
    'D043': 119,
    'D044': 126,
    'D045': 79,
    'D046': 88,
    'D047': 99,
    'D048': 149,
    'D049': 79,
    'D050': 116,
    'D051': 88,
    'D052': 99,
    'D053': 119,
    'D054': 119,
    'D055': 118,
    'D056': 119,
    'D057': 129,
    'D058': 79,
    'D059': 89,
    'D060': 89,
    'D061': 99,
    'D062': 119,
    'D063': 95,
    'D064': 95,
    'D065': 99,
    'D066': 79,
    'D067': 89,
    'D068': 119,
    'D069': 99,
    'D070': 89,
    'D071': 89,
    'D072': 69,
    'D073': 129,
    'D074': 79,
    'D075': 88,
    'D076': 99,
    'D077': 89,
    'D078': 119,
    'D079': 99,
    'D080': 119,
    'D081': 95,
    'D082': 89,
    'E001': 149,
    'E0021': 109,
    'E0022': 125,
    'E003': 99,
    'E004': 136,
    'E005': 139,
    'E006': 119,
    'E007': 139,
    'F0011': 230,
    'F0012': 240,
    'F0021': 369,
    'F0022': 390,
    'F0023': 430,
    'F0031': 339,
    'F0032': 349,
    'F004': 229,
    'F0051': 389,
    'F0052': 409,
    'F0053': 439,
    'F0061': 299,
    'F0062': 319,
    'F0071': 279,
    'F0072': 289,
    'F008': 259,
    'G001': 188,
    'G002': 188,
    'G003': 179,
  },
  GOOD_COST: {
    'A001': 90,
    'A0021': 90,
    'A0022': 105,
    'A003': 60,
    'A004': 65,
    'A005': 75,
    'A006': 30,
    'A007': 120,
    'A008': 60,
    'A009': 45,
    'A010': 50,
    'A011': 75,
    'A012': 65,
    'A013': 75,
    'A014': 65,
    'A015': 45,
    'A016': 50,
    'A017': 90,
    'A018': 50,
    'A019': 90,
    'A020': 75,
    'A021': 55,
    'A022': 75,
    'A023': 120,
    'A024': 75,
    'A025': 75,
    'A026': 80,
    'A027': 75,
    'A028': 85,
    'A029': 60,
    'A030': 75,
    'A031': 75,
    'A032': 90,
    'A033': 55,
    'A034': 70,
    'A035': 55,
    'A036': 75,
    'A037': 90,
    'A0381': 115,
    'A0382': 125,
    'A039': 60,
    'A040': 50,
    'A041': 85,
    'A042': 100,
    'A042': 90,
    'A0431': 65,
    'A0432': 75,
    'A044': 120,
    'A045': 65,
    'A046': 65,
    'A047': 55,
    'A048': 40,
    'A049': 85,
    'A050': 55,
    'A051': 75,
    'A052': 85,
    'A053': 50,
    'A054': 75,
    'A055': 75,
    'A056': 85,
    'A057': 50,
    'A0581': 95,
    'A0582': 100,
    'A059': 30,
    'A060': 65,
    'A061': 55,
    'A062': 60,
    'A063': 55,
    'A064': 65,
    'A065': 95,
    'A066': 65,
    'A067': 55,
    'A068': 130,
    'A069': 120,
    'A070': 45,
    'A071': 60,
    'A072': 60,
    'A073': 0,
    'A074': 0,
    'A075': 60,
    'A076': 120,
    'A077': 75,
    'A078': 30,
    'B001': 90,
    'B002': 130,
    'B003': 210,
    'B004': 130,
    'B005': 100,
    'B006': 180,
    'B007': 155,
    'B0081': 50,
    'B0082': 65,
    'B009': 70,
    'B010': 95,
    'B011': 140,
    'B012': 95,
    'B013': 210,
    'B014': 130,
    'B015': 120,
    'B016': 130,
    'B017': 95,
    'B018': 120,
    'B0191': 200,
    'B0192': 280,
    'B0193': 315,
    'B020': 80,
    'B021': 90,
    'B022': 155,
    'B023': 140,
    'B024': 95,
    'B025': 130,
    'B026': 155,
    'B027': 80,
    'B028': 95,
    'B029': 180,
    'B030': 90,
    'B031': 120,
    'B032': 150,
    'B033': 160,
    'B034': 125,
    'B035': 165,
    'B036': 150,
    'B037': 165,
    'B038': 140,
    'B039': 155,
    'B040': 140,
    'B041': 150,
    'B042': 100,
    'B043': 140,
    'B044': 115,
    'B045': 160,
    'B0461': 215,
    'B0462': 270,
    'B047': 0,
    'B048': 145,
    'B048': 160,
    'C001': 120,
    'C002': 105,
    'C003': 100,
    'C004': 100,
    'C005': 95,
    'C006': 110,
    'C007': 105,
    'C008': 120,
    'C009': 100,
    'C010': 95,
    'C011': 105,
    'C012': 80,
    'C013': 100,
    'C014': 85,
    'C015': 130,
    'C016': 150,
    'C017': 120,
    'C018': 165,
    'C0191': 115,
    'C0192': 145,
    'C020': 120,
    'C021': 130,
    'C022': 80,
    'C023': 95,
    'C0241': 110,
    'C0242': 140,
    'C025': 120,
    'C026': 95,
    'C027': 110,
    'C028': 80,
    'C029': 100,
    'C030': 85,
    'C031': 105,
    'C032': 100,
    'C033': 130,
    'C034': 110,
    'C035': 90,
    'C036': 85,
    'C037': 120,
    'C038': 110,
    'C039': 110,
    'C040': 90,
    'C041': 90,
    'C042': 100,
    'C043': 150,
    'C044': 120,
    'C045': 100,
    'C046': 120,
    'C047': 110,
    'C048': 110,
    'C049': 110,
    'C050': 130,
    'D001': 50,
    'D002': 55,
    'D003': 85,
    'D004': 85,
    'D005': 65,
    'D006': 50,
    'D007': 65,
    'D008': 55,
    'D009': 70,
    'D010': 50,
    'D011': 55,
    'D012': 90,
    'D013': 40,
    'D014': 70,
    'D015': 90,
    'D016': 50,
    'D017': 60,
    'D018': 55,
    'D019': 50,
    'D020': 55,
    'D021': 50,
    'D022': 55,
    'D023': 55,
    'D024': 50,
    'D025': 70,
    'D026': 50,
    'D027': 50,
    'D028': 55,
    'D029': 75,
    'D030': 45,
    'D031': 50,
    'D032': 45,
    'D033': 75,
    'D034': 45,
    'D035': 50,
    'D036': 80,
    'D037': 85,
    'D038': 55,
    'D039': 40,
    'D040': 50,
    'D041': 100,
    'D042': 50,
    'D043': 85,
    'D044': 85,
    'D045': 50,
    'D046': 50,
    'D047': 60,
    'D048': 95,
    'D049': 45,
    'D050': 70,
    'D051': 50,
    'D052': 60,
    'D053': 80,
    'D054': 75,
    'D055': 75,
    'D056': 80,
    'D057': 90,
    'D058': 55,
    'D059': 55,
    'D060': 55,
    'D061': 65,
    'D062': 80,
    'D063': 60,
    'D064': 60,
    'D065': 65,
    'D066': 50,
    'D067': 50,
    'D068': 75,
    'D069': 60,
    'D070': 55,
    'D071': 55,
    'D072': 40,
    'D073': 90,
    'D074': 50,
    'D075': 55,
    'D076': 60,
    'D077': 55,
    'D078': 75,
    'D079': 60,
    'D080': 75,
    'D081': 60,
    'D082': 55,
    'E001': 90,
    'E0021': 60,
    'E0022': 65,
    'E003': 60,
    'E004': 70,
    'E005': 70,
    'E006': 70,
    'E007': 70,
    'F0011': 150,
    'F0012': 170,
    'F0021': 300,
    'F0022': 320,
    'F0023': 350,
    'F0031': 270,
    'F0032': 280,
    'F004': 160,
    'F0051': 315,
    'F0052': 335,
    'F0053': 360,
    'F0061': 215,
    'F0062': 230,
    'F0071': 200,
    'F0072': 210,
    'F008': 180,
    'G001': 130,
    'G002': 130,
    'G003': 125
  }
};