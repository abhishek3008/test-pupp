const puppeteer = require('puppeteer');
 
function init(){main(); setInterval( function(){main(); }, 1805 * 1000) }

async function main() {
	// body...

	const browser = await puppeteer.launch({headless: true}); 
	const page = await browser.newPage();

	await page.goto('https://mycutebaby.in/contest/participant/?n=5f30058c66082&utm_source=wsapp_share&utm_campaign=August_2020&utm_medium=shared&utm_term=wsapp_shared_5f30058c66082&utm_content=participant',{waitUntil: 'load', timeout: 0});
	console.log(new Date().toLocaleString())
	await page.waitFor(3000);

	// evaluate will run the function in the page context
	await page.evaluate( async(_) => {
	// this will be executed within the page, that was loaded before
		document.querySelector("#v").value = "Abhishek Sontakke"
		document.querySelector("#vote_btn").click()
	});
	await page.waitFor(3000);
	// await browser.close();

}

init()