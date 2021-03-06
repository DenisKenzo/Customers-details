import Menu from '../menu/menu.jsx'
import './topnav.styl'

export default class Topnav extends React.Component {
  static propTypes = {
    rights: PropTypes.object.isRequired,
    history: PropTypes.object,
    timeline: PropTypes.bool,
    punch: PropTypes.bool,
    color: PropTypes.bool,
    home: PropTypes.bool
  }

  state = {
    isActive: false
  }

  countAppointment = () => {
    let c = 0
    config.data.recent_appoinments && config.data.recent_appoinments[0] &&
    config.data.recent_appoinments.forEach(i => i.procedures.forEach(() => c++))
    return c
  }

  getHowYaersOld = () => {
    const currentDate = config.data.birthdate
    const currentYear = config.data.birthyear
    const fullDate = new Date(currentYear + '-' + currentDate)
    return (currentDate && currentYear)
      ? Math.floor(moment.duration(moment().diff(moment(fullDate))).asYears())
      : ''
  }

  menuOnOff = () => {
    this.setState(state => ({
      isActive: !state.isActive
    }))
    document.querySelector('body').classList.toggle('no-scroll')
  }

  closeMenu = e => {
    if (e.target.className === 'menu_wrap' || e.target.id === 'menu_modal') {
      this.setState({isActive: false})
      document.querySelector('body').classList.remove('no-scroll')
    }
  }

  render () {
    const birthdate = this.getHowYaersOld()
    return (
      <div id='topnav'>
        <div className='header' style={(this.props.punch || this.props.color) && {backgroundColor: 'darkslateblue'}}>
          <div className={'arrow-wrap ' + (config.isRtL ? 'right' : 'left')} onClick={this.props.rights.topnav.back ? () => window.history.go(-1) : () => {}}>
            <img className='arrow-back' src={config.urls.media + 'arrow-back.svg'} style={config.isRtL ? {transform: 'scale(-1, 1)'} : {}} /></div>
          {(this.props.home || this.props.timeline) && <div className='client-name'>
            <div className='icon-online' />
            <h1>{config.data.name}</h1>
            {birthdate && <span>{birthdate} years old</span>}
          </div>}
          {this.props.punch && <div className='client-name'>
            <h1>{config.translations.punch_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          {this.props.color && <div className='client-name'>
            <h1>{config.translations.color_card_topnav.replace('{client_name}', config.data.name)}</h1></div>}
          <div className={'edit-wrap ' + (config.isRtL ? 'left' : 'right')}>
            {this.props.home && <img className='edit' onClick={this.menuOnOff} src={config.urls.media + 'ic_menu.svg'} />}
            {this.props.punch && <img className='add' src={config.urls.media + 'add_bt.svg'}
              onClick={() => this.props.history.push(config.urls.punch_cards_adding)} />}
          </div>
        </div>
        {this.state.isActive && <Menu closeMenu={this.closeMenu} />}
      </div>
    )
  }
}
