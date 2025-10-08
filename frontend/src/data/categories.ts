// src/data/categories.ts

/** Types */
export interface Tool {
  icon: string;
  title: string;
  desc: string;
  link: string;
}

export interface CalculatorItem {
  label: string;
  slug: string;
}

export interface CalculatorGroup {
  groupTitle: string;
  items: CalculatorItem[];
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  popularTools?: Tool[];
  calculators?: CalculatorGroup[];
}

/** Data: convert (categories) */
export const convert: Record<string, Category> = {
  automotive: {
    id: "automotive",
    title: "Automotive Calculators",
    description:
      "Automotive calculators for engine performance, fuel, and vehicle specs.",
    icon: "🚗",
    popularTools: [
      {
        icon: "🚗",
        title: "Engine Compression Ratio Calculator",
        desc: "Calculate the compression ratio of your engine.",
        link: "/automotive/engine-compression-ratio/",
      },
      {
        icon: "🚗",
        title: "Engine Horsepower Calculator",
        desc: "Calculate the horsepower of your engine.",
        link: "/automotive/engine-horsepower/",
      },
      {
        icon: "🚗",
        title: "Engine Torque Calculator",
        desc: "Calculate the torque of your engine.",
        link: "/automotive/engine-torque/",
      },
      {
        icon: "🚗",
        title: "Carburetor CFM Calculator",
        desc: "Calculate the CFM of your carburetor.",
        link: "/automotive/carburetor-cfm/",
      },
    ],
  },

  conversion: {
    id: "conversion",
    title: "Conversion Calculators",
    description: "Length, weight, temperature and more — quick converters.",
    icon: "🏗️",
    popularTools: [
      {
        icon: "📏",
        title: "Meters to Feet Converter",
        desc: "Convert meters to feet with precision.",
        // link: "/conversion/length/meters-to-feet/",
        link: "/conversion/meters-to-feet/",
      },
      {
        icon: "⚖️",
        title: "Kilograms to Pounds",
        desc: "Convert kilograms to pounds instantly.",
        // link: "/conversion/weight-mass/kg-to-pounds/",
        link: "/conversion/kg-to-pounds/",
      },
      {
        icon: "🌡️",
        title: "Celsius to Fahrenheit",
        desc: "Convert Celsius to Fahrenheit accurately.",
        // link: "/conversion/temperature/celsius-to-fahrenheit/",
        link: "/conversion/celsius-to-fahrenheit/",
      },
    ],
  },
};
