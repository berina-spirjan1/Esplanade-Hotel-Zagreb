import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpg";
import room22 from "./images/details-5.jpg";
import room3 from "./images/details-3.jpg";
import room33 from "./images/details-6.jpg";
import room4 from "./images/details-4.jpg";
import room44 from "./images/details-7.jpg";
import room444 from "./images/details-8.jpg";
import room4444 from "./images/details-9.jpg";
import room44444 from "./images/details-10.jpg";
import room10 from "./images/room-13.jpg";
import room11 from "./images/details-11.jpg";
import room12 from "./images/details-12.jpg";
import room13 from "./images/details-13.jpg";
import room14 from "./images/details-14.jpg";
import room15 from "./images/details-15.jpg";
import img1 from "./images/room-1.jpg";
import img2 from "./images/room-2.jpg";
import img3 from "./images/room-3.jpg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Jednokrevetna ekonomska",
      slug: "jednokrevetna-ekonomska",
      type: "jednokrevetna",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Soba je elegantno uređena i sadrži mramornu kupaonicu s kadom, tuš bez praga i luksuzne kućne ogrtače. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Jednokrevetna obična",
      slug: "jednokrevetna-obična",
      type: "jednokrevetna",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Soba je namještena za odmor i uključuje zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja sadrži ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room22
            }
          }
        },
        {
          fields: {
            file: {
              url: room33
            }
          }
        },
        {
          fields: {
            file: {
              url: room44
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Jednokrevetna standardna",
      slug: "jednokrevetna-standardna",
      type: "jednokrevetna",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room444
            }
          }
        },
        {
          fields: {
            file: {
              url: room4444
            }
          }
        },
        {
          fields: {
            file: {
              url: room44444
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Jednokrevetna deluxe",
      slug: "jednokrevetna-deluxe",
      type: "jednokrevetna",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Dvokrevetna ekonomska",
      slug: "dvokrevetna-ekonomska",
      type: "dvokrevetna",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Dvokrevetna obična",
      slug: "dvokrevetna-obična",
      type: "dvokrevetna",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "Dvokrevetna standardna",
      slug: "dvokrevetna-standardna",
      type: "dvokrevetna",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Dvokrevetna deluxe",
      slug: "dvokrevetna-deluxe",
      type: "dvokrevetna",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Porodična ekonomska",
      slug: "porodična-ekonomska",
      type: "porodična",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Porodična obična",
      slug: "porodična-obična",
      type: "porodična",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Porodična standardna",
      slug: "porodična-standardna",
      type: "porodična",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Porodična deluxe",
      slug: "porodična-deluxe",
      type: "porodična",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
          "Soba je namještena za odmor i sadrži zaseban prostor za sjedenje. Sadržaji u sobi također uključuju prešu za hlače i 3 telefona. Gosti se mogu opustiti u mramornoj kupaonici koja uključuje mekane ogrtače i luksuzne toaletne potrepštine.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "pogled na grad",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Predsjednička suite",
      slug: "predsjednička-suite",
      type: "predsjednička-suite",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Ova je soba s king size bračnim krevetom ukusno uređena, ima pogled na park i besplatni širokopojasni Internet. Kupaonica je obložena mramorom i ima grijane podove, kadu i tuš bez praga. Gostima su za opuštanje na raspolaganju luksuzni kozmetički proizvodi i mekani ogrtači. U cijenu smještaja je uključen pristup hotelskom zdravstvenom klubu i bife doručak.",
      extras: [
        "kada",
        "besplatan toaletni pribor",
        "tuš kabina",
        "ogrtač",
        "sušilo za kosu",
        "minibar",
        "sef",
        "zvučna izolacija",
        "usluga buđenja",
        "klima-uređaj"
      ],
      images: [
        {
          fields: {
            file: {
              url: room11
            }
          }
        },
        {
          fields: {
            file: {
              url: room12
            }
          }
        },
        {
          fields: {
            file: {
              url: room13
            }
          }
        },
        {
          fields: {
            file: {
              url: room14
            }
          }
        },
        {
          fields: {
            file: {
              url: room10
            }
          }
        },
        {
          fields: {
            file: {
              url: room15
            }
          }
        }
      ]
    }
  }
];
