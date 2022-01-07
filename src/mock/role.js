import Mock from 'mockjs'

// Mock.setup({
//   timeout: 500
// })

Mock.mock('http://mockjs.com:88/Role/List', function () {
  return Mock.mock(
    {
      status: 200,
      message: 'success',
      total: 150,
      'data|20': [
        {
          // 'roomId|+1': 100,
          id: '@increment(1)',
          name: '@cname(2,6)',
          date: '@date("yyyy-MM-dd")',
          province: '@province()',
          city: '@city',
          phone: '@phone(11)',
          email: '@email',
           zip: '@zip',
           address: '@county(true)',

          'roomTypePrice|100-200': 200,
          roomTypeName: '@ctitle(2,10)',
          // price: '@natural(10,100)',
          count: '@natural(99,999)',
        },        
      ]
    }
  )
})

