var data = {
	Locations: {},
	News: [],
	Services: [],
}

data.Services.push({
	"Locations":["National", "Denver", "Boulder"],
	"Headline":"9-1-1 Emergency",
	"Copy" : "9-1-1 Emergency is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.Services.push({
	"Locations" : ["National", "Denver", "Boulder"],
	"Headline" : "Managed Transportation",
	"Copy" : "Managed Transportation is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.Services.push({
	"Locations" : ["National", "Denver"],
	"Headline" : "Medical/Security Services",
	"Copy" : "Medical/Security Services is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.Services.push({
	"Locations" : ["National", "Denver"],
	"Headline" : "Onsite Health & Safety",
	"Copy" : "Managed Transportation is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.Services.push({
	"Locations" : ["National"],
	"Headline" : "FEMA Emergency Response",
	"Copy" : "FEMA Emergency Response is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.Services.push({
	"Locations" : ["National"],
	"Headline" : "Air Ambulance",
	"Copy" : "Air Ambulance is a service that...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et felis egestas, at varius mauris maximus. Morbi nec dui ipsum."
});

data.News.push({
	"Locations":{National: true, Boulder: false, Denver : false},
	"Headline":"National News Story 3",
	"Copy" : "This news story is published nationally and will show on any pages that do not have local news stories."
});

data.News.push({
	"Locations":{National: true, Boulder: false, Denver : false},
	"Headline":"National News Story 2",
	"Copy" : "This news story is published nationally and will show on any pages that do not have local news stories."
});

data.News.push({
	"Locations":{National: true, Boulder: false, Denver : false},
	"Headline":"National News Story 1",
	"Copy" : "This news story is published nationally and will show on any pages that do not have local news stories."
});

data.News.push({
	"Locations":{National: false, Boulder: false, Denver : true},
	"Headline":"Denver News Story 1",
	"Copy" : "This Denver News Story is only published in Denver and not shared with Boulder. This may be because it is only relevant in the Denver Metro area, or any other reason the publisher didn't also share it with Boulder"
});

data.News.push({
	"Locations":{National: false, Boulder: true, Denver : true},
	"Headline":"Denver News Story 2",
	"Copy" : "This Denver News Story is Shared with Boulder. This could be because it is a state news story, or a large enough story."
});

data.Locations.Denver = {
	"Copy" : "The City and County of Denver (/ˈdɛnvər/; Arapaho: Niinéniiniicíihéhe')[13] is the capital and most populous municipality of the U.S. state of Colorado. Denver is also the second-most populous county in Colorado after El Paso County. Denver is located in the South Platte River Valley on the western edge of the High Plains just east of the Front Range of the Rocky Mountains. The Denver downtown district is located immediately east of the confluence of Cherry Creek with the South Platte River, approximately 12 miles (19 km) east of the foothills of the Rocky Mountains. Denver is nicknamed the Mile-High City because its official elevation is exactly one mile (5,280 feet or 1,609.344 meters) above sea level, making it one of the highest major cities in the United States.",
	"Links" : ["Denver Link 1", "Denver Link 2", "Denver Link 3", "Denver Link 4", "Denver Link 5"]
};

data.Locations.Boulder = {
	"Copy" : "The City of Boulder is the Home Rule Municipality that is the county seat and the most populous municipality of Boulder County, and the 11th most populous municipality in the U.S. state of Colorado.[7] Boulder is located at the base of the foothills of the Rocky Mountains at an elevation of 5,430 feet (1,655 m). The city is 25 miles (40 km) northwest of Denver. The population of the City of Boulder was 97,385 at the 2010 United States Census, while the population of the Boulder, CO Metropolitan Statistical Area was 294,567.",
	"Links" : ["Boulder Link 1", "Boulder Link 2", "Boulder Link 3", "Boulder Link 4"]
};

data.Locations.National = {
	"Copy" : "AMR serves more communities and customers than any other private ambulance service provider in the nation. AMR employees also participate in the communities where they live and work. As medical service providers and as neighbors, your needs are our concerns.",
	"Links" : ["National Link 1", "National Link 2", "National Link 3", "National Link 4"]
};