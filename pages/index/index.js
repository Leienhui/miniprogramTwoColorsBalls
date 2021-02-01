Page({
  data: {
    blueArr: [1, 2, 3],
    redArr: [1]
  },
  handleBlueArr(e) {
    // 注意，不能用箭头函数，否则this为undefined
    console.log(this)
    console.log(e)
    let n = e.currentTarget.dataset.n
    if (this.data.blueArr.length < 6) {
      if (!this.data.blueArr.includes(n)) {
        this.setData({
          blueArr: [...this.data.blueArr, n]
        })
      }else{
        this.setData({
          blueArr: this.data.blueArr.filter(item=>item!==n)
        })
      }
    }else{
      this.setData({
        blueArr: this.data.blueArr.filter(item=>item!==n)
      })
    }

  },
  handleRedArr(e) {
    // 注意，不能用箭头函数，否则this为undefined
    console.log(this)
    console.log(e)
    let n = e.currentTarget.dataset.n
    if (this.data.redArr.length < 2) {
      if (!this.data.redArr.includes(n)) {
        this.setData({
          redArr: [n]
        })
      }else{
        this.setData({
          redArr: this.data.redArr.filter(item=>item!==n)
        })
      }
    }else{
      this.setData({
        redArr: this.data.redArr.filter(item=>item!==n)
      })
    }
  },
})