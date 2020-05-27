import React, { Component } from 'react'
import ActionForm from '../components/ActionForm/ActionForm';

export class AddActionPage extends Component {
  render() {
    return (
      <section>
		<header role="banner">
			<h1>Add action</h1>
		</header>
        <section>
            <ActionForm {...this.props}/>
      </section>
      </section>
    )
  }
}

export default AddActionPage