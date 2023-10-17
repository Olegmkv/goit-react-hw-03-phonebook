import { Component } from 'react'
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Layout } from './Layout';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  onChangeForm = (evt) => {
    this.setState({
      [evt.currentTarget.name]: evt.currentTarget.value
    })
    return;
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  onChangeFilter = (evt) => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;

    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts.`);
      return;
    }
    const id = nanoid();

    this.setState({ contacts: [...this.state.contacts, { name, number, id }] });
    this.resetForm();
  };

  onDeleteForm = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) })
  };

  render() {
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    return (
      <Layout>
        <h1>Phonebook</h1>
        <ContactForm name={this.state.name} number={this.state.number} onChangeForm={this.onChangeForm} onSaveForm={this.handleSubmit} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChangeFilter={this.onChangeFilter} />
        <ContactList contacts={filtredContacts} onDeleteForm={this.onDeleteForm} />
      </Layout>
    );
  };
};