/**
 * Main.js - 寒潮余生：数值与逻辑全量版
 */

// ==========================================
// 1. 全量数据 (Data Center)
// ==========================================
const ITEMS_DATA = {
    "head": [
      { "id": "head-1", "name": "蓝布工人帽", "W": 8, "C": 5, "Dex": 0, "Price": 40, "img": "head-1.png", "desc": "经典的遮阳挡风两用。" },
      { "id": "head-2", "name": "加厚针织护耳帽", "W": 25, "C": -5, "Dex": -2, "Price": 90, "img": "head-2.png", "desc": "保护耳部，减少风寒对精神的伤害。" },
      { "id": "head-3", "name": "轻便运动遮阳帽", "W": 0, "C": 20, "Dex": 0, "Price": 75, "img": "head-3.png", "desc": "提升排汗效率。" },
      { "id": "head-4", "name": "复古飞行员帽", "W": 30, "C": -15, "Dex": -5, "Price": 220, "img": "head-4.png", "trait": "windproof", "desc": "【抗风】：完全无视4级以下的风力降温。" },
      { "id": "head-5", "name": "智能感温变色镜", "W": 0, "C": 10, "Dex": 5, "Price": 350, "img": "head-5.png", "trait": "prediction", "desc": "【预判】：UI提前显示未来2小时的精确风险等级。" },
      { "id": "head-6", "name": "老伴织的红毛线帽", "W": 30, "C": 0, "Dex": 0, "Price": 0, "img": "head-6.png", "trait": "memory", "desc": "【思念】：每日自动恢复10点心情。" }
    ],
    "torso": [
      { "id": "torso-1", "name": "纯棉汗衫", "W": 5, "C": 10, "Dex": 0, "Price": 30, "img": "torso-1.png", "desc": "吸汗但不排汗。" },
      { "id": "torso-2", "name": "白衬衫", "W": 10, "C": 5, "Dex": -2, "Price": 85, "img": "torso-2.png", "desc": "社交场合必备。" },
      { "id": "torso-3", "name": "莫代尔背心", "W": 5, "C": 18, "Dex": 0, "Price": 120, "img": "torso-3.png", "desc": "极度透气，R5核心内搭。" },
      { "id": "torso-4", "name": "羊绒开衫", "W": 32, "C": -5, "Dex": -5, "Price": 280, "img": "torso-4.png", "desc": "兼顾保暖与轻便。" },
      { "id": "torso-5", "name": "工装夹克", "W": 25, "C": 0, "Dex": -8, "Price": 200, "img": "torso-5.png", "desc": "耐磨，增加室外活动容错率。" },
      { "id": "torso-6", "name": "航空羽绒马甲", "W": 60, "C": -5, "Dex": 0, "Price": 580, "img": "torso-6.png", "desc": "【极轻】：提供高额W且完全不损失Dex。" },
      { "id": "torso-7", "name": "石墨烯发热内衣", "W": 40, "C": 0, "Dex": -2, "Price": 600, "img": "torso-7.png", "trait": "heated", "desc": "【主动加热】：通过消耗电费强行提升体温。" },
      { "id": "torso-8", "name": "荣誉退休制服", "W": 20, "C": 20, "Dex": -5, "Price": 0, "img": "torso-8.png", "trait": "aura", "desc": "【气场】：社交场合更有优势。" },
      { "id": "torso-9", "name": "速干降温皮肤衣", "W": 0, "C": 40, "Dex": 0, "Price": 380, "img": "torso-9.png", "trait": "sunproof", "desc": "【防晒】：阻挡紫外线，减缓Health下降。" }
    ],
    "legs": [
      { "id": "legs-1", "name": "蓝色的确良长裤", "W": 8, "C": 8, "Dex": 0, "Price": 65, "img": "legs-1.png", "desc": "耐穿但无特殊属性。" },
      { "id": "legs-2", "name": "大花裤衩", "W": 0, "C": 25, "Dex": 0, "Price": 35, "img": "legs-2.png", "desc": "居家避暑良品。" },
      { "id": "legs-3", "name": "磁疗护膝", "W": 15, "C": 0, "Dex": -5, "Price": 150, "img": "legs-3.png", "trait": "joint_care", "desc": "缓解寒冷造成的关节痛惩罚。" },
      { "id": "legs-4", "name": "摇粒绒保暖裤", "W": 35, "C": -5, "Dex": -10, "Price": 180, "img": "legs-4.png", "desc": "适合居家御寒。" },
      { "id": "legs-5", "name": "压缩运动裤", "W": 15, "C": 15, "Dex": 10, "Price": 420, "img": "legs-5.png", "desc": "【助力】：穿上后灵活性反而提升。" },
      { "id": "legs-6", "name": "户外冲锋裤", "W": 30, "C": 10, "Dex": -12, "Price": 450, "img": "legs-6.png", "trait": "waterproof", "desc": "【防潮】：在雨雪/回南天不会被淋湿。" },
      { "id": "legs-7", "name": "定制仿生外骨骼", "W": 20, "C": 0, "Dex": 25, "Price": 1200, "img": "legs-7.png", "desc": "【重归青春】：彻底无视寒冷对速度的影响。" }
    ],
    "feet": [
      { "id": "feet-1", "name": "白网鞋", "W": 0, "C": 15, "Dex": 0, "Price": 50, "img": "feet-1.png", "desc": "透气好，但不防滑。" },
      { "id": "feet-2", "name": "老头布鞋", "W": 10, "C": 10, "Dex": 0, "Price": 45, "img": "feet-2.png", "desc": "穿脱方便，室内首选。" },
      { "id": "feet-3", "name": "牛皮皮鞋", "W": 18, "C": -5, "Dex": -5, "Price": 300, "img": "feet-3.png", "desc": "搭配正式装，Mood++。" },
      { "id": "feet-4", "name": "防滑加绒棉鞋", "W": 40, "C": -5, "Dex": -10, "Price": 220, "img": "feet-4.png", "desc": "冬季户外的生命线。" },
      { "id": "feet-5", "name": "专业登山靴", "W": 35, "C": 5, "Dex": -15, "Price": 650, "img": "feet-5.png", "trait": "steady", "desc": "【稳健】：在所有极端天气下，摔倒率降至最低。" },
      { "id": "feet-6", "name": "纳米凉感拖鞋", "W": 0, "C": 50, "Dex": 0, "Price": 800, "img": "feet-6.png", "desc": "【寒冰之路】：走在滚烫地面也不扣血。" }
    ],
    "accessories": [
      { "id": "acc-1", "name": "不锈钢保温杯", "W": 10, "C": 10, "Dex": 0, "Price": 40, "img": "accessories-1.png", "desc": "根据灌的水温改变效果。" },
      { "id": "acc-2", "name": "纯羊毛围巾", "W": 20, "C": 0, "Dex": 0, "Price": 110, "img": "accessories-2.png", "desc": "保护嗓子，防止感冒。" },
      { "id": "acc-3", "name": "实木拐杖", "W": 0, "C": 0, "Dex": 10, "Price": 150, "img": "accessories-3.png", "desc": "抵消笨重衣物带来的行动不便。" },
      { "id": "acc-4", "name": "挂脖小风扇", "W": 0, "C": 30, "Dex": 0, "Price": 180, "img": "accessories-4.png", "desc": "R6级别的降温神器。" },
      { "id": "acc-5", "name": "暖宝宝", "W": 15, "C": 0, "Dex": 0, "Price": 10, "img": "accessories-5.png", "desc": "消耗品，局部御寒4小时。" },
      { "id": "acc-6", "name": "暖心背心", "W": 5, "C": 0, "Dex": 20, "Price": 0, "img": "accessories-6.png", "desc": "象征着深厚的照护情谊。" }
    ]
  };

