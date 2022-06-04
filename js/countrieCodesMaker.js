import { result } from "./app.js";

//countrie codes maker
const countries = [
  {
    countrieName: "Andorra",
    pais: "Andorra",
    code: "AD",
  },
  {
    countrieName: "United Arab Emirates",
    pais: "Emiratos Arabes Unidos",
    code: "AE",
  },
  {
    countrieName: "Afghanistan",
    pais: "Afganistan",
    code: "AF",
  },
  {
    countrieName: "Antigua and Barbuda",
    pais: "Antigua y Barbuda",
    code: "AG",
  },
  {
    countrieName: "Anguilla",
    pais: "Anguila",
    code: "AI",
  },
  {
    countrieName: "Albania",
    pais: "Albania",
    code: "AL",
  },
  {
    countrieName: "Armenia",
    pais: "Armenia",
    code: "AM",
  },
  {
    countrieName: "Netherlands Antilles",
    pais: "Antillas Holandesas",
    code: "AN",
  },
  {
    countrieName: "Angola",
    pais: "Angola",
    code: "AO",
  },
  {
    countrieName: "Antarctica",
    pais: "Antartida",
    code: "AQ",
  },
  {
    countrieName: "Argentina",
    pais: "Argentina",
    code: "AR",
  },
  {
    countrieName: "American Samoa",
    pais: "Samoa Americana",
    code: "AS",
  },
  {
    countrieName: "Austria",
    pais: "Austria",
    code: "AU",
  },
  {
    countrieName: "Australia",
    pais: "Australia",
    code: "AS",
  },
  {
    countrieName: "Aruba",
    pais: "Aruba",
    code: "AW",
  },
  {
    countrieName: "Azerbaijan",
    pais: "Azerbaiyan",
    code: "AZ",
  },
  {
    countrieName: "Bosnia and Herzegovina",
    pais: "Bosnia y Herzegovina",
    code: "BA",
  },
  {
    countrieName: "Barbados",
    pais: "Barbados",
    code: "BB",
  },
  {
    countrieName: "Bangladesh",
    pais: "Bangladesh",
    code: "BD",
  },
  {
    countrieName: "Belgium",
    pais: "Belgica",
    code: "BE",
  },
  {
    countrieName: "Burkina Faso",
    pais: "Burkina Faso",
    code: "BF",
  },
  {
    countrieName: "Bahrain",
    pais: "Bahrein",
    code: "BH",
  },
  {
    countrieName: "Burundi",
    pais: "Burundi",
    code: "BI",
  },
  {
    countrieName: "Benin",
    pais: "Benin",
    code: "BJ",
  },
  {
    countrieName: "Bermuda",
    pais: "Bermudas",
    code: "BM",
  },
  {
    countrieName: "Bolivia",
    pais: "Bolivia",
    code: "BO",
  },
  {
    countrieName: "Brazil",
    pais: "Brasil",
    code: "BR",
  },
  {
    countrieName: "Bahamas",
    pais: "Bahamas",
    code: "BS",
  },
  {
    countrieName: "Bhutan",
    pais: "Butan",
    code: "BT",
  },
  {
    countrieName: "Bouvet Island",
    pais: "Isla Bouvet",
    code: "BU",
  },
  {
    countrieName: "Bulgaria",
    pais: "Bulgaria",
    code: "BV",
  },
  {
    countrieName: "Botswana",
    pais: "Botswana",
    code: "BW",
  },
  {
    countrieName: "Brunei Darussalam",
    pais: "Brunei Darussalam",
    code: "BX",
  },
  {
    countrieName: "Belarus",
    pais: "Bielorrusia",
    code: "BY",
  },
  {
    countrieName: "Belize",
    pais: "Belice",
    code: "BZ",
  },
  {
    countrieName: "Canada",
    pais: "Canada",
    code: "CA",
  },
  {
    countrieName: "Cocos Islands",
    pais: "Cocos",
    code: "CC",
  },
  {
    countrieName: "Central African Republic",
    pais: "Republica Centroafricana",
    code: "CF",
  },
  {
    countrieName: "Congo",
    pais: "Congo",
    code: "CG",
  },
  {
    countrieName: "Switzerland",
    pais: "Suiza",
    code: "CH",
  },
  {
    countrieName: "Ivory Coast",
    pais: "Costa de Marfil",
    code: "CI",
  },
  {
    countrieName: "Cook Islands",
    pais: "Islas Cook",
    code: "CK",
  },
  {
    countrieName: "Chile",
    pais: "Chile",
    code: "CL",
  },
  {
    countrieName: "Cameroon",
    pais: "Camerun",
    code: "CM",
  },
  {
    countrieName: "China",
    pais: "China",
    code: "CN",
  },
  {
    countrieName: "Colombia",
    pais: "Colombia",
    code: "CO",
  },
  {
    countrieName: "Costa Rica",
    pais: "Costa Rica",
    code: "CR",
  },
  {
    countrieName: "Cuba",
    pais: "Cuba",
    code: "CU",
  },
  {
    countrieName: "Cape Verde",
    pais: "Cabo Verde",
    code: "CV",
  },
  {
    countrieName: "Christmas Island",
    pais: "Isla de Navidad",
    code: "CX",
  },
  {
    countrieName: "Cyprus",
    pais: "Chipre",
    code: "CY",
  },
  {
    countrieName: "Czech Republic",
    pais: "Republica Checa",
    code: "CZ",
  },
  {
    countrieName: "Germany",
    pais: "Alemania",
    code: "DE",
  },
  {
    countrieName: "Djibouti",
    pais: "Djibouti",
    code: "DJ",
  },
  {
    countrieName: "Denmark",
    pais: "Dinamarca",
    code: "DK",
  },
  {
    countrieName: "Dominica",
    pais: "Dominica",
    code: "DM",
  },
  {
    countrieName: "Dominican Republic",
    pais: "Republica Dominicana",
    code: "DO",
  },
  {
    countrieName: "Algeria",
    pais: "Argelia",
    code: "DZ",
  },
  {
    countrieName: "Ecuador",
    pais: "Ecuador",
    code: "EC",
  },
  {
    countrieName: "Estonia",
    pais: "Estonia",
    code: "EE",
  },
  {
    countrieName: "Egypt",
    pais: "Egipto",
    code: "EG",
  },
  {
    countrieName: "Western Sahara",
    pais: "Sahara Occidental",
    code: "EH",
  },
  {
    countrieName: "Eritrea",
    pais: "Eritrea",
    code: "ER",
  },
  {
    countrieName: "Spain",
    pais: "España",
    code: "ES",
  },
  {
    countrieName: "Ethiopia",
    pais: "Etiopia",
    code: "ET",
  },
  {
    countrieName: "Finland",
    pais: "Finlandia",
    code: "FI",
  },
  {
    countrieName: "Fiji",
    pais: "Fiji",
    code: "FJ",
  },
  {
    countrieName: "Falkland Islands",
    pais: "Islas Malvinas",
    code: "FK",
  },
  {
    countrieName: "Micronesia",
    pais: "Micronesia",
    code: "FM",
  },
  {
    countrieName: "Faroe Islands",
    pais: "Islas Feroe",
    code: "FO",
  },
  {
    countrieName: "France",
    pais: "Francia",
    code: "FR",
  },
  {
    countrieName: "Gabon",
    pais: "Gabon",
    code: "GA",
  },
  {
    countrieName: "UK",
    pais: "Gran Bretaña",
    code: "GB",
  },
  {
    countrieName: "Grenada",
    pais: "Granada",
    code: "GD",
  },
  {
    countrieName: "Georgia",
    pais: "Georgia",
    code: "GE",
  },
  {
    countrieName: "French Guiana",
    pais: "Guayana Francesa",
    code: "GF",
  },
  {
    countrieName: "Ghana",
    pais: "Ghana",
    code: "GH",
  },
  {
    countrieName: "Gibraltar",
    pais: "Gibraltar",
    code: "GI",
  },
  {
    countrieName: "Greenland",
    pais: "Groenlandia",
    code: "GL",
  },
  {
    countrieName: "Gambia",
    pais: "Gambia",
    code: "GM",
  },
  {
    countrieName: "Guinea",
    pais: "Guinea",
    code: "GN",
  },
  {
    countrieName: "Guadeloupe",
    pais: "Guadalupe",
    code: "GP",
  },
  {
    countrieName: "Equatorial Guinea",
    pais: "Guinea Ecuatorial",
    code: "GQ",
  },
  {
    countrieName: "Greece",
    pais: "Grecia",
    code: "GR",
  },
  {
    countrieName: "South Georgia and South Sandwich Islands",
    pais: "Georgia del Sur y Islas Sandwich del Sur",
    code: "GS",
  },
  {
    countrieName: "Guatemala",
    pais: "Guatemala",
    code: "GT",
  },
  {
    countrieName: "Guam",
    pais: "Guam",
    code: "GU",
  },
  {
    countrieName: "Guinea-Bissau",
    pais: "Guinea-Bissau",
    code: "GW",
  },
  {
    countrieName: "Guyana",
    pais: "Guayana",
    code: "GY",
  },
  {
    countrieName: "Hong Kong",
    pais: "Hong Kong",
    code: "HK",
  },
  {
    countrieName: "Heard and McDonald Islands",
    pais: "Islas Heard y McDonald",
    code: "HM",
  },
  {
    countrieName: "Honduras",
    pais: "Honduras",
    code: "HN",
  },
  {
    countrieName: "Croatia and Hrvatska",
    pais: "Croacia",
    code: "HR",
  },
  {
    countrieName: "Haiti",
    pais: "Haiti",
    code: "HT",
  },
  {
    countrieName: "Hungary",
    pais: "Hungria",
    code: "HU",
  },
  {
    countrieName: "Indonesia",
    pais: "Indonesia",
    code: "ID",
  },
  {
    countrieName: "Ireland",
    pais: "Irlanda",
    code: "IE",
  },
  {
    countrieName: "Israel",
    pais: "Israel",
    code: "IL",
  },
  {
    countrieName: "India",
    pais: "India",
    code: "IN",
  },
  {
    countrieName: "British Indian Ocean Territory",
    pais: "Territorio Britanico del Oceano Indico",
    code: "IO",
  },
  {
    countrieName: "Iraq",
    pais: "Irak",
    code: "IQ",
  },
  {
    countrieName: "Iran",
    pais: "Iran",
    code: "IR",
  },
  {
    countrieName: "Iceland",
    pais: "Islandia",
    code: "IS",
  },
  {
    countrieName: "Italy",
    pais: "Italia",
    code: "IT",
  },
  {
    countrieName: "Jamaica",
    pais: "Jamaica",
    code: "JM",
  },
  {
    countrieName: "Jordan",
    pais: "Jordania",
    code: "JO",
  },
  {
    countrieName: "Japan",
    pais: "Japon",
    code: "JP",
  },
  {
    countrieName: "Kenya",
    pais: "Kenia",
    code: "KE",
  },
  {
    countrieName: "Kyrgyzstan",
    pais: "Kirguistan",
    code: "KG",
  },
  {
    countrieName: "Cambodia",
    pais: "Camboya",
    code: "KH",
  },
  {
    countrieName: "Kiribati",
    pais: "Kiribati",
    code: "KI",
  },
  {
    countrieName: "Comoros",
    pais: "Comoras",
    code: "KM",
  },
  {
    countrieName: "Saint Kitts and Nevis",
    pais: "Saint Kitts y Nevis",
    code: "KN",
  },
  {
    countrieName: "Korea North",
    pais: "Corea del Norte",
    code: "KP",
  },
  {
    countrieName: "Korea South",
    pais: "Corea del Sur",
    code: "KR",
  },
  {
    countrieName: "Kosovo",
    pais: "Kosovo",
    code: "KSV",
  },
  {
    countrieName: "Kuwait",
    pais: "Kuwait",
    code: "KW",
  },
  {
    countrieName: "Cayman Islands",
    pais: "Las Islas Caiman",
    code: "KY",
  },
  {
    countrieName: "Kazakhstan",
    pais: "Kazajstan",
    code: "KZ",
  },
  {
    countrieName: "Laos",
    pais: "Laos",
    code: "LA",
  },
  {
    countrieName: "Lebanon",
    pais: "Libano",
    code: "LB",
  },
  {
    countrieName: "Saint Lucia",
    pais: "Santa Lucia",
    code: "LC",
  },
  {
    countrieName: "Liechtenstein",
    pais: "Liechtenstein",
    code: "LI",
  },
  {
    countrieName: "Sri Lanka",
    pais: "Sri Lanka",
    code: "LK",
  },
  {
    countrieName: "Liberia",
    pais: "Liberia",
    code: "LR",
  },
  {
    countrieName: "Lesotho",
    pais: "Lesoto",
    code: "LS",
  },
  {
    countrieName: "Lithuania",
    pais: "Lituania",
    code: "LT",
  },
  {
    countrieName: "Luxembourg",
    pais: "Luxemburgo",
    code: "LU",
  },
  {
    countrieName: "Latvia",
    pais: "Letonia",
    code: "LV",
  },
  {
    countrieName: "Libya",
    pais: "Libia",
    code: "LY",
  },
  {
    countrieName: "Morocco",
    pais: "Marruecos",
    code: "MA",
  },
  {
    countrieName: "Monaco",
    pais: "Monaco",
    code: "MC",
  },
  {
    countrieName: "Moldova",
    pais: "Moldavia",
    code: "MD",
  },
  {
    countrieName: "Madagascar",
    pais: "Madagascar",
    code: "MG",
  },
  {
    countrieName: "Marshall Islands",
    pais: "Islas Marshall",
    code: "MH",
  },
  {
    countrieName: "Macedonia",
    pais: "Macedonia",
    code: "MK",
  },
  {
    countrieName: "Mali",
    pais: "Mali",
    code: "ML",
  },
  {
    countrieName: "Myanmar",
    pais: "Myanmar",
    code: "MM",
  },
  {
    countrieName: "Mongolia",
    pais: "Mongolia",
    code: "MN",
  },
  {
    countrieName: "Macau",
    pais: "Macao",
    code: "MO",
  },
  {
    countrieName: "Northern Mariana Islands",
    pais: "Islas Marianas del Norte",
    code: "MP",
  },
  {
    countrieName: "Martinique",
    pais: "Martinica",
    code: "MQ",
  },
  {
    countrieName: "Mauritania",
    pais: "Mauritania",
    code: "MR",
  },
  {
    countrieName: "Montserrat",
    pais: "Montserrat",
    code: "MS",
  },
  {
    countrieName: "Malta",
    pais: "Malta",
    code: "MT",
  },
  {
    countrieName: "Mauritius",
    pais: "Mauricio",
    code: "MU",
  },
  {
    countrieName: "Maldives",
    pais: "Maldivas",
    code: "MV",
  },
  {
    countrieName: "Malawi",
    pais: "Malawi",
    code: "MW",
  },
  {
    countrieName: "Mexico",
    pais: "Mexico",
    code: "MX",
  },
  {
    countrieName: "Malaysia",
    pais: "Malasia",
    code: "MY",
  },
  {
    countrieName: "Mozambique",
    pais: "Mozambique",
    code: "MZ",
  },
  {
    countrieName: "Namibia",
    pais: "Namibia",
    code: "NA",
  },
  {
    countrieName: "New Caledonia",
    pais: "Nueva Caledonia",
    code: "NC",
  },
  {
    countrieName: "Niger",
    pais: "Niger",
    code: "NE",
  },
  {
    countrieName: "Norfolk Island",
    pais: "Norfolk Island",
    code: "NF",
  },
  {
    countrieName: "Nigeria",
    pais: "Nigeria",
    code: "NG",
  },
  {
    countrieName: "Nicaragua",
    pais: "Nicaragua",
    code: "NI",
  },
  {
    countrieName: "Netherlands",
    pais: "Paises Bajos",
    code: "NE",
  },
  {
    countrieName: "Norway",
    pais: "Noruega",
    code: "NO",
  },
  {
    countrieName: "Nepal",
    pais: "Nepal",
    code: "NP",
  },
  {
    countrieName: "Nauru",
    pais: "Nauru",
    code: "NR",
  },
  {
    countrieName: "Niue",
    pais: "Niue",
    code: "NU",
  },
  {
    countrieName: "New Zealand",
    pais: "Nueva Zelanda",
    code: "NZ",
  },
  {
    countrieName: "Oman",
    pais: "Oman",
    code: "OM",
  },
  {
    countrieName: "Panama",
    pais: "Panama",
    code: "PA",
  },
  {
    countrieName: "Peru",
    pais: "Peru",
    code: "PE",
  },
  {
    countrieName: "French Polynesia",
    pais: "Polinesia frances",
    code: "PF",
  },
  {
    countrieName: "Papua New Guinea",
    pais: "Papua Nueva Guinea",
    code: "PG",
  },
  {
    countrieName: "Philippines",
    pais: "Filipinas",
    code: "PH",
  },
  {
    countrieName: "Pakistan",
    pais: "Pakistan",
    code: "PK",
  },
  {
    countrieName: "Poland",
    pais: "Polonia",
    code: "PO",
  },
  {
    countrieName: "St. Pierre and Miquelon",
    pais: "San Pedro y Miquelon",
    code: "PM",
  },
  {
    countrieName: "Pitcairn",
    pais: "Pitcairn",
    code: "PN",
  },
  {
    countrieName: "Puerto Rico",
    pais: "Puerto Rico",
    code: "PR",
  },
  {
    countrieName: "Portugal",
    pais: "Portugal",
    code: "PT",
  },
  {
    countrieName: "Palau",
    pais: "Palau",
    code: "PW",
  },
  {
    countrieName: "Palestine",
    pais: "Palestina",
    code: "PSE",
  },
  {
    countrieName: "Paraguay",
    pais: "Paraguay",
    code: "PY",
  },
  {
    countrieName: "Qatar",
    pais: "Qatar",
    code: "QA",
  },
  {
    countrieName: "Reunion",
    pais: "Reunion",
    code: "RE",
  },
  {
    countrieName: "Romania",
    pais: "Rumania",
    code: "RO",
  },
  {
    countrieName: "Russia",
    pais: "Rusia",
    code: "RU",
  },
  {
    countrieName: "Rwanda",
    pais: "Ruanda",
    code: "RW",
  },
  {
    countrieName: "Saudi Arabia",
    pais: "Arabia Saudita",
    code: "SA",
  },
  {
    countrieName: "Solomon Islands",
    pais: "Las Islas Salomon",
    code: "SB",
  },
  {
    countrieName: "Seychelles",
    pais: "Seychelles",
    code: "SC",
  },
  {
    countrieName: "Sudan",
    pais: "Sudan",
    code: "SD",
  },
  {
    countrieName: "Sweden",
    pais: "Suecia",
    code: "SE",
  },
  {
    countrieName: "Singapore",
    pais: "Singapur",
    code: "SG",
  },
  {
    countrieName: "St. Helena",
    pais: "Santa Elena",
    code: "SH",
  },
  {
    countrieName: "Slovenia",
    pais: "Eslovenia",
    code: "SI",
  },
  {
    countrieName: "Svalbard and Jan Mayen Islands",
    pais: "Svalbard y Jan Mayen",
    code: "SJ",
  },
  {
    countrieName: "Slovak Republic",
    pais: "Republica Eslovaca",
    code: "SK",
  },
  {
    countrieName: "Sierra Leone",
    pais: "Sierra Leona",
    code: "SL",
  },
  {
    countrieName: "San Marino",
    pais: "San Marino",
    code: "SM",
  },
  {
    countrieName: "Senegal",
    pais: "Senegal",
    code: "SN",
  },
  {
    countrieName: "Somalia",
    pais: "Somalia",
    code: "SO",
  },
  {
    countrieName: "Suriname",
    pais: "Suriname",
    code: "SR",
  },
  {
    countrieName: "Sao Tome and Principe",
    pais: "Santo Toma y Principe",
    code: "ST",
  },
  {
    countrieName: "El Salvador",
    pais: "El Salvador",
    code: "SV",
  },
  {
    countrieName: "Syria",
    pais: "Siria",
    code: "SY",
  },
  {
    countrieName: "Swaziland",
    pais: "Swazilandia",
    code: "SZ",
  },
  {
    countrieName: "Turks and Caicos Islands",
    pais: "Islas Turcas y Caicos",
    code: "TC",
  },
  {
    countrieName: "Chad",
    pais: "Chad",
    code: "TD",
  },
  {
    countrieName: "French Southern Territories",
    pais: "Territorios del sur frances",
    code: "TF",
  },
  {
    countrieName: "Togo",
    pais: "Togo",
    code: "TG",
  },
  {
    countrieName: "Thailand",
    pais: "Tailandia",
    code: "TH",
  },
  {
    countrieName: "Tajikistan",
    pais: "Tayikistan",
    code: "TI",
  },
  {
    countrieName: "Tokelau",
    pais: "Tokelau",
    code: "TK",
  },
  {
    countrieName: "Turkmenistan",
    pais: "Turkmenistan",
    code: "TM",
  },
  {
    countrieName: "Tunisia",
    pais: "Tunez",
    code: "TN",
  },
  {
    countrieName: "Tonga",
    pais: "Tonga",
    code: "TO",
  },
  {
    countrieName: "East Timor",
    pais: "Timor Oriental",
    code: "TP",
  },
  {
    countrieName: "Turkey",
    pais: "Turquia",
    code: "TR",
  },
  {
    countrieName: "Trinidad and Tobago",
    pais: "Trinidad y Tobago",
    code: "TT",
  },
  {
    countrieName: "Tuvalu",
    pais: "Tuvalu",
    code: "TV",
  },
  {
    countrieName: "Taiwan",
    pais: "Taiwan",
    code: "TW",
  },
  {
    countrieName: "Tanzania",
    pais: "Tanzania",
    code: "TZ",
  },
  {
    countrieName: "Ukraine",
    pais: "Ucrania",
    code: "UA",
  },
  {
    countrieName: "Uganda",
    pais: "Uganda",
    code: "UG",
  },
  {
    countrieName: "United Kingdom",
    pais: "Reino Unido",
    code: "UK",
  },
  {
    countrieName: "US Minor Outlying Islands",
    pais: "Islas menores de EE.UU",
    code: "UM",
  },
  {
    countrieName: "USA",
    pais: "Estados Unidos",
    code: "US",
  },
  {
    countrieName: "Uruguay",
    pais: "Uruguay",
    code: "UY",
  },
  {
    countrieName: "Uzbekistan",
    pais: "Uzbekistan",
    code: "UZ",
  },
  {
    countrieName: "Vatican City State",
    pais: "Ciudad del Vaticano",
    code: "VA",
  },
  {
    countrieName: "Saint Vincent and the Grenadines",
    pais: "San Vicente y las Granadinas",
    code: "VC",
  },
  {
    countrieName: "Venezuela",
    pais: "Venezuela",
    code: "VE",
  },
  {
    countrieName: "Virgin Islands",
    pais: "Islas Virgenes",
    code: "VG",
  },
  {
    countrieName: "Viet Nam",
    pais: "Vietnam",
    code: "VN",
  },
  {
    countrieName: "Vanuatu",
    pais: "Vanuatu",
    code: "VU",
  },
  {
    countrieName: "Wallis and Futuna Islands",
    pais: "Islas Wallis y Futuna",
    code: "WF",
  },
  {
    countrieName: "Samoa",
    pais: "Samoa",
    code: "WS",
  },
  {
    countrieName: "Yemen",
    pais: "Yemen",
    code: "YE",
  },
  {
    countrieName: "Mayotte",
    pais: "Mayotte",
    code: "YT",
  },
  {
    countrieName: "Yugoslavia",
    pais: "Yugoslavia",
    code: "YU",
  },
  {
    countrieName: "South Africa",
    pais: "Sudafrica",
    code: "ZA",
  },
  {
    countrieName: "Zambia",
    pais: "Zambia",
    code: "ZM",
  },
  {
    countrieName: "Zaire",
    pais: "Zaire",
    code: "ZR",
  },
  {
    countrieName: "Zimbabwe",
    pais: "Zimbabue",
    code: "ZW",
  },
];

export const getCountrieCode = (countrie) => {
  try {
    let countrieS = countries.filter(
      (el) =>
        el.countrieName.toLowerCase() == countrie.toLowerCase() ||
        el.pais.toLowerCase() == countrie.toLowerCase()
    );
    if (countrieS[0]) {
      return countrieS[0].code;
    } else {
      throw new Error("No se ha encontrado el pais");
    }
  } catch (e) {
    setTimeout(() => (result.innerHTML = `${e.message}`), 1500);
  }
};
