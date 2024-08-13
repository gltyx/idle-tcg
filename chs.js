/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Default Save": "默认存档",
    "Delete": "删除",
    "No": "否",
    "Saves": "存档",
    "Options": "选项",
    "Yes": "是",
    "Are you sure?": "你确定吗？",
    "Edit Name": "编辑名称",
    "Info": "信息",
    "Currently:": "当前:",
    "Appearance": "外观",
    "How the game looks.": "游戏看起来如何。",
    "Theme": "主题",
    "Show milestones": "显示里程碑",
    "Show TPS meter at the bottom-left corner of the page.": "在页面左下角显示 TPS。",
    "Show TPS": "显示 TPS",
    "None": "无",
    "Align modifier units": "对齐概览单位",
    "Align numbers to the beginning of the unit in modifier view.": "在概览视图中将数字与单元的开头对齐。",
    "Select which milestones to display based on criterias.": "根据标准选择要显示的里程碑。",
    "All": "全部",
    "Classic": "经典",
    "Configurable": "可配置",
    "Duplicate": "复制",
    "Mute": "静音",
    "Unmute": "播放",
    "buy": "购买",
    "Buy packs to earn cards to sell for money to buy more packs. Maybe someday you will be able to defeat the great champions in card battles.": "购买卡包可以获得卡牌，出售后可以获得更多的卡包。也许有一天你将能够在卡牌战斗中击败伟大的冠军。",
    "buying me a coffee": "请作者喝杯咖啡",
    "If you like this game, consider": "如果你喜欢这款游戏，可以考虑",
    "money": "金钱",
    "Money": "金钱",
    "Packs": "卡包",
    "Open pack": "打开卡包",
    "Resources": "资源",
    "to support the development 💵": "以支持开发💵",
    "Bad card": "坏卡",
    "Bad cards": "坏卡",
    "Befriend a shopkeeper": "和店主成为朋友",
    "Boyfriend / Girlfriend": "男朋友 / 女朋友",
    "Cards": "卡片",
    "Content creator": "内容创作者",
    "Doesnt like to play but loves to open packs for you": "不喜欢玩，但喜欢为你打开卡包",
    "Earns money over time": "随着时间的推移赚钱",
    "Makes packs cost less money": "降低卡包成本",
    "Opens 1 packs / tick": "打开 1 卡包/ tick",
    "Requires": "要求",
    "sell": "出售",
    "Skills": "技能",
    "Unlock": "解锁",
    "Current effect": "当前效果",
    "Levelup": "升级",
    "Next level": "下一级",
    "Pack points": "卡包点数",
    "Pack Points": "卡包点数",
    "Adds a button to buy / sell multiple packs or cards at once": "添加一次购买/出售多个包或卡片的按钮",
    "Card types": "卡片类型",
    "Quality of Life": "生活质量",
    "Repeatable upgrades": "可重复升级",
    "Unlock good cards": "解锁好卡",
    "Unlock new card types to earn more money and unlock new features": "解锁新的卡牌类型，赚取更多的钱，解锁新的功能",
    "upgrade": "升级",
    "When you open a pack you earn 1 pack point. Spend them here!": "当你打开一个卡包，你获得 1 卡包点数。在这里消费吧!",
    "Good card": "好卡",
    "Good cards": "好卡",
    "Unlock meta cards": "解锁元卡",
    "badcards": "坏卡",
    "Done!": "完成！",
    "Good card": "好卡",
    "goodcards": "好卡",
    "Ok": "确定",
    "packbonuspoints": "卡包奖励点数",
    "Running offline calculations": "运行离线计算",
    "s remaining": "剩余",
    "ticks)": "ticks)",
    "You were offline for": "你离线了",
    "While offline you gained": "离线时，你获得了",
    "Binder": "捆绑包",
    "Buying this upgrade will transform some of your skills into better versions": "购买此升级将把你的一些技能转化为更好的版本",
    "Meta card": "元卡",
    "metacards": "元卡",
    "Meta cards": "元卡",
    "Teammate": "队友",
    "Transform": "变换",
    "Unlock Elsa": "解锁埃尔莎",
    "Aggro": "暴怒",
    "aggro": "暴怒",
    "Bad": "坏",
    "cards": "卡片",
    "combo": "组合",
    "Combo": "组合",
    "Complete": "完成",
    "Control": "控制",
    "control": "控制",
    "Good": "好",
    "Meta": "元",
    "Set": "牌组",
    "Set bonuses": "牌组奖励",
    "Trade": "交易",
    "Trade cards for a unique card in this set": "在这套卡片中交换一张独特的卡片",
    "WR": "胜率",
    "Deck Builder": "牌组生成器",
    "Empty slot": "空槽位",
    "Tournament deck": "比赛卡牌",
    "Choose a card for this slot": "为这个插槽选择一张卡",
    "filter": "过滤器",
    "Activities": "活动",
    "Build your deck to play in tournaments. Your opponents always plays cards in the same order so you have to figure out which order to play your cards to win.": "建造你的牌组来参加比赛。你的对手总是以相同的顺序出牌，所以你必须弄清楚出牌的顺序才能赢。",
    "Casual Wednesday": "休闲星期三",
    "Competitive Saturday": "竞技星期六",
    "Friday Night Fun": "周五狂欢夜",
    "points -": "点数 -",
    "Rating too low": "评分过低",
    "Rewards": "奖励",
    "SIGNUP": "报名",
    "Tournaments": "比赛",
    "Trophies:": "奖杯:",
    "Cant find last tournament": "找不到上次比赛",
    "Draw!": "平局!",
    "My cards": "我的卡牌",
    "My points:": "我的点数:",
    "s": "s",
    "Thinking about the next play...": "正在思考下一局…",
    "Time :": "时间 :",
    "and": "和",
    "Rating": "评分",
    "rating": "评分",
    "Return": "返回",
    "Timmy of Smarts": "聪明的蒂米",
    "Timmy the Terrible": "可怕的蒂米",
    "Timmy the Tiny": "小蒂米",
    "Tournament finished!": "比赛结束了!",
    "Tournament is over. Waiting for the results...": "比赛结束了。等待结果…",
    "Tournament round:": "比赛回合:",
    "Waiting for next round...": "等待下一轮…",
    "You got": "你得到了",
    "You lose!": "你输了!",
    "You win!": "你赢了!",
    "Automatically enters tournaments for you so you can focus on other things": "自动进入比赛，让你可以专注于其他事情",
    "base": "基础",
    "Can sign you up for Casual Wednesday for you if your rating is high enough.": "如果你的评分足够高，我可以帮你报名参加休闲星期三。",
    "enabler": "使能者",
    "Here you can combine cards to give you boosts in tournaments. To enable the effect you need a card with the same base type in your deck. Depening on the cards you choose you get different effects.": "在这里，你可以组合卡片，让你在比赛中获得提升。为了实现这个效果，你需要在你的牌组中有一张相同基础类型的牌。根据你选择的牌，你会得到不同的效果。",
    "Last run": "上一轮",
    "payoff": "回报",
    "Personal Assistant": "私人助理",
    "Rating requirement": "评分要求",
    "Reduces thinking time between card plays": "减少两张牌之间的思考时间",
    "Show log": "显示日志",
    "Synergy": "协同",
    "Tournament grinder": "比赛粉碎机",
    "Round:": "回合:",
    "Ability": "能力",
    "additive": "附加",
    "Effect enabled": "效果已启用",
    "Increases WR of Aggro cards": "增加 暴怒 卡的 胜率",
    "Not enough money": "没有足够的金钱",
    "available": "可用",
    "Gain teammember Daniel": "获得团队成员 丹尼尔",
    "Pack supply": "卡包供应",
    "Can sign you up for Friday Night Fun for you if your rating is high enough.": "如果您的评分足够高，可以为您报名参加周五狂欢夜活动。",
    "Auto signup": "自动报名",
    "Increases WR of cards with a different type than Control": "增加与控制类型不同的卡牌的 胜率",
    "Show battle": "显示战斗",
    "Team": "团队",
    "Trophies": "奖杯",
    "1 trophy (": "1 奖杯（",
    "All (": "全部 (",
    "Buy trophies from": "购买奖杯通过",
    "Timmy": "蒂米",
    "PLAYING": "开始",
    "Deck": "牌组",
    "Tournament time:": "比赛时间：",
    "Rating:": "评分:",
    "Select teammember to enter tournament": "选择队员参加比赛",
    "Team Practice Sessions": "团队练习",
    "Practicing with your team gives you a boost to your k-factor when gaining rating.": "与您的团队一起练习可以在您获得评分时提高您的 k 因子。",
    ") in deck": ") 在牌组里",
    "Effect disabled, missing base card type (": "效果已禁用，缺少基本卡牌类型（",
    "Increases WR of Control cards": "增加控制卡的 胜率",
    "Increases WR of Combo cards": "增加组合卡的 胜率",
    "Increases WR of Aggro cards in your deck. (Weakness of Control)": "增加牌组中 暴怒 卡的 胜率。（控制的弱点）",
    "multiplicative": "乘法",
    "Can sign you up for Competitive Saturday for you if your rating is high enough.": "如果您的评分足够高，可以为您报名参加竞技星期六。",
    "Competitive Saturday": "竞技星期六",
    "You have sold so many cards that they start to lose their value.": "你已经卖出了太多的卡片，以至于它们开始失去价值。",
    "trophies": "奖杯",
    "packsupply": "卡包供应",
    "Already in tournament": "已经在比赛中",
    "Champion battle deck": "冠军战斗牌",
    "Champions": "冠军",
    "minute of pack supply": "分钟 卡包供应",
    "minutes of pack supply": "分钟 卡包供应",
    "Deck not complete": "卡牌未完成",
    "Defeat previous champion first": "先击败之前的冠军",
    "Missing": "丢失",
    "Reward:": "奖励:",
    "trophies in this tournament": "本次比赛的奖杯",
    "You need to complete your Champion Deck to fight champions, see deck builder": "你需要完成你的冠军套牌来对抗冠军，见牌组生成器",
    "BUY": "购买",
    "Already in battle": "已在战斗中",
    "Daniel": "丹尼尔",
    "Increases WR of cards with a different type than Combo": "增加与 组合 不同类型的卡牌的 胜率",
    "Gives you extra packs when buying packs": "当你买卡包时会给你额外的卡包",
    "Has gotten a secret pack supply supplier for you": "给你找了个秘密卡包供应商",
    "Become partner and earn even more money": "成为合伙人，赚更多的钱",
    "Joyful Jenny": "快乐的珍妮",
    "Friendly Frank": "友好的弗兰克",
    "Cheerful Charlie": "欢快的查理",
    "minute of money": "分钟的金钱",
    "minutes of money": "分钟的金钱",
    "BATTLE": "战斗",
    "Susan": "苏珊",
    "No champion battle found": "没有找到冠军之战",
    "Show last battle": "显示上次战斗",
    "You fight a battle against the great champion": "你与伟大的冠军进行了一场战斗",
    "You have been defeated by": "你被击败了，对方是",
    "Gain teammember Mattias": "获得队员马蒂亚斯",
    "Mattias": "马蒂亚斯",
    "Increases WR of Combo cards in your deck. (Weakness of Aggro)": "增加你牌组中组合卡的胜率。(暴怒的弱点)",
    "Elsa": "埃尔莎",
    "Ron Dinkel": "南瓜鸡",
    "Close": "关闭",
    "Defeated": "已击败",
    "You have defeated": "你已击败",
    "BACKUP": "导出",
    "Check out my other games (desktop):": "看看我的其他游戏(桌面游戏):",
    "Clear data": "清除数据",
    "Dragonhunt": "Dragonhunt（猎龙）",
    "Land of blood": "Land of blood（血腥之地）",
    "RESET": "重置",
    "RESTORE": "导入",
    "Restore data from clipboard": "从剪贴板导入存档数据",
    "Save data to clipboard": "导出存档到剪贴板",
    "Mai Pudde": "阳光小锅巴",
    "Terry": "特里",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "WR (": "胜率 (",
    "LSQ": "蓉蓉阿姨",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "Scientific": "科学计数法",
    "Standard": "标准",
    "Blind": "盲文",
    "Letters": "字母",
    "Mixed Engineering": "混合工程",
    "Mixed Scientific": "混合科学",
    "Chemistry": "化学",
    "Engineering": "工程符号",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    'i': 'i',
    'I': 'I',
    'II': 'I',
    'III': 'III',
    'IV': 'IV',
    'V': 'V',
    'VI': 'VI',
    'VII': 'VII',
    'VIII': 'VIII',
    'X': 'X',
    'XI': 'XI',
    'XII': 'XII',
    'XIII': 'XIII',
    'XIV': 'XIV',
    'XV': 'XV',
    'XVI': 'XVI',
    'A': 'A',
    'B': 'B',
    'C': 'C',
    'D': 'D',
    'E': 'E',
    'F': 'F',
    'G': 'G',
    'H': 'H',
    'I': 'I',
    'J': 'J',
    'K': 'K',
    'L': 'L',
    'M': 'M',
    'N': 'N',
    'O': 'O',
    'P': 'P',
    'Q': 'Q',
    'R': 'R',
    'S': 'S',
    'T': 'T',
    'U': 'U',
    'V': 'V',
    'W': 'W',
    'X': 'X',
    'Y': 'Y',
    'Z': 'Z',
    '<': '<',
    '<<': '<<',
    '>': '>',
    '>>': '>>',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀，此处可以截取语句开头部分的内容进行汉化
