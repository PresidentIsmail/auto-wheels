import { generateId } from "@/lib/helper";

type Testimonial = {
  id: string;
  rating: number;
  comment: string;
  fullName: string;
  profileImgUrl: string;
};

export const testimonialData: Testimonial[] = [
  {
    id: generateId(),
    rating: 5,
    comment: "You always get value for your money,service is out of this world",
    fullName: "olerilwe mosiane",
    profileImgUrl: "/images/testimonials/olerilwe.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Very efficient and the services are of a fantastic standard. The managers are always willing to assist, very friendly and accommodating. I'd definitely recommend using them for all your car services and repairs! 👍🏻",
    fullName: "Mishkah Shoda",
    profileImgUrl: "/images/testimonials/mishkah.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment: "They are very helpful and you don't wait to long",
    fullName: "Lesego Lefafa",
    profileImgUrl: "/images/testimonials/lesego.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Friendly. The reception staff is very friendly and willing to go extra mile to assist the customers.",
    fullName: "Matshidiso Pooe",
    profileImgUrl: "/images/testimonials/matshidiso.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment: "Excellent service.",
    fullName: "Charl Aspeling",
    profileImgUrl: "/images/testimonials/charl.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment: "Great service and friendly staff.",
    fullName: "Ferdinand Jacobus van Zyl (Fred van Zyl)",
    profileImgUrl: "/images/testimonials/fred.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Excellent service. Very competitive prices. Quick turn around time. I'm a very happy customer.",
    fullName: "Sadek Malek",
    profileImgUrl: "/images/testimonials/sadek.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Im happy cant complain we have a good relationship them me and my car  keep it up faran and the crew.",
    fullName: "Urie Tseleng",
    profileImgUrl: "/images/testimonials/urie.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Very good service and very helpful I was stranded with the overheating car nd they sorted my car I'm one of the happy customer. Drove back to johannesburg peacefully.",
    fullName: "richard neven",
    profileImgUrl: "/images/testimonials/richard.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment:
      "Always give fast and efficient service to customers. I have the most satisfactory experiences when needed service.",
    fullName: "Miriam Harry",
    profileImgUrl: "/images/testimonials/miriam.png",
  },
  {
    id: generateId(),
    rating: 5,
    comment: "Good service I got and excellent customer care.",
    fullName: "dumisani ndlovu",
    profileImgUrl: "/images/testimonials/dumisani.png",
  },
];
