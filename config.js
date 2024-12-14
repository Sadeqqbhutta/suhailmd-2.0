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


global.SESSION_ID = process.env.SESSION_ID  || "" SUHAIL_07_37_12_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY0LFxuICAgICAgICA0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDczLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICAxNixcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAzNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDczLFxuICAgICAgICAzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkxLFxuICAgICAgICA2MixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEdEFTMWpJSFFEUG4rYThOWEJUSWVpMnhvWXIwSlowNytFaXdrTjZxTWMwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzI5NzczNzAxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzc5RjcyNUI3RThEMTE4Mzc3QjVBNUVGRjBDNzVFQUZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTYxODE5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjlFYW5KZDRaUmpXVFkxdFVXOGRlakFcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2FhMjYyNmMtNGYzMi00ODlhLTlkOTYtYmE5YmYyZTZlOTY4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY3LFxuICAgICAgMTAwLFxuICAgICAgMTAyLFxuICAgICAgMTk2LFxuICAgICAgODQsXG4gICAgICA5MSxcbiAgICAgIDIzNixcbiAgICAgIDEzOSxcbiAgICAgIDIxNCxcbiAgICAgIDE5MCxcbiAgICAgIDM3LFxuICAgICAgMjIyLFxuICAgICAgOTYsXG4gICAgICA2MSxcbiAgICAgIDIzNyxcbiAgICAgIDEzNyxcbiAgICAgIDE1NyxcbiAgICAgIDQ1LFxuICAgICAgMTIyLFxuICAgICAgNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTUyLFxuICAgICAgNTMsXG4gICAgICAxOSxcbiAgICAgIDEyMixcbiAgICAgIDIwOCxcbiAgICAgIDk1LFxuICAgICAgMTkyLFxuICAgICAgMTMsXG4gICAgICAxMjcsXG4gICAgICA2NyxcbiAgICAgIDE1NCxcbiAgICAgIDEwMyxcbiAgICAgIDEwLFxuICAgICAgMTQwLFxuICAgICAgMTIyLFxuICAgICAgMjMzLFxuICAgICAgMTMzLFxuICAgICAgMjA5LFxuICAgICAgMTMxLFxuICAgICAgMjM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkZDOTNYTFBQXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyOTc3MzcwMTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImFsb25lIGJveVwiLFxuICAgIFwibGlkXCI6IFwiMjYwMzQ0MzI0ODI5MzkzOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWZvNC9JQkVJL3I5TG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJBZjI2TEtzemkwNmpPUGRHVVpEanNqSEpoNTF2SXlOcVgyekZjYlJ5c1V3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImJLd05idUdUcXduSWN2YlFQdEhMNjhCUEVhZnJETEkxaXBZSTM4ZXJzYXI0N2k3NlpmUEx0Z1FwWVBteHFhVi9UMnJiZDFVVVgrV3RnMk9HancwT0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk81V29QeFNPRDZ3djl4ajdNZjVYdVZ1U0x4eGd5WUcxS1BFKzJ4bnFPWGdwbFo4ZFJoUkZVNysycnR0RmdjYUhTZk9qTkJyVm1kYWczdFFGVlVzd2pRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzI5NzczNzAxOToxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQxNjE4MTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9 // PUT your SESSION_ID 


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
