class Photo {
    constructor(width = 8, height = 10) {
        this.width = width;
        this.height =height;
    }
    price() {
        let finalPrice;
        switch(this.width, this.height) {
            case 8, 10:
                finalPrice = 4;
                break;
            case 10, 12:
                finalPrice = 6;
                break;
            default:
                finalPrice = 10;
                break;
        }

        return finalPrice;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} photo and it costs ${this.price()}`;
    }
}

class MattedPhoto extends Photo {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }
    price() {
        return super.price() + 10;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} matted ${this.color} photo and it costs ${this.price()}`;
    }
}

class FramedPhoto extends Photo {
    constructor(width, height, material, style) {
        super(width, height);
        this.material = material;
        this.style = style;
    }

    price() {
        return super.price() + 25;
    }

    toString() {
        return `This is a ${this.width} by ${this.height} material ${this.material} framed photo. The style is ${this.style} and it costs ${this.price()}`;
    }
}

let photo1 = new Photo(8, 10);
console.log(photo1.toString());
let photo2 = new Photo(10, 12);
console.log(photo2.toString());
let matPhoto1 = new MattedPhoto(10, 12, "blue");
console.log(matPhoto1.toString());
let matPhoto2 = new MattedPhoto(8, 10, "green");
console.log(matPhoto1.toString());
let frPhoto1 = new FramedPhoto(11, 13, "silver", "gothic");
console.log(frPhoto1.toString());
let frPhoto2 = new FramedPhoto(14, 15, "gold", "mpdern");
console.log(frPhoto2.toString());