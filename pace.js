const arr = ['aku', 'kua', 'adi', 'ida']

let tmp = []

for (let i = 0; i < arr.length; i += 1) {
  if (!tmp.length) {
    tmp.push([arr[i]])
  } else {
    for (let j = 0; j < tmp.length; j += 1) {
      if (
        tmp[j][0].split('').sort().toString() ===
        arr[i].split('').sort().toString()
      ) {
        tmp[j].push(arr[i])
      }
    }
  }
}
