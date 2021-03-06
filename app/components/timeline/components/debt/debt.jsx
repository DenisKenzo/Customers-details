import './debt.styl'

export default class Debt extends React.Component {
  static propTypes = {
    i: PropTypes.object.isRequired
  }
  render () {
    return (
      <div id='debts-timeline' style={this.props.i.is_deleted ? {backgroundColor: 'lightgray'} : {backgroundColor: 'white'}}>
        <div className='order-in'>
          {this.props.i.is_deleted ? config.translations.debt_deleted.replace('{time}', moment(this.props.i.deleted_date).format('HH:hh'))
            : this.props.i.modified_date ? config.translations.debt_modified.replace('{time}', moment(this.props.i.modified_date).format('HH:hh'))
              : config.translations.debt_created.replace('{time}', moment(this.props.i.date).format('HH:hh'))}</div>
        <div className='debt-wrap'>
          <div className='debt'><div className='img-wrap'><img src={config.urls.media + 'dollar.png'} /></div><h1>{config.translations.debt}</h1></div>
          <div className='data' style={this.props.i.is_deleted ? {borderTop: '1px solid green', borderBottom: '1px solid green'}
            : {borderTop: '1px solid tomato', borderBottom: '1px solid tomato'}} >
            <h1 className='desc'>{this.props.i.desc}</h1><h1 className='price' style={this.props.i.is_deleted ? {color: 'green'} : {color: 'tomato'}}>
              {this.props.i.sum + ' ' + config.data.currency}</h1>
          </div>
        </div>
      </div>
    )
  }
}
