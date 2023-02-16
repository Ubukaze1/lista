import {Ref} from 'vue'

const nodoAnimatio = (index:number, arr:Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].no = true
    setTimeout(() => {
      arr.value[index].no = false
      r(true)
    }, 2000);
  })
}

const flechaAnimation = (index: number, arr:Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].ar = true
    setTimeout(() => {
      arr.value[index].ar = false
      r(false)
    }, 2000);
  })
}

const nodoAnimationUlt = (index: number, arr:Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].no = true
    setTimeout(() => {
      arr.value[index].no = false
      arr.value[index].ultN = false
      r(true)
    }, 1900);
  })
}

const flechaAnimationUlt = (index: number, arr:Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].ar = true
    setTimeout(() => {
      arr.value[index].ar = false
      arr.value[index].ultF = false
      r(false)
    }, 1900);
  })
}

export {nodoAnimatio, flechaAnimation, nodoAnimationUlt, flechaAnimationUlt}

