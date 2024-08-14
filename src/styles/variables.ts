export const instagramLink: string = "https://www.instagram.com/dra.luanaalvarenga/";
export const emailLink: string = "";

function formatMessageForWeb (message: string) : string {
    return encodeURIComponent(message)
}

const defaultWhatsappMessage: string = "Olá, dra.Luana, eu encontrei o seu contato pelo seu site. Eu gostaria de agendar uma consulta.";
const phoneNumber: number = 5531991571662;
export const whatsappLink: string = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${formatMessageForWeb(defaultWhatsappMessage)}`;

export const address: string = "R. Cel. Jaíro Pereira, 20 - sala 8 - Palmares, Belo Horizonte - MG, 31155-292"
export const googleMapsLink: string = `https://www.google.com/maps/search/?api=1&query=${formatMessageForWeb(address)}`