// ==========================================
// 2. 界面控制 (UI Interface)
// ==========================================
const UI = {
    wardrobeResolve: null,

        // 新增：展示当日气象预警
    async showWeatherForecast(dayData) {
        return new Promise(resolve => {
            // 2. 更新文字（覆盖掉之前的“钱款已扣除”）
            const advice = window.Game.getAdviceByRisk(dayData.risk);
            this.updateDialog(`<b>⚠️ 上海气象预警中心</b><br>
                今日预计：${dayData.env.temp_out}℃，风力：${dayData.env.wind}级。<br>
                专家提示：${advice}`);
    
            // 3. 强制生成“确认”按钮
            const container = document.getElementById('choices-container');
            if (container) {
                container.innerHTML = `<button class="next-btn" id="weather-confirm-btn">我知道了，去准备衣服 ➔</button>`;
                
                // 4. 点击按钮后，必须执行 resolve()，否则 gameLoop 永远停在这里
                document.getElementById('weather-confirm-btn').onclick = () => {
                    container.innerHTML = ''; // 清空按钮
                    resolve(); // 
                };
            } else {
                console.error("找不到 choices-container，无法生成按钮！");
                resolve(); // 兜底防止卡死
            }
        });
    },
    // 1. 刷新数值 (确保每次变动都调用它)
    updateStats(player) {
            // ---【核心：动态表情切换】 ---
            const avatarEl = document.querySelector('.avatar-image'); // 确保你HTML里爷爷图片的类名对得上
            // 或者如果你是用 ID 的：const avatarEl = document.getElementById('avatar-display');
            
            if (avatarEl) {
                let figureName = "old_initial.png"; // 默认健康形象
                
                if (player.health <= 5) {
                    figureName = "old_painful.png"; // 极度痛苦 (<=5)
                } else if (player.health <= 8) {
                    figureName = "old_sad.png";     // 不高兴/难受 (5<x<=8)
                }
                
                // 更新图片路径
                const newSrc = `assets/figure/${figureName}`;
            if (!avatarEl.src.includes(figureName)) {
                avatarEl.src = newSrc;
                console.log("检测到健康变化，切换表情为:", figureName);
            }
        }
        
            // --- C. 界面渲染 ---
            const healthEl = document.getElementById('health');
            if (healthEl) {
                healthEl.innerText = player.health.toFixed(1);
                // 濒死红字
                if (player.health < 3) {
                    healthEl.style.color = "#ff0000";
                    document.getElementById('game-container').classList.add('critical-red');
                } else {
                    healthEl.style.color = "#00ffcc";
                    document.getElementById('game-container').classList.remove('critical-red');
                }
            }
            
            if (document.getElementById('pension')) {
                document.getElementById('pension').innerText = player.money;
            }
            document.getElementById('mood').innerText = player.mood.toFixed(1);
        },    
       
    updateDialog(text) {
        document.getElementById('dialog-text').innerHTML = text;
    },

    // 2. 刷新右侧形象栏 (解决你说的形象问题)
    refreshAvatar(imageName) {
        const avatar = document.getElementById('avatar-display');
        if (avatar) {
            avatar.src = `assets/figure/${imageName}.png`;
        }
    },

    // 3. 换衣间实时预览
    refreshOutfitSlots() {
        const outfit = window.Game.player.currentOutfit;
        const slots = { head: 'slot-head', torso: 'slot-torso', legs: 'slot-legs', feet: 'slot-feet', accessories: 'slot-acc1' };
        Object.keys(slots).forEach(type => {
            const itemId = outfit[type];
            const slotEl = document.getElementById(slots[type]);
            if (itemId && slotEl) {
                let foundItem = null;
                ITEMS_DATA[type].forEach(i => { if(i.id === itemId) foundItem = i; });
                if(foundItem) slotEl.innerHTML = `<img src="assets/items/${foundItem.img}" style="width:100%">`;
            }
        });
    },

    updateWeather(dayData) {
        document.getElementById('temp-val').innerText = dayData.env.temp_out;
        document.getElementById('wind-val').innerText = dayData.env.wind;
        
        const alertEl = document.getElementById('weather-alert');
        if (dayData.risk >= 3) {
            alertEl.innerText = "🚨 极寒预警";
            alertEl.classList.add('alert-danger');
        } else {
            alertEl.innerText = "普通降温";
            alertEl.classList.remove('alert-danger');
        }
    },
    // 4. 换衣间
    async showWardrobe() {
        return new Promise(resolve => {
            this.wardrobeResolve = resolve;
            const overlay = document.getElementById('wardrobe-overlay');
            const grid = document.getElementById('item-grid');
            overlay.classList.remove('hidden');
            grid.innerHTML = '';

            // 循环生成所有图标
            Object.keys(ITEMS_DATA).forEach(type => {
                ITEMS_DATA[type].forEach(item => {
                    const div = document.createElement('div');
                    div.className = 'item-icon';
                    div.innerHTML = `<img src="assets/items/${item.img}" title="${item.name}">`;
                    div.onclick = () => {
                        window.Game.player.currentOutfit[type] = item.id;
                        this.refreshOutfitSlots();
                    };
                    grid.appendChild(div);
                });
            });
        });
    },

    refreshOutfitSlots() {
        const outfit = window.Game.player.currentOutfit;
        // 映射 ID 到 HTML 槽位
        const slots = { head: 'slot-head', torso: 'slot-torso', legs: 'slot-legs', feet: 'slot-feet', accessories: 'slot-acc1' };
        Object.keys(slots).forEach(type => {
            const itemId = outfit[type];
            const slotEl = document.getElementById(slots[type]);
            if (itemId) {
                // 在数据中找图片名
                let foundItem = null;
                ITEMS_DATA[type].forEach(i => { if(i.id === itemId) foundItem = i; });
                if(foundItem) slotEl.innerHTML = `<img src="assets/items/${foundItem.img}" style="width:100%">`;
            }
        });
    },

    closeWardrobe() {
        document.getElementById('wardrobe-overlay').classList.add('hidden');
        if (this.wardrobeResolve) this.wardrobeResolve();
    }
};

