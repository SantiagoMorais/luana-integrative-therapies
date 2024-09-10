interface IFontSize {
   smallSize: string;
   basicSize: string;
   mediumSize: string;
   largeSize: string;
   extraLargeSize: string;
}

interface IFontWeight {
   thin: string;
   medium: string;
   semiBold: string;
   bold: string;
}

export const fontSize: IFontSize = {
   smallSize: "2rem",
   basicSize: "2.4rem",
   mediumSize: "3rem",
   largeSize: "3.5rem",
   extraLargeSize: "4rem",
};

export const fontWeight: IFontWeight = {
   thin: "300",
   medium: "400",
   semiBold: "500",
   bold: "600",
};

export const defaultFontFamily = "'Cookie', cursive";

export interface ITheme {
   id: string;
   backgroundColor: string;
   primaryColor: string;
   secondaryColor: string;
   tertiaryColor: string;
   textColor: string;
   secondaryTextColor: string;
   shadowColor: string;
}

export const sectionsTheme: ITheme[] = [
   {
      id: "default",
      primaryColor: "#D6E5FA",
      secondaryColor: "#E6B2C6",
      tertiaryColor: "#8cb2e7",
      textColor: "#000000",
      secondaryTextColor: "#ffffff",
      shadowColor: "#c72a66",
      backgroundColor: "#ffffff",
   },
   {
      id: "equilibrium",
      primaryColor: "#D7C3F1",
      secondaryColor: "#e9a5e0",
      tertiaryColor: "#6434a3",
      textColor: "#000000",
      secondaryTextColor: "#ffffff",
      backgroundColor: "#F7EFE5",
      shadowColor: "#d86cca",
   },
   {
      id: "segredos-da-lua",
      primaryColor: "#8bb0da",
      secondaryColor: "#addbd7",
      tertiaryColor: "#3331C5",
      textColor: "#000000",
      secondaryTextColor: "#ffffff",
      backgroundColor: "#f1f1f1",
      shadowColor: "#48aca3",
   },
];
