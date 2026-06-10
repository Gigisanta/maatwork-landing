export type BusinessVertical = {
  name: string;
  icon: "dumbbell" | "scissors" | "spark" | "book" | "heart" | "wave";
};

export const businessVerticals: BusinessVertical[] = [
  { name: "Gimnasios", icon: "dumbbell" },
  { name: "CrossFit", icon: "dumbbell" },
  { name: "Pilates", icon: "wave" },
  { name: "Yoga", icon: "heart" },
  { name: "Salones", icon: "spark" },
  { name: "Barberías", icon: "scissors" },
  { name: "Estética", icon: "spark" },
  { name: "Academias", icon: "book" },
  { name: "Nutrición", icon: "heart" },
  { name: "Fisioterapia", icon: "wave" },
];
