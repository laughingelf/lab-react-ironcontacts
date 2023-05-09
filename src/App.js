import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import contacts from './contacts.json'
const contactsArr = contacts.slice(0, 5)


function App() {

  const [contactsArr, setContacts] = useState(contacts.slice(0, 5))

  const addRandom = () => {
    const randomPerson = contacts[Math.floor((Math.random() * contacts.length))]
    // console.log(randomPerson)
    setContacts(arr => [...arr, randomPerson])
  }

  const sortName = () => {
    function compare(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    }
    let arr = [...contactsArr];
    arr.sort(compare)
    // console.log(arr);
    setContacts(e => [...arr]);
  }

  const sortPopularity = () => {
    function compare(a, b) {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    }
    let arr = [...contactsArr];
    arr.sort(compare)
    console.log(arr);
    setContacts(e => [...arr]);
  }

  const deleteContact = (id) => {
    let contactArray = [...contactsArr];
    contactArray.forEach((elem, i, arr) => {
      if (id === elem.id) {
        arr.splice(i, 1)
      }
    })
    setContacts(e => [...contactArray]);
  }



  return (
    <div className="App">
      <h2>Iron Contacts</h2>
      <button onClick={addRandom}>Add Random Person</button>
      <button onClick={sortName}>Sort By Name</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>

          {contactsArr.map((contact, i) => {
            return <tr key={i}>
              <td><img src={contact.pictureUrl} /></td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar && <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"></img>}</td>
              <td>{contact.wonEmmy && <img src="https://github.githubassets.com/images/icons/emoji/unicode/1f3c6.png"></img>}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Remove Contact</button></td>
            </tr>
          })}
        </tbody>
      </table>


    </div>
  );
}

export default App;
