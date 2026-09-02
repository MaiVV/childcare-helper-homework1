"use client";

import { useState } from "react";

const activities = [  
  {
    age: "0-1歲",
    type: "語言發展",
    name: "小手拍拍說一說",
    goal: "鼓勵寶寶模仿聲音與簡單詞語，增加語言互動。",
    materials: "動物玩偶或簡單圖片",
    play: "拿出玩偶和寶寶互動，說出「狗狗」、「喵喵」等簡單詞語，鼓勵寶寶發出聲音或模仿。",
  },
  {
    age: "0-1歲",
    type: "精細動作",
    name: "小手抓抓樂",
    goal: "練習抓握能力與手眼協調。",
    materials: "柔軟的大毛球或安全布球、小籃子",
    play: "讓寶寶抓取柔軟的球，放進籃子裡，陪伴寶寶反覆練習抓取與放入。",
  },
  {
    age: "0-1歲",
    type: "大肌肉活動",
    name: "爬爬小探險",
    goal: "促進寶寶爬行、翻身等大肌肉動作發展。",
    materials: "軟墊、柔軟玩具",
    play: "將玩具放在寶寶前方適當距離，引導寶寶伸手、翻身或爬行去拿取。",
  },
  {
    age: "0-1歲",
    type: "感官探索",
    name: "柔軟布料摸摸樂",
    goal: "刺激觸覺感官，增加探索興趣。",
    materials: "不同材質的小布、毛巾、安全布書",
    play: "讓寶寶觸摸不同材質，並用簡單的語言描述「軟軟的」、「滑滑的」。",
  },
  {
    age: "1-2歲",
    type: "感官探索",
    name: "彩色毛球尋寶",
    goal: "練習手部精細動作與感官探索。",
    materials: "彩色毛球、小盒子、湯匙",
    play: "讓孩子抓取毛球放進盒子，也可以用湯匙舀取毛球。",
  },
  {
    age: "1-2歲",
    type: "語言發展",
    name: "動物寶寶在哪裡？",
    goal: "增加詞彙量與語言表達能力。",
    materials: "動物圖卡或動物玩具",
    play: "拿出動物圖片，詢問孩子「小狗在哪裡？」並鼓勵孩子說出動物名稱。",
  },
  {
    age: "1-2歲",
    type: "精細動作",
    name: "小手放一放",
    goal: "練習抓握與手眼協調。",
    materials: "大積木、小盒子",
    play: "讓孩子將積木一個一個放進盒子，再倒出來重複遊戲。",
  },
  {
    age: "1-2歲",
    type: "大肌肉活動",
    name: "小小障礙賽",
    goal: "訓練平衡感與身體協調。",
    materials: "軟墊、抱枕、安全玩具",
    play: "利用軟墊和抱枕設計簡單路線，鼓勵孩子爬過、走過障礙物。",
  },
];

export default function Home() {
  const [age, setAge] = useState("1-2歲");
  const [type, setType] = useState("感官探索");
  const [result, setResult] = useState(activities[1]);

  const generateActivity = () => {
    const filtered = activities.filter(
      (activity) => activity.age === age && activity.type === type
    );

    if (filtered.length > 0) {
      const random =
        filtered[Math.floor(Math.random() * filtered.length)];
      setResult(random);
    } else {
      setResult({
        age,
        type,
        name: "一起自由探索吧！",
        goal: "透過遊戲培養孩子的好奇心。",
        materials: "家中或教室裡安全的玩具",
        play: "陪伴孩子自由探索，觀察孩子喜歡什麼，並適時給予鼓勵。",
      });
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 px-6 py-12 text-gray-700">
      <div className="mx-auto max-w-2xl">
        <header className="mb-10 text-center">
          <div className="mb-3 text-6xl">🧸</div>
          <h1 className="text-4xl font-bold text-orange-700">
            托育活動靈感小幫手
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            不知道今天要陪孩子玩什麼嗎？
            <br />
            一起找找適合寶寶的活動靈感吧！
          </p>
        </header>

        <section className="rounded-3xl bg-white p-8 shadow-lg">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-bold">
                👶 選擇孩子年齡
              </label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full rounded-xl border-2 border-orange-200 p-3 outline-none focus:border-orange-400"
              >
                <option>0-1歲</option>
                <option>1-2歲</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-bold">
                🎨 選擇活動類型
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full rounded-xl border-2 border-orange-200 p-3 outline-none focus:border-orange-400"
              >
                <option>感官探索</option>
                <option>語言發展</option>
                <option>精細動作</option>
                <option>大肌肉活動</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateActivity}
            className="mt-6 w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white shadow-md transition hover:bg-orange-600"
          >
            ✨ 幫我想活動
          </button>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-8 shadow-lg">
          <p className="text-center text-sm font-bold text-orange-500">
            💡 今日活動推薦
          </p>

          <h2 className="mt-3 text-center text-3xl font-bold text-orange-700">
            {result.name}
          </h2>

          <div className="mt-6 space-y-5">
            <div className="rounded-2xl bg-orange-50 p-4">
              <h3 className="font-bold">🎯 活動目標</h3>
              <p className="mt-1">{result.goal}</p>
            </div>

            <div className="rounded-2xl bg-yellow-50 p-4">
              <h3 className="font-bold">🧺 準備材料</h3>
              <p className="mt-1">{result.materials}</p>
            </div>

            <div className="rounded-2xl bg-green-50 p-4">
              <h3 className="font-bold">🎈 活動玩法</h3>
              <p className="mt-1">{result.play}</p>
            </div>
          </div>
        </section>

        <footer className="mt-8 text-center text-sm text-gray-500">
          🧸 專為 0～2 歲幼兒設計的活動靈感小工具
        </footer>
      </div>
    </main>
  );
}