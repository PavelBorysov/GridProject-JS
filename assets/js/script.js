const carArr = [{
        id: 1,
        brand: "Alpina B5 (F10)",
        year: 2015,
        photo: 'assets/img/Alpina-F10.jpg',
        type: 'Sedan',
        price: '45000$',
    },
    {
        id: 2,
        brand: "BMW X7 (G07)",
        year: 2020,
        photo: 'assets/img/BMW-X7.jpg',
        type: 'SUV',
        price: '89000$',
    },
    {
        id: 3,
        brand: "Ford Mustang",
        year: 2023,
        photo: 'assets/img/Ford-Mustang.jpg',
        type: 'Coupe',
        price: '35000$',
    },
    {
        id: 4,
        brand: "Mercedes-Benz E300 (w213)",
        year: 2019,
        photo: 'assets/img/MB-E300.jpg',
        type: 'Sedan',
        price: '40000$',
    },
    {
        id: 5,
        brand: "Maserati Ghibli",
        year: 2017,
        photo: 'assets/img/Maserati-Ghibli.jpg',
        type: 'Sedan',
        price: '38000$',
    },
    {
        id: 6,
        brand: "Bentley Continental GT",
        year: 2023,
        photo: 'assets/img/Bentley-Continental-GT.jpg',
        type: 'Coupe',
        price: '380000$',
    },
    {
        id: 7,
        brand: "Alpina B4 (F33)",
        year: 2018,
        photo: 'assets/img/Alpina-B4.jpg',
        type: 'Coupe',
        price: '55000$',
    },
    {
        id: 8,
        brand: "Land Rover Defender",
        year: 2022,
        photo: 'assets/img/LR-Defender.jpg',
        type: 'SUV',
        price: '215000$',
    },
    {
        id: 9,
        brand: "Mercedes-Benz G-Class Professional Line (W463A)",
        year: 2021,
        photo: 'assets/img/MB-G-class.jpg',
        type: 'SUV',
        price: '180000$',
    },
    {
        id: 10,
        brand: "Acura TLX",
        year: 2016,
        photo: 'assets/img/Acura-TLX.jpg',
        type: 'Sedan',
        price: '18000$',
    },
    {
        id: 11,
        brand: "BMW X5 (G05)",
        year: 2019,
        photo: 'assets/img/BMW-X5.jpg',
        type: 'SUV',
        price: '58000$',
    },
    {
        id: 12,
        brand: "Ferrari FF",
        year: 2016,
        photo: 'assets/img/Ferrari-FF.jpg',
        type: 'Coupe',
        price: '165000$',
    },
    {
        id: 13,
        brand: "Alfa Romeo Giulia",
        year: 2018,
        photo: 'assets/img/Alfa-Romeo-Giulia.jpg',
        type: 'Sedan',
        price: '23000$',
    },
    {
        id: 14,
        brand: "Audi Q7 (4M)",
        year: 2022,
        photo: 'assets/img/Audi-Q7.jpg',
        type: 'SUV',
        price: '95000$',
    },
    {
        id: 15,
        brand: "BMW i8 (I12)",
        year: 2018,
        photo: 'assets/img/BMW-i8.jpg',
        type: 'Coupe',
        price: '110000$',
    },
    {
        id: 16,
        brand: "Bentley Flying Spur",
        year: 2021,
        photo: 'assets/img/Bentley-Flying-Spur.jpg',
        type: 'Sedan',
        price: '330000$',
    },
    {
        id: 17,
        brand: "Jaguar F-Pace",
        year: 2017,
        photo: 'assets/img/Jaguar-F-Pace.jpg',
        type: 'SUV',
        price: '30000$',
    },
    {
        id: 18,
        brand: "Lexus LC500",
        year: 2019,
        photo: 'assets/img/Lexus-LC500.jpg',
        type: 'Coupe',
        price: '75000$',
    },
    {
        id: 19,
        brand: "Toyota Land Cruiser 300GR",
        year: 2023,
        photo: 'assets/img/LC-300GR.jpg',
        type: 'SUV',
        price: '98000$',
    },
    {
        id: 20,
        brand: "Jaguar F-Type",
        year: 2016,
        photo: 'assets/img/Jaguar-F-Type.jpg',
        type: 'Coupe',
        price: '53000$',
    },
    {
        id: 21,
        brand: "Jeep Wrangler",
        year: 2020,
        photo: 'assets/img/Jeep-Wrangler.jpg',
        type: 'SUV',
        price: '50000$',
    },
    {
        id: 22,
        brand: "Mercedes-Benz S-Class (w222r)",
        year: 2020,
        photo: 'assets/img/MB-S-Class.jpg',
        type: 'Sedan',
        price: '80000$',
    },
    {
        id: 23,
        brand: "Porsche Cayman 718",
        year: 2021,
        photo: 'assets/img/Porsche-Cayman-718.jpg',
        type: 'Coupe',
        price: '90000$',
    },
    {
        id: 24,
        brand: "Tank 300 Frontier Edition",
        year: 2022,
        photo: 'assets/img/Tank-300.jpg',
        type: 'SUV',
        price: '62000$',
    },
    {
        id: 25,
        brand: "Jaguar XKR",
        year: 2015,
        photo: 'assets/img/Jaguar-XKR.jpg',
        type: 'Coupe',
        price: '40000$',
    },
    {
        id: 26,
        brand: "KIA Telluride",
        year: 2020,
        photo: 'assets/img/KIA-Telluride.jpg',
        type: 'SUV',
        price: '31000$',
    },
    {
        id: 27,
        brand: "Rolls-Royce Cullinan",
        year: 2020,
        photo: 'assets/img/RR-Cullinan.jpg',
        type: 'SUV',
        price: '400000$',
    },
    {
        id: 28,
        brand: "Nissan GTR (R35)",
        year: 2017,
        photo: 'assets/img/Nissan-GTR.jpg',
        type: 'Coupe',
        price: '105000$',
    },
    {
        id: 29,
        brand: "Porsche Macan",
        year: 2018,
        photo: 'assets/img/Porsche-Macan.jpg',
        type: 'SUV',
        price: '40000$',
    },
    {
        id: 30,
        brand: "Peugeot 508",
        year: 2021,
        photo: 'assets/img/Peugeot-508.jpg',
        type: 'Sedan',
        price: '28000$',
    },
    {
        id: 31,
        brand: "Volvo XC90",
        year: 2023,
        photo: 'assets/img/Volvo-XC90.jpg',
        type: 'SUV',
        price: '95000$',
    },
    {
        id: 32,
        brand: "Alpina XD3 (G01)",
        year: 2019,
        photo: 'assets/img/Alpina-XD3.jpg',
        type: 'SUV',
        price: '50000$',
    },
]

