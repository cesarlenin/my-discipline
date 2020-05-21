import React, { Component } from 'react'
import ActionForm from '../components/ActionForm';

export class AddActionPage extends Component {
  render() {
    return (
        <main role="main">
		<header role="banner">
			<h1>Add action</h1>
		</header>
        <section>
            <ActionForm {...this.props}/>
      </section>
    </main>
    )
  }
}

export default AddActionPage