const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_08_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDEsXG4gICAgICAgIDIsXG4gICAgICAgIDc2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA0MixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE4LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTEwLFxuICAgICAgICA4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICA3MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg2LFxuICAgICAgICAyOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0LFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDQ2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2MyxcbiAgICAgICAgODksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA4LFxuICAgICAgICA2MixcbiAgICAgICAgMjgsXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICA2MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICA0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDMwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjUyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIldmTUp5cUh2NDJrS2NKb0ZuKzcrRFNqeDdQeVZFY3dyZXlESTN2WU5SYkk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNTA5MzQ1NTk1MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBQTZGQTdBNTUyRDJCOTU2ODIwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzY5MjEzMlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIwRWVpa0lCUFNfV1NBQmNTZHo2S0VRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUxMWFmYjIyLTRiYzYtNDBlOS1iMTkxLTA2NTJhZDA2ZjAyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5MCxcbiAgICAgIDUyLFxuICAgICAgNjcsXG4gICAgICAxMDEsXG4gICAgICA4OSxcbiAgICAgIDcsXG4gICAgICAyMTksXG4gICAgICAyMzQsXG4gICAgICAxNjQsXG4gICAgICAxNDQsXG4gICAgICAyMjEsXG4gICAgICAxNixcbiAgICAgIDE1MixcbiAgICAgIDg5LFxuICAgICAgMzEsXG4gICAgICAxNzMsXG4gICAgICAxNzksXG4gICAgICAzMCxcbiAgICAgIDIwMSxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNDgsXG4gICAgICA1MCxcbiAgICAgIDIyMyxcbiAgICAgIDE4MCxcbiAgICAgIDM3LFxuICAgICAgMTI4LFxuICAgICAgNzIsXG4gICAgICAxMDYsXG4gICAgICAyNTUsXG4gICAgICAxNDMsXG4gICAgICAxMzEsXG4gICAgICAxNjMsXG4gICAgICAxNTcsXG4gICAgICA3MixcbiAgICAgIDI0NixcbiAgICAgIDExMyxcbiAgICAgIDE5MCxcbiAgICAgIDIzOCxcbiAgICAgIDE5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDUVlRTFM2UlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzQ1NTk1MjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkZ1bm9iaSBUd2VldHNcIixcbiAgICBcImxpZFwiOiBcIjYxNTMwMDUzODMyOTQ0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEM2NDk4RkVOaVYyTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZNHRTTVY4MTl2Y1JiYm1DVGYvQWo0bzVZTXV3ZlhoT3h6TGloWjRVdWowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkxGKysvMjllN3pUdzFmQWxrWFQzaHhjVnA3RHlVaVZTOHo5eHpPRDIxdWNlWXRWcC9EbUhGZnlPMW1VS0ZmQ2R6U3pteGF1MTBsdjNPNHlkWVNaWURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInF6ZkYxU0Zady8wTDJPY1JXc0h3MHJpMndubWdpcm1SbnVXMVVoUTEvbUVKSHdEdldaVUVneUxnT01ob1RHaTVTTjlCc0V2YUQxZWlULy8zYWFIOENBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTM0NTU5NTI0OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzY5MjEyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJKeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkp5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVjJVRVJnTm1CNmRwemMvTzJkUlcwS0d2MWZSUG5JZGpYWXdKSkVVWU0wUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTQzMDM2MjcyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM2OTIxMjY4NzVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
