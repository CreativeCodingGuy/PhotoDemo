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

let photo1 = new Photo(8, 10);
console.log(photo1.toString());
let photo2 = new Photo(10, 12);
console.log(photo2.toString());