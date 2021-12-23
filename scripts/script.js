document.addEventListener('DOMContentLoaded', () => {

});

const personContainer = document.querySelector('.cards-container');

const tourists = [
  {
    name: 'Alexandra Herrero',
    profession: 'Member of the White House Council for Community Solutions',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person1.jpeg',
  },
  {
    name: 'Nelson Olivares',
    profession: 'Superintendent in the School District of Washington, Indiana',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person2.jpeg',
  },
  {
    name: 'Mario Ros',
    profession: 'Dean of the School of Information Studies, University of California',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person3.jpeg',
  },
  {
    name: 'Vanesa Frutos',
    profession: 'Editor-in-chief of US Vice President Al Gore speeches',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person4.jpeg',
  },
  {
    name: 'Adrian Gomez',
    profession: 'Computer Science Professor in Lexington, Massachusetts',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person5.jpeg',
  },
  {
    name: 'Valentina Enriquez',
    profession: 'Emeritus Professor at the University of Maryland',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In quis quos ipsam, maxime voluptatum.',
    image: 'src/img/person6.jpeg',
  },

];

for (let i = 0; i <= tourists.length - 1; i += 1) {
  const person = document.createElement('DIV');
  person.classList.add('mb-3', 'person-card', 'flex');
  person.setAttribute('data-visible', (i < 2 ? 'true' : 'false'));
  person.innerHTML = `
    <div class="row g-0 mt-5">
        <div class="col-4">                            
            <div class="person">
                <img class="img-fluid rounded-start" src="${tourists[i].image}" alt="img_person">
                <div class="chess"></div>
            </div>
        </div>
        <div class="col-8">

            <div class="card-body">
                <h5 class="card-title">${tourists[i].name}</h5>
                <p class="card-text profesion m-0">${tourists[i].profession}</p>
                <div class="vector-container d-flex justify-content-start m-0">
                    <div class="vector-person"></div>
                </div>
                <p class="card-text">${tourists[i].description}</p>
            </div>
        </div>    
    </div>`;

  personContainer.appendChild(person);
}

document.getElementById('see_more').addEventListener('click', (e) => {
  Array.of(...document.querySelectorAll('.person-card')).forEach((card, i) => card.setAttribute('data-visible', (i >= 2 && card.getAttribute('data-visible') === 'true') ? 'false' : 'true'));
  if (e.target.innerHTML.includes('MORE')) e.target.innerHTML = 'LESS <i class="fas fa-chevron-up"></i>';
  else e.target.innerHTML = 'MORE <i class="fas fa-chevron-down"></i>';
});