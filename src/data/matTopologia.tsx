export const MATERIAL =
[
    {
        "name": "Topologia",  
        "image": "images/topologia/topologias.png",
        "situation": "em andamento",
        "featured": true,
        "description": "A topologia de rede é o canal no qual o meio de rede está conectado aos computadores e outros componentes de uma rede de computadores. Essencialmente, é a estrutura topológica da rede, e pode ser descrito física ou logicamente. Há várias formas nas quais se podem organizar a interligação entre cada um dos nós (computadores) da rede. Existem duas categorias básicas de topologias de rede: Topologia física e Topologia lógica. A topologia física é a verdadeira aparência ou layout da rede, enquanto que a lógica descreve o fluxo dos dados através da rede."
    },
    {
        "name": "Barramento",
        "image": "images/topologia/barramento.png",
        "situation": "em andamento",
        "featured": true,
        "description": "Todos os computadores são ligados em um mesmo barramento físico de dados. Apesar de os dados não passarem por dentro de cada um dos nós, apenas uma máquina pode “escrever” no barramento num dado momento. Todas as outras “escutam” e recolhem para si os dados destinados a elas. Quando um computador estiver a transmitir um sinal, toda a rede fica ocupada e se outro computador tentar enviar outro sinal ao mesmo tempo, ocorre uma colisão e é preciso reiniciar a transmissão. Essa topologia, normalmente, utiliza cabos coaxiais. Para cada barramento, existe um único cabo que vai de uma ponta a outra. O cabo é seccionado em cada local onde um computador será inserido. Com o seccionamento do cabo formam-se duas pontas e cada uma delas recebe um conector BNC. No computador é colocado um T conectado à placa que junta apenas uma ponta. Embora ainda existam algumas instalações de rede que utilizam esse modelo, é uma tecnologia antiga."
    }, 
    {
        "name": "Anel",
        "image": "images/topologia/anel.png",
        "situation": "em andamento",
        "featured": true,
        "description": "Na topologia em anel, os dispositivos são conectados em série, formando um circuito fechado (anel). Os dados são transmitidos unidirecionalmente de nó em nó até atingir o seu destino. Uma mensagem enviada por uma estação passa por outras estações, através das retransmissões, até ser retirada pela estação destino ou pela estação fonte.[3] Os sinais sofrem menos distorção e atenuação no enlace entre as estações, pois há um repetidor em cada estação. Há um atraso de um ou mais bits em cada estação para processamento de dados. Há uma queda na confiabilidade para um grande número de estações. A cada estação inserida, há um aumento de retardo na rede. É possível usar anéis múltiplos para aumentar a confiabilidade e o desempenho."
    },
    {
        "name": "Estrela",
        "image": "images/topologia/estrela.png",
        "situation": "em andamento",
        "featured": true,
        "description": "Na topologia de rede designada por rede em estrela, toda a informação deve passar obrigatoriamente por uma estação central inteligente, que deve conectar cada estação da rede e distribuir o tráfego para que uma estação não receba, indevidamente, dados destinados às outras. É neste aspecto que esta topologia difere da topologia barramento: uma rede local que use um hub não é considerada como estrela, pois o tráfego que entra pela porta do hub é destinado a todas as outras portas. Porém, uma rede que usa switches, apenas os dados destinados àquele nó são enviados a ele. Portanto, ao se medir o desempenho por meio da resiliência, é possível obter, com uma topologia em estrela, melhor desempenho que aquele obtido com uma topologia em barramento. A topologia em estrela é caracterizada por um elemento central que gerencia o fluxo de dados da rede, estando diretamente conectado (ponto-a-ponto) a cada nó, daí surgiu a designação Estrela. As informações trafegam na rede de um host para o outro."
    },
    {
        "name": "Malha",
        "image": "images/topologia/malha.png",
        "situation": "em andamento",
        "featured": true,
        "description": "Rede mesh ou rede de malha, é uma alternativa de protocolo ao padrão 802.11 para diretrizes de tráfego de dados e voz além das redes a cabo ou infraestrutura wireless. Uma rede de infraestrutura é composta de APs (Access point = Ponto de acesso) e clientes, os quais necessariamente devem utilizar aquele AP para trafegarem em uma rede. Uma rede mesh é composta de vários nós/roteadores, que passam a se comportar como uma única e grande rede, possibilitando que o cliente se conecte em qualquer um destes nós. Os nós têm a função de repetidores e cada nó está conectado a um ou mais dos outros nós. Desta maneira é possível transmitir mensagens de um nó a outro por diferentes caminhos. Já existem redes com cerca de 500 nós e mais de 400.000 usuários operando."
    },
    {
        "name": "Árvore",
        "image": "images/topologia/arvore.png",
        "situation": "em andamento",
        "featured": true,
        "description": "A topologia em árvore é essencialmente uma série de barras interconectadas. Geralmente existe uma barra central onde outros ramos menores se conectam. Esta ligação é realizada através de repartidores e as conexões das estações realizadas do mesmo modo que no sistema de barra padrão. Cuidados adicionais devem ser tomados nas redes em árvores, pois cada ramificação significa que o sinal deverá se propagar por dois caminhos diferentes. A menos que estes caminhos estejam perfeitamente casados, os sinais terão velocidades de propagação diferentes e refletirão os sinais de diferentes maneiras. Por estes motivos, geralmente as redes em árvore vão trabalhar com taxas de transmissão menores do que as redes em barra comum. Atualmente não se usa a topologia em árvore, por que caso haja falha, a rede pode ser comprometida. Usa-se normalmente uma topologia física baseada numa estrutura hierárquica de várias redes e sub-redes."
    },
    {
        "name": "Híbrida",
        "image": "images/topologia/hibrida.png",
        "situation": "em andamento",
        "featured": true,
        "description": "É a topologia mais utilizada em grandes redes. Assim, adequa-se a topologia de rede em função do ambiente, compensando os custos, expansibilidade, flexibilidade e funcionalidade de cada segmento de rede. São as que utilizam mais de uma topologia ao mesmo tempo, podendo existir várias configurações que podemos criar utilizando uma variação de outras topologias. Elas foram desenvolvidas para resolver necessidades específicas. Muitas vezes acontecem demandas imediatas de conexões e a empresa não dispõe de recursos, naquele momento, para a aquisição de produtos adequados para a montagem da rede. Nestes casos, a administração de redes pode utilizar os equipamentos já disponíveis considerando as vantagens e desvantagens das topologias utilizadas. Consideremos o caso de um laboratório de testes computacionais onde o número de equipamentos é flutuante e que não admite um layout definido. A aquisição de concentradores ou comutadores pode não ser conveniente, pelo contrário até custosa."
    },
    {
        "name": "teste",
        "image": "images/teste.png",
        "situation": "em andamento",
        "featured": false,
        "description": "..."
    }
]