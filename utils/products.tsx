export const products = [
    {
      id: "64a654593e91b8e73a351e9b",
      name: "Pokemon",
      description: "Short description",
      price: 25,
      brand: "ABS",
      category: "3D",
      inStock: true,
      images: [
        {
          color: "White",
          colorCode: "#FFFFFF",
          image:
            "data:image/jpeg;base64,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",
        },
        {
          color: "Gray",
          colorCode: "#808080",
          image:
            "",
        },
      ],
      reviews: [],
    },
    {
      id: "64a4ebe300900d44bb50628a",
      name: "Logitech MX Keys Advanced Wireless Illuminated Keyboard, Tactile Responsive Typing, Backlighting, Bluetooth, USB-C, Apple macOS, Microsoft Windows, Linux, iOS, Android, Metal Build (Black)",
      description:
        "PERFECT STROKE KEYS - Spherically-dished keys match the shape of your fingertips, offering satisfying feedback with every tap\nCOMFORT AND STABILITY - Type with confidence on a keyboard crafted for comfort, stability, and precision",
      price: 102.99,
      brand: "logitech",
      category: "Accesories",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "https://cdn.shopify.com/s/files/1/0645/8877/5646/files/bears.webp?v=1682941344",
        },
      ],
      reviews: [
        {
          id: "64a65a6158b470c6e06959ee",
          userId: "6475af156bad4917456e6e1e",
          productId: "64a4ebe300900d44bb50628a",
          rating: 5,
          comment: "good",
          createdDate: "2023-07-06T06:08:33.067Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "648437b38c44d52b9542e340",
      name: "Apple iPhone 12, 64GB",
      description:
        'The product is refurbished, fully functional, and in excellent condition. Backed by the 90-day E~Shop Renewed Guarantee.\n- This pre-owned product has been professionally inspected, tested and cleaned by Amazon qualified vendors. It is not certified by Apple.\n- This product is in "Excellent condition". The screen and body show no signs of cosmetic damage visible from 12 inches away.\n- This product will have a battery that exceeds 80% capacity relative to new.\n- Accessories may not be original, but will be compatible and fully functional. Product may come in generic box.\n- Product will come with a SIM removal tool, a charger and a charging cable. Headphone and SIM card are not included.\n- This product is eligible for a replacement or refund within 90-day of receipt if it does not work as expected.\n- Refurbished phones are not guaranteed to be waterproof.',
      price: 40,
      brand: "Apple",
      category: "Phone",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "",
        },
        {
          color: "Blue",
          colorCode: " #0000FF",
          image:
            "",
        },
        {
          color: "Red",
          colorCode: "#FF0000",
          image:
            "",
        },
      ],
      reviews: [
        {
          id: "6499b4887402b0efd394d8f3",
          userId: "6499b184b0e9a8c8709821d3",
          productId: "648437b38c44d52b9542e340",
          rating: 4,
          comment:
            "good enough. I like the camera and casing. the delivery was fast too.",
          createdDate: "2023-06-26T15:53:44.483Z",
          user: {
            id: "6499b184b0e9a8c8709821d3",
            name: "Chaoo",
            email: "example1@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTtcuRLwWi1vPKaQOcJlUurlhRAIIq2LgYccE8p32=s96-c",
            hashedPassword: null,
            createdAt: "2023-06-26T15:40:52.558Z",
            updatedAt: "2023-06-26T15:40:52.558Z",
            role: "USER",
          },
        },
        {
          id: "6499a110efe4e4de451c7edc",
          userId: "6475af156bad4917456e6e1e",
          productId: "648437b38c44d52b9542e340",
          rating: 5,
          comment: "I really liked it!!",
          createdDate: "2023-06-26T14:30:40.998Z",
          user: {
            id: "6475af156bad4917456e6e1e",
            name: "Charles",
            email: "example@gmail.com",
            emailVerified: null,
            image:
              "https://lh3.googleusercontent.com/a/AAcHTteOiCtILLBWiAoolIW9PJH-r5825pBDl824_8LD=s96-c",
            hashedPassword: null,
            createdAt: "2023-05-30T08:08:53.979Z",
            updatedAt: "2023-05-30T08:08:53.979Z",
            role: "ADMIN",
          },
        },
      ],
    },
    {
      id: "64a4e9e77e7299078334019f",
      name: "Logitech MX Master 2S Wireless Mouse – Use on Any Surface, Hyper-Fast Scrolling, Ergonomic Shape, Rechargeable, Control Upto 3 Apple Mac and Windows Computers, Graphite",
      description:
        "Cross computer control: Game changing capacity to navigate seamlessly on 3 computers, and copy paste text, images, and files from 1 to the other using Logitech flow\nDual connectivity: Use with upto 3 Windows or Mac computers via included Unifying receiver or Bluetooth Smart wireless technology. Gesture button- Yes",
      price: 70,
      brand: "logitech",
      category: "Accesories",
      inStock: true,
      images: [
        {
          color: "Graphite",
          colorCode: " #383838",
          image:
            "",
        },
      ],
      reviews: [],
    },
    {
      id: "649d775128b6744f0f497040",
      name: 'Smart Watch(Answer/Make Call), 1.85" Smartwatch for Men Women IP68 Waterproof, 100+ Sport Modes, Fitness Activity Tracker, Heart Rate Sleep Monitor, Pedometer, Smart Watches for Android iOS, 2023',
      description:
        'Bluetooth Call and Message Reminder: The smart watch is equipped with HD speaker, after connecting to your phone via Bluetooth, you can directly use the smartwatches to answer or make calls, read messages, store contacts, view call history. The smartwatch can set up more message notifications in "GloryFit" APP. You will never miss any calls and messages during meetings, workout and riding.',
      price: 50,
      brand: "Nerunsa",
      category: "Watch",
      inStock: true,
      images: [
        {
          color: "Black",
          colorCode: "#000000",
          image:
            "",
        },
        {
          color: "Silver",
          colorCode: "#C0C0C0",
          image:
            "",
        },
      ],
      reviews: [],
    },
  ];