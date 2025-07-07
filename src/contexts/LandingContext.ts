// Standard libraries
import { createContext } from "react";
// Types
import { CMSSection } from "@/types/cms";

export const LandingContext = createContext<CMSSection[] | undefined>(undefined)