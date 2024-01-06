onload = () =>{
        document.body.classList.remove("container");
};

document.addEventListener('DOMContentLoaded', function() {
        var audio = document.getElementById('audioPlayer');
    
        // Adicione um evento para garantir que o áudio seja reproduzido quando o DOM estiver pronto
        audio.play();
    });