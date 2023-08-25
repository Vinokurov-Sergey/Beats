(function() {
    let myMap;

const init = () => {
    myMap = new ymaps.Map('map', {
        center: [57.430754, 56.946008],
        zoom: 14,
        controls: []
    });

    const coords = [

        [57.43601888878959,56.936424535354504],
        [57.428195411023566,56.95470647200002],
        [57.43949030851178,56.951702397903354]

    ];
    const myCollection = new ymaps.GeoObjectCollection({}, {
        draggable: false,
        iconLayout: 'default#image',
        iconImageHref:'./img/marker.svg',
        iconImageSize: [58, 73],
        // iconImageOffset: [-58, -73]
    });

    coords.forEach(coord => {
        myCollection.add(new ymaps.Placemark(coord));
    });
    myMap.geoObjects.add(myCollection);
    myMap.behaviors.disable('scrollZoom');
    // console.log(myMap.geoObjects);
}

ymaps.ready(init);
})()

