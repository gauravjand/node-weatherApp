const express=require("express")
const hbs=require("hbs")
const path=require("path")
const app=express();

const geoLocations=require("../utils/geoLocation.js")
const weather=require("../utils/weather.js")

const viewPath=path.join(__dirname,"../templates/views")
const partialsPath=path.join(__dirname,"../templates/partials")
const publicPath=path.join(__dirname,"../public")
app.use(express.static(publicPath))
app.set("view engine","hbs");
app.set("views",viewPath)
hbs.registerPartials(partialsPath);

app.get("/",(req,res)=>{
	res.render("index")
})


	var Location,Temp




app.get("/weather",(req,res)=>{
		geoLocations(req.query.address,(error,response)=>{
			
			if(error)
			{
				return console.log("There was an error in fetching the coordinates of the location")	
			}

			weather(response.latitude,response.longitude,(errorFromWeatherAPI,responseFromWeatherAPI)=>{
				if(errorFromWeatherAPI)
				{
					console.log("error",errorFromWeatherAPI)
				}
				else
				{
					Location=response.location
					Temp=responseFromWeatherAPI
					console.log("The temp is",responseFromWeatherAPI)
				}
			})

		})
	res.render("weather",{
		Location,
		Temperature: Temp
	})
})


app.get("/weatherData",(req,res)=>{
		geoLocations(req.query.address,(error,response)=>{
			
			if(error)
			{
				return console.log("There was an error in fetching the coordinates of the location")	
			}

			weather(response.latitude,response.longitude,(errorFromWeatherAPI,responseFromWeatherAPI)=>{
				if(errorFromWeatherAPI)
				{
					console.log("error",errorFromWeatherAPI)
				}
				else
				{
					Location=response.location
					Temp=responseFromWeatherAPI
					console.log("The temp is",responseFromWeatherAPI)
				}
			})

		})
	res.send({
		Location,
		Temperature: Temp
	})
})



app.get("/help",(req,res)=>{
res.render("help")
})

app.get("/about",(req,res)=>{
res.render("about")
})


app.listen(3000,()=>{
	console.log("This app is running at port 3000")
})