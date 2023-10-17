import { Component } from 'react'
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  // зберігання даних в локальному сховищі
  save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  };

  // завантаження даних
  load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error('Get state error: ', error.message);
    }
  };

  //зміна фільтру
  onChangeFilter = (evt) => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  //додавання нового контакту
  handleSubmit = ({ name, number }) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts.`);
      return false;
    }
    const id = nanoid();
    this.setState({ contacts: [...this.state.contacts, { name, number, id }] });
    return true;
  };

  // видалення контакту
  onDeleteForm = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) })
  };

  //початкове завантаження контактів
  componentDidMount() {
    const phoneContacts = this.load('phoneContacts');
    console.log(phoneContacts);
    if (phoneContacts) {
      this.setState({ contacts: phoneContacts });
    }
  }

  // збереження контактів при зміні кількості
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts.length !== this.state.contacts.length) {
      console.log(this.state.contacts);
      this.save('phoneContacts', this.state.contacts);
    }
  }

  render() {
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={filtredContacts} onDeleteForm={this.onDeleteForm} />
      </Layout>
    );
  };
};
