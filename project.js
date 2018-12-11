//Main class which help to create some applaince for home
class ElectricAppliances {
    constructor(name,model,comp,price,status) {
        this.name = name;
        this.model = model;
        this.comp = comp;
        this.price = price;
        this.status = status;
    }
    display() {
        console.log(this.name + ' ' + this.model + ' ' + this.comp + ' ' + this.price + ' ' + this.status);
    }
    static houseInfo() {
        console.log('All applainces is Off now');
    }
}
// constructor for CoofeeMaker
class CoffeeMaker extends ElectricAppliances {
    constructor(name,model,comp,price,status) {
        super(name,model,comp,price,status);
    }
    display() {
        console.log('--------------------------');
        super.display();
    }
}
// constructor for Fridge
class Fridge extends ElectricAppliances {
    constructor(name,model,comp,price,status) {
        super(name,model,comp,price,status);
    }
    display() {
        console.log('--------------------------');
        super.display();
    }
}
// constructor for Kettle
class Kettle extends ElectricAppliances {
    constructor(name,model,comp,price,status) {
        super(name,model,comp,price,status);
    }
    display() {
        console.log('--------------------------');
        super.display();
    }
}
// constructor for Radio
class Radio extends ElectricAppliances {
    constructor(name,model,comp,price,status) {
        super(name,model,comp,price,status);
    }
    display() {
        console.log('--------------------------');
        super.display();
    }
}

// Create examples of classes
let coffee = new CoffeeMaker('Coffee machine','A89888','LG', '12000$','Working');
let radio = new Radio('MP3','iPod','Apple','120$','Off');
let kettle = new Kettle('Kettle','K4fdsf','Bosh','25$','Working');
let fridge = new Fridge('Fridge','LG890','LG','3400$','Working');
ElectricAppliances.houseInfo();

//Interface for work with user
let appChoose = prompt('You can choose from this list [<coffee>,<radio>,<kettle>,<fridge>,<show all>]');
switch(appChoose) {
    case 'coffee':
        coffee.display();
        break;
    case 'radio':
        radio.display();
        break;
    case 'kettle':
        kettle.display();
        break;
    case 'fridge':
        fridge.display();
        break;
    case 'show all':
        coffee.display();
        radio.display();
        kettle.display();
        fridge.display();
        break;
    case '':
        console.log("Please field can't be empty");
        appChoose = prompt('You can choose from this list [<coffee>,<radio>,<kettle>,<fridge>,<show all>]');
        break;
}
//
