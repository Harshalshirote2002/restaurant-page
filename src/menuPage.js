export default function createMenu() {
    const container = document.createElement('div');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const search = document.createElement('div');

    container.classList.add('container');
    logo.classList.add('logo')
    search.classList.add('search');

    logo.textContent = 'GrubHubbub';
    search.textContent = 'enter your favorite item';
    header.appendChild(logo);
    header.appendChild(search);
    container.appendChild(header);

    const main = document.createElement('main');

    const items = ['Pizza', 'Burger', 'Sandwich', 'Roll', 'Pudding', 'Fries', 'Pancake', 'Coke', 'Chocolate'];

    for (let i = 0; i < 9; i++) {
        let card = document.createElement('div');
        card.classList.add('item');
        let address = document.createElement('p');
        let content = document.createElement('p');
        card.textContent = items[i];
        address.textContent = 'variations';
        content.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum in eos saepe sit commodi distinctio fugiat deleniti, incidunt quos quaerat. Aliquam culpa, ipsa incidunt iusto dolore amet reprehenderit sunt consequuntur.';
        card.appendChild(address);
        card.appendChild(content);
        main.appendChild(card);
    }
    container.appendChild(main);
    return container;
}
