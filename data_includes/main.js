PennController.ResetPrefix(null);
PennController.DebugOff();
//Sequência de telas do experimento
Sequence ("consent","inicial", "instr.treino", ("treino"), "instr.exp" , randomize("experimento"), SendResults(), "final");
newTrial("consent",
defaultText
        .css("font-size","1.2em")
        .print()
        ,
      newText("Você foi convidado a participar de uma pesquisa sobre como as pessoas produzem sentenças. Este estudo está sendo conduzido pelo LAPEX -<br> Laboratório de Psicolinguística Experimental, da UFRJ. </p><p>Você é apto a participar deste experimento porque você é maior de 18 anos, é falante nativo de Português do Brasil(você adquiriu o Português <br> do Brasil durante a infância, tendo o Português do Brasil como sua primeira língua)sendo fluente no idioma. </b></p><p> Qualquer informação que você forneça neste experimento será anônima e mantida em sigilo. Você pode desistir de participar do estudo<br> a qualquer momento sem penalização.No entanto , é importante que você faça o experimento até o final para obtençãos das suas horas<br> complementares (AACC). Ao decidir começar o teste, certifique-se que Tem boa conexão com a internet e que você está disponível para<br> completar o estudo de uma só vez.</p><p> Se você tiver alguma dúvida sobre esta pesquisa ou se você deseja receber os resultados deste estudo quando estiver finalizado, por favor,<br> entre em contato com a doutoranda Lorrane Medeiros, através do e-mail lorranesnm@hotmail.com</p><p><b> Este teste dura aproximadamente 15 minutos.</p><p> Clicando em EU CONCORDO, você concorda que é maior de idade, que é falante nativo de Português do Brasil, que você é fluente em Português<br> do Brasil e que você entendeu estas instruções e condições de participação.</p>")
    .print()
        ,
    newButton("EU CONCORDO")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
        
        )
        ;
