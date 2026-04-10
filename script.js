function confirmar() {
    const numero = "5511969911236";
    const mensagem = "Oi Sylvia! Claro que eu estarei ai no seu aniversário😊🎉";

    const url = "https://api.whatsapp.com/send?phone=" + numero + "&text=" + encodeURIComponent(mensagem);

    window.location.href = url;
}