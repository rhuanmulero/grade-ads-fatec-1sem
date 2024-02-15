
//Botões
document.getElementById("home").addEventListener("click", function() {
    window.location.href = "index.html";
});



document.getElementById("horario").addEventListener("click", function() {
    window.location.href = "horario.html";
});



document.getElementById("calendario").addEventListener("click", function() {
    window.location.href = "calendario.html";
});


const disciplinas = document.querySelectorAll('.disciplina');
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

disciplinas.forEach(disciplina => {
    disciplina.addEventListener('click', () => {
        const disciplinaId = disciplina.id;
        let modalContent = '';

        switch (disciplinaId) {
            case 'admin':
                modalContent = 'Administração Geral - 4hs/aula\n\nHorário: Segunda: 7:40-11:10\n\nAdministração Geral é uma disciplina fundamental nos cursos de administração e em diversos outros campos relacionados à gestão de empresas e organizações. Ela aborda os princípios, teorias e práticas que são essenciais para o entendimento e o desenvolvimento das atividades administrativas em qualquer tipo de organização.';
                break;

            case 'aoc':
                modalContent = 'Arquitetura e Organização de Computadores - 4hs/aula\n\nHorário: Quinta: 7:40-11:10\n\nArquitetura e Organização de Computadores é uma área da ciência da computação que estuda a estrutura interna dos sistemas computacionais, incluindo hardware e software, bem como a interação entre eles. Esta disciplina é crucial para entender como os computadores funcionam e como são projetados.';
                break;

            case 'alp':
                modalContent = 'Algoritmos e Lógica de Programação - 4hs/aula\n\nHorário: Quarta: 9:30-13:00\n\nAlgoritmos e Lógica de Programação são fundamentais para a ciência da computação e para o desenvolvimento de software. Eles se concentram em conceitos básicos e técnicas para resolver problemas de forma eficiente e sistemática';
                    break;

            case 'ldh':
                    modalContent = 'Laboratório de Hardware - 2hs/aula\n\nHorário: Sexta: 11:20-13:00\n\nUm laboratório de hardware é um ambiente dedicado ao estudo, pesquisa, desenvolvimento e teste de componentes de hardware de computadores e sistemas embarcados. Geralmente, esse tipo de laboratório é encontrado em instituições educacionais, empresas de tecnologia e centros de pesquisa. Aqui estão alguns aspectos-chave de um laboratório de hardware';
                    break;

            case 'pem':
                        modalContent = 'Programação em Microinformática - 4hs/aula\n\nHorário: Sexta: 7:40-11:10\n\nA programação em microinformática refere-se ao desenvolvimento de software para microcomputadores, que são computadores pessoais ou de pequeno porte. Essa área da programação é amplamente utilizada na criação de aplicativos, utilitários e sistemas operacionais para plataformas desktop e dispositivos móveis. Aqui está uma visão geral dos principais aspectos relacionados à programação em microinformática:';
                        break;

            case 'ing':
                        modalContent = 'Inglês - 2hs/aula\n\nHorário: Terça: 9:30-11:10\n\nA disciplina de inglês é uma parte fundamental do currículo em muitos países ao redor do mundo. Ela se concentra no estudo da língua inglesa em suas diversas formas, incluindo a gramática, vocabulário, pronúncia, escrita, leitura, e compreensão auditiva. Aqui estão alguns dos principais aspectos dessa matéria';
                        break;

            case 'mdd':
                    modalContent = 'Matemática Discreta - 4hs/aula\n\nHorário: Segunda: 11:20-13:00/Terça: 7:40-11:10\n\nMatemática Discreta é um ramo da matemática que lida com estruturas e conceitos que são discretos, ou seja, que possuem uma contagem finita ou enumerável de elementos. Ao contrário da matemática contínua, que trata de conceitos como números reais e cálculo diferencial e integral, a matemática discreta se concentra em objetos separados e distintos. Aqui está uma visão geral dos principais tópicos em Matemática Discreta';
                        break;
          
          
        }

        modalText.innerText = modalContent;
        modal.style.display = 'block';
    });
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
