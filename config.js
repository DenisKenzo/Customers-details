var _config = {
  translations: {
    edit: 'Edit',
    customer: 'Customer details',
    appointment: 'Appointments',
    close_visits: 'Close visits',
    mobile: 'Mobile',
    email: 'E-mail',
    adress: 'Adress',
    add_debt: 'Add debt',
    add_comment: 'Add comment',
    remarks: 'Remarks',
    photos_count: 'photos',
    gallery: 'Gallery',
    add_media: 'Add media',
    source_arrival: 'Source of arrival',
    social_net: 'Add another social network',
    add_link: 'Add link',
    group_partner: 'Group partner',
    completion: 'Completion of the details by the customer',
    request_to_detail: 'Submit a request to complete details',
    send: 'Send',
    marketing_material: 'The customer allows sending marketing material',
    signature_added: 'Signature added successfully',
    btn_delete: 'Delete',
    btn_replace: 'Replace'
  },
  urls: {
    default_photo: './app/components/media/default.jpg',
    photo: './app/components/media/123123.jpg',
    appointments: '/appointments',
    home: '/',
    add_photo: 'customers.bewebmaster.co.il/?id=',
    add_status: 'customers.bewebmaster.co.il/?id='
  },
  data: {
    id: 123123,
    name: 'Ahuva Ben Shushan',
    birthdate: '2001-07-25',
    email: 'ahuva.ben.shushan@gmail.com',
    adress: 'Tel Aviv, Allenby str. 45',
    phone: [
      '0545421321'
    ],
    vip: true,
    status: [
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: false},
      {text: 'sdfsdfsdf sdf sdf sd fsd fsd f', reminder: true, date: '2017-06-06 12:45'}
    ],
    gallery: ['01', '02', '03', '04', '05', '06', '07', '08', '09',
      '10', '11', '12', '13', '14', '15', '16', '17', '18'],
    groups: [
      {
        id: '01',
        name: 'Were born this month',
        amount: '72'
      },
      {
        id: '02',
        name: 'Preferred Customers',
        amount: '17'
      },
      {
        id: '03',
        name: 'They did not pay',
        amount: '8'
      }
    ],
    approved_marketing: {
      status: true,
      sign: 'autograph.png'
    },
    recent_appoinments: [
      {
        id: 321321,
        date: '2017-05-01 15:00',
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
        date: '2017-05-02 18:00',
        procedures: [
          {
            id: 778954,
            name: 'visit',
            price: 400,
            duration: 120
          }
        ]
      }
    ]
  }
}