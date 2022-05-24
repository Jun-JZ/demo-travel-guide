import { DestinationsAllType, DetailsAllType } from "../types";

export const Mock_Destinations_All = {
  asia: [
    {
      label: "Bangkok",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100q1f000001grilmCB98_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Manila",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100b0g000000836gfA98F_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "SingaPore",
      imageUrl:
        "	https://youimg1.tripcdn.com/target/100i0x000000lcy8zC02B_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Seoul",
      imageUrl:
        "https://youimg1.tripcdn.com/target/fd/tg/g3/M0B/97/F5/CggYG1Yt8dOAGxfcACY6W6iLGl4813_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Kuala Lumpur",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100w0y000000m5xtlBA65_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Hong Kong",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100a1f000001g4pqtBF5D_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Istanbul",
      imageUrl:
        "https://youimg1.tripcdn.com/target/10060g0000007qh9aB677_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Bali",
      imageUrl:
        "https://youimg1.tripcdn.com/target/fd/tg/g1/M02/79/29/CghzfVWwp1SAD5gHACTpIEDO0sk435_C_400_280.jpg?proc=source%2ftrip",
    },
  ],
  europe: [
    {
      label: "London",
      imageUrl:
        "https://youimg1.tripcdn.com/target/fd/tg/g3/M03/D7/26/CggYG1bGymyAYcDvAA2KNxQbifw151_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Paris",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100k0u000000jguly8D69_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Rome",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100e0h0000008s3hz316B_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Athens",
      imageUrl:
        "https://youimg1.tripcdn.com/target/fd/tg/g6/M02/00/73/CggYs1cfF7qAU_kuAArgoZBEnXw227_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Madrid",
      imageUrl:
        "https://youimg1.tripcdn.com/target/1002060000001o2634FBB_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Milan",
      imageUrl:
        "https://youimg1.tripcdn.com/target/100j0j000000aealcBE79_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "Lisbon",
      imageUrl:
        "https://youimg1.tripcdn.com/target/10091f000001gspgw7174_C_400_280.jpg?proc=source%2ftrip",
    },
    {
      label: "AmsterDam",
      imageUrl:
        "https://youimg1.tripcdn.com/target/10021f000001gxc4o5F9C_C_400_280.jpg?proc=source%2ftrip",
    },
  ],
} as DestinationsAllType;

export const Mock_Details_All = {
  Bangkok: {
    attractions: [
      "Grand Palace and Wat Phra Kaew",
      "Wat Pho",
      "Chatuchak Weekend Market",
    ],
    expense: "low",
    description:
      "Bangkok is located on the delta of the Chao Phraya River, about 25 miles (40 km) from the Gulf of Thailand. It was formerly divided into two municipalities—Krung Thep on the east bank and Thon Buri on the west—connected by several bridges. In 1971 the two were united as a city-province with a single municipal government. In 1972 the city and the two surrounding provinces were merged into one province, called Krung Thep Maha Nakhon (Bangkok Metropolis). The metropolis is a bustling, crowded city, with temples, factories, shops, and homes juxtaposed along its roads and canals. It is also a major tourist destination, noted for bountiful cultural attractions and a nightlife that includes a flourishing sex trade.",
  },
  Manila: {
    attractions: ["Quiapo Church", "Intramuros", "Manila Ocean Park"],
    expense: "medium",
    description:
      "Manila, capital and chief city of the Philippines. The city is the centre of the country’s economic, political, social, and cultural activity. It is located on the island of Luzon and spreads along the eastern shore of Manila Bay at the mouth of the Pasig River. The city’s name, originally Maynilad, is derived from that of the nilad plant, a flowering shrub adapted to marshy conditions, which once grew profusely along the banks of the river; the name was shortened first to Maynila and then to its present form. In 1975, by presidential decree, Manila and its contiguous cities and municipalities were integrated to function as a single administrative region, known as Metropolitan Manila (also called the National Capital Region); the Manila city proper encompasses only a small proportion of that area.",
  },
} as DetailsAllType;
