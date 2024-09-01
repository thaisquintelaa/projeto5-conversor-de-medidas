let metro = parseFloat(prompt('Digite um valor em metros (Ex:2.5): '))
let opcao = parseInt(prompt('Agora, selecione uma opção abaixo para converter, entre:\n1 - milímetro (mm)\n2 - centímetro (cm)\n3 - decímetro (dm)\n4 - decâmetro (dam)\n5 - hectômetro (hm)\n6 - quilômetro (km)'))

let resultado

switch(opcao) {
    case 1:
        resultado = metro * 1000
        alert(`${metro}m equivale a ${resultado}mm`)
        break
    case 2:
        resultado = metro * 100
        alert(`${metro}m equivale a ${resultado}cm`)
        break
    case 3:
        resultado = metro * 10
        alert(`${metro}m equivale a ${resultado}dm`)
        break
    case 4:
        resultado = metro / 10
        alert(`${metro}m equivale a ${resultado}dam`)
        break
    case 5:
        resultado = metro / 100
        alert(`${metro}m equivale a ${resultado}hm`)
        break
    case 6:
        resultado = metro / 1000
        alert(`${metro}m equivale a ${resultado}km`)
        break
    default:
        alert(`Opção Inválida!`)
}