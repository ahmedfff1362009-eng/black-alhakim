// config.js
// ✧ 2B - YoRHa Unit No.2 Type B - Configuration ✧

import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

//حط lid بتاعك من امر lid
global.owner = ['227908748591300', '201120687235']

// ========== المطورين ==========
global.mods = []
global.prems = []

// ========== إعدادات البوت ==========
global.baileys = '@whiskeysockets/baileys'
global.botName = '✧ 𝟐𝐁 - 𝑺𝑷𝑰𝑫𝑨𝑹 No.2 Type B ✧'
global.botNameShort = '𝟐𝐁'
global.watermark = '✧ 2B - 𝑺𝑷𝑰𝑫𝑨𝑹 No.2 Type B ✧'

// ========== المكتبات العامة ==========
global.fetch = fetch
global.axios = axios
global.moment = moment
global.fs = fs

// ========== إعدادات البوت ==========
global.packname = '✧ 𝟐𝐁 - 𝑺𝑷𝑰𝑫𝑨𝑹 Unit ✧'
global.author = '𝑺𝑷𝑰𝑫𝑨𝑹 No.2 Type B'

global.multiplier = 85

// اكتب رقمك هنا الي عايز تربط بي البوت من دون + او فواصل 
global.botNumberCode = "2011206873235"

// ========== القنوات ==========
global.ch = {
  ch1: '120363198000393338@newsletter',
  ch2: '120363275551737863@newsletter'
}

// روابط  السوشيال ميديا بتاعتي 
global.yt = 'https://youtube.com/@youssf-f8i?si=WUZBmyryEpziKXS_'
global.ig = 'https://www.instagram.com/go24.q?igsh=MWdoYWtjZWNnMGhncQ=='
global.md = 'https://github.com/PROTOTYPE/PROTOTYPE-MD'
global.fb = 'https://www.facebook.com/groups/prototype'
global.tk = 'https://www.tiktok.com/@5trua5?_r=1&_t=ZS-97C5LgOJgX6'
global.paypal = 'https://paypal.me/Prototype'
global.soporteGB = 'https://whatsapp.com/channel/0029Vb8We2VKrWR2Z9E5KQ1P'

//  ٤١٤×٧٣٦ صور الخطاء لو عايز تغيره بس عشان تكون عارف لزما تكون الصور بي ابعاد مثلا
global.dfailPool = [
    'https://file.garden/aauvg01sjleV_ic1/1199e9965d7836cf5f5ff6ab0463e451.jpg',
    'https://file.garden/aauvg01sjleV_ic1/7b0ed3c48e859d22e73b62093148b22b.jpg',
    'https://file.garden/aauvg01sjleV_ic1/6c936c420d5d23007ac874f498219280.jpg',
    'https://file.garden/aauvg01sjleV_ic1/9e5af83aa668643f0bbef190f4786686.jpg',
    'https://file.garden/aauvg01sjleV_ic1/9b893fe97b907333aa4e7e285e424768.jpg',
    'https://file.garden/aauvg01sjleV_ic1/180da285198e9226b2eb8adec0e670b1.jpg',
    'https://file.garden/aauvg01sjleV_ic1/0bc2d63e8467867b9a56a31ce1077b10.jpg',
    'https://file.garden/aauvg01sjleV_ic1/ecca80ffa8c0081f4f117a28f3c5b009.jpg',
    'https://file.garden/aauvg01sjleV_ic1/c5384b18150e07c58ca969282dafcfb2.jpg'
]

// ========== رسائل dfail ==========
global.dfailMessages = {
    rowner: '❌ *المطور فقط*',
    owner: '❌ *المطور فقط*',
    mods: '❌ *القادة فقط*',
    premium: '⭐ *بريميوم فقط*',
    group: '👥 *جروبات فقط*',
    private: '📱 *خاص فقط*',
    admin: '👑 *مشرفين فقط*',
    botAdmin: '🤖 *البوت مش أدمن*',
    unreg: '📝 *غير مسجل*',
    restrict: '🚫 *معطل حالياً*'
}

// ========== زخرفة dfail ==========
global.dfailTitle = '2B - 𝑺𝑷𝑰𝑫𝑨𝑹'
global.dfailDesc = '⧼ 𝑷𝑹𝑶𝑻𝑶𝑻𝒀𝑷𝑬 ⧽'
global.dfailUrl = 'https://github.com/youssf354'

// ========== مراقبة الملف ==========
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})