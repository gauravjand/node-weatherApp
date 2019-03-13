
// fetch("http://puzzle.mead.io/puzzle").then((response)=>{
// 	response.json().then((data)=>{
// 		console.log(data)
// 	})
// })




const weatherForm=document.querySelector("form")
const locations=document.querySelector("input")
const messageOne=document.querySelector("#message-1")
const messageTwo=document.querySelector("#message-2")
const messageThree=document.querySelector("#message-3")

weatherForm.addEventListener("submit",(e)=>{
e.preventDefault()
console.log(locations.value)
messageOne.textContent="Loading..."
messageTwo.textContent=""
messageThree.textContent=""
	fetch("/weatherData?address="+ locations.value).then((response)=>{
		response.json().then((data)=>{
			messageOne.textContent="Location: "+ data.Location
			messageTwo.textContent="Temperature: " + data.Temperature
			messageThree.textContent="Weather: " + data.Weather
		})
	})	

	
	
})


