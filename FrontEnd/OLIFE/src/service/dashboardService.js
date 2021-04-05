export function getX(){
    return ['January', 'February', 'March','April', 'May'];
}

export function getY(){
    return [65, 59, 80, 81, 56];
}

export function GetTesting(){
  var obj;
  fetch('http://localhost:3000/users/getUser')
  .then(response => response.json())
  .then(data => obj=data)
  .then(() => console.log(obj))
}

