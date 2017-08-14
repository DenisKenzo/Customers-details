var config = {
  translations: {
    edit: 'Edit',
    customer: 'Customer details',
    appointment: 'Appointments',
    placeholder: 'placeholder',
    close_visits: 'Close visits',
    add_phone: 'Add a phone',
    mobile: 'Mobile',
    add_email: 'Add an email',
    email: 'E-mail',
    add_adress: 'Add an address',
    adress: 'Adress',
    add_debt: 'Add debt',
    debt: 'Debt',
    save: 'Save',
    amount: 'Amount',
    description_debt: 'Description of debt',
    add_comment: 'Add comment',
    remarks: 'Remarks',
    item_count: 'Items',
    gallery: 'Gallery',
    add_media: 'Add media',
    add_traffic_source: 'Add traffic source',
    traffic_source: 'Traffic source',
    add_social_net: 'Add a social media link',
    social_net: 'Social media link',
    add_link: 'Add link',
    group_partner: 'Group partner',
    completion: 'Completion of the details by the customer',
    request_to_detail: 'Submit a request to complete details',
    send: 'Send',
    marketing_material: 'The customer allows sending marketing material',
    signature_added: 'Signature added successfully',
    btn_delete: 'Delete',
    btn_replace: 'Replace',
    procedures: 'procedures',
    all_visits: 'For all visits...',
    dates: {
      months: {
        January: 'January',
        February: 'February',
        March: 'March',
        April: 'April',
        May: 'May',
        June: 'June',
        July: 'July',
        August: 'August',
        September: 'September',
        October: 'October',
        November: 'November',
        December: 'December'
      },
      weekdays: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
        Thursday: 'Thursday',
        Friday: 'Friday',
        Saturday: 'Saturday',
        Sunday: 'Sunday'
      },
      days: {
        Yesterday: 'Yesterday ',
        Tommorow: 'Tommorow ',
        Today: 'Today '
      }
    },
    source_list: {
      ads: 'ads',
      fb_page: 'fb_page',
      family: 'family',
      friends: 'friends',
      recommendation: 'recommendation'
    },
    soc_media_list: {
      facebook: 'facebook',
      instagram: 'instagram',
      linkedin: 'linkedin',
      twitter: 'twitter',
      pinterest: 'pinterest',
      google: 'google+',
      vk: 'vk'
    }
  },
  urls: {
    main: 'http://api.bewebmaster.co.il',
    groups_img: './dist/media/groups/',
    gallery: './dist/media/galery/',
    soc_net: './dist/media/soc_net',
    appointments: '/appointments',
    media: './dist/media/',
    groups: '/groups/',
    home: '/'
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '2001-08-11',
    email: 'ahuva.ben.shushan@gmail.com',
    adress: 'Tel Aviv, Allenby str. 45',
    intent_x: 50.4016991,
    intent_y: 30.2525126,
    phone: '0545421321',
    vip: true,
    status: 'Status',
    source: 'ads',
    currency: '₪',
    debt_step: 10,
    debts: [
      {
        id: 123123,
        sum: 20,
        desc: 'did not pay for a month',
        date: '2017-07-07 13:01'
      }
    ],
    notes: [
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: false},
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: true, date: '2017-06-06 12:45'}
    ],
    groups: [
      {
        id: 1,
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: 2,
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: 3,
        name: 'They did not pay',
        amount: '8'
      },
      {
        id: 1,
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: 2,
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: 3,
        name: 'They did not pay',
        amount: '8'
      }
    ],
    approved_marketing: {
      status: true,
      sign: 'autograph.png'
    },
    soc_media: [
      {
        id: 1,
        type: 'facebook',
        url: 'https://www.facebook.com/bewebmaster/'
      },
      {
        id: 2,
        type: 'instagram',
        url: 'https://www.instagram.com/bewebmaster/'
      },
      {
        id: 3,
        type: 'linkedin',
        url: 'https://www.linkedin.com/bewebmaster/'
      },
      {
        id: 4,
        type: 'twitter',
        url: 'https://www.twitter.com/bewebmaster/'
      },
      {
        id: 5,
        type: 'pinterest',
        url: 'https://www.pinterest.com/bewebmaster/'
      },
      {
        id: 6,
        type: 'vk',
        url: 'https://www.vk.com/bewebmaster/'
      }
    ],
    gallery: [
      {
        id: 123123,
        name: 'document.pdf',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 00:00'
      },
      {
        id: 123123,
        name: '01.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 00:00'
      },
      {
        id: 123123,
        name: 'witcher.pdf',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 00:00'
      },
      {
        id: 123123,
        name: '02.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 01:00'
      },
      {
        id: 123123,
        name: '03.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 02:00'
      },
      {
        id: 123123,
        name: '04.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 03:00'
      },
      {
        id: 123123,
        name: '05.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 04:00'
      },
      {
        id: 123123,
        name: '06.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 05:00'
      },
      {
        id: 123123,
        name: '07.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 06:00'
      },
      {
        id: 123123,
        name: '08.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 07:00'
      },
      {
        id: 123123,
        name: 'video.mp4',
        note: 'Lorem tur adipisicing elit',
        date: '2017-08-09 07:00'
      },
      {
        id: 123123,
        name: '09.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 08:00'
      },
      {
        id: 123123,
        name: '10.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 09:00'
      },
      {
        id: 123123,
        name: '11.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 10:00'
      },
      {
        id: 123123,
        name: '12.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 11:00'
      },
      {
        id: 123123,
        name: '13.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 12:00'
      },
      {
        id: 123123,
        name: '14.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 13:00'
      },
      {
        id: 123123,
        name: '15.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 14:00'
      },
      {
        id: 123123,
        name: '16.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 15:00'
      },
      {
        id: 123123,
        name: '17.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 16:00'
      },
      {
        id: 123123,
        name: '18.png',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      },
      {
        id: 123123,
        name: '19.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      },
      {
        id: 123123,
        name: '20.mp3',
        note: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        date: '2017-08-09 17:00'
      }
    ],
    recent_appoinments: [
      {
        id: 321321,
        date: '2017-08-09 15:00',
        procedures: [
          {
            id: 159159,
            name: 'manicure',
            price: 100,
            duration: 120
          },
          {
            id: 756756,
            name: 'hair coloring',
            price: 150,
            duration: 45
          }
        ]
      },
      {
        id: 456465,
        date: '2017-07-01 19:00',
        procedures: [
          {
            id: 778954,
            name: 'visit',
            price: 4100,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-07-29 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2018-08-10 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2018-01-01 18:00',
        procedures: [
          {
            id: 778954,
            name: 'chemistry',
            price: 1200,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2017-09-11 18:00',
        procedures: [
          {
            id: 778954,
            name: 'manicure',
            price: 700,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2016-07-21 18:00',
        procedures: [
          {
            id: 778954,
            name: 'hair coloring',
            price: 600,
            duration: 120
          }
        ]
      },
      {
        id: 456465,
        date: '2010-07-21 18:00',
        procedures: [
          {
            id: 778954,
            name: 'facial treatment',
            price: 400,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            price: 500,
            duration: 120
          },
          {
            id: 778954,
            name: 'laser hair 3 treatments',
            price: 100,
            duration: 120
          }
        ]
      }
    ]
  }
}
