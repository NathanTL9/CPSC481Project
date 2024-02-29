//Our 'database'
const pins = new Map([
    [
        "Calgary Tower", //Key
        {
            ping: 'yellow', 
            title: 'Calgary Tower', 
            subtitle: '', 
            lat: 51.04435, 
            long:-114.06312, 
            type: 'Landmark',
            rating: 4,
            price: 2,
            address: '101 9 Ave SW, Calgary, AB T2P 1J9',
            todaysHours: '9:00 am - 9:00 pm',
            allHours: {
                M: '9:00 am - 9:00 pm',
                T: '9:00 am - 9:00 pm',
                W: '9:00 am - 9:00 pm',
                Th: '9:00 am - 9:00 pm',
                F: '9:00 am - 9:00 pm',
                S: '9:00 am - 9:00 pm',
                Su : '9:00 am - 9:00 pm'
            },
            link: '',
            description: 'The Calgary Tower is a 190.8-meter free standing observation tower in the downtown core of Calgary, Alberta, Canada. Originally called the Husky Tower', 
            image: 'calgary-tower.jpg'
        } 
    ],
    [
        "CHARCUT Roast House", 
        {
            ping: 'red', 
            title: 'CHARCUT Roast House', 
            subtitle: 'European, French, Tapas', 
            lat: 51.04510450463669, 
            long: -114.06331660343359,
            type: 'food',
            rating: 4.3,
            price: 3,
            address: '899 Centre St S, Calgary, AB T2G 1B8',
            todaysHours: '11:00 am – 10:00 pm',
            allHours: {
                M: '11:00 am – 10:00 pm',
                T: '11:00 am – 10:00 pm',
                W: '11:00 am – 10:00 pm',
                Th: '11:00 am – 10:00 pm',
                F: '11:00 am – 10:00 pm',
                S: '4:00 am – 11:00 pm',
                Su : '4:00 am – 10:00 pm'
            },
            link: '/food/1/',
            description: 'CHARCUT Roast House creates an inviting, memorable gathering place with high energy and spontaneity.',
            image: 'charcut-roast-house.jpg' 
        }
    ],
    [ 
        "Winners", 
        {
            ping: 'green', 
            title: 'Winners', 
            subtitle: 'Department store', 
            lat: 51.04577122192692, 
            long: -114.06465482055292,
            type: 'shopping',
            rating: 4.2,
            price: 1,
            address: '128 8 Ave SW, Calgary, AB T2P 1B3',
            todaysHours: '9:30 am – 8:00 pm',
            allHours: {
                M: '9:30 am – 8:00 pm',
                T: '9:30 am – 8:00 pm',
                W: '9:30 am – 8:00 pm',
                Th: '9:30 am – 8:00 pm',
                F: '9:30 am – 8:00 pm',
                S: '9:00 am – 7:00 pm',
                Su : '10:00 am – 6:00 pm'
            },
            link: '/shopping/1/',
            description: 'At WINNERS, we deliver great value on ever-changing selections of brand name, designer and other high-quality fashions at prices generally 20%-60% below full-price retailers’ (including department, specialty, and major online retailers) regular prices on comparable merchandise, every day', 
            image: 'winner.jpg' 
        }
    ],
    [ 
        "Le Germain Hotel Calgary", 
        {
            ping: 'blue', 
            title: 'Le Germain Hotel Calgary', 
            subtitle: 'Hotel', 
            lat: 51.044920055444955, 
            long: -114.06336773806562,
            type: 'lodging',
            rating: 4.6,
            price: 4,
            address: '899 Centre St S, Calgary, AB T2G 1B8',
            todaysHours: 'Check-in: 4:00pm-7:00pm',
            allHours: {
                M: 'Check-in: 4:00pm-7:00pm',
                T: 'Check-in: 4:00pm-7:00pm',
                W: 'Check-in: 4:00pm-7:00pm',
                Th: 'Check-in: 4:00pm-7:00pm',
                F: 'Check-in: 4:00pm-7:00pm',
                S: 'Check-in: 4:00pm-7:00pm',
                Su : 'Check-in: 4:00pm-7:00pm'
            },
            link: '/lodging/1/',
            description: 'Across the street from Calgary Tower, this modern, upscale hotel is a 4-minute walk from Arts Commons and 5 km from Calgary Zoo.',
            image: 'le-germain-hotel-calgary.jpg'  
        }
    ],
    [
        "Glenbow Museum", 
        {
            ping: 'purple', 
            title: 'Glenbow Museum', 
            subtitle: 'Art and History Regional Museum', 
            lat: 51.04501885187849, 
            long: -114.06111831337606,
            type: 'activity',
            rating: 3.9,
            price:  2,
            address: '130 9 Ave SE, Calgary, AB T2G 0P3',
            todaysHours: '9:00am - 7:00pm',
            allHours: {
                M: '9:00am - 7:00pm',
                T: '9:00am - 7:00pm',
                W: '9:00am - 7:00pm',
                Th: '9:00am - 7:00pm',
                F: '9:00am - 7:00pm',
                S: '11:00am - 6:00pm',
                Su : 'Closed'
            },
            link: '/activities/1/',
            description: 'Across the street from Calgary Tower, this modern, upscale hotel is a 4-minute walk from Arts Commons and 5 km from Calgary Zoo.Art & area history museum with a permanent collection & archives, plus visiting exhibits & events.',
            image: 'glenbow-exterior.jpg' 
        }
    ]
]);

