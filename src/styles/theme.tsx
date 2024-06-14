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