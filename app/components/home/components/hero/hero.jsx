import {clientReplaceService} from 'project-services'
import Birthday from '../birthday/birthday.jsx'
import './hero.styl'

export default class Hero extends React.Component {
  state = {
    status: config.data.status || config.translations.placeholder,
    clientImg: config.urls.client_data + config.data.profile_image,
    isInputDisabled: false,
    succes: false,
    isStar: false
  }
  static propTypes = {
    rights: PropTypes.object.isRequired
  }
  handleStar = () => {
    const body = `${config.urls.isFavorite}=${!config.data.isFavorite}`
    clientReplaceService(body).then(r => {
      if (r.status === 204) {
        config.data.isFavorite = !config.data.isFavorite
        if (config.data.isFavorite) {
          this.setState({succes: true, isStar: true}, () => { setTimeout(() => { this.setState({succes: false}) }, 1200) })
        } else {
          this.setState({isStar: false})
        }
        this.forceUpdate()
      }
    })
  }
  handleStatus = e => {
    e.preventDefault()
    this.setState({isInputDisabled: true})
    if (!this.state.isInputDisabled) {
      this.setState({status: ''})
      this.refs.autofocus.focus()
    } else {
      const body = `${config.urls.status}=${this.state.status}`
      clientReplaceService(body).then(r => {
        if (r.status === 204) {
          config.data.status = this.state.status
          this.setState({isInputDisabled: false})
          this.refs.autofocus.blur()
        }
      })
    }
  }
  handleClick () {
    this.refs.photoUploader.click()
  }
  componentDidMount = () => {
    this.setState({isStar: this.props.rights.hero.isFavorite})
  }
  render () {
    return (
      <div id='hero'>
        <div onClick={this.handleStar} className={'star-wrap'}>
          <svg width='14px' height='14px' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'>
            <g id='customer-page-(corrected-design)' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd' opacity='0.800000012'>
              <g id='Customer-Page-(original-size)' transform='translate(-13.000000, -81.000000)' fill='#FFFFFF' fillRule='nonzero'>
                <g id='Group-2' transform='translate(-195.000000, 0.000000)'>
                  <g id='customer-photo' transform='translate(195.000000, 68.000000)'>
                    <g id='Group-23-Copy-2' transform='translate(13.000000, 13.000000)'>
                      <g id='ic-star' fill={(this.state.isStar ? 'gold ' : '')}>
                        <path d='M3.17065351,13.4395526 C3.02021364,13.4395526 2.91992039,13.3867443 2.81962715,13.3339359 C2.61904065,13.1755108 2.5187474,12.911469 2.56889403,12.5946188 L3.17065351,8.89803318 C3.17065351,8.84522481 3.17065351,8.73960808 3.07036027,8.68679971 L0.512882442,6.0991898 C0.312295946,5.88795634 0.212002698,5.62391451 0.312295946,5.35987268 C0.412589194,5.09583085 0.61317569,4.93740576 0.914055434,4.88459739 L4.47446574,4.35651373 C4.52461236,4.35651373 4.62490561,4.30370537 4.67505223,4.19808864 L6.22959758,0.871161604 C6.2797442,0.44869468 6.53047732,0.290269583 6.78121044,0.290269583 C7.03194356,0.290269583 7.28267668,0.44869468 7.38296993,0.712736508 L8.9876619,4.09247191 C9.03780852,4.14528027 9.08795514,4.19808864 9.18824839,4.19808864 L12.6985121,4.72617229 C12.9993918,4.77898066 13.1999783,4.93740576 13.3002716,5.20144758 C13.4005648,5.46548941 13.3002716,5.72953124 13.0996851,5.9407647 L10.5422072,8.58118298 C10.4920606,8.63399135 10.4920606,8.73960808 10.4920606,8.79241645 L11.0938201,12.489002 C11.1439667,12.8058522 11.0436735,13.0698941 10.843087,13.2283192 C10.6425005,13.3867443 10.3416207,13.3867443 10.0908876,13.2283192 L6.93165031,11.4856431 C6.88150369,11.4856431 6.78121044,11.4856431 6.68091719,11.4856431 L3.52167988,13.2283192 C3.37124001,13.3867443 3.27094676,13.4395526 3.17065351,13.4395526 Z' id='Combined-Shape' />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>&nbsp;
          <span>VIP</span>
        </div>
        <div className='camera' onClick={this.handleClick.bind(this)}>
          <img src={config.urls.media + 'ic_photo.svg'} />
          <input type='file' id='file' ref='photoUploader' style={{display: 'none'}} />
        </div>
        <div className={'toast ' + (this.state.succes ? 'toast-visible' : '')}><h1>{config.translations.added_to_favorites}</h1></div>
        <Birthday />
        <form onSubmit={e => { this.handleStatus(e); this.setState({status: this.state.statusRem}) }}>
          <span className='status-label'>Status:</span>
          <div className='input-group'>
            <div className='input-wrap'>
              <input className={'form-control ' + (config.data.status ? 'form-control-disabled' : '')} type='text' ref='autofocus' value={this.state.status}
                onBlur={() => this.setState({isInputDisabled: false, status: config.data.status ? config.data.status : config.translations.placeholder})}
                onChange={e => this.setState({status: e.target.value, statusRem: e.target.value})} />
            </div>
            {this.props.rights.hero.status &&
              <span onClick={this.state.isInputDisabled ? () => {} : this.handleStatus} className={this.state.isInputDisabled ? 'hidden' : 'input-group-addon'}>
                <img className={this.state.isInputDisabled ? 'input-group-addon-hidden' : ''} src={config.urls.media + 'pencil.svg'} />
              </span>}
          </div>
        </form>
        <div className='img'>
          <img className='client-img' src={this.state.clientImg} alt='user-img' onError={() => this.setState({clientImg: config.urls.media + 'default.jpg'})} />
        </div>
      </div>
    )
  }
}
