import Mock from 'mockjs'

Mock.setup({
  timeout: 500
})

Mock.mock('http://mockjs.com:88/api/roomlist', function () {
  return Mock.mock(
    {
      status: 200,
      message: 'success',
      total: 150,
      // 'data|2-10': [
      'data|10': [
        {
          // 'roomId|+1': 100,
          roomId: '@increment(1)',
          'roomTypePrice|100-200': 200,
          roomStateName: '@cname(2,10)',
          roomTypeName: '@ctitle(2,10)',
          roomState: '空闲',

          name: '@cword(2,6)',
          // price: '@natural(10,100)',
          count: '@natural(99,999)',
          img: '@dataImage(55x55)'
          
          // roomType: {
          //   roomTypeName: '@ctitle(4)',
          //   'roomTypePrice|100-200': 200
          // },
          // roomState: {
          //   roomStateName: '@ctitle(2,6)'
          // }
        },        
      ]
    }
  )
})