const map_NW = {x: 51.19250722860406, y: -114.28297268911777};
const map_SE = {x: 50.84597626043085, y: -113.87439209135317};


//Function to load the map based on position
function loadBingMap(_Mapinit) {  
   var map_bounding_box = Microsoft.Maps.LocationRect.fromCorners(
        new Microsoft.Maps.Location(map_NW.x, map_NW.y), 
        new Microsoft.Maps.Location(map_SE.x, map_SE.y)
    );
    MapOptions = {
        center: new Microsoft.Maps.Location(_Mapinit._lat, _Mapinit._long),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: _Mapinit._zoom,
        //minZoom: 11,
        maxBounds: map_bounding_box,
        showScalebar: false,
        showDashboard: false
     };
    var map = new Microsoft.Maps.Map(document.getElementById('map'), MapOptions);
    if(_Mapinit.clicked.length == 0){
        for (var [key, value] of pins.entries()) 
            createColoredPushpin(key,new Microsoft.Maps.Location(value.lat, value.long), value.ping, value.title, value.subtitle, map, value.link);
    }else{
        for (var [key, value] of pins.entries()){
            if(_Mapinit.clicked.includes(value.type))
            createColoredPushpin(key,new Microsoft.Maps.Location(value.lat, value.long), value.ping, value.title, value.subtitle, map, value.link);
        } 
    }
     return "";
}

function getPin(key) {  
    return pins.get(key);
}

function getAllPins() {  
    return pins;
}

function createColoredPushpin(key, location, color, title, subtitle, map, link) {
    var pin = new Microsoft.Maps.Pushpin(
        location, 
        {
            color: color,
            title: title,
            subTitle: subtitle
        }
    );
    map.entities.push(pin);
    Microsoft.Maps.Events.addHandler(pin, 'click', function () { infoPopup(key, map, link); });
}

function infoPopup(key, map, link) {
    var pin = pins.get(key);
    var infoboxOptions = {
        title: pin.title , 
        description: GeneratePopupDescription(pin.address, pin.todaysHours, pin.image, pin.description), 
        maxHeight: 900,
        maxWidth: 500
    }; 
    if(!(link === ''))
        infoboxOptions.description += "<div><a id='add-task' href=" + link + " type='button' style='background-color: #f44336; border: none; color: white; padding: 5px 5px; text-align: center; text-decoration: none; display: inline-block; font-size: 15px; margin: 1px 1px; cursor: pointer;'>See more info</a></div>";
    var infobox = new Microsoft.Maps.Infobox(new Microsoft.Maps.Location(pin.lat, pin.long), infoboxOptions );    
    infobox.setMap(map);
}

function GeneratePopupDescription(address, todaysHours, image, description){
    var ret = "<img src='/textures/" + image + "' style='width: auto; height: 160px; border: solid 3px #f44336' ><br>" + address + '<br>' + todaysHours + '<br>' + description;
    return ret;
}