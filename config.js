const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349024052889";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_06_07_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDQyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDUwLFxuICAgICAgICA2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTksXG4gICAgICAgIDgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgNjAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjUwLFxuICAgICAgICA3LFxuICAgICAgICA3LFxuICAgICAgICAxMDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNixcbiAgICAgICAgNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDkwLFxuICAgICAgICA1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3MCxcbiAgICAgICAgNDksXG4gICAgICAgIDYwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDksXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDkwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMSxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjIyLFxuICAgICAgICA5MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDcsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXMXMrcVJyMUtZL21TdDhCSW1Ed042Wi9YUkhLWDRocEtGWFl5NTh6S1NjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2MzAtRkZoRVR1Q3MwLWtDQ0hHWTN3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlhMTljNzA1LThiODMtNGU1ZS1hOTJmLWI2YTc3MmU0ZDMwOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTQsXG4gICAgICA4MCxcbiAgICAgIDE3MSxcbiAgICAgIDE2MixcbiAgICAgIDQ3LFxuICAgICAgMTc5LFxuICAgICAgMjIsXG4gICAgICAxMCxcbiAgICAgIDY5LFxuICAgICAgMTE1LFxuICAgICAgMTMwLFxuICAgICAgMTg1LFxuICAgICAgOTcsXG4gICAgICA4MSxcbiAgICAgIDkzLFxuICAgICAgMTIxLFxuICAgICAgODcsXG4gICAgICAxMzMsXG4gICAgICA3LFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0LFxuICAgICAgMTQ3LFxuICAgICAgMTE0LFxuICAgICAgODgsXG4gICAgICAyMjQsXG4gICAgICAxNjgsXG4gICAgICAyMCxcbiAgICAgIDEzMCxcbiAgICAgIDE3LFxuICAgICAgNjMsXG4gICAgICAyMzEsXG4gICAgICA0LFxuICAgICAgMTcwLFxuICAgICAgNzYsXG4gICAgICAxNDgsXG4gICAgICA0NyxcbiAgICAgIDE3NyxcbiAgICAgIDUwLFxuICAgICAgMTg4LFxuICAgICAgNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTE1YREJZTFBcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMjQwNTI4ODk6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NTc3NzE4MTI0OTY0ODoxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNYXRoSkFDRU9UWDM3UUdHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImg5SW5hRy8wTjRTTWU5WHM2NkxMeUpDQy9SUStyZ01WN3hjUkYxMmxDMG89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQzloOUU4QU80eXJBbTZ4WFNWMDNaajFBUkdudk0rbm94T1NhL1g2TGhkVklDRTczZzR2dFhjbDZBZDBXQmNvSzRvczYvYnZqZmNyVmVrLzNvMFdsQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiYjd3VDN0S3k0cmlrMkE0YU9HMFFLL1RQRTNqK3A5M0ZRSkQ4MHNqVTF0UTJqbitlbXBxRmpPTnZHeTZBYnlBZ0FYTmJpcndTMWVpbHl2RjJkVjZXaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAyNDA1Mjg4OToxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMjMyMzU5XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