// ==========================================
// 3. 核心引擎 (Game Engine)
// ==========================================
class GameController {
    // 在 GameController 类里增加这个方法

    constructor() {
        // --- 开局数值 ---
        this.currentDay = 0;
        this.maxDays = 7;
        this.player = {
            money: 1000, health: 10.0, mood: 10.0, clean: 10,
            traits: [], items: [],
            currentOutfit: { head: null, torso: null, legs: null, feet: null, accessories: null }
        };

        // --- 7级风险需求表 (Demand Table) ---
        this.riskThresholds = {
            1: { type: 'cold', demand: 30 }, 2: { type: 'cold', demand: 60 }, 3: { type: 'cold', demand: 100 },
            4: { type: 'comfort', demand: 0 },
            5: { type: 'heat', demand: 30 }, 6: { type: 'heat', demand: 60 }, 7: { type: 'heat', demand: 100 }
        };

        // --- 每日剧本 (含环境参数) ---
        this.SCHEDULE = {
            1: { risk: 2, humidity: 70, title: "寒潮前夕", env: { temp_out: 5, wind: 4 } },
            2: { risk: 2, humidity: 60, title: "冬至祭祖", env: { temp_out: 2, wind: 6 } },
            3: { risk: 3, humidity: 85, title: "寒风彻骨", env: { temp_out: -1, wind: 5 } },
            4: { risk: 2, humidity: 95, title: "湿冷回南", env: { temp_out: 3, wind: 2 } },
            5: { risk: 1, humidity: 50, title: "短暂放晴", env: { temp_out: 8, wind: 2 } },
            6: { risk: 2, humidity: 40, title: "倒春寒", env: { temp_out: 1, wind: 7 } },
            7: { risk: 3, humidity: 40, title: "终焉寒潮", env: { temp_out: -3, wind: 5 } }
        };
    }

