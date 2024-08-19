interface IFontSize {
    smallSize: string,
    basicSize: string,
    mediumSize: string,
    largeSize: string,
    extraLargeSize: string,
}

interface IFontWeight {
    thin: string,
    medium: string,
    bold: string
}

export const fontSize: IFontSize = {
    smallSize: "2rem",
    basicSize: "2.4rem",
    mediumSize: "3rem",
    largeSize: "3.5rem",
    extraLargeSize: "4rem",
}

export const fontWeight: IFontWeight = {
    thin: "300",
    medium: "400",
    bold: "600"
}

interface ITheme {
    fontFamily: string,
    primaryColor: string,
    secondaryColor: string,
    tertiaryColor: string,
    textColor: string,
    secondaryTextColor: string,
    shadowColor: string,
}

export const theme: ITheme = {
    fontFamily: "'Cookie', cursive",
    primaryColor: "#D6E5FA",
    secondaryColor: "#E6B2C6",
    tertiaryColor: "#8cb2e7",
    textColor: "#000000",
    secondaryTextColor: "#ffffff",
    shadowColor: "#c72a66",
}

export const faqBreakPoints = () => `
        @media (max-width: 1024px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 14rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 22rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 480px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 36rem;
                        }
                    }
                }
            }
        }

        @media (max-width: 320px) {
            .faqs {
                .faq {
                    .answer {
                        &.selected {
                            height: 48rem;
                            max-height: min-content;
                        }
                    }
                }
            }
        }
        "
    )
`