import MediaModal from '../media-modal/media-modal.jsx'
import { mediaPostService } from 'project-services'
import { dataURLtoFile } from 'project-components'
import Swiper from 'react-id-swiper'
import React from 'react'
import moment from 'moment'
import './media.styl'

class Media extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpenGallery: false,
      imagePreviewUrl: '',
      isAddMedia: false,
      initialSlide: 0,
      activeIndex: 0,
      file: {},
      desc: ''
    }
    this.handleGallery = this.handleGallery.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleGallery () {
    this.setState({isOpenGallery: !this.state.isOpenGallery, activeIndex: 0})
  }
  async submit () {
    let body = new FormData()
    body.append('file', this.state.file)
    body.append('note', this.state.desc)
    const response = await mediaPostService(body)
    if (response.status === 201) {
      let id = await response.json().then(id => {
        return id
      })
      config.data.gallery.unshift({
        id: id,
        name: this.state.file.name,
        note: this.state.desc,
        date: moment().format('YYYY-MM-DD HH:mm')
      })
      this.setState({imagePreviewUrl: '', isAddMedia: !this.state.isAddMedia, desc: '', file: {}})
      this.refs.fileAddForm.reset()
    }
  }
  addFile (e) {
    let file = e.target.files[0]
    this.setState({file: file})
    if (file.type.indexOf('image') !== -1) {
      e.preventDefault()
      this.resize(file)
    } else if (file.type.indexOf('audio') !== -1) {
      this.setState({imagePreviewUrl: config.urls.media + 'audio_file.png'})
    } else if (file.type.indexOf('pdf') !== -1) {
      this.setState({imagePreviewUrl: config.urls.media + 'pdf_file.png'})
    } else if (file.type.indexOf('video') !== -1) {
      this.setState({imagePreviewUrl: config.urls.media + 'video_file.png'})
    }
  }
  typeItem (el, key) {
    if (el.name.indexOf('png') !== -1) {
      return <img src={config.urls.gallery + el.name} onClick={() => { this.handleGallery(); this.setState({initialSlide: key}) }} />
    } else if (el.name.indexOf('mp3') !== -1) {
      return <img src={config.urls.media + 'audio_file.png'} onClick={() => { this.handleGallery(); this.setState({initialSlide: key}) }} />
    } else if (el.name.indexOf('pdf') !== -1) {
      return <img src={config.urls.media + 'pdf_file.png'} onClick={() => { this.handleGallery(); this.setState({initialSlide: key}) }} />
    } else if (el.name.indexOf('mp4') !== -1) {
      return (<div>
        <img src={config.urls.media + 'video_play.png'} className='video_play' />
        <video src={config.urls.gallery + el.name} onClick={() => { this.handleGallery(); this.setState({initialSlide: key}) }} />
      </div>)
    }
  }
  resize (file) {
    let dataURL
    let img = document.createElement('img')
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.setState({ imagePreviewUrl: reader.result })
      img.src = dataURL = reader.result
    }
    img.onload = () => {
      let canvas = document.createElement('canvas')
      let ctx = canvas.getContext('2d')
      let tempimg = new Image()
      tempimg.src = img.src
      let w = tempimg.width
      let h = tempimg.height
      if (w > config.data.max_side || h > config.data.max_side) {
        if (w > h) {
          if (w > config.data.max_side) {
            h = (h * config.data.max_side) / w
            w = config.data.max_side
          }
        } else {
          if (h > config.data.max_side) {
            w = (w * config.data.max_side) / h
            h = config.data.max_side
          }
        }
        canvas.height = h
        canvas.width = w
        ctx.drawImage(img, 0, 0, w, h)
        dataURL = canvas.toDataURL()
      }
      let res = dataURLtoFile(dataURL, 'media.png')
      this.setState({file: res})
    }
  }
  render () {
    let $imagePreview = null
    if (this.state.imagePreviewUrl) {
      $imagePreview = (<img src={this.state.imagePreviewUrl} />)
    } else {
      $imagePreview = (<div className='previewText'>Please select file for Preview</div>)
    }
    return (
      <div id='gallery'>
        <MediaModal handleGallery={this.handleGallery} initialSlide={this.state.initialSlide} isOpenGallery={this.state.isOpenGallery} />
        <div className='label-wrap'>
          <h1 className={config.isRtL ? 'right' : 'left'}>{config.data.gallery.length} {config.translations.item_count}</h1>
          <div className={'gallery-label ' + (config.isRtL ? 'left' : 'right')}>{config.translations.gallery}</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable observer>
            {config.data.gallery.map((el, key) => (<div key={key}>{this.typeItem(el, key)}<h1>{el.name}</h1></div>))}
          </Swiper>
        </div>
        <div onClick={() => { this.setState({isAddMedia: !this.state.isAddMedia}) }}
          className={this.state.isAddMedia ? 'hidden' : 'add-media-wrap'}>
          <img className={config.isRtL ? 'left' : 'right'} src='./dist/media/add.svg' />
          <h1 className={config.isRtL ? 'left' : 'right'}>{config.translations.add_media}</h1>
        </div>
        <div className={this.state.isAddMedia ? 'add-media-edit' : 'hidden'}>
          <form className='add-input-wrap' ref='fileAddForm'>
            <input className='file-input' type='file' onChange={e => { this.addFile(e) }} />
            <div className='previw-wrap'>{$imagePreview}</div>
            <textarea className='note-input' type='text-area' onChange={event => { this.setState({desc: event.target.value}) }} value={this.state.desc} />
          </form>
          <button onClick={this.submit}>{config.translations.save}</button>
        </div>
      </div>
    )
  }
}
export default Media
