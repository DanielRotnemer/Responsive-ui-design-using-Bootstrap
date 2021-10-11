class Car
{

    // private variables
    #image;
    #name;
    #doors;
    #seats;
    #engine;
    #gear;
    #price;
    #km;

    // constructor
    constructor (image, name, doors, seats, engine, price, km, gear = 'Auto')
    {
        // set values using the below defined set functions
        this.image = image;
        this.name = name;
        this.doors = doors;
        this.seats = seats;
        this.engine = engine;
        this.price = price;
        this.km = km;
        this.gear = gear;
    }

    // setters
    set image(image) {
        this.#image = image;
    }

    set name(name) {
        this.#name = name;
    }

    set doors(doors) {
        if (doors <= 0) {
            alert("Number of doors can't be <= 0");
            return;
        }
        this.#doors = doors + " doors";
    }

    set seats(seats) {
        if (seats <= 0) {
            alert("Number of seats can't be <= 0");
            return;
        }
        this.#seats = seats + " seats";
    }

    set engine(engine) {
        this.#engine = "Motor: " + engine;
    }

    set price(price) {
        if (price <= 0) {
            alert("Price can't be <= 0");
            return;
        }
        this.#price = "$ " + price;
    }

    set km(km) {
        this.#km = km + " km";
    }

    set gear(gear) {
        if (gear != 'Auto' && gear != 'Manual') {
            alert("Invalid value were given for gear");
            return;
        }
        this.#gear = gear;
    }

    // load data to the page
    loadData(index)
    {
        $($(".car-image")[index]).attr("src", this.#image);
        $($(".car-name")[index]).find("a").text(this.#name);
        $($("[data-itm=doors]")[index]).text(this.#doors);
        $($("[data-itm=seats]")[index]).text(this.#seats);
        $($("[data-itm=motor]")[index]).text(this.#engine);
        $($("[data-itm=gear]")[index]).text(this.#gear);
        $($(".price")[index]).text(this.#price);
        $($(".km")[index]).text(this.#km);

    }
}

// instantiate cars
$(window).on("load", function()
{
    let cars = 
    [
        new Car('images/1.jpg', 'Chevrolet traverse 2017', 4, 6, 'CT2017', 60000, 2589, 'Auto'),
        new Car('images/2.jpg', 'Volkswagen pasat 2017', 4, 6, 'VP2017', 90000, 1523, 'Auto'),
        new Car('images/3.jpg', 'Audi A3 2017', 4, 6, 'AA32017', 75000, 3256, 'Auto'),
        new Car('images/4.jpg', 'Bugatti chiron 2017', 4, 6, 'BC2017', 750000, 2547, 'Auto')
    ];

    for (let i = 0; i < cars.length; i++) {
        cars[i].loadData(i);
    }
}); 