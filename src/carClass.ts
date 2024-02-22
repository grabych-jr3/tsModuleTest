export class Car{
    color: string;
    wheels: number;
    constructor(color: string, wheels: number){
        this.color = color;
        this.wheels = wheels;
    }
    makeBeep(){
        console.log("Beep Beep");
    }
}