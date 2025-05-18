document.getElementById('btn-enviar').addEventListener("click", () => {
    const nome = document.getElementById('input-nome');
    const telefone = document.getElementById('input-telefone').value;
    const mensagem = document.getElementById('input-mensagem').value;
    const link = `https://api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`;
    window.open(link);
})


