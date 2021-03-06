
const Error = require('./APIError');
const base = 'https://server.zyrouge.gq/api/'
const fetch = require("node-fetch");
let token;
const EventEmitter = require("events");

class API extends EventEmitter{
    /**
     * 
     * @param {string} Token The API Token 
     */
    constructor(Token){

        super();
        if(!Token) throw new Error("No API TOKEN was Provided");
        if(typeof(Token) != 'string') throw new Error("Invalid type of API Key was provided");
        token = 'Bearer ' + Token;
    }
    /** 
     * @param {string} text1  Text 1 to apprear
     * @param {string} text2  Text 2 to appear
     * @param {string} text3  Text 3 to appear
     * @returns {buffer} The Processed image Buffer 
     */
    async balloon(text1, text2, text3){
        if(!text1 || !text2 || !text3) throw new Error("Inavlid parameters provided! Please check the docs");
        const res = await fetch(base + `balloon?text1=${text1}&text2=${text2}&text3=${text3}`,{
            headers:{
                Authorization: token
            }
        });
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async blur(image){
        if(!image) throw new Error("No Image URL Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `blur?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async bright(image){
        if(!image) throw new Error("No Image URL Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `brighten?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async captcha(image){
        if(!image) throw new Error("No Image URL Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `captcha?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @returns {string} A fact about cats
     */
    async catfact(){
        const res = await fetch(base + `catfacts`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.fact;
    }
    /**
     * @param {string} message The text for the image
     * @returns {buffer} The Processed image Buffer  
     */
    async cmm(message){
        if(!message) throw new Error("No Message Provided");
        const res = await fetch(base + `changemymind?text=${message}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async deepfry(image){
        if(!image) throw new Error("No Image Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `changemymind?text=${message}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @returns {string} A fact about dogs 
     */
    async dogfact(){
        const res = await fetch(base + `dogfacts`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.fact;
    }
    /**
     * @returns {string} A random eightball message 
     */
    async eightball(){
        const res = await fetch(base + `eightball`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.message;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */

    async fade(image){
        if(!image) throw new Error("No Image Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `fade?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @returns {string} A random fortune message 
     */
    async fortune(){
        const res = await fetch(base + `fortune`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.message;
    }
    /**
     * @returns {buffer} The Processed image Buffer 
     */
    async gah(){
        const res = await fetch(base + `gah`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async gray(image){
        if(!image) throw new Error("No Image Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `greyscale?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @returns {buffer} The Processed image Buffer 
     */
    async hug(){
        const res = await fetch(base + `hug`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async invert(image){
        if(!image) throw new Error("No Image Provided");
        if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
        const res = await fetch(base + `invert?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
         
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} song The song name
     * @returns {object} An object containing information about the song & its lyrics 
     */
    async lyrics(song){
        if(!song) throw new Error("No Song Name Provided!");
        const res = await fetch(base + `lyrics?song=${song}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if(!image) throw new Error("No Image Provided");
            if(typeof image !== 'string') throw new Error("image URL should be passed as a STRING");
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf;
    }
    /**
     * @param {string} image The Image for the Profile Picture
     * @param {string} username The Username of the comment author
     * @param {string} message The content of the comment
     * @returns {buffer} The processed image 
     */
    async comment(image, username, message){
        if(!image) throw new Error("No Image URL Provided!");
        if(!username) throw new Error("No username Provided!");
        if(!message) throw new Error("No message Provided!");

        const res = await fetch(base + `phubcomment?image=${image}&username=${username}&message=${message}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
     /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async pixel(image){
        if(!image) throw new Error("No Image URL Provided!");

        const res = await fetch(base + `pixelate?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
           
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @returns {string} A random roast
     */
    async roast(){

        const res = await fetch(base + `roasts`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.roast;
    }
    /**
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async sepia(image){
        if(!image) throw new Error("No Image URL Provided!");
        const res = await fetch(base + `sepia?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
           
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image1 Image URL of the first image
     * @param {string} image2 Image URL of the second image
     * @returns {buffer} The Processed image Buffer 
     */
    async ship(image1, image2){
        if(!image1) throw new Error("First Image URL not Provided!");
        if(!image2) throw new Error("Second Image URL not Provided!");
        const res = await fetch(base + `ship?image1=${image1}&image2=${image2}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
           
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /** 
     * @param {string} image The Image URL
     * @returns {buffer} The Processed image Buffer 
     */
    async trigger(image){
        if(!image) throw new Error("Image URL Provided!");
        const res = await fetch(base + `trigger?image=${image}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
           
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} image The URL for profile picture of the tweet author
     * @param {string} username The username of the tweet author
     * @param {string} message The message content of the tweet
     * @returns {buffer} The Processed image Buffer 
     */
    async tweet(image, username, message){
        if(!image) throw new Error("No Image URL Provided!");
        if(!username) throw new Error("No username Provided!");
        if(!message) throw new Error("No message Provided!");

        const res = await fetch(base + `tweet?image=${image}&username=${username}&message=${message}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {string} text1 First text for Winnie The Pooh
     * @param {string} text2 Second text for Winnie the Pooh
     * @returns {buffer} The Processed image Buffer 
     */
    async wtp(text1, text2){
        if(!text1) throw new Error("Text 1 not Provided!");
        if(!text2) throw new Error("Text 2 not Provided!");

        const res = await fetch(base + `winniethepooh?text1=${text1}&text2=${text2}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf.image;
    }
    /**
     * @param {boolean} nsfw Wheter to include NSFW searches
     * @returns {object} An object containing the question and other things 
     */
    async wyr(nsfw = false){

        const res = await fetch(base + `wouldyourather?nsfw=${nsfw}`,{
            headers:{
                Authorization: token
            }
        })
        if (res.status !== 200) {
            if (res.status >= 500)
                throw new Error(`Internal Server Error: ${res.status}`);
            switch (res.status) {
                case 400:
                    throw new Error("Bad api request");
                case 401:
                    throw new Error("Invalid API Key")
                case 403:
                    throw new Error("Invalid api key");
                case 404:
                    throw new Error("Route not found");
                case 429:
                    throw new Error("Too many requests");
                    break;
                default:
                    throw new Error(`Unknown Error: Status: ${res.status}, Text: ${res.statusText}`);
                    break;
            }
        }
        const buf = await res.json();
        return buf;
    }
    
    
}
module.exports = API;