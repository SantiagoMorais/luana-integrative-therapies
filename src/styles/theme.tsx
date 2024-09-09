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

interface ITheme {
   fontFamily: string;
   primaryColor: string;
   secondaryColor: string;
   tertiaryColor: string;
   textColor: string;
   secondaryTextColor: string;
   shadowColor: string;
}

export const theme: ITheme = {
   fontFamily: "'Cookie', cursive",
   primaryColor: "#D6E5FA",
   secondaryColor: "#E6B2C6",
   tertiaryColor: "#8cb2e7",
   textColor: "#000000",
   secondaryTextColor: "#ffffff",
   shadowColor: "#c72a66",
};
