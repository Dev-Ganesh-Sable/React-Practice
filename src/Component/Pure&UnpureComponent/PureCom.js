
import React, { PureComponent } from 'react'

// pure component : re-render only if data change

 class PureCom extends PureComponent {
  render() {
    return (
      <div>PureComponent : {this.state.name} </div>
    )
  }
}

export default PureCom