function bannertransf(){
    let tran = document.getElementById('bannerimgbtm');
    tran.style = 'transform: scale(1.05)';
    let trantext = document.getElementById('bannertextimg');
    trantext.style = 'opacity: 1';
}
window.addEventListener('load', bannertransf);