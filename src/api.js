
/* Base */
const err = require('./APIError');
const base = 'https://dev.zyrouge.gq/api/'
const fetch = require("node-fetch");
let token;
const EventEmitter = require("events");
/* Functions */
const blr = require("./functions/blur");
const cat = require("./functions/catfact");
const eb = require("./functions/eightball");
const br = require("./functions/bright");
const cap = require('./functions/captcha');
const change = require("./functions/cmm");
const cof = require('./functions/coffee');
const deep = require("./functions/deepfry");
const dog = require('./functions/dogfact');
const fact = require("./functions/fact");
const fade = require("./functions/fade");
const feed =  require("./functions/feed");
const food = require("./functions/food");
const fortune = require('./functions/fortune');
const gh = require("./functions/gah");
const gray = require("./functions/grayscale");
const hg = require("./functions/hug");
const invrt = require("./functions/invert");
const jk = require('./functions/joke');
const ly = require("./functions/lyrics");
const pt = require("./functions/pat");
const ph = require("./functions/phub");
const pxl = require("./functions/pixel");
const qte = require("./functions/quote");
const rdr = require("./functions/reddit");
const rst = require("./functions/roast");
const sep = require("./functions/sepia");
const smg = require("./functions/smug");
const trig = require("./functions/trgger");
const twt = require("./functions/tweet");
const uri = require("./functions/uri2img");
const wtr = require('./functions/weather');
const winnie = require("./functions/wtp");
const would = require("./functions/wyr");


/* Main Code */

class API extends EventEmitter{
 
    constructor(Token){

         /**
          * The API Token
          *  @param {string} token API Token
          */

        super();
        if(!Token) throw new err("No API TOKEN was Provided");
        if(typeof(Token) != 'string') throw new err("Invalid type of API Key was provided");
        token = 'bearer ' + Token;
    }

    /**
     * blur - Returns blurred image
     * @param {string} - Image URL
     */

    async blur(url){
            
    }
    async catfact(){

    }
    async eightball(){

    }
    async feed(){

    }
    async grayscale(){

    }
    async joke(){

    } 
    async phub(){

    }
    async roast(){

    }
    async slap(){

    }
    async trigger(){

    }
    async weather(){

    }
    async bright(){

    }
    async cmm(){

    }
    async deepfry(){

    }
    async fact(){

    }
    async food(){

    }
    async gah(){

    }
    async hug(){

    }
    async lyrics(){

    }
    async pixel(){

    }
    async quote(){

    }
    async sepia(){

    }
    async smug(){

    }
    async tweet(){

    }
    async wtp(){

    }
    async balloon(){

    }
    async captcha(){

    }
    async coffee(){

    }
    async dogfact(){

    }
    async fade(){

    }
    async fortune(){

    }
    
    async invert(){

    }
    async pat(){

    }

    async reddit(){

    }
    async uri2img(){

    }
    async wyr(){

    }
}
module.exports = API;