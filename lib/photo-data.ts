export const rooms = [
  {
    id: "living-room-1",
    title: "Living room 1",
    details: "Sofa · Air conditioning · Ceiling fan · TV",
    thumbnail: "/images/tour/living-room-1.jpeg",
    photos: [
      ["/images/tour/living-room-1.jpeg"],
      [
        "/images/tour/living-room-1-2.jpeg",
        "/images/tour/living-room-1-3.jpeg",
      ],
    ],
  },

  {
    id: "living-room-2",
    title: "Living room 2",
    details: "Ceiling fan · Hot tub",
    thumbnail: "/images/tour/living-room-2.jpeg",
    photos: [
      ["/images/tour/living-room-2.jpeg"],
      [
        "/images/tour/living-room-2-2.jpeg",
        "/images/tour/living-room-2-3.jpeg",
      ],
      ["/images/tour/living-room-2-4.jpeg"],
      [
        "/images/tour/living-room-2-5.jpeg",
        "/images/tour/living-room-2-6.jpeg",
      ],
      ["/images/tour/living-room-2-7.jpeg"],
    ],
  },

  {
    id: "full-kitchen",
    title: "Full kitchen",
    details:
      "Freezer · Fridge · Blender · Cooker · Cooking basics · Kettle · Microwave · Toaster · Wine glasses · Coffee · Crockery and cutlery",
    thumbnail: "/images/tour/full-kitchen.jpeg",
    photos: [
      ["/images/tour/full-kitchen.jpeg", "/images/tour/full-kitchen-2.jpeg"],
    ],
  },

  {
    id: "bedroom",
    title: "Bedroom",
    details:
      "Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay",
    thumbnail: "/images/tour/bedroom.jpeg",
    photos: [
      ["/images/tour/bedroom.jpeg"],
      ["/images/tour/bedroom-2.jpeg", "/images/tour/bedroom-3.jpeg"],
      ["/images/tour/bedroom.jpeg"],
      ["/images/tour/bedroom-5.jpeg", "/images/tour/bedroom-6.jpeg"],
    ],
  },

  {
    id: "bathroom",
    title: "Full bathroom",
    details: "Hairdryer · Hot water · Shampoo · Shower gel",
    thumbnail: "/images/tour/full-bathroom.jpeg",
    photos: [["/images/tour/full-bathroom.jpeg"]],
  },

  {
    id: "gym",
    title: "Gym",
    details: "Air conditioning · Gym · Exercise equipment · Ceiling fan",
    thumbnail: "/images/tour/gym.jpeg",
    photos: [
      ["/images/tour/gym.jpeg"],
      ["/images/tour/gym-2.jpeg", "/images/tour/gym-3.jpeg"],
      ["/images/tour/gym-4.jpeg", "/images/tour/gym-5.jpeg"],
    ],
  },

  {
    id: "exterior",
    title: "Exterior",
    details: "",
    thumbnail: "/images/tour/exterior.jpeg",
    photos: [
      ["/images/tour/exterior.jpeg"],
      ["/images/tour/exterior-2.jpeg", "/images/tour/exterior-3.jpeg"],
      ["/images/tour/exterior-4.jpeg"],
      ["/images/tour/exterior-4.jpeg", "/images/tour/exterior-5.jpeg"],
    ],
  },

  {
    id: "pool",
    title: "Pool",
    details: "Pool",
    thumbnail: "/images/tour/pool.jpeg",
    photos: [
      ["/images/tour/pool.jpeg"],
      ["/images/tour/pool-2.jpeg", "/images/tour/pool.jpeg"],
    ],
  },

  {
    id: "additional",
    title: "Additional photos",
    details: "",
    thumbnail: "/images/tour/additional.jpeg",
    photos: [
      ["/images/tour/additional.jpeg"],
      ["/images/tour/additional-2.jpeg", "/images/tour/additional-3.jpeg"],
      ["/images/tour/additional-4.jpeg"],
      ["/images/tour/additional-5.jpeg", "/images/tour/additional-6.jpeg"],
      ["/images/tour/additional-7.jpeg"],
      ["/images/tour/additional-8.jpeg", "/images/tour/additional-9.jpeg"],
      ["/images/tour/additional-10.jpeg"],
    ],
  },
]

export const allPhotos = rooms.flatMap((room) => room.photos.flat())
