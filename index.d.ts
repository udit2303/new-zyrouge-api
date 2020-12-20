declare module "zyrouge-api" {
export class API {
    constructor(Token: string);
    public balloon(text1: string, text2: string, text3: string): Promise<Buffer>;
    public blur(image: string): Promise<Buffer>;
    public bright(image: string): Promise<Buffer>;
    public captcha(image: string): Promise<Buffer>;
    public catfact(): Promise<String>;
    public cmm(message: string): Promise<Buffer>;
    public dogfact(): Promise<String>;
    public deepfry(image: string): Promise<Buffer>;
    public eightball(): Promise<String>;
    public fade(image: string): Promise<Buffer>;
    public fortune(): Promise<String>;
    public gah(): Promise<Buffer>;
    public gray(image: string): Promise<Buffer>;
    public hug(): Promise<Buffer>;
    public invert(image: string): Promise<Buffer>;
    public lyrics(song: string): Promise<Object>;
    public comment(image: string, username: string, message: string): Promise<Buffer>;
    public pixel(image: string): Promise<Buffer>;
    public roast(): Promise<String>;
    public sepia(image: string): Promise<Buffer>;
    public ship(image1: string, image2:string): Promise<Buffer>;
    public trigger(image: string): Promise<Buffer>;
    public tweet(image: string, username: string, message: string): Promise<Buffer>;
    public wtp(text2: string, text1:string): Promise<Buffer>;
    public wyr(nsfw: boolean): Promise<Object>;
}

export const version: string;
}