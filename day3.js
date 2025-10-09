function aparecePrompt() {
    let area = prompt(`Escolha a opção: 1 - se deseja seguir para área front-end ou 2 - se deseja seguir para área back-end`);
    console.log(area);

    if(area == "1") {
        let techFront = prompt("Escolha a opção: 1- se você quer aprender React ou 2- se quer aprender Vue?");
        console.log(techFront);
    } else if (area == "2") {
        let techBack = prompt("Escolha a opção: 1- se você quer aprender C# ou 2- se quer aprender Java");
        console.log(techBack);
    } else {
        alert("Você não respondeu uma opção válida");
    }

    let listaTechs = []

    prompt("Você prefere: 1- seguir se especializando na área escolhida ou 2- seguir se desenvolvendo para se tornar Fullstack?");
    
    let aprender = prompt("Tem mais alguma tecnologia que você gostaria de aprender? 1- sim 2- não");
    while (aprender = "1") {
        let novaTech = prompt("Me conte qual tecnologia você quer aprender:");
        listaTechs.push(novaTech);
        aprender = prompt(`Que legal que quer estudar ${novaTech}! Agora sua lista de aprendizado está assim: ${listaTechs}. Existe mais alguma tech que deseja aprender? 1- sim  2- não`);
        if (aprender = "2") {
        alert("Bons estudos para você então!");
        break
    }
    }

}  
