
//function Gallery() {
//    return (
//        <section>
//            <h1>Amazing scientists</h1>
//            <Profile />
//            <Profile />
//            <Profile />
//        </section>
//    );
//}
//function Profile() {
//    return (
//        <img
//            src="https://i.imgur.com/MK3eW3As.jpg"
//            alt="Katherine Johnson"
//        />
//    );
//}
// Example 1 in react website
// <Gallery />

// Example 2 start

const person = {
    name : 'Gregorio Y. Zara',
    theme : {
        backgroundColor : 'black',
        color : 'pink'
    }
};

function TodoList() {
    return (
        <div>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src="https://i.imgur.com/7vQD0fPs.jpg"
                alt="Gregorio Y. Zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

// Example 2 ends

// Example 3 starts
function getImageUrl(person, size = 's') {
    return (
        'https://i.imgur.com/' + 
        person.imageId +
        size +
        '.jpg'
    );
}

function Profile() {
    return (
        <Card>
            <Avatar
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
        </Card>
    );
}

function Avatar({ person, size }) {
    return (
        <img
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children }) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
// Example 3 ends

// Example 4 Conditional Rendering Starts
function Item({ name, isPacked }) {
    return (
        <li className="item">
            {name} {isPacked && 'packed'}
        </li>
    );
}

function PackingList() {
    return (
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Space suit"
                />
                <Item
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item
                    isPacked={false}
                    name="Photo of Tam"
                />
            </ul>
        </section>
    );
}
// Example 4 Conditional Rendering Ends

// Example 5 Rendering list starts
const people = [{
  id: 0,
  name: 'Creola Katherine Johnson',
  profession: 'mathematician',
  accomplishment: 'spaceflight calculations',
  imageId: 'MK3eW3A'
}, {
  id: 1,
  name: 'Mario José Molina-Pasquel Henríquez',
  profession: 'chemist',
  accomplishment: 'discovery of Arctic ozone hole',
  imageId: 'mynHUSa'
}, {
  id: 2,
  name: 'Mohammad Abdus Salam',
  profession: 'physicist',
  accomplishment: 'electromagnetism theory',
  imageId: 'bE7W1ji'
}, {
  id: 3,
  name: 'Percy Lavon Julian',
  profession: 'chemist',
  accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
  imageId: 'IOjWm71'
}, {
  id: 4,
  name: 'Subrahmanyan Chandrasekhar',
  profession: 'astrophysicist',
  accomplishment: 'white dwarf star mass calculations',
  imageId: 'lrWQx8l'
}];

function List() {
    const listItems = people.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' '+ person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );
    return (
        <article>
            <h1>Scientists</h1>
            <ul>{listItems}</ul>
        </article>
    );
}
// Example 5 Rendering list ends

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

function App() {
    return (
        //<Gallery />
        //<TodoList />
        //<Profile />
        //<PackingList />
        <List />
    );
}