    getAdviceByRisk(risk) {
        const advices = {
            1: "天气尚可，注意基础保暖，预防感冒。",
            2: "气温明显下降，请穿着加厚外套，注意防风。",
            3: "<b>【严重预警】</b>极寒天气，必须穿着羽绒或抗风装备，尽量减少室外逗留！",
            4: "回南天湿冷，防潮比厚度更重要，建议穿着冲锋类衣物。"
        };
        return advices[risk] || "请根据体感及时增减衣物。";
    };

    async startGame() {
        // 隐藏开始屏幕
        const startScreen = document.getElementById('start-screen');
        if (startScreen) startScreen.classList.add('hidden');
        
        // 核心：先进行 D0 准备，再进入每日循环
        await this.initPreparation(); 
    }

    // --- 1. 开局事先准备 (D0) ---
    async initPreparation() {
        UI.updateDialog("【事先准备】寒潮将至，你有一笔 1000 元的退休金，要如何改造生活？");
        const preOptions = [
            { text: "适老化改造 (600元)", id: "no_slip", cost: 600, desc: "浴室防滑，跌倒率归零" },
            { text: "长期护理险 (150元)", id: "insurance", cost: 150, desc: "医疗支出大幅降低" },
            { text: "存钱以防万一 (0元)", id: "none", cost: 0, desc: "保留更多现金" }
        ];
        const picked = await this.waitForUserChoice(preOptions);
        // 处理选择结果
    if (picked.id !== 'none') {
        this.player.traits.push(picked.id);
        this.player.money -= picked.cost;
        UI.updateDialog(`你选择了：${picked.text}。钱款已扣除。`);
    } else {
        UI.updateDialog("你决定把钱留在手里。");
    }
    
    UI.updateStats(this.player);
    
    // 【关键】准备结束后，强制停顿一下，让玩家看清楚结果，再进第一天
    await this.waitForNextAsync("准备完毕，迎接寒潮 ➔");
    await this.gameLoop(); 
}
    
