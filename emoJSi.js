/*
  BY: rewrite123
  Find me here: https://github.com/rewrite123
  October 4, 2019
  Notes:
    Here is a nice quality of life script in js for you so you can reference this in something like NodeJS or vanilla JS.
*/

/* Reference this by the name given */
var referenceByObject = {
  "innocent-face": "ʘ‿ʘ",
  "reddit-disapproval-face": "ಠ_ಠ",
  "table-flip": "(╯°□°）╯︵ ┻━┻",
  "put-the-table-back": "┬─┬﻿ ノ( ゜-゜ノ)",
  "tidy-up": "┬─┬⃰͡ (ᵔᵕᵔ͜ )",
  "double-Flip": "┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻",
  "fisticuffs": "ლ(｀ー´ლ)",
  "cute-bear": "ʕ•ᴥ•ʔ",
  "squinting-bear": "ʕᵔᴥᵔʔ",
  "GTFO-Bear": "ʕ •`ᴥ•´ʔ",
  "cute-face-with-big-eyes": "(｡◕‿◕｡)",
  "surprised": "（　ﾟДﾟ）",
  "shrug-face": "¯\\_(ツ)_/¯",
  "meh": "¯\\(°_o)/¯",
  "feel-perky": "(`･ω･´)",
  "angry-face": "(╬ ಠ益ಠ)",
  "at-what-cost": "ლ(ಠ益ಠლ)",
  "excited": "☜(⌒▽⌒)☞",
  "running": "ε=ε=ε=┌(;*´Д`)ﾉ",
  "happy-face": "ヽ(´▽`)/",
  "basking-in-glory": "ヽ(´ー｀)ノ",
  "kitty-emote": "ᵒᴥᵒ#",
  "fido": "V•ᴥ•V",
  "meow": "ฅ^•ﻌ•^ฅ",
  "cheers": "（ ^_^）o自自o（^_^ ）",
  "devious-smile": "ಠ‿ಠ",
  "4chan-emoticon": "( ͡° ͜ʖ ͡°)",
  "crying-face": "ಥ_ಥ",
  "breakdown": "ಥ﹏ಥ",
  "disagree": "٩◔̯◔۶",
  "flexing": "ᕙ(⇀‸↼‶)ᕗ",
  "do-you-even-lift-bro?": " ᕦ(ò_óˇ)ᕤ",
  "kirby": "⊂(◉‿◉)つ",
  "tripping-out": "q(❂‿❂)p",
  "discombobulated": "⊙﹏⊙",
  "sad-and-confused": "¯\\_(⊙︿⊙)_/¯",
  "japanese-lion-face": "°‿‿°",
  "confused": "¿ⓧ_ⓧﮌ",
  "confused-scratch": "(⊙.☉)7",
  "worried": "(´･_･`)",
  "dear-god-why": "щ（ﾟДﾟщ）",
  "staring": "٩(๏_๏)۶",
  "pretty-eyes": "ఠ_ఠ",
  "strut": "ᕕ( ᐛ )ᕗ",
  "zoned": "(⊙_◎)",
  "crazy": "ミ●﹏☉ミ",
  "trolling": "༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽",
  "angry-troll": "ヽ༼ ಠ益ಠ ༽ﾉ",
  "fuck-it": "t(-_-t)",
  "sad-face": "(ಥ⌣ಥ)",
  "hugger": "(づ￣ ³￣)づ",
  "stranger-danger": "(づ｡◕‿‿◕｡)づ",
  "flip-friend": "(ノಠ ∩ಠ)ノ彡( \\o°o)\\",
  "cry-face": "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡",
  "cry-troll": "༼ ༎ຶ ෴ ༎ຶ༽",
  "tgif": "“ヽ(´▽｀)ノ”",
  "dancing": "┌(ㆆ㉨ㆆ)ʃ",
  "sleepy": "눈_눈",
  "angry-birds": "( ఠൠఠ )ﾉ",
  "no-support": "乁( ◔ ౪◔)「      ┑(￣Д ￣)┍",
  "shy": "(๑•́ ₃ •̀๑)",
  "fly-away": "⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾",
  "careless": "◔_◔",
  "love": "-`ღ´-",
  "touchy-feely": "ԅ(≖‿≖ԅ)",
  "kissing": "( ˘ ³˘)♥",
  "shark-face": "( ˇ෴ˇ )",
  "emo-dance": "ヾ(-_- )ゞ",
  "dance": "♪♪ ヽ(ˇ∀ˇ )ゞ",
  "opera": "ヾ(´〇`)ﾉ♪♪♪",
  "winnie-the-pooh": "ʕ •́؈•̀)",
  "boxing": "ლ(•́•́ლ)",
  "fight": "(ง'̀-'́)ง",
  "listening-to-headphones": "◖ᵔᴥᵔ◗ ♪ ♫",
  "robot": "{•̃_•̃}",
  "seal": "(ᵔᴥᵔ)",
  "questionable": "(Ծ‸ Ծ)",
  "winning": "(•̀ᴗ•́)و ̑̑",
  "zombie": "[¬º-°]¬",
  "pointing": "(☞ﾟヮﾟ)☞",
  "whistling": "(っ•́｡•́)♪♬",
  "injured": "(҂◡_◡)",
  "creeper": "ƪ(ړײ)‎ƪ​​",
  "eye-roll": "⥀.⥀",
  "flying": "ح˚௰˚づ",
  "things-that-cant-be-unseen": "♨_♨",
  "looking-down": "(._.)",
  "im-a-hugger": "(⊃｡•́‿•̀｡)⊃",
  "wizard": "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ",
  "yum": "(っ˘ڡ˘ς)",
  "judging": "( ఠ ͟ʖ ఠ)",
  "tired": "( ͡ಠ ʖ̯ ͡ಠ)",
  "dislike": "( ಠ ʖ̯ ಠ)",
  "hitchhiking": "(งツ)ว",
  "satisfied": "(◠﹏◠)",
  "sad-and-crying": "(ᵟຶ︵ ᵟຶ)",
  "stunna-shades": "(っ▀¯▀)つ",
  "chicken": "ʚ(•｀",
  "barf": "(´ж｀ς)",
  "fuck-off": "(° ͜ʖ͡°)╭∩╮",
  "smiley-toast": "ʕʘ̅͜ʘ̅ʔ",
  "exorcism": "ح(•̀ж•́)ง †",
  "taking-a-dump": "(⩾﹏⩽)",
  "dab": "ヽ( •_)ᕗ",
  "wave-dance": "~(^-^)~",
  "happy-hug": "\\(ᵔᵕᵔ)/",
  "resting-my-eyes": "ᴖ̮ ̮ᴖ",
  "peepers": "ಠಠ",
  "judgemental": "{ಠʖಠ}"
}

