import image1 from './images/leaderboard1.png';

export default function createChefs() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const board = document.createElement('div');
    const logo = new Image();

    container.classList.add('container');
    logo.classList.add('logo');
    board.classList.add('announcement');

    logo.src = image1;
    board.textContent='Chefs leaderboard';
    header.appendChild(logo);
    header.appendChild(board);
    container.appendChild(header);

    const main = document.createElement('main');

    const chefs = ['Tom', 'Matthew', 'Dan', 'Jack', 'William', 'Megan', 'Jim', 'Klaus', 'Sarah'];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('chef');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = `#${i+1}`;
        address.textContent = chefs[i];
        content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.';
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}