window.addEventListener('load', function () {
    const usersContainer = document.querySelector('.users-container')
    const carBodyRadio = document.querySelectorAll('[type="radio"]')
    const yearRange = document.querySelector('#yearFilter')



    const renderCar = (cars) => {

        const list = cars.map(car => {
            return (
                `
                <div class="user">
                <div class="car-photo">
                    <a class="img-fluid" href="${car.photo}" data-fancybox="">
                        <img class="img-fluid" src="${car.photo}">
                    </a>
                </div>
                <div class="car-info">
                    <div class="car-name">${car.brand}</div>
                    <div class="car-body">Vehicle types: ${car.type}</div>
                    <div class="car-registration-date">First registration: ${car.year}</div>
                    <div class="car-price">Price: ${car.price}</div>
                </div>
            </div>
                `
            )
        }).join("")
        usersContainer.innerHTML = list
    }
    renderCar(carArr)

    const state = {
        type: "all",
        year: '2023'
    }

    function getBodyValue() {
        carBodyRadio.forEach(item => {
            item.addEventListener('click', (event) => {

                let val = event.target.value
                state.type = val

                const filteredType = mainFilter()
                renderCar(filteredType);
            })
        })
    }
    getBodyValue()

    function getYearValue() {
        yearRange.addEventListener('click', (event) => {

            let val = event.target.value
            state.year = val

            const filteredYear = mainFilter()
            renderCar(filteredYear);
        })
    }
    getYearValue()



    function mainFilter() {
        const filtered = carArr.filter(item => {
            const setYear = item.year <= state.year
            const setType = state.type === 'all' ? carArr : item.type === state.type

            return setYear && setType
        })
        return filtered
    }
})