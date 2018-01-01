# 微信小程序－订单记录宝

### 说明：

专门为蛋困困同学定制的一款私活app

### 数据接口:

使用本地数据接口

### 目录结构：

- images — 存放项目图片文件
- calendar— 存放项目日历样式文件
- datas — 存放项目数据文件和数据处理库文件
- pages — 存放项目页面渲染相关文件
- utils — 存放promise polyfill和日期格式化处理文件

### 需求说明：
第一个页面是日期页面，
点击日期后可在下面查看列表， 单击后跳到第二个页面 查看页面。
可在右下角增加。 打开第三个页面，没有数据的编辑页面（当点击增加时，自动读取粘贴板，生成name，address，phone信息）
第四个页面为默认设置页面：编辑成员姓名，手机号，包装费，后期版本提供设置其他设置的功能

查看页面是不可编辑的，但是下方提供三个功能，
1.修改 -》跳到有数据的编辑页面
2.删除 -》弹出确认是否删除
3.生成需要的格式写入粘贴板
格式如下：
成员：陈xx 138xxxx111
顾客： 代x 138xxxx111 云南省玉溪市红塔区北城街道
货号：B017  
（95+11邮费+3包装=109）


数据格式： 每个订单的记录模板
_id:唯一标识符									（隐藏字段）
year:年									（隐藏字段）
month:月									（隐藏字段）
date:日									（隐藏字段）
addDate:添加日期时间戳     （隐藏字段）
name:姓名 									（新增/编辑/展示 必填）
address:地址									（新增/编辑/展示 必填）
phone:手机号									（新增/编辑/展示 必填）
goods:货号（两个货号之间用逗号隔开,货号中含有空格为备注，计算成本时不关注）	（新增/编辑/展示 必填）
express：快递类型（影响运费计算，暂定0：中通 1：顺丰）radiobox 默认中通		（新增/编辑/展示 必填）
expnumber：快递单号（纯备注，用于后期）						（编辑/展示）
gain：利润（初值为自动计算的结果，可改写）
由于包邮与否太过主观，所以只计算 售价-(包装+成本) 为每单收入			（编辑/展示）
remark:备注									（新增/编辑/展示）

字典库： 一些固定的信息
expressType：0：中通 1：顺丰             可维护（后期版本）
goodprice：{'001':140} 货号售价表    可维护（后期版本）
goodcost：{'001':90} 货号成本表      可维护（后期版本）
expressfee:[{'浙江'：5},{'浙江'：6}] 可维护（后期版本）
member：陈xx                         可维护
memberphone：138xxxx111             可维护
packagefee:3 包装费                  可维护



下一步目标：
3.尝试添加微信人员  暂时做不到

1.维护member memberphone packagefee，个人设置页面开发
4.日历展示有无记录
5.列表显示订单数和总利润