"use client";

import { ChefCard } from "./ChefCard";

const CHEFS_DATA = [
  {
    id: "chef-1",
    name: "Alessandro Ricci",
    role: "Executive Chef",
    cuisine: "Italian Cuisine",
    experience: "18 Years Experience",
    speciality: "Wood-fired Pizza & Handmade Pasta",
    description: "Known for combining authentic Italian recipes with modern presentation and locally sourced ingredients.",
    imageUrl: "/images/chefs/chef1.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-2",
    name: "Mei Lin",
    role: "Executive Pastry Chef",
    cuisine: "French-Asian Fusion",
    experience: "12 Years Experience",
    speciality: "Artisanal Entremets & Sugar Work",
    description: "An artist of the sweet kitchen, blending delicate Asian flavors with classic French pastry techniques.",
    imageUrl: "/images/chefs/chef2.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-3",
    name: "Kenji Sato",
    role: "Master Sushi Chef",
    cuisine: "Japanese Omakase",
    experience: "25 Years Experience",
    speciality: "Edomae Sushi & Knife Skills",
    description: "A purist dedicated to the craft, honoring centuries-old traditions to create unforgettable sushi experiences.",
    imageUrl: "/images/chefs/chef3.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-4",
    name: "Julien Dubois",
    role: "Chef de Cuisine",
    cuisine: "Modern French",
    experience: "15 Years Experience",
    speciality: "Sauce Making & Gastronomy",
    description: "Elevating rustic French classics into Michelin-worthy masterpieces with unparalleled attention to detail.",
    imageUrl: "/images/chefs/chef4.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-5",
    name: "Amara Okeke",
    role: "Sous Chef",
    cuisine: "Contemporary Global",
    experience: "10 Years Experience",
    speciality: "Flavor Profiling & Fermentation",
    description: "A rising star bringing bold, complex flavor profiles and innovative preservation techniques to our menu.",
    imageUrl: "/images/chefs/chef5.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: "chef-6",
    name: "Mateo Vargas",
    role: "Grill Master",
    cuisine: "Argentinian & Wood-fire",
    experience: "14 Years Experience",
    speciality: "Open-fire Cooking & Dry Aging",
    description: "Mastering the primal art of fire, coaxing extraordinary flavors from the finest cuts of meat and vegetables.",
    imageUrl: "/images/chefs/chef6.png",
    social: {
      facebook: "#",
      instagram: "#",
    },
  },
];

export function ChefGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
      {CHEFS_DATA.map((chef) => (
        <ChefCard key={chef.id} chef={chef} />
      ))}
    </div>
  );
}