/* Reference this by the given index */
var referenceByIndex = [
  "ʘ‿ʘ",
  "ಠ_ಠ",
  "(╯°□°）╯︵ ┻━┻", "┬─┬﻿ ノ( ゜-゜ノ)", "┬─┬⃰͡ (ᵔᵕᵔ͜ )",
  "┻━┻ ︵ヽ(`Д´)ﾉ︵﻿ ┻━┻", "ლ(｀ー´ლ)",
  "ʕ•ᴥ•ʔ",
  "ʕᵔᴥᵔʔ",
  "ʕ •`ᴥ•´ʔ",
  "(｡◕‿◕｡)",
  "（　ﾟДﾟ）",
  "¯\\_(ツ)_/¯",
  "¯\\(°_o)/¯",
  "(`･ω･´)",
  "(╬ ಠ益ಠ)",
  "ლ(ಠ益ಠლ)",
  "☜(⌒▽⌒)☞",
  "ε=ε=ε=┌(;*´Д`)ﾉ",
  "ヽ(´▽`)/",
  "ヽ(´ー｀)ノ",
  "ᵒᴥᵒ#",
  "V•ᴥ•V",
  "ฅ^•ﻌ•^ฅ",
  "（ ^_^）o自自o（^_^ ）",
  "ಠ‿ಠ",
  "( ͡° ͜ʖ ͡°)",
  "ಥ_ಥ",
  "ಥ﹏ಥ",
  "٩◔̯◔۶",
  "ᕙ(⇀‸↼‶)ᕗ",
  " ᕦ(ò_óˇ)ᕤ",
  "⊂(◉‿◉)つ",
   "q(❂‿❂)p",
   "⊙﹏⊙",
   "¯\\_(⊙︿⊙)_/¯",
   "°‿‿°",
   "¿ⓧ_ⓧﮌ", "(⊙.☉)7",
   "(´･_･`)",
   "щ（ﾟДﾟщ）",
   "٩(๏_๏)۶",
   "ఠ_ఠ",
   "ᕕ( ᐛ )ᕗ",
   "(⊙_◎)",
   "ミ●﹏☉ミ",
   "༼∵༽ ༼⍨༽ ༼⍢༽ ༼⍤༽",
   "ヽ༼ ಠ益ಠ ༽ﾉ",
   "t(-_-t)",
   "(ಥ⌣ಥ)",
   "(づ￣ ³￣)づ",
   "(づ｡◕‿‿◕｡)づ",
   "(ノಠ ∩ಠ)ノ彡( \\o°o)\\",
   "｡ﾟ( ﾟஇ‸இﾟ)ﾟ｡",
   "༼ ༎ຶ ෴ ༎ຶ༽",
   "“ヽ(´▽｀)ノ”",
   "┌(ㆆ㉨ㆆ)ʃ",
   "눈_눈",
   "( ఠൠఠ )ﾉ",
   "乁( ◔ ౪◔)「      ┑(￣Д ￣)┍",
   "(๑•́ ₃ •̀๑)",
   "⁽⁽ଘ( ˊᵕˋ )ଓ⁾⁾",
   "◔_◔", "♥‿♥",
   "ԅ(≖‿≖ԅ)",
   "( ˘ ³˘)♥",
   "( ˇ෴ˇ )",
   "ヾ(-_- )ゞ",
   "♪♪ ヽ(ˇ∀ˇ )ゞ",
   "ヾ(´〇`)ﾉ♪♪♪", "ʕ •́؈•̀)",
   "ლ(•́•́ლ)",
   "(ง'̀-'́)ง",
   "◖ᵔᴥᵔ◗ ♪ ♫",
   "{•̃_•̃}",
   "(ᵔᴥᵔ)",
   "(Ծ‸ Ծ)",
   "(•̀ᴗ•́)و ̑̑",
   "[¬º-°]¬",
   "(☞ﾟヮﾟ)☞",
   "(っ•́｡•́)♪♬",
   "(҂◡_◡)",
   "ƪ(ړײ)‎ƪ​​",
   "⥀.⥀",
   "ح˚௰˚づ",
   "♨_♨",
   "(._.)",
   "(⊃｡•́‿•̀｡)⊃",
   "(∩｀-´)⊃━☆ﾟ.*･｡ﾟ",
   "(っ˘ڡ˘ς)",
   "( ఠ ͟ʖ ఠ)",
   "( ͡ಠ ʖ̯ ͡ಠ)",
   "( ಠ ʖ̯ ಠ)",
   "(งツ)ว",
   "(◠﹏◠)",
   "(ᵟຶ︵ ᵟຶ)",
   "(っ▀¯▀)つ",
   "ʚ(•｀",
   "(´ж｀ς)",
   "(° ͜ʖ͡°)╭∩╮",
   "ʕʘ̅͜ʘ̅ʔ",
   "ح(•̀ж•́)ง †",
   "-`ღ´-",
   "(⩾﹏⩽)",
   "ヽ( •_)ᕗ",
   "~(^-^)~",
   "\\(ᵔᵕᵔ)/",
   "ᴖ̮ ̮ᴖ",
   "ಠಠ",
   "{ಠʖಠ}"
 ];

