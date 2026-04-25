function confirmar() {
    const numero = "5511969911236";
    const mensagem = "Oi Sylvia! Claro que eu estarei ai no seu aniversário😊🎉";

    const url = "https://surveymars.com/q/NGN1OVBi4" + numero + "&text=" + encodeURIComponent(mensagem);

    window.location.href = url;
}
