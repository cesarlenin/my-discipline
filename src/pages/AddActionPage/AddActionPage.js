import React, { Component } from 'react'
import ActionForm from '../../components/ActionForm/ActionForm';
import BackButton from '../../components/BackButton/BackButton';

export class AddActionPage extends Component {
  render() {
    return (
      <section>
		<header role="banner">
			<h1>Add action</h1>
		</header>
    <BackButton {...this.props}/>
        <section>
            <ActionForm {...this.props}/>
      </section>
      </section>
    )
  }
}

export default AddActionPage