newTrial("inicial",
//Define que todo o texto ser impresso na tela e que o tamanho da fonte ser "1.2em"
    defaultText
        .css("font-size","1.2em")
        .print()
        ,
    newText("<p>Bem-vindo!</p>")
    ,
    newText("<p>Neste experimento, você ouvirá algumas frases e julgará o quão boas/aceitáveis elas são, usando uma escala de 5 pontos.</p>")
    ,
    
    newText("<p>Por favor, preencha o seu NOME completo abaixo:</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Por favor, preencha o seu E-MAIL na caixa abaixo:</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Preencha a sua IDADE abaixo:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    
         
    newText("<p>Selecione o seu nível de escolaridade, depois clique em INICIAR”</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Select your educational level")
        .add("Pós-graduação em andamento","Pós-graduação concluída", "Graduação em andamento", "Graduação concluída")
        .css("font-size","1.2em")
        .print()
        .log()  
 
    ,
     newText("<p>Preencha o seu curso e período:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("curso_periodo")
        .css("font-size","1.2em")
        .print()
        ,
//Cria um novo bot�o nomeado "Iniciar"
    newButton("INICIAR")
        .css("font-size","1.2em")
        .print()
        .wait()
    ,
//Cria uma nova vari�vel chamada "ID" que recebe o conte�do da caixa de texto "Nome"
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
        ,
    newVar("curso_periodo")
        .global()
        .set( getTextInput("curso_periodo") )
        
        )
        

//Envia para o arquivo "results" o conte�do da vari�vel "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
.log( "curso" , getVar("curso") )
,


 
//Nova tela - Tela de instru��es do treino
newTrial("instr.treino",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Vamos praticar um pouco antes de começar o teste!</p>")
         .center()
    ,
    newText("<p>Instruções:</p>")
         .center()
         .bold()
    ,
    newText("<p>Passo 1: Você ouvirá uma frase. Essa é a frase-contexto. Assim que o áudio terminar, clique no botão PRÓXIMO.</p>")
         .left()
    ,
    newText("<p>Passo 2: Você ouvirá uma segunda frase. Essa frase está relacionada com a frase-contexto(áudio anterior). Depois de ouvir essa frase,clique no botão<br> PRÓXIMO para julgar esta frase de acordo com uma escala de 5 pontos.</p>")
    .left()
         ,
         newText("PRESTE ATENÇÃO!! Você julgará a segunda frase, não a primeira.</p>")
         .center()
         .bold()
         ,
         
    newText("<p>Passo 3:Você verá uma escala de 5 pontos e agora você vai escolher a melhor opção, de acordo com o que você acha sobre a sentença que você acabou de ouvir:</p>")
         ,
    newImage("escala.instructions.png")
    .print()
    .center()
    ,
    newText("<p>Então, você vai clicar na melhor opção pra você!(Se você estiver usando um laptop ou desktop, você pode apertar as teclas de 1 a 5 para escolher a sua resposta.</p>")
         .center()
    ,
    newText("<p>Se possível, use fones de ouvido durante a tarefa.</p>")
         .left()
    ,
    newText("<p>Aperte COMEÇAR para fazer um treino.</p>")
         .left()
    ,
    //Cria um novo bot�o nomeado "Iniciar" e envia para o arquivo "results" a informa��o de quando ele � pressionado
    newButton("COMEÇAR")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
)
Template("treino.csv",variable=>
    newTrial("treino",
        newAudio("contexto.treino",variable.ContextoTreino)
             .play()
                     ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
            .center()
                   ,
       
    
           newButton("Próximo")
            .css("font-size","1.2em")
            .print()
            .log()
            .wait()
            .remove()
            
                 ,
             
             getAudio("contexto.treino",variable.ContextoTreino)
             .wait("first")
             ,
             getImage("altofalante.png")
            .remove()
            ,
             
            newAudio("frase.treino", variable.SentenceTreino)
             .play()
            ,
        
        newImage("altofalante2.png")
            .size( 90 , 90 )
            .print()
            .center()
            
        ,
        
        
        newButton("Próximo")
            .css("font-size","1.2em")
            .print()
            .log()
            .wait()
            .remove()
            
        
    ,
    
             getAudio("frase.treino",variable.SentenceTreino)
             .wait("first")
             ,
            
            getImage("altofalante2.png")
            .remove()
            ,
             
             
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Altamente Inaceitável")
    .css("font-size","1.4em")
        
    ,
    newText("Inaceitável")
    .css("font-size","1.4em")
        
,
   newText("Neutro")
        .css("font-size","1.4em")
,
    newText("Aceitável")
    .css("font-size","1.4em")
        
,
     newText("Altamente aceitável")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Altamente Inaceitável") )
            .add( 500 , 0 , getText("Inaceitável") )
            .add(   680 , 0 , getText("Neutro") )
            .add( 830 , 0 , getText("Aceitável") )
            .add(   990 , 0 , getText("Altamente aceitável") )
            .print()
            ,
        newSelector()
            .add( getText("Altamente inaceitável") , getText("Inaceitável"), getText("Neutro"), getText("Aceitável"), getText("Altamente aceitável") )
            .keys("1","2","3","4","5")
            .log()
            .wait()
)

    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
)
//Nova Tela - Tela de instruções do experimento
newTrial("instr.exp",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Agora que você praticou, vamos começar o experimento!</p>")
    ,
    newText("<p>A tarefa durará em torno de 15 minutos. Certifique-se que você esteja em um local tranquilo e silencioso, para que você não seja interrompido.</p>")
    ,
    newText("<p>Clique em COMEÇAR quando você estiver prnto para começar o experimento.</p>")
    ,
    newButton("COMEÇAR")
        .css("font-size","1.2em")
        .print()
        .center()
        .log()
        .wait()
    )
Template("tabela.csv", variable=>    
    newTrial("experimento",
        newAudio("contexto.exp", variable.AudioContext)
             .play()
        ,
        newImage("altofalante.png")
            .size( 90 , 90 )
            .print()
            .center()
       ,
       
        newButton("Next")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
                ,

             getAudio("contexto.exp",variable.AudioContext)
             .wait("first")
             ,
             getImage("altofalante.png")
            .remove()
                         ,
        newAudio("frase.experimento", variable.AudioSentence)
             .play()
        ,
        newImage("altofalante2.png")
            .size( 90 , 90 )
            .print()
            .center()
            
           
        ,
        
        newButton("Next")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
            
        ,
        getAudio("frase.experimento",variable.AudioSentence)
             .wait("first")
             ,
            getImage("altofalante2.png")
            .remove()
            .center()
             ,
             
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Altamente Inaceitável")
    .css("font-size","1.4em")
        
    ,
    newText("Inaceitável")
    .css("font-size","1.4em")
        
,
   newText("Neutro")
        .css("font-size","1.4em")
,
    newText("Aceitável")
    .css("font-size","1.4em")
        
,
     newText("Altamente aceitável")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Altamente Inaceitável") )
            .add( 500 , 0 , getText("Inaceitável") )
            .add(   680 , 0 , getText("Neutro") )
            .add( 830 , 0 , getText("Aceitável") )
            .add(   990 , 0 , getText("Altamente aceitável") )
            .print()
            ,
        newSelector()
            .add( getText("Altamente inaceitável") , getText("Inaceitável"), getText("Neutro"), getText("Aceitável"), getText("Altamente aceitável") )
            .keys("1","2","3","4","5")
            .log()
            .wait()
)

    .log("Item", variable.Item)
    .log("Condition", variable.Condition)
    .log("Group", variable.Group) 
    .log("Type", variable.Type)
    )
    
//Nova Tela - Tela final    
newTrial("final",
    newText("<p> O experimento foi concluído!Você receberá seu certificado de AACC por e-mail. Obrigada pela sua participação!</p>")
        .css("font-size","1.2em")
        .print()
        .wait()
    )
//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script
