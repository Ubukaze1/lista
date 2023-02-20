import { Ref } from 'vue'

const nodoAnimatio = (index: number, arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].styleN = 'animation: grow 2s ease-in-out'
    setTimeout(() => {
      arr.value[index].styleN = ' '
      r(true)
    }, 2000);
  })
}

const flechaAnimation = (index: number, arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].styleF = 'animation: rotate 2s ease-in-out'
    setTimeout(() => {
      arr.value[index].styleF = ''
      r(false)
    }, 2000);
  })
}

const nodoAnimationUlt = (index: number, arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].styleN = 'animation: prii 2s ease-in-out'
    setTimeout(() => {
      arr.value[index].styleN = ' '
      arr.value[index].ultN = false
      r(true)
    }, 2000);
  })
}

const flechaAnimationUlt = (index: number, arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    arr.value[index].styleF = 'animation: salida 2s ease-in-out'
    setTimeout(() => {
      arr.value[index].styleF = ' '
      arr.value[index].ultF = false
      r(false)
    }, 1900);
  })
}

const flechaMoverDerecha = (arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    r(false)
  })
}

const nodoMoverDerecha = (arr: Ref): Promise<boolean> => {
  return new Promise((r, rej) => {
    for (let i = 0; i < arr.value.length; i++) {
      arr.value[i].styleN = 'animation: moverDerechaNodo 2s ease-in-out'
      arr.value[i].styleF = 'animation: moverDerechaFlecha 2s ease-in-out'
    }

    console.log(2 * arr.value.length, "aslkdj")

    setTimeout(() => {
      for (let i = 0; i < arr.value.length; i++) {
        arr.value[i].styleN = ' '
        arr.value[i].styleF = ' '
        r(false)
      }
    }, (2 * arr.value.length) * 755);


  })
}


export { nodoAnimatio, flechaAnimation, nodoAnimationUlt, flechaAnimationUlt, flechaMoverDerecha, nodoMoverDerecha }

