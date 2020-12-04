const myData = async function(){
  const url = "https://raw.githubusercontent.com/Patrick-Jiang/NavPage/master/data.json"
  const result = await fetch(url)
  const response = await result.json()
  return response
}
myData().then(obj => console.log(obj))



// fetch("https://raw.githubusercontent.com/Patrick-Jiang/NavPage/master/data.json").then(data => data.json()).then(obj => console.log(obj))
