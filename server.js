const { json } = require('express');
const express = require('express');
const PORT = 5000;
const app = express();
const googleTrends = require('google-trends-api');

app.use;

const optionsObject = {
	keyword: "Metaverse",
	//startTime:
	endTime: new Date(),
	geo: "USA",
	//hl: default language is english
	category: "Online Games",
}

googleTrends.interestOverTime({keyword: 'Metaverse'})
.then(res => JSON.parse(res))
.then(res => console.log(res.default.timelineData[0].value))
.catch(function(err){
  console.error('Oh no there was an error', err);
});

app.listen(PORT, () => {
	console.log(`Server live on Port: ${PORT}`)
})