//例如：Coin: 13、Coin: 14、Coin: 15... 这种有相同开头的语句
//可以在这里汉化开头："Coin: ":"金币: "
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": " ",
    " ": " ",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Notation: ": "符号: ",
    "Toggle Music: ": "切换声音: ",
    "Cards in pack ": "卡包里的卡 ",
    "Buy / sell ": "购买 / 出售 ",
    "Enter (": "进入 (",
    "Pack supply (+": "卡包供应 (+",
    "Increases pack supply gain by ": "增加卡包供应增益 ",
    "Name: ": "名称: ",
    "* ": "* ",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀，此处可以截取语句结尾部分的内容进行汉化
//例如：13 Coin、14 Coin、15 Coin... 这种有相同结尾的语句
//可以在这里汉化结尾：" Coin":" 金币"
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "/sec)": "/秒)",
    " / tick)": " / tick)",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/,
    /^([\d\.]+)y ([\d\.]+)d ([\d\.]+)h$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\$([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^([\d\.]+)\/([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.,]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+) T$/,
    /^([\d\.]+) Qi$/,
    /^([\d\.]+) Qa$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\$([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) \/ ([\d\.]+)e([\d\.,]+)$/,
    /^\$([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)\/([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e\+([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])|[\u21A9\u21AA\u25B6\u25C0\u2B06\u2B07\u2B05\u2B95\u2B99\u2B9A]+$/,
    // /^([\uD800-\uDBFF][\uDC00-\uDFFF])|([\u2600-\u27BF])|([\u2300-\u23FF])|([\u2B50-\u2B55])|([\u203C-\u3299])+$/,
    // /^[\uD800-\uFFFF]+$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//字母加数字：([\d\.]+[A-Za-z])
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
//&nbsp;空格：\xA0
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Gives you (.+) bonus packs \/ pack$/, '给你 $1 奖励卡包 \/ 卡包'],
    [/^Gives you (.+) pack supply \/ tick$/, '给你 $1 卡包供应 \/ tick'],
    [/^Gain \+(.+) to your k\-factor when gaining rating.$/, '获得评分时，您的 k 因子将 \+$1。'],
    [/^Opens (.+) packs \/ tick$/, '打开 $1 卡包 \/ tick'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+)h ([\d\.]+)m ([\d\.]+)s$/, '$1小时 $2分 $3秒'],
    [/^([\d\.]+)m$/, '$1分钟'],
    [/^([\d\.]+)s$/, '$1秒'],
    [/^([\d\.]+)d ([\d\.]+)h$/, '$1天 $2小时'],
    [/^([\d\.]+)m ([\d\.]+)s$/, '$1分 $2秒'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^(.+) cost of packs \((.+) money\)$/, '$1 的卡包成本 \($2 金钱\)'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^([\d\.,]+) trophys$/, '$1 奖杯'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^([\d\.,]+)s per round$/, '$1 秒每回合'],
    [/^\+([\d\.,]+) money$/, '\+$1 金钱'],
    [/^\+(.+) pack supply$/, '\+$1 卡包供应'],
    [/^\+(.+) pack supply \/ tick$/, '\+$1 卡包供应 \/ tick'],
    [/^\+(.+) money \/ tick$/, '\+$1 金钱 \/ tick'],
    [/^(.+) money \/ tick$/, '$1 金钱 \/ tick'],
    [/^Day ([\d\.,]+)$/, '天数 $1'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);