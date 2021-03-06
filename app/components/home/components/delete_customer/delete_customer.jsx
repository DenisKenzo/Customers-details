import './delete_customer.styl'
import {Modal} from 'project-components'

export default class HiddenFields extends React.Component {
  state = {
    isVisiblePopup: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  render () {
    return this.props.rights.more_fields.isVisible && (
      <div id='delete-customer'>
        <div className='del-btn'>
          <button onClick={() => this.setState({isVisiblePopup: true})}>{config.translations.delete_customer.toUpperCase()}</button>
        </div>
        <Modal show={this.state.isVisiblePopup}>
          <div className='modal-body'>
            <img className='icon' src={config.urls.media + 'icon_delete_selected.svg'} />
            <label>{config.translations.del_question}</label>
          </div>
          <div className='modal-footer'>
              <button className='no-btn' onClick={() => this.setState({isVisiblePopup: false})}>{config.translations.del_no.toUpperCase()}</button>
              <button className='yes-btn' onClick={() => { alert('Delete'); this.setState({isVisiblePopup: false}) }}>{config.translations.del_yes.toUpperCase()}</button>
          </div>
        </Modal>
      </div>
    )
  }
}
