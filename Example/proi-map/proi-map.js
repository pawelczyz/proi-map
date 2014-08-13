function place(country, company, city, address, url, lat, lng) {
	return {
		company: company,
		country: country,
		city: city,
		address: address,
		url: url,
		pos: new google.maps.LatLng(lat, lng) 
	};
}

var places = new Array(
	place('Portugal', 'Inforpress', 'Lisbon', 'Avenida da Liberdade, Nro 157, 1o', 'www.inforpress.pt', 38.7336327, -9.169100699999944),
	place('Portugal', 'Inforpress', 'Oporto', 'Edificio Executive, Rua Dr. Alberto Macedo, 116-128', 'www.inforpress.pt', 41.1566892, -8.623925399999962),
	place('Austria', 'comm:unications ', 'Vienna', 'Liechtensteinstr. 12 / 9', 'www.communications.co.at', 48.2175084, 16.36228619999997),
	place('Belgium', 'Interel', 'Brussels', 'rue du Luxembourg, 22-24', 'www.interelgroup.com', 50.8402577, 4.368184499999984),
	place('Belgium', 'Mostra', 'Brussels', '1001, Chaussée d\'Alsemberg', 'www.mostra.com', 50.7958497, 4.335046299999931),
	place('Czech Republic', 'Ewing PR', 'Prague', 'Plzenska 3217/16', 'www.ewingpr.cz', 50.0721283, 14.399931599999945),
	place('Denmark', 'KommunikationsKompagniet', 'Copenhagen', 'Nannasgade 28', 'www.kkonline.dk', 55.701006, 12.546493899999973),
	place('UK', 'Publicasity', 'London', '15 Kean Street', 'www.publicasity.co.uk', 51.5138681, -0.11901349999993727),
	place('UK', 'Publicasity', 'Hemel Hempstead', '4 The Waterhouse', 'www.publicasity.co.uk', 51.7516658, -0.4736786999999367),
	place('UK', 'Lansons Communications', 'London', '24a St John Street', 'www.lansons.com', 51.5203205, -0.1014505000000554),
	place('UK', 'WCG', 'London', '16 High Holborn', 'www.wcgworld.com', 51.518501, -0.11239399999999478),
	place('Latvia', 'Publicum', 'Riga', 'Aristida Briana iela 9A-2', 'www.publicim.lt', 56.9625745, 24.126330300000063),
	place('Finland', 'Cocomms', 'Helsinki', 'Porkkalankatu 20 a', 'www.cocomms.com', 60.1636803, 24.91016860000002),
	place('France', 'Wellcom', 'Paris', '8 Rue Fourcroy', 'www.wellcom.fr', 48.8802886, 2.2961380000000418),
	place('Germany', 'fisherAppelt', 'Hamburg', 'Waterloohain 5', 'www.fischerappelt.de/', 53.56723, 9.953560000000039),
	place('Germany', 'fisherAppelt', 'Berlin', 'Friedrichstrasse 149', 'www.fischerappelt.de/', 52.51910239999999, 13.388163500000019),
	place('Germany', 'fisherAppelt', 'Cologne', 'Im Zollhafen 24', 'www.fischerappelt.de/', 50.9257473, 6.96644660000004),
	place('Germany', 'fisherAppelt', 'Frankfurt', 'Lindleystrasse 12', 'www.fischerappelt.de/', 50.1124105, 8.718767699999944),
	place('Germany', 'fisherAppelt', 'Munich', 'Infanteriestrasse 11a', 'www.fischerappelt.de/', 48.1593689, 11.555217599999992),
	place('Germany', 'fisherAppelt', 'Stuttgart', 'Neckarstrasse 155', 'www.fischerappelt.de/', 48.79048, 9.196519999999964),
	place('Hungary', 'Premier Public Relations', 'Budapest', 'Fejer Gyorgy u. 8. I/2', 'www.premiercom.hu', 47.4894662, 19.058675799999946),
	place('Italy', 'TTA', 'Milan', 'Viale Beatrice d\'Este, 15', 'www.tta.it', 45.45216990000001, 9.191619400000036),
//	place('Malta', 'Impetus', 'Valletta', '85 St. John Street', 'www.impetuseurope.com', 35.8982663, 14.511417299999948),
	place('Norway', 'Slager', 'Oslo', 'Stortingsgata 12', 'www.slaeger.com', 59.91330970000001, 10.736885499999971),
	place('Russia', 'AGT', 'Moscow', '3/13, Maroseyka Street', 'www.agt-holding.com', 55.758056, 37.63641699999994),
	place('Russia', 'AGT', 'Nizhny Novgorod', 'Varvarskaya street, 14', 'www.agt-holding.com', 56.323633, 44.010054999999966),
	place('Russia', 'AGT', 'Novosibirsk', 'Lenina Street, 12', 'www.agt-holding.com', 55.029787, 82.91345690000003),
	place('Russia', 'AGT', 'Rostov-on-Don', 'Rostov-on-Don', 'www.agt-holding.com', 47.243801, 39.751930000000016),
	place('Russia', 'AGT', 'Saint Petersburg', 'Voznesenskiy Prospekt, 3', 'www.agt-holding.com', 59.93471899999999, 30.308081000000016),
	place('Russia', 'AGT', 'Vladivostok', 'Captain Shefner street, 2a', 'www.agt-holding.com', 43.1666667, 131.93333329999996),
	place('Russia', 'AGT', 'Yekaterinburg', 'Volgogradskaya street, 193', 'www.agt-holding.com', 56.813779, 60.549845000000005),
	place('Slovakia', 'Seesame', 'Bratislava', 'Prievozska 4D', 'www.seesame.com', 48.147483, 17.148905799999966),
	place('Spain', 'Inforpress', 'Madrid', 'Arturo Soria 99', 'www.inforpress.com', 40.44874290000001, -3.6512218000000303),
	place('Spain', 'Inforpress', 'Barcelona', 'Villarroel 214', 'www.inforpress.com', 41.3919996, 2.147833799999944),
	place('Spain', 'Inforpress', 'Bilboa', 'Campo Volantin, 24', 'www.inforpress.com', 43.2671245, -2.9274528999999347),
	place('Spain', 'Inforpress', 'Malaga', 'C/ Córdoba, 6 ofic. 302', 'www.inforpress.com', 36.7165251, -4.422215300000062),
	place('Spain', 'Inforpress', 'Sevilla', 'C/ Luis de Morales, 32A', 'www.inforpress.com', 37.3833412, -5.9732521999999335),
	place('Spain', 'Inforpress', 'Valencia', 'Pza. Canovas del Castillo, 1', 'www.inforpress.com', 39.4687501, -0.36610670000004575),
	place('Spain', 'Inforpress', 'Santiago de Compostela', 'C/ Doutor Teixeiro, 39', 'www.inforpress.com', 42.8737138, -8.545680100000027),
	place('Sweden', 'Gillers Groupp APP', 'Stockholm', 'Birger Jarlsgatan 32A', 'www.gullers.se', 59.3382679, 18.0691632),
	//place2('Sweden', 'Informedia', 'Stockholm', 'Bondegatan 21', 'www.informedia.se', 59.31348239999999, 18.080047400000012),
	place('Switzerland', 'Int-Ext Communications', 'Basel', 'St. Johanns-Vorstadt 22', 'www.int-ext.com', 47.5631051, 7.584859400000028),
	place('The Netherlands', 'Van Luyken', 'Amsterdam', 'Schipholpoort 40', 'www.vanluyken.nl', 52.3702157, 4.895167899999933),
	place('Turkey', 'Zego Communications', 'Istanbul', 'Gazeteciler Mahallesi, Yazarlar Sokak No:5', 'www.zego.com.tr', 41.0865837, 29.019181600000024),
	place('Poland', '24/7Communication', 'Warsaw', 'Swietojerska 5/7', 'www.247.com.pl', 52.2510278, 21.00674920000006),
	place('Canada', 'PROI - Calgary', 'Calgary', '', 'www.proi.com', 51.0453246, -114.05810120000001),
	place('Canada', 'Enigma Communications Inc.', 'Montreal', '507 Place d\'Armes, suite 1101', 'www.enigma.ca', 45.505171, -73.55698610000002),
	place('Canada', 'PROI WORLDWIDE', 'Surrey', '', 'www.proi.com', 49.186495, -122.82313399999998),
	place('Canada', 'Brown & Cohen Communications & Public Affairs Inc.', 'Toronto', '321 Brooke Avenue', 'www.brown-cohen.com', 43.7318892, -79.42549729999996),
	place('Canada', 'PROI - Vancouver', 'Vancouver', '', 'www.proi.com', 49.261226, -123.1139268),
	place('Mexico', 'FWD Consultores', 'Mexico City', 'Montecito 38 Col. Napoles. Piso 11 of. 24', 'www.fwd.com.mx', 19.3946707, -99.1726425),
	place('United States', 'Jackson Spalding', 'Athens', 'Skyline Terrace, 125 West Washington St. Suite 775', 'http://www.jacksonspalding.com/', 31.99330479999999, -102.07455549999997),
	place('United States', 'Jackson Spalding', 'Atlanta', '1100 Peachtree Street NE Suite 900', 'http://www.jacksonspalding.com/', 33.7849169, -84.38316459999999),
	place('United States', '360 Public Relations', 'Boston', '200 State Street', 'http://360publicrelations.com/', 42.3599729, -71.05318899999997),
	place('United States', 'Gibbs & Soell Business Communications', 'Chicago', '125 S. Wacker Drive, Suite 2600', 'http://www.gibbs-soell.com/', 41.879957, -87.63642199999998),
	place('United States', 'Walker Sands Communication', 'Chicago', '121 N. Jefferson Street', 'http://www.walkersands.com/', 41.883867, -87.64258530000001),
	place('United States', 'Falls Communications', 'Cleveland', '50 Public Square Fl 25 ', 'http://www.fallscommunications.com/', 41.4987025, -81.69385790000001),
	place('United States', 'PROI WORLDWIDE', 'Cleveland', '', 'www.proi.com', 41.4994954, -81.6954088),
	place('United States', 'Jackson Spalding', 'Dallas', 'Saint Paul Place, 750 North Saint Paul St. Suite 1700', 'http://www.jacksonspalding.com/', 32.786041, -96.79972900000001),
	place('United States', 'Lambert, Edwards & Assiociates', 'Detroit', '1420 Broadway, First Floor', 'http://lambert-edwards.com/', 42.8886527, -78.84203379999997),
	place('United States', 'Lambert, Edwards & Assiociates', 'Grand Rapids', '47 Commerce Grand Rapids, MI 49503', 'http://lambert-edwards.com/', 42.9618759, -85.66952600000002),
	place('United States', 'Lambert, Edwards & Assiociates', 'Lansing', '101 S. Washington Square, Suite 800', 'http://lambert-edwards.com/', 42.733296, -84.55183699999998),
	place('United States', 'MPRM Communications', 'Los Angeles', '5670 Wilshire Boulevard, Suite 2500', 'http://mprm.com/', 34.0616817, -118.35227220000002),
	place('United States', 'Gage', 'Minneapolis', '10000 Hwy 55, Plymouth, MN 55441', 'http://www.gage.com/Home', 44.9838185, -93.40617279999998),
	place('United States', 'Broadgate Consultants, LLC', 'New York', '48 Wall Street', 'www.broadgate.com', 40.7063082, -74.00910240000002),
	place('United States', 'Crenshaw Communications', 'New York', '36 West 20th St., 5th Floor', 'www.crenshawcomm.com', 40.740339, -73.99311799999998),
	place('United States', 'Gibbs & Soell Business Communications', 'New York', '60 East 42nd Street, 44th Floor', 'http://www.gibbs-soell.com/', 40.7521126, -73.9786947),
	place('United States', 'Widmeyer Communications', 'New York', '301 East 57th Street; Fourth Floor', 'http://www.widmeyer.com/', 40.7599239, -73.96457959999998),
	place('United States', 'FRAUSE', 'Portland', '838 S.W. First Ave., Suite 400', 'http://www.frause.com/', 45.5165826, -122.67411119999997),
	place('United States', 'Gibbs & Soell Business Communications', 'Raleigh', '8521 Six Forks Road Suite 300', 'http://www.gibbs-soell.com/', 35.89506, -78.65155199999998),
	place('United States', 'Torme Lauricella', 'San Francisco', '847 Sansome Street', 'www.torme.com', 37.7980639, -122.40230730000002),
	place('United States', 'Walker Sands Communication', 'San Francisco', '156 2nd Street', 'http://www.walkersands.com/', 37.787245, -122.39903989999999),
	place('United States', 'FRAUSE', 'Seattle', '1411 Fourth Avenue, Suite 1210', 'http://www.frause.com/', 47.6095098, -122.33622250000002),
	place('United States', 'Blick & Staff', 'St. Louis', '130 S. Bemiston, Suite 501', 'http://www.blickandstaff.com/', 38.647861, -90.33677799999998),
	place('United States', 'The Vandiver Group, Inc', 'St. Louis', '510 Maryville Centre Drive, Suite 320', 'www.vandivergroup.com', 38.6413907, -90.50292809999996),
	place('United States', 'Tucker/Hall, Inc.', 'Tampa', '201 N. Franklin Street, Suite 2760', 'http://www.tuckerhall.com/', 27.946704, -82.45701299999996),
	place('United States', 'Widmeyer Communications', 'Washington', '1129 20th Street, NW; Suite 200', 'http://www.widmeyer.com/', 38.9045257, -77.0446718),
	place('Argentina', 'Muchnik.com', 'Buenos Aires', 'Libertad 1213, 2nd Floor', 'www.muchnik.co', -34.5942035, -58.384399900000005),
	place('Brazil', 'Imagem Corporativa', 'Sao Paulo', 'Av. Angelica, 2530, 19 Floor, Consolacao', 'www.imagemcorporativa.com.br', -23.5538069, -46.662426100000005),
	place('Chile', 'Vanguardia Comunicacion', 'Santiago', 'Kennedy 5454 of 101', 'www.vanguardiacomunicacion.cl', -33.3998441, -70.57673499999999),
	place('Colombia', 'Position Comunicationes Estrategica', 'Bogota', 'Calle 109 # 19 ‚Äi 48, Piso 5', 'www.positioncomunicaciones.com', 4.6877286, -74.03487840000003),
	place('Australia', 'Red Public Relations', 'Brisbane', 'Level 1, 11 Wicklow St, Kangaroo Point', 'www.redpr.com.au', -27.4664107, 153.03492370000004),
	place('Australia', 'SenateSHJ', 'Melbourne', 'Level 16, 330 Collins Street 3000', 'www.senateshj.com.au', -37.81631, 144.963216),
	place('Australia', 'Citadel Communications', 'Sydney', 'Level 8, 61 York Stree', 'www.citadelpr.com.au', -33.8674613, 151.20565439999996),
	place('Australia', 'MAGNUS Investor Relationd + Corporate Communication', 'Sydney', 'Level 1, 71 Macquarie Street, East Circular Quay', 'www.magnus.net.au', -33.861292, 151.21287400000006),
	place('Australia', 'Red Public Relations', 'Sydney', 'Level 6, 69 Reservoir St, Surry Hills', 'www.redpr.com.au', -33.8814521, 151.21096599999998),
	place('Australia', 'SenateSHJ', 'Sydney', 'Level 3, 63 York Street', 'www.senateshj.com.au', -33.8675934, 151.20567440000002),
	place('Australia', 'MAGNUS Investor Relationd + Corporate Communication', 'West Perth', 'Unit 13, Ground Floor, 38 Colin Street', 'www.magnus.net.au', -31.9503207, 115.84157570000002),
	place('China', 'Strategic Public Relations Group Limited', 'Beijing', 'Room 601, F-6, Zhuoming Plaza, Tower 1, No. 6 Jianhua South Road, Chaoyang District', 'www.sprg.asia', 39.90403, 116.40752599999996),
	place('China', 'Strategic Public Relations Group Limited', 'Guangzhou', 'Room 1809, Dongshan Plaza, 69 Xianlie Road Central', 'www.sprg.asia', 23.129163, 113.26443500000005),
	place('China', 'Strategic Public Relations Group Limited', 'Shanghai', 'Room 1101, United Plaza, No.1468 West Nanjing Road', 'www.sprg.asia', 31.2254736, 121.44985840000004),
	place('India', 'Adfactors PR Private Limited', 'Ahmedabad', '53, Shrikrishna Centre, 6th Floor', 'www.adfactorspr.com', 23.0310498, 72.56323129999998),
	place('India', 'Adfactors PR Private Limited', 'Bangalore', 'Al. Latheef Building No 2, Union Street', 'www.adfactorspr.com', 12.9715987, 77.59456269999998),
	place('India', 'Integral PR Services Pvt Ltd', 'Bangalore', '', 'www.integralpr.com', 12.9715987, 77.59456269999998),
	place('India', 'Adfactors PR Private Limited', 'Chandigarh', 'S.C.F-19, 2nd Floor, Sector 6S1, Mohali, PB 160062', 'www.adfactorspr.com', 30.6780203, 76.73076630000003),
	place('India', 'Adfactors PR Private Limited', 'Chennai', 'No 204, Prince Centre', 'www.adfactorspr.com', 13.0584207, 80.25698299999999),
	place('India', 'Integral PR Services Pvt Ltd', 'Chennai', '', 'www.integralpr.com', 13.0524139, 80.25082459999999),
	place('India', 'Adfactors PR Private Limited', 'Hyderabad', '302 Dega Tower, Rajabhavan Road, Somajiguda', 'www.adfactorspr.com', 17.385044, 78.486671),
	place('India', 'Integral PR Services Pvt Ltd', 'Hyderabad', '', 'www.integralpr.com', 17.385044, 78.486671),
	place('India', 'Adfactors PR Private Limited', 'Jaipur', 'C-40, Jyoti Marg, Bapu Nagar', 'www.adfactorspr.com', 26.8890079, 75.80674929999998),
	place('India', 'Adfactors PR Private Limited', 'Kolkata', '2nd Floor,120, Chittaranjan Avenue', 'www.adfactorspr.com', 22.5786063, 88.36036360000003),
	place('India', 'Integral PR Services Pvt Ltd', 'Kolkata', '', 'www.integralpr.com', 22.572646, 88.36389499999996),
	place('India', 'Adfactors PR Private Limited', 'Mumbai', 'City Hall, Kamla Mills, Lower Parel', 'www.adfactorspr.com', 19.0759837, 72.87765590000004),
	place('India', 'Integral PR Services Pvt Ltd', 'Mumbai', '', 'www.integralpr.com', 19.0759837, 72.87765590000004),
	place('India', 'Adfactors PR Private Limited', 'New Delhi', 'Okhala Industrial Estate Phase 3 Road, Okhla Phase III, Okhla ', 'www.adfactorspr.com', 28.5519459, 77.26892369999996),
	place('India', 'Integral PR Services Pvt Ltd', 'New Delhi', 'Integral PR Services Pvt. Ltd., Corporate Office – New Delhi, A-11, 1st & 3rd Floor, Lajpat Nagar-II,', 'www.integralpr.com', 28.635308, 77.22496000000001),
	place('India', 'Adfactors PR Private Limited', 'Pune', 'C Wing, Office no. 14, Ground Floor, Sreenath Plaza, Dnyaneshwar Paduka Chowk, Fergusson College Road', 'www.adfactorspr.com', 18.5204303, 73.85674369999992),
	place('Japan', 'Asahi Agency', 'Tokyo', 'ARK Mori Bldg. 33F, 1-12-32 Akasaka, Minato-ku', 'asahiagency.com', 35.6749461, 139.73587229999998),
	place('Japan', 'Cosmo Public Relations Corp.', 'Tokyo', 'Azabukaisei Bldg., 1-8-10 Azabudai, Minato-ku', 'www.cosmopr.co.jp', 35.6603092, 139.7424416),
	place('Singapore', 'PROI - Singapore', 'Singapore', '', 'www.proi.com', 1.2800945, 103.85094909999998),
	place('Singapore', 'Huntington Communications Pte. Ltd', 'Trivex', '8 Burn Road, #12-02 Trivex', 'www.huntington.com.sg',1.3358149,103.8850424),
	place('South Korea', 'INR', 'Seoul', '15th Fl., Ace Tower, 1-170, Soonhwa-Dong, Jung-Gu', 'www.inrcomm.com', 37.566535, 126.97796919999996),
	place('Taiwan', 'STRATEGIC PUBLIC RELATIONS GROUP LIMITED (TAIWAN)', 'Taipei', '5F, No. 112, Sec. 1, Zhongxiao East Road, Zhongzheng District', 'www.sprg.com.tw', 25.0456326, 121.51976769999999),
	place('Vietnam', 'AWARENESS ID', 'Ho Chi Minh City', '6 Fl., Rosana Building, 60 Nguyen Dinh Chieu St., District 1', 'www.awareness.com.vn', 10.8230989, 106.6296638),
    place('Latvia', 'Publicum', 'Vilnius', 'Jogailos str. 4', 'www.publicim.lt', 54.686708,25.278978),
    place('China', 'Strategic Public Relations Group Limited', 'Hong Kong', '2402 & 29A, Admiralty Centre I, 18 Harcourt Road', 'www.sprg.asia', 22.27937,114.16511),
    place('New Zeland', 'SenateSHJ', 'Auckland', 'PO Box 227, Shortland Street, Level 3, Vulcan Building, 118 ‚124 Queen Street', 'www.senateshj.co.nz', -41.286582,174.776875),
    place('New Zeland', 'SenateSHJ', 'Wellington', 'PO Box 10596, The Terrace, Level 3, Dimension Data House, 99 ‚105 Customhouse Quay', 'www.senateshj.co.nz', -36.847689,174.763298),
	place('Egypt', '4-PR', 'Cairo', 'Bldg.41 Street 269, New Maadi', 'www.4-pr.com',30.122561,31.342621),
	place('South Africa', 'Atmosphere', 'Johannesburg', 'Johannesburg, Gauteng 2024', 'www.atmosphere.co.za',-26.104888,28.025093),
	place('South Africa', 'Atmosphere', 'Johannesburg', '22 Lawley Road, Woodstock, 7925', 'www.atmosphere.co.za',-33.928833,18.454456),
	place('Costa Rica', 'The Map Communication', 'San Jose', '2do Piso, Oficina 2-1 Escazu', 'www.themapcomm.com',9.958936,-84.118401),
	place('Romania', 'Rogalski Damaschin Public Relations', 'Bucharest', '11 Grigore Mora Str', 'www.rogalskidamaschin.ro',44.4630639,26.0876063),
	place('Marocco', 'Stratëus Group - Affaires et Relations', 'Casablanca', '3, rue Brahim Bnou Adham – Maarif, 20340', 'www.strateusgroup.com',33.5822235,-7.6303467),
	place('Croatia', 'Komunikacijski ured, Colić, Laco i partneri d.o.o.', 'Zagreb', 'Draškovićeva 12/3, 10000', 'www.commoffice.com',45.8127139,15.9833204),
	place('United States', 'Finn Partners', 'New York', '301 East 57th Street, New York 10022', 'www.finnpartners.com',40.7593798,-73.9646707),
	place('United States', 'Finn Partners', 'Chicago', '625 N. Michigan Ave Suite 2300, IL 60611', 'www.finnpartners.com',41.8930428,-87.6236617),
	place('United States', 'Finn Partners', 'Detroit', '1528 Woodward Avenue, Floor 4, MI 48226', 'www.finnpartners.com',42.33556,-83.04927),
	place('United States', 'Finn Partners', 'Fort Lauderdale', '110 E. Broward Blvd, Suite 1950, FL 33301', 'www.finnpartners.com',26.121645,-80.141621),
	place('Israel', 'Finn Partners', 'Jerusalem', 'Hartum Street, Beck Science Center, POB 45138 Har Hotzvim, 91450', 'www.finnpartners.com',31.80299,35.213708),
	place('United Kingdom', 'Finn Partners', 'London', 'Unit 14 Jacks Place, 6 Corbet Place, E1 6NN', 'www.finnpartners.com',51.5207342,-0.0744205),
	place('United States', 'Finn Partners', 'Los Angeles', '1875 Century Park East, Suite 200, CA 90067', 'www.finnpartners.com',34.0609111,-118.4147379),
	place('United States', 'Finn Partners', 'San Francisco', '388 Market Street, Suite 1400, CA 94111', 'www.finnpartners.com',37.7922841,-122.3979603),
	place('United States', 'Finn Partners', 'Washington', '1129 20th St NW, #200, DC 20036', 'www.finnpartners.com',38.9045403,-77.0448983),
	place('Kenya', 'Corporate Talk Group', 'Nairobi', 'Wilson Business Park, Charlie Block', 'www.corporatetalk.co.ke',-1.316255,36.815132),
	place('Bulgaria', 'Intelday Solutions', 'Sofia', '57 Tzar Simeon, 1000 Sofia', 'www.intelday.com',42.7009191,23.3236734)
);

