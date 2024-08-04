
const obj = {
  id: 1,
  name: 'Alex'
}

// addition - O(1)
obj.email = 'a@gmail.com'

// delete - O(1)
delete obj.email


// Mostly takes O(n) time

Object.keys(obj)
Object.values(obj)
Object.entries(obj)
// for in