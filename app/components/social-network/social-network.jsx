import { socialPostService, socialDeleteService } from 'project-services'
import React, { Component } from 'react'
import Select from 'react-select'
import './social-network.styl'

class SocialNetwork extends Component {
  constructor () {
    super()
    this.state = {
      selectedValue: 'facebook',
      isEditSocial: false,
      inputValue: ''
    }
    this.submit = this.submit.bind(this)
    this.delete = this.delete.bind(this)
  }
  async submit () {
    const body = `type=${this.state.selectedValue}&url=${this.state.inputValue}`
    let response = await socialPostService(body)
    if (response.status === 201) {
      let id = await response.json().then(id => {
        return id
      })
      config.data.soc_media.push({
        id: id,
        type: this.state.selectedValue,
        url: this.state.inputValue
      })
      this.setState({ isEditSocial: !this.state.isEditSocial, selectedValue: 'facebook', inputValue: '' })
    }
  }
  async delete (id, key) {
    let response = await socialDeleteService(id)
    if (response.status === 204) {
      config.data.soc_media.splice(key, 1)
      this.setState({inputValue: ''})
    }
  }
  componentWillMount () {
    const list = config.translations.soc_media_list
    let options = [
      {value: 'facebook', label: list.facebook},
      {value: 'instagram', label: list.instagram},
      {value: 'linkedin', label: list.linkedin},
      {value: 'twitter', label: list.twitter},
      {value: 'pinterest', label: list.pinterest},
      {value: 'google', label: list.google},
      {value: 'vk', label: list.vk},
      {value: 'website', label: list.website}
    ]
    this.setState({options: options})
  }
  render () {
    return (
      <div id='social-network'>
        <h1 className={config.data.soc_media && config.data.soc_media[0] ? 'soc-media-label' : 'hidden'}>{config.translations.social_net}</h1>
        <div className={config.data.soc_media && config.data.soc_media[0] ? 'social-network-list' : 'hidden'}>
          {config.data.soc_media.map((el, key) => {
            return (
              <div key={key} className='social-item-wrap'>
                <div className='delete-wrap'>
                  <img className='delete' src={config.urls.media + 'add.svg'} onClick={() => { this.delete(el.id, key) }} />
                </div>
                <div className='img-wrap'>
                  <img src={config.urls.soc_net + '/' + el.type + '.png'} />
                </div>
                <div className='url-wrap' onClick={() => { this.setState({ isEditSocial: true, selectedValue: el.type }) }}>
                  <h1>{el.url}</h1>
                </div>
              </div>
            )
          })}
        </div>
        <div className={this.state.isEditSocial ? 'add-select-wrap' : 'hidden'}>
          <div className='item-wrap'>
            <div className='select-wrap'>
              <Select className={config.isRtL ? 'left' : 'right'} onChange={e => { this.setState({ selectedValue: e.value }) }}
                value={this.state.selectedValue} options={this.state.options} />
            </div>
            <div className='img-wrap'><img src={config.urls.soc_net + '/' + this.state.selectedValue + '.png'} /></div>
            <div className='input-wrap'><input type='text' value={this.state.inputValue} onChange={e => { this.setState({inputValue: e.target.value}) }} /></div>
          </div>
          <div className='button-wrap'><button onClick={this.submit}>{config.translations.save}</button></div>
        </div>
        <div className={this.state.isEditSocial ? 'hidden' : 'add-source-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' onClick={() => { this.setState({ isEditSocial: !this.state.isEditSocial }) }} />
          <h1 className={config.isRtL ? 'left' : 'right'} >{config.translations.add_social_net}</h1>
        </div>
      </div>
    )
  }
}
export default SocialNetwork