var lastInfoWindow = 0;

function getMarker2(map, i, geocoder) {
	var place = places[i];

	var contentString = '<div class="mapInfoWindow"><div class="mapInfoWindowText">' + place.company + '<br />' + place.address + '<br />' + place.city + ', ' + place.country + '</div><a href="http://' + place.url + '" target="_blank">' + place.url + '</a></div>';

	var infowindow = new InfoBox({
		disableAutoPan: false,
	    maxWidth: 300,
	    pixelOffset: new google.maps.Size(-159, 0),
	    boxStyle: {
	                background: "url('" + "proi-map/images/mapArrow.png" + "') no-repeat",
	                width: "320px"
	        },
	    closeBoxMargin: "33px 7px 4px 0",
	    closeBoxURL: "proi-map/images/mapButtonClose.png",
	    infoBoxClearance: new google.maps.Size(1, 1),
		content: contentString
	}); 
	
	var myLatLng = place.pos;
	var marker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		title: place.company,
		icon: "proi-map/images/mapMarker.png"
	});	

	google.maps.event.addListener(marker, 'click', function() {
		if(lastInfoWindow)
			lastInfoWindow.close();
		infowindow.open(map, marker);
		lastInfoWindow = infowindow;
	});
		

	i++;
	if (i < places.length) {
		getMarker2(map, i, geocoder);
	}
}

function mapInitialize() {
	var mapOptions = {
	  center: new google.maps.LatLng(32.990236, 44.648438),
	  zoom: 3
	};
	var map = new google.maps.Map(document.getElementById("mapGN"), mapOptions);

	var geo = new google.maps.Geocoder;
	getMarker2(map, 0, geo);
}

google.maps.event.addDomListener(window, 'load', mapInitialize);