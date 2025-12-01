const os = require('os');

console.log('Nome do sistema operacional: ', os.type());

console.log('Tempo de atividade (horas):', (os.uptime() / 360).toFixed(2));

console.log('Pasta principal do usuário:', os.homedir());