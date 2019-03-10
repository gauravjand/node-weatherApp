const request=require("request")



const weatherInDegrees=(latitude,longitude,callback)=>{
const url="https://api.darksky.net/forecast/222769e6f85bacaf254fdb4f33cc2706/"+ latitude+","+ longitude
request({url,json:true},(error,response)=>{
if(error)
	{
		callback(error,undefined)

	}
else 
	{
		callback(undefined,response.body.currently.temperature)
		
	}
})

}


module.exports=weatherInDegrees