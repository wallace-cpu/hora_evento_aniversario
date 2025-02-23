AOS.init();

const dataDoEvento = new Date("Set 02, 2025 19:00:00");
const timeStempDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date("");
    const timeStempDoAtual = agora.getTime();

    const distanciaAteEvento = timeStempDoEvento - timeStempDoAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;

    const horasEmMs = 1000 * 60 * 60 ;

    const minutosEmMs = 1000 * 60;


    const diasAteEvento = math.floor(distanciaAteEvento / (diasEmMs));

    const horasAteoEvento = math.floor(distanciaAteEvento / (diasEmMs)) / (horasEmMs);

    const minutosAteEvento = math.floor(distanciaAteEvento % (horasEmMs)) / (minutosEmMs);

    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteoEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }


}, 1000);

