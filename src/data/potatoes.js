// src/data/potatoes.js

const potatoes = [
  {
    name: "Russian Blue",
    id: "russian-blue",
    description: "",
    maturity: "late-season",
    tubers:
      "oblong; smooth dark purple with scattered tan skin; shallow eyes, evenly distributed; prominent eyebrows; blue-purple flesh.",
    yield: "",
    use: "",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "",
      "Moderately resistant": "",
      Susceptible: "",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "russian-blue-5lb", label: "5lb Bag" },
      { id: "russian-blue-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/purple.jpg",
      "/images/russianBlue1.jpg",
    ],
  },
  {
    name: "Red Chieftan",
    id: "red-chieftan",
    description: "",
    maturity: "mid-season",
    tubers:
      "oval to oblong, smooth bright red skin; shallow to medium-deep eyes, darker than the skin; white flesh. High yielding variety, attractive appearance, widely adapted. Well suited for washing at maturity. Good storability. Medium specific gravity.",
    yield: "",
    use: " good to excellent for boiling, good for chipping at harvest, excellent for french frying.",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "",
      "Moderately resistant":
        "late blight, common scab, rhizoctonia, silver scurf, stem-end browning, tuber net necrosis, verticillium wilt.",
      Susceptible:
        "black leg, fusarium dry rot, leaf roll, phoma rot, PVX and PVY.",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "red-chieftan-5lb", label: "5lb Bag" },
      { id: "red-chieftan-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/red.jpg",
      "/images/redChieftan1.jpg",
      "/images/redChieftan2.jpg",
      "/images/redChieftan3.jpg",
    ],
  },
  {
    name: "German Butter (sieglinde)",
    id: "german-butter-sieglinde",
    description: "",
    maturity: "mid-season",
    tubers:
      'oblong, slightly-flattened, smooth tubers covered with clear yellow skin. Sold by Across the Creek Organics as "German Butter Potatoes" this variety has been a true superstar potato.Loved by chefs and home cooks for its flavour, loved by farmers for it high yield of smooth tubers.',
    yield: "",
    use: "",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "",
      "Moderately resistant": "",
      Susceptible: "",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "german-butter-sieglinde-5lb", label: "5lb Bag" },
      { id: "german-butter-sieglinde-50lb", label: "50lb Box" }
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
    description: "",
    maturity: "mid to late-season",
    tubers:
      "elliptical to oblong, medium thick; smooth creamy buff skin; shallow eyes; white flesh. High yielding fast growing variety, widely adapted. Requires close planting (15 to 20 cm between plants) and vine killing to avoid producing oversized and rough tubers. Excellent storage quality. Long dormancy period. High total solids.\nNote: tubers grow green rapidly when exposed to light.",
    yield: "",
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
      { id: "kennebec-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/fingerling.jpg",
      "/images/kennebec1.jpg",
    ],
  },
  {
    name: "Norkotah Russet",
    id: "russet",
    description: "",
    maturity: "early to mid-season",
    tubers:
      "long to slightly oblong, smooth; heavy, dark tan, russeted and netted skin; shallow bright golden eyes, fairly numerous; many slightly curved eyebrows; white flesh.",
    yield:
      "Medium yielding variety, attractive appearance, uniform tuber size and shape. Wide adaptability. Resistant to hollow heart. Low to medium specific gravity. Good storability. Medium dormancy period.",
    use: "Good for baking; poor to moderate for boiling with some after cooking discoloration; poor for chipping.",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "Columbia root-knot nematode. common scab, silver scurf.",
      "Moderately resistant": "leaf roll net necrosis, PVY.",
      Susceptible:
        "most viruses, late blight, early blight, verticillium wilt, potato wart.",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "russet-5lb", label: "5lb Bag" },
      { id: "russet-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/norkotahRusset1.png",
      "/images/russet.jpg",
    ],
  },
  {
    name: "Yukon Gold",
    id: "yukon-gold",
    description: "",
    maturity: "mid-season",
    tubers:
      "oval, slightly flattened; finely flaked yellowish white skin; shallow pink eyes; light yellow flesh.",
    yield:
      "Medium yielding variety of attractive appearance. Large tubers are slightly susceptible to hollow heart. Excellent storability; long dormancy period. High specific gravity.​",
    use: "Very good for boiling, baking, and French frying; unsuitable for chipping; retains its yellow flesh color when cooked. Reaction to diseases",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "PVA",
      "Moderately resistant": "leaf roll",
      Susceptible: "common scab, PVY, air pollution.",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "yukon-gold-5lb", label: "5lb Bag" },
      { id: "yukon-gold-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/yukonGold1.jpg",
      "/images/yukonGold.jpg",
    ],
  },
  {
    name: "Warba",
    id: "warba",
    description: "",
    maturity: "very early-season",
    tubers:
      "round; buff skin, frequently with reddish areas around the eyes; deep red eyes; white flesh.",
    yield: "High yielding variety; low specific gravity.",
    use: "Good for boiling and baking; not suitable for chips.",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "",
      "Moderately resistant": "",
      Susceptible:
        "leaf roll, blackleg, PVM, PVS, PVX, PVY, common scab, verticillium wilt, late blight, fusarium dry rot.",
      "Highly Susceptible": "rhizoctonia.",
    },
    salesQuantities: [
      { id: "warba-5lb", label: "5lb Bag" },
      { id: "warba-50lb", label: "50lb Box" }
    ],
    image: ["/images/warba1.jpg"],
  },
  {
    name: "Potato",
    id: "potato",
    description: "",
    maturity: "",
    tubers: "",
    yield: "",
    use: "",
    diseaseInfo: {
      "Field resistant": "",
      Resistant: "",
      "Moderately resistant": "",
      Susceptible: "",
      "Highly Susceptible": "",
    },
    salesQuantities: [
      { id: "potato-5lb", label: "5lb Bag" },
      { id: "potato-50lb", label: "50lb Box" }
    ],
    image: [
      "/images/potato.jpg",
      "/images/german.jpg",
      "/images/fingerling.jpg",
    ],
  },
];

export default potatoes;
