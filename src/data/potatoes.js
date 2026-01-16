// src/data/potatoes.js

const potatoes = [
  {
    name: "Russian Blue",
    id: "russian-blue",
    description:
      "Rich purple skin and blue-purple flesh. oblong tubers with smooth skin and shallow eyes. Similar in texture to Russet varieties.",
    maturity: "late-season",
    tubers:
      "oblong; smooth dark purple with scattered tan skin; shallow eyes, evenly distributed; prominent eyebrows; blue-purple flesh.",
    yield: "High",
    use: "These potatoes are great for roasting, baking, mashing, and frying. Their vibrant color also makes them an excellent choice for adding visual appeal to dishes.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "N/A",
      "Moderately resistant":
        "late blight, hollow heart, second growth, shatter bruise, PVA, PVM, PVX, PVS.",
      Susceptible: "PVLR, PVY, common scab, bacterial ring rot, and black leg.",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "russian-blue-5lb", label: "5lb Bag" },
      { id: "russian-blue-50lb", label: "50lb Box" },
    ],
    image: ["/images/purple.jpg", "/images/russianBlue1.jpg"],
  },
  {
    name: "Red Chieftan",
    id: "red-chieftan",
    description: "oval to oblong, smooth bright red skin, white flesh",
    maturity: "mid-season",
    tubers:
      "oval to oblong, smooth bright red skin; shallow to medium-deep eyes, darker than the skin; white flesh. High yielding variety, attractive appearance, widely adapted. Well suited for washing at maturity. Good storability. Medium specific gravity.",
    yield: "High",
    use: " good to excellent for boiling, good for chipping at harvest, excellent for french frying.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "N/A",
      "Moderately resistant":
        "late blight, common scab, rhizoctonia, silver scurf, stem-end browning, tuber net necrosis, verticillium wilt.",
      Susceptible:
        "black leg, fusarium dry rot, leaf roll, phoma rot, PVX and PVY.",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "red-chieftan-5lb", label: "5lb Bag" },
      { id: "red-chieftan-50lb", label: "50lb Box" },
    ],
    image: [
      "/images/red.jpg",
      "/images/redChieftan1.jpg",
      "/images/redChieftan2.jpg",
      "/images/redChieftan3.jpg",
    ],
  },
  {
    name: "Seiglinde",
    id: "german-butter-sieglinde",
    description:
      "Sold by Across the Creek Organics as German Butter Potatoes. Oblong, smooth tubers covered with yellow skin and yellow flesh.",
    maturity: "mid-season",
    tubers:
      'oblong, slightly-flattened, smooth tubers covered with clear yellow skin. Sold by Across the Creek Organics as "German Butter Potatoes" this variety has been a true superstar potato.Loved by chefs and home cooks for its flavour, loved by farmers for it high yield of smooth tubers.',
    yield: "High",
    use: "This flavourful potato holds its shape well when cooked, making it ideal for potato salads, soups, and roasting. Its creamy texture also makes it a great choice for boiling and frying.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "scab, mosaic virus and warts.",
      "Moderately resistant": "N/A",
      Susceptible: "N/A",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "german-butter-sieglinde-5lb", label: "5lb Bag" },
      { id: "german-butter-sieglinde-50lb", label: "50lb Box" },
    ],
    image: [
      "/images/german.jpg",
      "/images/germanButter1.jpg",
      "/images/germanButter3.jpg",
      "/images/germanButter2.jpg",
    ],
  },
  {
    name: "Kennebec",
    id: "kennebec",
    description:
      "elliptical to oblong, medium thick, smooth creamy buff skin, shallow eyes, white flesh",
    maturity: "mid to late-season",
    tubers:
      "elliptical to oblong, medium thick; smooth creamy buff skin; shallow eyes; white flesh. High yielding fast growing variety, widely adapted. Requires close planting (15 to 20 cm between plants) and vine killing to avoid producing oversized and rough tubers. Excellent storage quality. Long dormancy period.",
    yield: "High",
    use: "Excellent for boiling, baking, chipping and French frying.",
    diseaseInfo: {
      "Field resistant": "PVA, PVY.",
      Resistant: "tuber net necrosis.",
      "Moderately resistant":
        "foliage late blight, black leg , fusarium dry rot, phoma rot, potato wart, seed-piece decay, PVS and PVX.",
      Susceptible:
        "common scab, fusarium dry rot, tuber late blight, leaf roll, pink eye and rhizoctonia.",
      "Highly Susceptible": "verticillium wilt.",
    },
    salesQuantities: [
      { id: "kennebec-5lb", label: "5lb Bag" },
      { id: "kennebec-50lb", label: "50lb Box" },
    ],
    image: ["/images/fingerling.jpg", "/images/kennebec1.jpg"],
  },
  {
    name: "Russet Norkotah",
    id: "russet",
    description:
      "long to slightly oblong, smooth; heavy, dark tan, russeted and netted skin; white flesh",
    maturity: "early to mid-season",
    tubers:
      "long to slightly oblong, smooth; heavy, dark tan, russeted and netted skin; shallow bright golden eyes, fairly numerous; many slightly curved eyebrows; white flesh.",
    yield: "Medium",
    use: "Good for baking; poor to moderate for boiling with some after cooking discoloration; poor for chipping.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "Columbia root-knot nematode, common scab, silver scurf.",
      "Moderately resistant": "leaf roll net necrosis, PVY.",
      Susceptible:
        "most viruses, late blight, early blight, verticillium wilt, potato wart.",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "russet-5lb", label: "5lb Bag" },
      { id: "russet-50lb", label: "50lb Box" },
    ],
    image: ["/images/norkotahRusset1.png", "/images/russet.jpg"],
  },
  {
    name: "Yukon Gold",
    id: "yukon-gold",
    description:
      "oval, slightly flattened; finely flaked yellowish white skin; shallow pink eyes; light yellow flesh.",
    maturity: "mid-season",
    tubers:
      "oval, slightly flattened; finely flaked yellowish white skin; shallow pink eyes; light yellow flesh.",
    yield:
      "Medium yielding variety of attractive appearance. Large tubers are slightly susceptible to hollow heart. Excellent storability; long dormancy period. High specific gravity.​",
    use: "Very good for boiling, baking, and French frying; unsuitable for chipping; retains its yellow flesh color when cooked.`",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "PVA",
      "Moderately resistant": "leaf roll",
      Susceptible: "common scab, PVY, air pollution.",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "yukon-gold-5lb", label: "5lb Bag" },
      { id: "yukon-gold-50lb", label: "50lb Box" },
    ],
    image: ["/images/yukonGold1.jpg", "/images/yukonGold.jpg"],
  },
  {
    name: "Warba",
    id: "warba",
    description:
      "round; buff skin, frequently with reddish areas around the eyes; deep red eyes; white flesh.",
    maturity: "very early-season",
    tubers:
      "round; buff skin, frequently with reddish areas around the eyes; deep red eyes; white flesh.",
    yield: "High",
    use: "Good for boiling and baking; not suitable for chips.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "N/A",
      "Moderately resistant": "N/A",
      Susceptible:
        "leaf roll, blackleg, PVM, PVS, PVX, PVY, common scab, verticillium wilt, late blight, fusarium dry rot.",
      "Highly Susceptible": "rhizoctonia.",
    },
    salesQuantities: [
      { id: "warba-5lb", label: "5lb Bag" },
      { id: "warba-50lb", label: "50lb Box" },
    ],
    image: ["/images/warba1.jpg"],
  },
  {
    name: "French Fingerling",
    id: "fingerling",
    description:
      "small, elongated; thin, smooth pink skinned with yellow flesh.",
    maturity: "late-season",
    tubers: "small, elongated; thin, smooth pink skinned with yellow flesh.",
    yield: "High",
    use: "The French Fingerling is excellent for roasting, boiling, and salads due to its firm texture and buttery flavor. Try parboiling followed by pan-searing for a delicious crispy bite with a creamy interior.",
    diseaseInfo: {
      "Field resistant": "N/A",
      Resistant: "common scab, early blight, verticillium wilt.",
      "Moderately resistant": "N/A",
      Susceptible: "late blight, blackleg, mosaic virus.",
      "Highly Susceptible": "N/A",
    },
    salesQuantities: [
      { id: "fingerling-5lb", label: "5lb Bag" },
      { id: "fingerling-50lb", label: "50lb Box" },
    ],
    image: ["/images/fingerling1.jpg"],
  },
];

export default potatoes;
