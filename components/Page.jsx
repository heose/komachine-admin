import React from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import Clock from './Clock'


@inject(({store}) => {
  return { clockStore: store.clockStore }
})
@observer
class Page extends React.Component {
  componentDidMount () {
    console.log('############################');
    this.props.clockStore.start()
  }

  componentWillUnmount () {
    this.props.clockStore.stop()
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock lastUpdate={this.props.clockStore.lastUpdate} light={this.props.clockStore.light} />
        <nav>
          <Link href={this.props.linkTo}><a>Navigate</a></Link>
        </nav>
      </div>
    )
  }
}

export default Page