    // --- 2. 每天的核心循环 ---
    async gameLoop() {
    // 确保从第1天开始，或者根据你当前的逻辑
    while (this.currentDay < this.maxDays && this.player.health > 0) {
        this.currentDay++;
        const dayData = this.SCHEDULE[this.currentDay];
        
        // ---【核心：在这里更新右上角天气】---
        UI.updateWeather(dayData);
        UI.updateStats(this.player);

        // 这个函数内部必须确保有一个“我知道了”的按钮，点击后 resolve
        await UI.showWeatherForecast(dayData);

        // B. 换衣阶段 (确保这一步能 resolve)
        UI.updateDialog(`<b>第 ${this.currentDay} 天：${dayData.title}</b><br>请根据天气选择衣服，然后点击衣柜里的“穿好了”。`);
        await UI.showWardrobe(); 

        // C. 事件处理
        await this.handleEvents(dayData);
        
        // D. 【关键：结算并获取报告】
        // 这里我们先定义变量，再赋值，防止“Can't find variable”错误
        let reportText = "";
        try {
            reportText = this.settleDailyStats(dayData);
        } catch (e) {
            console.error("结算出错:", e);
            reportText = "身体感觉有些异样...（结算逻辑发生错误）";
        }
        
        // E. 显示报告并生成“下一天”按钮
        UI.updateDialog(reportText); 
        
        // 确保 waitForNextAsync 能够清除之前的按钮并生成新的
        await this.waitForNextAsync("这一天结束了，休息准备明天 ➔");
    }
    
    // 循环结束
    this.showEnding();
}

    // --- 3. 核心算法：数值结算 (高信息度) ---
    settleDailyStats(dayData) {
        console.log("开始每日结算...");
        let totals = { W: 0, C: 0, Dex: 0 };
        let traits = { waterproof: false, windproof: false };

        // 1. 安全检查：确保 outfit 存在
        if (!this.player.currentOutfit) {
            this.player.currentOutfit = { head: null, torso: null, legs: null, feet: null, accessories: null };
        }

        // 统计当前全身数值
        Object.values(this.player.currentOutfit).forEach(itemID => {
            if (!itemID) return;
            // 从分类数据库找回该物品
            let item = null;
            for (let cat in ITEMS_DATA) {
                item = ITEMS_DATA[cat].find(i => i.id === itemID) || item;
            }
            totals.W += item.W || 0;
            totals.C += item.C || 0;
            totals.Dex += item.Dex || 0;
            if (item.trait === 'waterproof') traits.waterproof = true;
            if (item.trait === 'windproof') traits.windproof = true;
        });

        // 3. 计算需求
        const config = this.riskThresholds[dayData.risk];
        let report = `--- 今日小结 ---`;
        
        // 逻辑1：保暖判定
        if (totals.W < config.demand) {
            const loss = (config.demand - totals.W) / 20;
            this.player.health -= loss;
            report += `<br>⚠️ 保暖不足：体感寒冷，健康值下降了 ${loss.toFixed(1)}。`;
            report += `<br>💡 建议：${this.getAdvice(totals, traits, dayData)}`;
        } else {
            this.player.health = Math.min(10, this.player.health + 0.5);
            report += `<br>👍 保暖得当：身体感觉很暖和。`;
        }

        // 逻辑2：灵活判定
        if (totals.Dex < -20) {
            this.player.mood -= 1;
            report += `<br>😣 负担过重：衣服太笨重，行动不便导致心情烦躁。`;
        }

        UI.updateStats(this.player);
        return report; // 返回报告内容
    }

