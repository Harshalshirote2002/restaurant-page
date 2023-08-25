import image1 from './images/icon3.png';
import image2 from './images/location1.png';

export default function createMain() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = new Image();
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.src=image1;
    const location = new Image();
    location.src = image2;
    location.classList.add('search-bar-image');
    search.textContent = 'find the nearest Eats-a-Mazing';
    search.appendChild(location);
    header.appendChild(logo);
    header.appendChild(search);
    container.appendChild(header);

    const main = document.createElement('main');

    const venues = [
        {
            location: 'Mumbai',
            address: 'juhu beach 1461',
            special: 'Lorem ipsum dolrat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Delhi',
            address: 'evergreen plaza, west delhi',
            special: 'Lorem ipsum a, local fresh pizzeria.'
        },
        {
            location: 'Bangalore',
            address: 'mega mall, downtown',
            special: 'great crust sandwich, Cum in eos saepe sit commodiiti, incidudunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Calcutta',
            address: 'mini mall, flour factory',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa,'
        },
        {
            location: 'Chennai',
            address: 'marine drive 954',
            special: ' elit. drive thru diner. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Pune',
            address: 'deccan pool 321',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. fresh fruit market iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Lucknow',
            address: 'ganga mall, westside',
            special: 'Lorem ipsum whatever you want! distinctio fugiat deleniti, incidunpsa incidunt iusto dolore amet reprehenderit sunt consequuntur.'
        },
        {
            location: 'Coimbatore',
            address: 'kest port, northside',
            special: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe siteniti, incidunt quos quaerat. Aliquam culpa, egyptian tacos with sauce! reprehenderit sunt consequuntur.'
        },
        {
            location: 'Kolhapur',
            address: 'ahead of the one behind',
            special: 'Nothing much here, its quite a small town. just the- Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat'
        },

    ];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('location');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = venues[i].location;
        address.textContent = venues[i].address;
        content.textContent = venues[i].special;
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}
