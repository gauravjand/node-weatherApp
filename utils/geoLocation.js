const request=require("request")



const geoLocations=(address,callback)=>{
const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+ address + ".json?access_token=pk.eyJ1IjoiZ2F1cmF2amFuZCIsImEiOiJjanN5cnJ2dHYwZnJkNGFwaTJpNW1xMW02In0.6uZHj2jkFSUfVGF3zUoiJQ&limit=1"	
request({url,json:true},(error,response)=>{
if(error)
	{
		callback(error,undefined)

	}
else 
	{
		callback(undefined,{latitude:response.body.features[0].center[1],
			longitude:response.body.features[0].center[0],
			location:response.body.features[0].place_name
		})	
	}
})

}


module.exports=geoLocations