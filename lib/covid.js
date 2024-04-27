const axios = require('axios')
const cheerio = require('cheerio')

const covid = async () => {
const res = await axios.get(`https://www.worldometers.info/coronavirus/country/india/`) 
const $ = cheerio.load(res.data)
results = []
a = $('div#maincounter-wrap')
cases = $(a).find('div > span').eq(0).text()
death = $(a).find('div > span').eq(1).text() 
healed = $(a).find('div > span').eq(2).text() 
results.push({ cases, death, healed}) 
return results
}


module.exports = { covid }
