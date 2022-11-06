export const highLight = (strlist, box) => {
    box = encodeURIComponent(box)
    strlist.forEach((item) => {
      const type = encodeURIComponent(item) 
      box = box.replace(RegExp(type, 'g'), function () {
        return "<span style='color:red'>" + type + '</span>'
      }) 
    })
    return decodeURIComponent(box)
  }