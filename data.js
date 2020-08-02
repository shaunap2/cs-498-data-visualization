var earthquake_count_by_country = [
  {key:"China",value:362,group:"East Asia"},
  {key:"Indonesia",value:291,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Japan",value:241,group:"East Asia"},
  {key:"Iran",value:219,group:"Middle East"},
  {key:"Usa",value:192,group:"North America and Hawaii"},
  {key:"Turkey",value:168,group:"Middle East"},
  {key:"Italy",value:133,group:"Southern Europe"},
  {key:"Philippines",value:129,group:"Central and South Pacific"},
  {key:"Russia",value:119,group:"Kamchatka and Kuril Islands"},
  {key:"Peru",value:118,group:"South America"},
  {key:"Chile",value:113,group:"South America"},
  {key:"Mexico",value:107,group:"North America and Hawaii"},
  {key:"Greece",value:106,group:"Southern Europe"},
  {key:"Papua New Guinea",value:90,group:"Central and South Pacific"},
  {key:"Taiwan",value:75,group:"East Asia"},
  {key:"India",value:74,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Solomon Islands",value:61,group:"Central and South Pacific"},
  {key:"Colombia",value:54,group:"South America"},
  {key:"Afghanistan",value:51,group:"Central Asia and Caucasus"},
  {key:"New Zealand",value:51,group:"Central and South Pacific"},
  {key:"Vanuatu",value:47,group:"Central and South Pacific"},
  {key:"Pakistan",value:45,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Ecuador",value:41,group:"South America"},
  {key:"Algeria",value:38,group:"Northern Africa"},
  {key:"Nicaragua",value:30,group:"Central America"},
  {key:"Venezuela",value:28,group:"Caribbean"},
  {key:"Guatemala",value:28,group:"Central America"},
  {key:"Albania",value:27,group:"Southern Europe"},
  {key:"Myanmar (Burma)",value:27,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Costa Rica",value:26,group:"Central America"},
  {key:"Tajikistan",value:24,group:"Central Asia and Caucasus"},
  {key:"El Salvador",value:23,group:"Central America"},
  {key:"Usa Territory",value:22,group:"Caribbean"},
  {key:"Australia",value:20,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Tonga",value:19,group:"Central and South Pacific"},
  {key:"New Caledonia",value:19,group:"Central and South Pacific"},
  {key:"Panama",value:19,group:"Central America"},
  {key:"Fiji",value:17,group:"Central and South Pacific"},
  {key:"Kermadec Islands (New Zealand)",value:17,group:"Central and South Pacific"},
  {key:"Argentina",value:16,group:"South America"},
  {key:"Canada",value:15,group:"North America and Hawaii"},
  {key:"South Africa",value:13,group:"Central, Western and S. Africa"},
  {key:"France",value:12,group:"Northern and Western Europe"},
  {key:"Bulgaria",value:12,group:"Eastern Europe"},
  {key:"Bangladesh",value:12,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Azores (Portugal)",value:11,group:"Southern Europe"},
  {key:"Kyrgyzstan",value:11,group:"Central Asia and Caucasus"},
  {key:"Nepal",value:11,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Serbia",value:10,group:"Southern Europe"},
  {key:"Romania",value:10,group:"Eastern Europe"},
  {key:"Bosnia-Herzegovina",value:9,group:"Southern Europe"},
  {key:"Slovenia",value:8,group:"Southern Europe"},
  {key:"Spain",value:8,group:"Southern Europe"},
  {key:"Honduras",value:8,group:"Caribbean"},
  {key:"Iceland",value:8,group:"Northern and Western Europe"},
  {key:"Croatia",value:8,group:"Southern Europe"},
  {key:"Samoa",value:8,group:"Central and South Pacific"},
  {key:"Dominican Republic",value:8,group:"Caribbean"},
  {key:"Georgia",value:8,group:"Central Asia and Caucasus"},
  {key:"Azerbaijan",value:7,group:"Central Asia and Caucasus"},
  {key:"Uzbekistan",value:7,group:"Central Asia and Caucasus"},
  {key:"Macedonia",value:7,group:"Southern Europe"},
  {key:"Kazakhstan",value:7,group:"Central Asia and Caucasus"},
  {key:"Ethiopia",value:7,group:"Central, Western and S. Africa"},
  {key:"Morocco",value:6,group:"Northern Africa"},
  {key:"Brazil",value:6,group:"South America"},
  {key:"Tanzania",value:6,group:"Central, Western and S. Africa"},
  {key:"Uk",value:6,group:"Northern and Western Europe"},
  {key:"Egypt",value:6,group:"Northern Africa"},
  {key:"Poland",value:6,group:"Northern and Western Europe"},
  {key:"Mongolia",value:6,group:"Central Asia and Caucasus"},
  {key:"Montenegro",value:5,group:"Southern Europe"},
  {key:"Congo",value:5,group:"Central, Western and S. Africa"},
  {key:"Atlantic Ocean",value:5,group:"Atlantic Ocean"},
  {key:"Germany",value:5,group:"Northern and Western Europe"},
  {key:"Armenia",value:5,group:"Central Asia and Caucasus"},
  {key:"Bolivia",value:5,group:"South America"},
  {key:"Bhutan",value:5,group:"S. and SE. Asia and Indian Ocean"},
  {key:"South Georgia And The South Sandwich Islands",value:5,group:"Atlantic Ocean"},
  {key:"Antarctica",value:4,group:"Antarctica"},
  {key:"Rwanda",value:4,group:"Central, Western and S. Africa"},
  {key:"Cuba",value:4,group:"Caribbean"},
  {key:"Micronesia",value:4,group:"Central and South Pacific"},
  {key:"Tunisia",value:4,group:"Northern Africa"},
  {key:"Haiti",value:4,group:"Caribbean"},
  {key:"Turkmenistan",value:4,group:"Central Asia and Caucasus"},
  {key:"Malawi",value:4,group:"Central, Western and S. Africa"},
  {key:"Trinidad And Tobago",value:4,group:"Caribbean"},
  {key:"Guadeloupe",value:4,group:"Caribbean"},
  {key:"Mozambique",value:3,group:"Central, Western and S. Africa"},
  {key:"Hungary",value:3,group:"Eastern Europe"},
  {key:"Yemen",value:3,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Thailand",value:3,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Sudan",value:3,group:"Northern Africa"},
  {key:"Indian Ocean",value:3,group:"S. and SE. Asia and Indian Ocean"},
  {key:"South Korea",value:3,group:"East Asia"},
  {key:"Malaysia",value:3,group:"Central and South Pacific"},
  {key:"Ukraine",value:3,group:"Eastern Europe"},
  {key:"Uganda",value:3,group:"Central, Western and S. Africa"},
  {key:"Netherlands",value:3,group:"Northern and Western Europe"},
  {key:"Saudi Arabia",value:3,group:"Middle East"},
  {key:"Vietnam",value:2,group:"East Asia"},
  {key:"Zambia",value:2,group:"Central, Western and S. Africa"},
  {key:"Cameroon",value:2,group:"Central, Western and S. Africa"},
  {key:"Kenya",value:2,group:"Central, Western and S. Africa"},
  {key:"Ghana",value:2,group:"Central, Western and S. Africa"},
  {key:"Cyprus",value:2,group:"Southern Europe"},
  {key:"Pacific Ocean",value:2,group:"Central and South Pacific"},
  {key:"Portugal",value:2,group:"Southern Europe"},
  {key:"Martinique",value:2,group:"Caribbean"},
  {key:"Israel",value:2,group:"Middle East"},
  {key:"Lebanon",value:2,group:"Middle East"},
  {key:"Jamaica",value:2,group:"Caribbean"},
  {key:"Uk Territory",value:1,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Comoros",value:1,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Saint Lucia",value:1,group:"Caribbean"},
  {key:"Central African Republic",value:1,group:"Central, Western and S. Africa"},
  {key:"Djibouti",value:1,group:"Central, Western and S. Africa"},
  {key:"Burundi",value:1,group:"Central, Western and S. Africa"},
  {key:"Bering Sea",value:1,group:"Bering Sea"},
  {key:"Belgium",value:1,group:"Northern and Western Europe"},
  {key:"Austria",value:1,group:"Northern and Western Europe"},
  {key:"Wallis And Futuna (French Territory)",value:1,group:"Central and South Pacific"},
  {key:"Antigua And Barbuda",value:1,group:"Caribbean"},
  {key:"Czech Republic",value:1,group:"Eastern Europe"},
  {key:"Iraq",value:1,group:"Middle East"},
  {key:"Gabon",value:1,group:"Central, Western and S. Africa"},
  {key:"Guinea",value:1,group:"Central, Western and S. Africa"},
  {key:"Togo",value:1,group:"Central, Western and S. Africa"},
  {key:"Jordan",value:1,group:"Middle East"},
  {key:"Syria",value:1,group:"Middle East"},
  {key:"Switzerland",value:1,group:"Northern and Western Europe"},
  {key:"Kiribati",value:1,group:"Central and South Pacific"},
  {key:"Libya",value:1,group:"Northern Africa"},
  {key:"Madagascar",value:1,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Solomon Sea",value:1,group:"Central and South Pacific"},
  {key:"Palau",value:1,group:"Central and South Pacific"},
  {key:"Slovakia",value:1,group:"Eastern Europe"},
  {key:"Laos",value:1,group:"S. and SE. Asia and Indian Ocean"}
  ];

earthquake_count_by_region = [
  {key:"Central and South Pacific",value:620,group:"Central and South Pacific"},
  {key:"East Asia",value:602,group:"East Asia"},
  {key:"Middle East",value:397,group:"Middle East"},
  {key:"South America",value:367,group:"South America"},
  {key:"S. and SE. Asia and Indian Ocean",value:363,group:"S. and SE. Asia and Indian Ocean"},
  {key:"Southern Europe",value:335,group:"Southern Europe"},
  {key:"North America and Hawaii",value:313,group:"North America and Hawaii"},
  {key:"Central Asia and Caucasus",value:229,group:"Central Asia and Caucasus"},
  {key:"Central America",value:128,group:"Central America"},
  {key:"Kamchatka and Kuril Islands",value:102,group:"Kamchatka and Kuril Islands"},
  {key:"Caribbean",value:59,group:"Caribbean"},
  {key:"Northern Africa",value:58,group:"Northern Africa"},
  {key:"Central, Western and S. Africa",value:58,group:"Central, Western and S. Africa"},
  {key:"Northern and Western Europe",value:43,group:"Northern and Western Europe"},
  {key:"Eastern Europe",value:30,group:"Eastern Europe"},
  {key:"Atlantic Ocean",value:11,group:"Atlantic Ocean"},
  {key:"Antarctica",value:4,group:"Antarctica"},
  {key:"Bering Sea",value:1,group:"Bering Sea"}
];

earthquake_count_by_year_sorted_count = [
  {key:"2004",value:78,group:"2004"},
  {key:"2008",value:77,group:"2008"},
  {key:"2003",value:72,group:"2003"},
  {key:"2007",value:67,group:"2007"},
  {key:"2018",value:65,group:"2018"},
  {key:"2017",value:64,group:"2017"},
  {key:"2010",value:62,group:"2010"},
  {key:"2009",value:61,group:"2009"},
  {key:"2019",value:61,group:"2019"},
  {key:"2006",value:61,group:"2006"},
  {key:"2011",value:60,group:"2011"},
  {key:"2005",value:60,group:"2005"},
  {key:"2002",value:60,group:"2002"},
  {key:"2014",value:55,group:"2014"},
  {key:"2013",value:52,group:"2013"},
  {key:"2016",value:52,group:"2016"},
  {key:"1990",value:51,group:"1990"},
  {key:"2012",value:49,group:"2012"},
  {key:"2015",value:48,group:"2015"},
  {key:"1983",value:45,group:"1983"},
  {key:"1991",value:42,group:"1991"},
  {key:"1968",value:40,group:"1968"},
  {key:"2000",value:37,group:"2000"},
  {key:"1989",value:35,group:"1989"},
  {key:"1961",value:35,group:"1961"},
  {key:"1999",value:35,group:"1999"},
  {key:"1976",value:35,group:"1976"},
  {key:"1962",value:34,group:"1962"},
  {key:"1997",value:34,group:"1997"},
  {key:"1930",value:34,group:"1930"},
  {key:"1979",value:34,group:"1979"},
  {key:"1909",value:34,group:"1909"},
  {key:"1986",value:33,group:"1986"},
  {key:"1971",value:33,group:"1971"},
  {key:"1980",value:33,group:"1980"},
  {key:"1978",value:33,group:"1978"},
  {key:"1987",value:33,group:"1987"},
  {key:"1966",value:33,group:"1966"},
  {key:"1928",value:32,group:"1928"},
  {key:"1994",value:32,group:"1994"},
  {key:"1970",value:31,group:"1970"},
  {key:"1906",value:31,group:"1906"},
  {key:"1969",value:31,group:"1969"},
  {key:"1905",value:31,group:"1905"},
  {key:"1998",value:31,group:"1998"},
  {key:"1995",value:31,group:"1995"},
  {key:"1975",value:30,group:"1975"},
  {key:"1931",value:30,group:"1931"},
  {key:"1985",value:30,group:"1985"},
  {key:"1988",value:30,group:"1988"},
  {key:"1984",value:28,group:"1984"},
  {key:"1923",value:28,group:"1923"},
  {key:"1927",value:28,group:"1927"},
  {key:"1963",value:28,group:"1963"},
  {key:"1950",value:27,group:"1950"},
  {key:"1938",value:27,group:"1938"},
  {key:"1957",value:27,group:"1957"},
  {key:"1959",value:27,group:"1959"},
  {key:"1992",value:27,group:"1992"},
  {key:"1967",value:27,group:"1967"},
  {key:"1993",value:26,group:"1993"},
  {key:"1965",value:26,group:"1965"},
  {key:"1956",value:26,group:"1956"},
  {key:"1935",value:26,group:"1935"},
  {key:"1972",value:26,group:"1972"},
  {key:"1973",value:26,group:"1973"},
  {key:"1917",value:25,group:"1917"},
  {key:"1943",value:25,group:"1943"},
  {key:"1982",value:25,group:"1982"},
  {key:"1932",value:25,group:"1932"},
  {key:"2001",value:25,group:"2001"},
  {key:"1977",value:25,group:"1977"},
  {key:"1925",value:24,group:"1925"},
  {key:"1916",value:24,group:"1916"},
  {key:"1955",value:24,group:"1955"},
  {key:"1954",value:23,group:"1954"},
  {key:"1907",value:23,group:"1907"},
  {key:"1902",value:23,group:"1902"},
  {key:"1922",value:23,group:"1922"},
  {key:"1949",value:23,group:"1949"},
  {key:"1910",value:22,group:"1910"},
  {key:"1981",value:22,group:"1981"},
  {key:"1926",value:22,group:"1926"},
  {key:"1958",value:22,group:"1958"},
  {key:"1903",value:22,group:"1903"},
  {key:"1960",value:22,group:"1960"},
  {key:"1914",value:21,group:"1914"},
  {key:"1953",value:21,group:"1953"},
  {key:"1929",value:21,group:"1929"},
  {key:"1974",value:21,group:"1974"},
  {key:"1939",value:20,group:"1939"},
  {key:"1913",value:20,group:"1913"},
  {key:"1911",value:20,group:"1911"},
  {key:"1948",value:20,group:"1948"},
  {key:"1946",value:20,group:"1946"},
  {key:"1964",value:20,group:"1964"},
  {key:"1936",value:20,group:"1936"},
  {key:"1952",value:19,group:"1952"},
  {key:"1941",value:19,group:"1941"},
  {key:"1937",value:19,group:"1937"},
  {key:"1918",value:19,group:"1918"},
  {key:"1996",value:19,group:"1996"},
  {key:"1934",value:19,group:"1934"},
  {key:"1901",value:18,group:"1901"},
  {key:"1904",value:18,group:"1904"},
  {key:"1900",value:18,group:"1900"},
  {key:"1924",value:18,group:"1924"},
  {key:"1933",value:18,group:"1933"},
  {key:"1942",value:18,group:"1942"},
  {key:"1947",value:17,group:"1947"},
  {key:"1951",value:17,group:"1951"},
  {key:"1915",value:16,group:"1915"},
  {key:"1919",value:16,group:"1919"},
  {key:"1921",value:16,group:"1921"},
  {key:"1940",value:16,group:"1940"},
  {key:"1912",value:15,group:"1912"},
  {key:"1944",value:14,group:"1944"},
  {key:"2020",value:14,group:"2020"},
  {key:"1908",value:13,group:"1908"},
  {key:"1920",value:12,group:"1920"},
  {key:"1945",value:12,group:"1945"}
];

earthquake_count_by_year_natural_order = [
  {key:"1900",value:18,group:"1900"},
  {key:"1901",value:18,group:"1901"},
  {key:"1902",value:23,group:"1902"},
  {key:"1903",value:22,group:"1903"},
  {key:"1904",value:18,group:"1904"},
  {key:"1905",value:31,group:"1905"},
  {key:"1906",value:31,group:"1906"},
  {key:"1907",value:23,group:"1907"},
  {key:"1908",value:13,group:"1908"},
  {key:"1909",value:34,group:"1909"},
  {key:"1910",value:22,group:"1910"},
  {key:"1911",value:20,group:"1911"},
  {key:"1912",value:15,group:"1912"},
  {key:"1913",value:20,group:"1913"},
  {key:"1914",value:21,group:"1914"},
  {key:"1915",value:16,group:"1915"},
  {key:"1916",value:24,group:"1916"},
  {key:"1917",value:25,group:"1917"},
  {key:"1918",value:19,group:"1918"},
  {key:"1919",value:16,group:"1919"},
  {key:"1920",value:12,group:"1920"},
  {key:"1921",value:16,group:"1921"},
  {key:"1922",value:23,group:"1922"},
  {key:"1923",value:28,group:"1923"},
  {key:"1924",value:18,group:"1924"},
  {key:"1925",value:24,group:"1925"},
  {key:"1926",value:22,group:"1926"},
  {key:"1927",value:28,group:"1927"},
  {key:"1928",value:32,group:"1928"},
  {key:"1929",value:21,group:"1929"},
  {key:"1930",value:34,group:"1930"},
  {key:"1931",value:30,group:"1931"},
  {key:"1932",value:25,group:"1932"},
  {key:"1933",value:18,group:"1933"},
  {key:"1934",value:19,group:"1934"},
  {key:"1935",value:26,group:"1935"},
  {key:"1936",value:20,group:"1936"},
  {key:"1937",value:19,group:"1937"},
  {key:"1938",value:27,group:"1938"},
  {key:"1939",value:20,group:"1939"},
  {key:"1940",value:16,group:"1940"},
  {key:"1941",value:19,group:"1941"},
  {key:"1942",value:18,group:"1942"},
  {key:"1943",value:25,group:"1943"},
  {key:"1944",value:14,group:"1944"},
  {key:"1945",value:12,group:"1945"},
  {key:"1946",value:20,group:"1946"},
  {key:"1947",value:17,group:"1947"},
  {key:"1948",value:20,group:"1948"},
  {key:"1949",value:23,group:"1949"},
  {key:"1950",value:27,group:"1950"},
  {key:"1951",value:17,group:"1951"},
  {key:"1952",value:19,group:"1952"},
  {key:"1953",value:21,group:"1953"},
  {key:"1954",value:23,group:"1954"},
  {key:"1955",value:24,group:"1955"},
  {key:"1956",value:26,group:"1956"},
  {key:"1957",value:27,group:"1957"},
  {key:"1958",value:22,group:"1958"},
  {key:"1959",value:27,group:"1959"},
  {key:"1960",value:22,group:"1960"},
  {key:"1961",value:35,group:"1961"},
  {key:"1962",value:34,group:"1962"},
  {key:"1963",value:28,group:"1963"},
  {key:"1964",value:20,group:"1964"},
  {key:"1965",value:26,group:"1965"},
  {key:"1966",value:33,group:"1966"},
  {key:"1967",value:27,group:"1967"},
  {key:"1968",value:40,group:"1968"},
  {key:"1969",value:31,group:"1969"},
  {key:"1970",value:31,group:"1970"},
  {key:"1971",value:33,group:"1971"},
  {key:"1972",value:26,group:"1972"},
  {key:"1973",value:26,group:"1973"},
  {key:"1974",value:21,group:"1974"},
  {key:"1975",value:30,group:"1975"},
  {key:"1976",value:35,group:"1976"},
  {key:"1977",value:25,group:"1977"},
  {key:"1978",value:33,group:"1978"},
  {key:"1979",value:34,group:"1979"},
  {key:"1980",value:33,group:"1980"},
  {key:"1981",value:22,group:"1981"},
  {key:"1982",value:25,group:"1982"},
  {key:"1983",value:45,group:"1983"},
  {key:"1984",value:28,group:"1984"},
  {key:"1985",value:30,group:"1985"},
  {key:"1986",value:33,group:"1986"},
  {key:"1987",value:33,group:"1987"},
  {key:"1988",value:30,group:"1988"},
  {key:"1989",value:35,group:"1989"},
  {key:"1990",value:51,group:"1990"},
  {key:"1991",value:42,group:"1991"},
  {key:"1992",value:27,group:"1992"},
  {key:"1993",value:26,group:"1993"},
  {key:"1994",value:32,group:"1994"},
  {key:"1995",value:31,group:"1995"},
  {key:"1996",value:19,group:"1996"},
  {key:"1997",value:34,group:"1997"},
  {key:"1998",value:31,group:"1998"},
  {key:"1999",value:35,group:"1999"},
  {key:"2000",value:37,group:"2000"},
  {key:"2001",value:25,group:"2001"},
  {key:"2002",value:60,group:"2002"},
  {key:"2003",value:72,group:"2003"},
  {key:"2004",value:78,group:"2004"},
  {key:"2005",value:60,group:"2005"},
  {key:"2006",value:61,group:"2006"},
  {key:"2007",value:67,group:"2007"},
  {key:"2008",value:77,group:"2008"},
  {key:"2009",value:61,group:"2009"},
  {key:"2010",value:62,group:"2010"},
  {key:"2011",value:60,group:"2011"},
  {key:"2012",value:49,group:"2012"},
  {key:"2013",value:52,group:"2013"},
  {key:"2014",value:55,group:"2014"},
  {key:"2015",value:48,group:"2015"},
  {key:"2016",value:52,group:"2016"},
  {key:"2017",value:64,group:"2017"},
  {key:"2018",value:65,group:"2018"},
  {key:"2019",value:61,group:"2019"},
  {key:"2020",value:14,group:"2020"}
];

var earthquake_count_by_month = [
  {key:"1",value:322,group:"1"},
  {key:"2",value:300,group:"2"},
  {key:"3",value:302,group:"3"},
  {key:"4",value:312,group:"4"},
  {key:"5",value:323,group:"5"},
  {key:"6",value:282,group:"6"},
  {key:"7",value:305,group:"7"},
  {key:"8",value:325,group:"8"},
  {key:"9",value:311,group:"9"},
  {key:"10",value:277,group:"10"},
  {key:"11",value:344,group:"11"},
  {key:"12",value:310,group:"12"}
];

var earthquake_count_by_magnitude = [
  {key:1.6,value:1,group:1.6},
  {key:2.1,value:2,group:2.1},
  {key:2.2,value:1,group:2.2},
  {key:3.1,value:3,group:3.1},
  {key:3.2,value:3,group:3.2},
  {key:3.4,value:3,group:3.4},
  {key:3.5,value:4,group:3.5},
  {key:3.6,value:3,group:3.6},
  {key:3.7,value:2,group:3.7},
  {key:3.8,value:5,group:3.8},
  {key:3.9,value:2,group:3.9},
  {key:4,value:7,group:4},
  {key:4.1,value:15,group:4.1},
  {key:4.2,value:15,group:4.2},
  {key:4.3,value:18,group:4.3},
  {key:4.4,value:24,group:4.4},
  {key:4.5,value:46,group:4.5},
  {key:4.6,value:36,group:4.6},
  {key:4.7,value:36,group:4.7},
  {key:4.8,value:41,group:4.8},
  {key:4.9,value:50,group:4.9},
  {key:5,value:84,group:5},
  {key:5.1,value:74,group:5.1},
  {key:5.2,value:74,group:5.2},
  {key:5.3,value:84,group:5.3},
  {key:5.4,value:82,group:5.4},
  {key:5.5,value:120,group:5.5},
  {key:5.6,value:101,group:5.6},
  {key:5.7,value:79,group:5.7},
  {key:5.8,value:105,group:5.8},
  {key:5.9,value:83,group:5.9},
  {key:6,value:143,group:6},
  {key:6.1,value:107,group:6.1},
  {key:6.2,value:97,group:6.2},
  {key:6.3,value:108,group:6.3},
  {key:6.4,value:92,group:6.4},
  {key:6.5,value:117,group:6.5},
  {key:6.6,value:96,group:6.6},
  {key:6.7,value:90,group:6.7},
  {key:6.8,value:118,group:6.8},
  {key:6.9,value:94,group:6.9},
  {key:7,value:131,group:7},
  {key:7.1,value:84,group:7.1},
  {key:7.2,value:84,group:7.2},
  {key:7.3,value:97,group:7.3},
  {key:7.4,value:55,group:7.4},
  {key:7.5,value:180,group:7.5},
  {key:7.6,value:116,group:7.6},
  {key:7.7,value:98,group:7.7},
  {key:7.8,value:101,group:7.8},
  {key:7.9,value:73,group:7.9},
  {key:8,value:27,group:8},
  {key:8.1,value:35,group:8.1},
  {key:8.2,value:18,group:8.2},
  {key:8.3,value:23,group:8.3},
  {key:8.4,value:8,group:8.4},
  {key:8.5,value:2,group:8.5},
  {key:8.6,value:6,group:8.6},
  {key:8.7,value:2,group:8.7},
  {key:8.8,value:1,group:8.8},
  {key:9,value:1,group:9},
  {key:9.1,value:2,group:9.1},
  {key:9.2,value:1,group:9.2},
  {key:9.5,value:1,group:9.5}
]

// Group --> Magnitude Count
var earthquake_damage_millions_of_dollars = [
  {key:1.6,value:0,group:1},
  {key:2.1,value:100,group:2},
  {key:2.2,value:0,group:1},
  {key:3.1,value:0,group:3},
  {key:3.2,value:0.9,group:3},
  {key:3.4,value:0,group:3},
  {key:3.5,value:3.8,group:4},
  {key:3.6,value:1.36,group:3},
  {key:3.7,value:0,group:2},
  {key:3.8,value:0,group:5},
  {key:3.9,value:0,group:2},
  {key:4,value:5,group:7},
  {key:4.1,value:0,group:15},
  {key:4.2,value:43,group:15},
  {key:4.3,value:1,group:18},
  {key:4.4,value:335,group:24},
  {key:4.5,value:22.6,group:46},
  {key:4.6,value:70.5,group:36},
  {key:4.7,value:5.5,group:36},
  {key:4.8,value:57.354,group:41},
  {key:4.9,value:418.9,group:50},
  {key:5,value:156,group:84},
  {key:5.1,value:187.95,group:74},
  {key:5.2,value:2107,group:74},
  {key:5.3,value:1999.68,group:84},
  {key:5.4,value:8790.255,group:82},
  {key:5.5,value:7529.8,group:120},
  {key:5.6,value:1330.829,group:101},
  {key:5.7,value:1551,group:79},
  {key:5.8,value:1546.56,group:105},
  {key:5.9,value:16781.676,group:83},
  {key:6,value:17781.4529999999,group:143},
  {key:6.1,value:16438.6,group:107},
  {key:6.2,value:10741.841,group:97},
  {key:6.3,value:7529,group:108},
  {key:6.4,value:2777.8,group:92},
  {key:6.5,value:6485.07699999999,group:117},
  {key:6.6,value:44835.63,group:96},
  {key:6.7,value:41464.2,group:90},
  {key:6.8,value:23815.82,group:118},
  {key:6.9,value:135983.326,group:94},
  {key:7,value:37192.575,group:131},
  {key:7.1,value:16361,group:84},
  {key:7.2,value:3927.55,group:84},
  {key:7.3,value:9562.744,group:97},
  {key:7.4,value:142.923,group:55},
  {key:7.5,value:14319.934,group:180},
  {key:7.6,value:28268.925,group:116},
  {key:7.7,value:25866.05,group:98},
  {key:7.8,value:18518.1,group:101},
  {key:7.9,value:87622.7,group:73},
  {key:8,value:1661.991,group:27},
  {key:8.1,value:4330,group:35},
  {key:8.2,value:4335.2,group:18},
  {key:8.3,value:1640,group:23},
  {key:8.4,value:200,group:8},
  {key:8.5,value:0,group:2},
  {key:8.6,value:46.271,group:6},
  {key:8.7,value:0.01,group:2},
  {key:8.8,value:30000,group:1},
  {key:9,value:0,group:1},
  {key:9.1,value:230085.456,group:2},
  {key:9.2,value:400,group:1},
  {key:9.5,value:1000,group:1}
];

// Group --> Magnitude Count
var earthquake_deaths = [
  {key:1.6,value:3,group:1},
  {key:2.1,value:21,group:2},
  {key:2.2,value:0,group:1},
  {key:3.1,value:3,group:3},
  {key:3.2,value:1,group:3},
  {key:3.4,value:3,group:3},
  {key:3.5,value:1883,group:4},
  {key:3.6,value:5,group:3},
  {key:3.7,value:0,group:2},
  {key:3.8,value:11,group:5},
  {key:3.9,value:0,group:2},
  {key:4,value:19,group:7},
  {key:4.1,value:7,group:15},
  {key:4.2,value:29,group:15},
  {key:4.3,value:87,group:18},
  {key:4.4,value:17,group:24},
  {key:4.5,value:28,group:46},
  {key:4.6,value:81,group:36},
  {key:4.7,value:1126,group:36},
  {key:4.8,value:49,group:41},
  {key:4.9,value:610,group:50},
  {key:5,value:415,group:84},
  {key:5.1,value:121,group:74},
  {key:5.2,value:152,group:74},
  {key:5.3,value:1423,group:84},
  {key:5.4,value:2736,group:82},
  {key:5.5,value:1798,group:120},
  {key:5.6,value:3155,group:101},
  {key:5.7,value:2896,group:79},
  {key:5.8,value:4040,group:105},
  {key:5.9,value:19042,group:83},
  {key:6,value:14047,group:143},
  {key:6.1,value:3492,group:107},
  {key:6.2,value:30862,group:97},
  {key:6.3,value:15733,group:108},
  {key:6.4,value:12403,group:92},
  {key:6.5,value:11530,group:117},
  {key:6.6,value:42182,group:96},
  {key:6.7,value:9742,group:90},
  {key:6.8,value:42045,group:118},
  {key:6.9,value:47279,group:94},
  {key:7,value:411762,group:131},
  {key:7.1,value:37928,group:84},
  {key:7.2,value:20962,group:84},
  {key:7.3,value:187692,group:97},
  {key:7.4,value:25777,group:55},
  {key:7.5,value:378129,group:180},
  {key:7.6,value:139820,group:116},
  {key:7.7,value:122127,group:98},
  {key:7.8,value:76019,group:101},
  {key:7.9,value:300310,group:73},
  {key:8,value:33565,group:27},
  {key:8.1,value:13211,group:35},
  {key:8.2,value:4565,group:18},
  {key:8.3,value:230470,group:23},
  {key:8.4,value:3175,group:8},
  {key:8.5,value:0,group:2},
  {key:8.6,value:4022,group:6},
  {key:8.7,value:700,group:2},
  {key:8.8,value:558,group:1},
  {key:9,value:10000,group:1},
  {key:9.1,value:246330,group:2},
  {key:9.2,value:139,group:1},
  {key:9.5,value:2226,group:1}
];
