import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewCardForm extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      priority: "",
      status: "Queue",
      createdBy: "",
      assignedTo: ""
    };
  }
/*how submit title, make form to create new card.
get this field to work first, then make the others.
*/
  handleNewCardSubmit( event ) {
    console.log( 'submit', this.state );
    this.props.addCard( this.state );
  }

  handleInput( event ) {

    this.setState({
      [event.target.name]: event.target.value
    });
    console.log( this.state.title );
  }

  render() {
    let fieldNames = [ 'title', 'priority', 'createdBy', 'assignedTo' ];
    return (
      <form>
        {
          fieldNames.map( ( fieldName ) => {
            return (
              <div>
                <label for={ fieldName }>{ fieldName }</label>
                <input
                  type="text"
                  placeholder={ fieldName }
                  name={ fieldName }
                  id={ fieldName }
                  onChange={this.handleInput.bind(this)}
                />
              </div>
            );
          } )
        }
        <br />
        <button type="button" onClick ={this.handleNewCardSubmit.bind(this)}>New Card</button>
      </form>
    );
  };
};

export default NewCardForm;