    // 自动生成建议逻辑
    getAdvice(totals, traits, dayData) {
        if (dayData.humidity > 80 && !traits.waterproof) return "空气潮湿，普通棉织物会吸湿变冷，建议穿具有【防潮】属性的冲锋裤。";
        if (dayData.env.wind > 5 && !traits.windproof) return "风力极大，热量被迅速吹走，你需要带有【抗风】特性的头部或躯干装备。";
        return "尝试‘洋葱式叠穿’，增加衣物层数以锁定空气热量。";
    }

    async handleEvents(dayData) {
        const container = document.getElementById('choices-container');
        
        switch (this.currentDay) {
            case 1: // D1: 菜场补给
                UI.updateDialog("【菜场补给】寒潮前夕，你打算去哪里囤货？");
                const d1Choice = await this.waitForUserChoice([
                    { text: "老菜场 (步行)", id: "old_market", cost: 0, desc: "路窄风大，考验防滑与防风" },
                    { text: "步云菜场 (打的)", id: "taxi", cost: 20, desc: "虽然贵，但暖和又稳当" }
                ]);
                
                if (d1Choice.id === "old_market") {
                    // 逻辑判定：检查是否穿了防滑鞋 (feet-4或feet-5)
                    const isSteady = ["feet-4", "feet-5"].includes(this.player.currentOutfit.feet);
                    if (!isSteady) {
                        this.player.health -= 1.0;
                        UI.updateDialog("老菜场路面湿滑，你走得踉踉跄跄，脚踝隐隐作痛。");
                    } else {
                        UI.updateDialog("穿了防滑鞋，老菜场的路虽窄，你走得很扎实。");
                    }
                } else {
                    this.player.money -= 20;
                    UI.updateDialog("出租车空调很足，你舒舒服服地买完菜回来了。");
                }
                break;

            case 2: // D2: 冬至祭祖
                UI.updateDialog("【冬至祭祖】后山风极大，山路错综复杂。");
                const d2Choice = await this.waitForUserChoice([
                    { text: "买份新地图 (-20元)", id: "map", cost: 20, desc: "少走冤枉路" },
                    { text: "凭记忆走", id: "memory", cost: 0, desc: "可能会迷路" }
                ]);

                if (d2Choice.id === "map") {
                    this.player.money -= 20;
                    UI.updateDialog("有了地图，你很快找到了祖坟，没在寒风中多待。");
                } else {
                    this.player.health -= 1.5;
                    this.player.mood -= 2;
                    UI.updateDialog("你迷路了！在刺骨的山风里绕了一个小时，冻得脸色发青。");
                }
                break;

            case 3: // D3: 洗澡危机
                UI.updateDialog("【洗澡危机】地面极度湿滑，水汽让视线模糊。");
                await this.waitForNextAsync("开始判定 ➔");
                const hasNoSlip = this.player.traits.includes('no_slip');
                // 基础摔倒率40%，改造后0%
                if (!hasNoSlip && Math.random() < 0.4) {
                    this.player.health -= 3.0;
                    this.player.mood -= 2.0;
                    UI.updateDialog("哎呀！脚下一滑摔在瓷砖上，你躺了半天才缓过劲来。");
                } else {
                    this.player.clean = 10;
                    UI.updateDialog("平安无事，洗了个热水澡，全身都暖和了。");
                }
                break;

            case 4: // D4: 湿冷回南
                UI.updateDialog("【给菜浇水】院里的菜苗不能干着，但外面湿冷钻心。");
                // 逻辑判定：是否穿了防水冲锋裤 (legs-6)
                const isWaterproof = this.player.currentOutfit.legs === "legs-6";
                if (!isWaterproof) {
                    this.player.health -= 0.5;
                    UI.updateDialog("普通裤子挡不住湿气，湿冷钻进棉裤里，关节又酸又疼。");
                } else {
                    UI.updateDialog("冲锋裤挡住了潮气，你干完活身上还是干爽的。");
                }
                break;

            case 5: // D5: 短暂放晴
                UI.updateDialog("【栗子任务】外孙女要来，你想买她最喜欢的糖炒栗子。");
                const d5Choice = await this.waitForUserChoice([
                    { text: "去排队买栗子 (-30元)", id: "buy", cost: 30, desc: "排队半小时" },
                    { text: "太冷了不去", id: "skip", cost: 0, desc: "在家休息" }
                ]);

                if (d5Choice.id === "buy") {
                    this.player.money -= 30;
                    this.player.items.push("sugar_chestnut");
                    UI.updateDialog("排队虽然累，但买到了热腾腾的栗子。");
                }

                UI.updateDialog("【孙女上门】外孙女推门进来了！");
                if (this.player.items.includes("sugar_chestnut")) {
                    this.player.mood += 3;
                    UI.updateDialog("“爷爷万岁！”看着孙女吃栗子的样子，你心里暖洋洋的。");
                } else {
                    this.player.mood += 1;
                    UI.updateDialog("虽然没栗子，但孙女的笑声也让你心情好了不少。");
                }
                break;

            case 6: // D6: 倒春寒
                UI.updateDialog("【花鸟市场】7级大风，但你想买个蝈蝈给家里添点生气。");
                const d6Choice = await this.waitForUserChoice([
                    { text: "买个蝈蝈 (-30元)", id: "cricket", cost: 30 },
                    { text: "算了，风太大", id: "none", cost: 0 }
                ]);

                if (d6Choice.id === "cricket") {
                    // 逻辑判定：检查头部保暖 (head-4 防风或 W值>25)
                    const headItem = ITEMS_DATA.head.find(i => i.id === this.player.currentOutfit.head);
                    if (!headItem || (headItem.W < 25 && headItem.id !== "head-4")) {
                        this.player.health -= 1.0;
                        UI.updateDialog("没戴厚帽子，冷风吹得你头痛欲裂，但蝈蝈叫得很响。");
                    } else {
                        UI.updateDialog("戴好了防风帽，你乐呵呵地把蝈蝈揣进怀里。");
                    }
                }
                break;

            case 7: // D7: 最后的洗澡 (终章)
                UI.updateDialog("【终章：老王的求助】邻居老王在外面敲门，他家停暖了。");
                const d7Choice = await this.waitForUserChoice([
                    { text: "让他进来取暖", id: "help", desc: "增加心情，但更拥挤" },
                    { text: "婉言谢绝", id: "refuse", desc: "保护自己的物资" }
                ]);

                if (d7Choice.id === "help") {
                    this.player.mood += 2;
                    UI.updateDialog("老哥俩喝着热水聊天，这冬夜似乎也没那么冷了。");
                } else {
                    this.player.mood -= 1;
                    UI.updateDialog("你在黑暗中独自坐着，心里有些不是滋味。");
                }

                await this.waitForNextAsync("迎接最后的洗礼 ➔");
                UI.updateDialog("【最后的洗澡】洗去这一冬的疲惫。");
                const hasNoSlipFinal = this.player.traits.includes('no_slip');
                if (!hasNoSlipFinal && Math.random() < 0.5) {
                    this.player.health -= 4.0;
                    UI.updateDialog("你重重地摔倒在浴室里...眼前陷入了黑暗...");
                } else {
                    UI.updateDialog("温热的水流过身体，寒潮终于要过去了。");
                }
                break;
        }
        UI.updateStats(this.player);
    }

