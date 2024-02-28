class PrintMachine{
    constructor(size = "14px", color = "black", family = "Times New Roman"){
        this.size = size;
        this.color = color;
        this.family = family;

    }

    print(text){
        document.write( `<span style="font-size:${this.size}; color:${this.color}; font-family:${this.family};">${text}</span>`);
    }
 }

let NewText = new PrintMachine("14","black","Times New Roman")

