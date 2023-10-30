import { Inter, Lusitana } from "next/font/google";

// Define and export a font with its subsets
export const inter = Inter({ subsets: ["latin"] });

// Export a secondary font
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