    // --- 工具方法 ---
    waitForUserChoice(options) {
        console.log("正在等待用户选择...", options);
        return new Promise(resolve => {
            const container = document.getElementById('choices-container');
            if (!container) {
                console.error("找不到 choices-container 容器！请检查 HTML。");
                return;
            }
            container.innerHTML = ''; // 清空之前的按钮
            
            options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = "choice-btn";
                btn.innerHTML = `${opt.text} <br><small>${opt.desc || ''}</small>`;
                btn.onclick = () => {
                    console.log("用户选择了:", opt.id);
                    container.innerHTML = ''; // 点击后清空
                    resolve(opt); // 重要：释放 await
                };
                container.appendChild(btn);
            });
        });
    }
    
    waitForNextAsync(btnText) {
        console.log("正在等待点击下一步:", btnText);
        return new Promise(resolve => {
            const container = document.getElementById('choices-container');
            if (!container) return;
            
            container.innerHTML = `<button class="next-btn">${btnText}</button>`;
            const btn = container.querySelector('button');
            
            btn.onclick = () => {
                console.log("点击了下一步，继续流程...");
                container.innerHTML = ''; // 点击后清空
                resolve(); // 重要：释放 await，让代码往下走
            };
        });
    }

    showEnding() {
        const result = this.player.health > 0 ? "你成功挺过了寒潮！" : "你倒在了寒冬中...";
        UI.updateDialog(`【游戏结束】${result}`);
    }
}

window.Game = new GameController();