/*
  Passing in one argument allows retrieval of the value.
    If the argument is a string it attempts to get it from the referenceByObject as a value of the key
    If the argument is a number it attempts to get it from the referenceByIndex as a value of the index
  Passing in two arguments allows changing and adding emojis.
    If the first argument is a string it attempts to add/change a field of referenceByObject using the second argument as the value
    If the fist argument is a number it attempts add/change the value of that index in referenceByIndex to the second argument
*/
function emoji(){
   if(arguments.length == 1){
     if( isNaN(arguments[0]) ){
       if(referenceByObject[arguments[0]]){
         return referenceByObject[arguments[0]];
       }else{
         return null;
       }
     }else{
       if( parseInt(arguments[0]) >= 0 ){
         return referenceByIndex[ parseInt(arguments[0]) ];
       }else{
         return null;
       }
     }
   }else if(arguments.length == 2){
     if( isNaN(arguments[0]) ){
       referenceByObject[arguments[0]] = arguments[1];
       return referenceByObject;
     }else{
       if( parseInt(arguments[0]) >= 0 ){
         referenceByIndex[ parseInt(arguments[0]) ] = arguments[1];
         return referenceByIndex;
       }else{
         return null;
       }
     }
   }
 }

 /* For my beloved nodeJS people */
 if(typeof module !== 'undefined'){
   if(module.exports){
     module.exports.emoji = emoji; //Kind of a unorthodox way to provide compatibility to nodeJS but, hey... it ain't stupid if it works
   }
 }
