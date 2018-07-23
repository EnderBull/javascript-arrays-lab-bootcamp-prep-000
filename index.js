// Add your functions and code here

function destructivelyAppendKitten(name){
 
 return kittens.push(name)
}

function destructivelyPrependKitten(name){
  
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(){
  
  return kittens.pop()
}

function destructivelyRemoveFirstKitten(){
  
  return kittens.shift()
}

function appendKitten(name){
  
  var newArray = [...kittens,name]
  return newArray
}

function prependKitten(name){
  var newArray = [name,...kittens]
  return newArray
}

function removeLastKitten(){
  
  return kittens.slice(kittens.length)
}

function removeFirstKitten(){
  
  return kittens.slice(1)
}

/*

  describe('removeLastKitten()', function() {
    it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeLastKitten()).toEqual(["Milo", "Otis"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

  describe('removeFirstKitten()', function() {
    it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
      expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

      expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
    })
  })

})*/