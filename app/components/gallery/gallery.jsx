import GalleryModal from '../gallery-modal/gallery-modal.jsx'
import { updateService } from 'project-services'
import Swiper from 'react-id-swiper'
import React from 'react'
import './gallery.styl'

const client = window._config

class Gallery extends React.Component {
  constructor () {
    super()
    this.state = {
      isOpenGallery: false,
      initialSlide: 0,
      activeIndex: 0,
      isAddMedia: false,
      file: {},
      desc: '',
      imagePreviewUrl: ''
    }
    this.handleGallery = this.handleGallery.bind(this)
    this.submit = this.submit.bind(this)
  }
  handleGallery () {
    this.setState({isOpenGallery: !this.state.isOpenGallery, activeIndex: 0})
  }
  initialSlide (key) {
    this.setState({initialSlide: key})
  }
  async submit () {
    this.setState({isAddMedia: !this.state.isAddMedia})
    const url = client.urls.main + client.data.id + '/media'
    const method = 'POST'
    const body = {
      file: this.state.file,
      description: this.state.desc
    }
    await updateService(url, method, body)
    this.setState({desc: '', file: {}})
  }
  addFile (e) {
    let file = e.target.files[0]
    this.setState({file: file})
    if (file.type.indexOf('image') !== -1) {
      e.preventDefault()
      let reader = new FileReader()
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
    } else if (file.type.indexOf('audio') !== -1) {
      this.setState({imagePreviewUrl: client.urls.media + 'audio_file.png'})
    } else if (file.type.indexOf('pdf') !== -1) {
      this.setState({imagePreviewUrl: client.urls.media + 'pdf_file.png'})
    } else if (file.type.indexOf('video') !== -1) {
      this.setState({imagePreviewUrl: client.urls.media + 'video_file.png'})
    }
  }

  onDocumentLoad ({ total }) {
    console.log(total)
  }
  onPageLoad ({ pageIndex, pageNumber }) {
    console.log(pageIndex, pageNumber)
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
        <GalleryModal handleGallery={this.handleGallery} initialSlide={this.state.initialSlide} isOpenGallery={this.state.isOpenGallery} />
        <div className='label-wrap'>
          <h1>{client.data.gallery.length} {client.translations.item_count}</h1>
          <div className='gallery-label'>{client.translations.gallery}</div>
        </div>
        <div id='swiper-wrap-gallery'>
          <Swiper pagination='.swiper-pagination' slidesPerView={3} slidesPerColumn={2} paginationClickable>
            {client.data.gallery.map((el, key) => {
              if (el.name.indexOf('png') !== -1) {
                return (
                  <div key={key}>
                    <img src={client.urls.gallery + el.name} onClick={() => { this.handleGallery(); this.initialSlide(key) }} />
                    <h1>{el.name}</h1>
                  </div>
                )
              } else if (el.name.indexOf('mp3') !== -1) {
                return (
                  <div key={key}>
                    <img src={client.urls.media + 'audio_file.png'} onClick={() => { this.handleGallery(); this.initialSlide(key) }} />
                    <h1>{el.name}</h1>
                  </div>
                )
              } else if (el.name.indexOf('mp4') !== -1) {
                return (
                  <div key={key}>
                    <img src={client.urls.media + 'video_play.png'} className='video_play' />
                    <video src={client.urls.gallery + el.name} onClick={() => { this.handleGallery(); this.initialSlide(key) }} />
                    <h1>{el.name}</h1>
                  </div>
                )
              } else if (el.name.indexOf('pdf') !== -1) {
                return (
                  <div key={key}>
                    <img src={client.urls.media + 'pdf_file.png'} onClick={() => { this.handleGallery(); this.initialSlide(key) }} />
                    <h1>{el.name}</h1>
                  </div>
                )
              }
            })}
          </Swiper>
        </div>
        <div onClick={() => { this.setState({isAddMedia: !this.state.isAddMedia}) }}
          className={this.state.isAddMedia ? 'hidden' : 'add-media-wrap'}>
          <img className='add-button' src='./dist/media/add.svg' />
          <h1 className='add-label'>{client.translations.add_media}</h1>
        </div>
        <div className={this.state.isAddMedia ? 'add-media-edit' : 'hidden'}>
          <div className='add-input-wrap'>
            <input className='file-input' type='file' onChange={e => { this.addFile(e) }} />
            <div className='previw-wrap'>{$imagePreview}</div>
            <input className='note-input' type='text-area' onChange={event => { this.setState({desc: event.target.value}) }} value={this.state.desc} />
          </div>
          <button onClick={this.submit}>{client.translations.save}</button>
        </div>
      </div>
    )
  }
}
export default Gallery
