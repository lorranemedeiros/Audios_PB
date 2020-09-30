PennController.ResetPrefix(null);
PennController.DebugOff();
//Sequência de telas do experimento
Sequence ("consent","inicial", "instr.treino", ("treino"), "instr.exp" , randomize("experimento"), SendResults(), "final");
newTrial("consent",
defaultText
        .css("font-size","1.2em")
        .print()
        ,
      newText("<p>You have been invited to take part in a research study about how people produce sentences. The study is being conducted by LAPEX-Laboratório<br> de Psicolinguística Experimental at UFRJ.</p><p>You are being asked to complete this experiment because <b>you are an adult (18 years or older), you are a native speaker of Brazilian Portuguese<br> and you are fluent in English too (you learned Brazilian Portuguese from birth and are a fluent speaker of Brazilian Portuguese, and you are<br> a fluent speaker of English because you've learned English during your life)</b>.</p><p>Any information that you provide will be anonymized and kept confidential. You may withdraw from this study at any time without penalty.<br> However, make sure you have a reliable internet connection and are able to complete the study in one sitting.</p><p>If you have questions about this research, or if you would like to receive a report of this research when it is completed, please contact the researcher<br> Lorrane Medeiros at lorranesnm@hotmail.com.</p><p><b>This study takes approximately 15 minutes.</p><p>By clicking 'I agree', you agree that you are at least 18 years of age, that you are a native speaker of Brazilian Portuguese, that you are fluent<br> in English and that you understand these instructions and conditions of participation.</p>")
    .print()
        ,
    newButton("I Agree")
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
    newText("<p>Welcome!</p>")
    ,
    newText("<p>In this experiment you’ll hear some sentences and then you’ll judge how good/acceptable sound those sentences using a 5-point scale.</p>")
    ,
    
    newText("<p>Please, fill in your FULL NAME in the box below:</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("Nome")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Please, fill in your E-MAIL address in the box below:</p>")
    ,
    newTextInput("Email")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Fill in your AGE in the box below:</p>")
        .css("font-size","1.2em")
        .print()
    ,
    newTextInput("Idade")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Have you ever taken an English proficiency exam? When? Which one? (TOEFL, Cambridge, Michigan etc)</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("EnglishExam")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>What was your proficiency level on the exam? (Basic, Intermediate, Advanced)</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("ExamLevel")
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p> What is your current level of proficiency? (Basic, Intermediate, Advanced)</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("EnglishLevel")
        .css("font-size","1.2em")
        .print()
    ,
     
    newText("<p>Are you fluent in English?</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("fluent")
        .css("font-size","1.2em")
        .print()
        ,
         
    newText("<p>Have you ever lived or live in the USA? How long?</p>")
    ,
//Cria uma caixa de texto nomedada "Nome" para receber o nome do participante
    newTextInput("liveUSA")
        .css("font-size","1.2em")
        .print()
        ,
         
    newText("<p>Now, select your EDUCATIONAL LEVEL in the box below and press “Start”</p>")
        .css("font-size","1.2em")
        .print()
    ,
//Cria uma caixa com seletores nomeada "Escolaridade" para que o participante selecione sua escolaridade
    newDropDown("Escolaridade", "Select your educational level")
        .add("Undergraduate", "Graduate")
        .css("font-size","1.2em")
        .print()
        .log() //Envia para o arquivo "results" a op��o selecionada pelo participante 
 
    ,
//Cria um novo bot�o nomeado "Iniciar"
    newButton("Start")
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
    newVar("EnglishExam")
        .global()
        .set( getTextInput("EnglishExam") )
        ,
        newVar("ExamLevel")
        .global()
        .set( getTextInput("ExamLevel") )
        ,
        newVar("EnglishLevel")
        .global()
        .set( getTextInput("EnglishLevel") )
        ,
        newVar("fluent")
        .global()
        .set( getTextInput("fluent") )
        ,
        newVar("liveUSA")
        .global()
        .set( getTextInput("liveUSA") )
)

//Envia para o arquivo "results" o conte�do da vari�vel "ID"
.log( "ID" , getVar("ID") )
.log( "EMAIL" , getVar("EMAIL") )
.log( "AGE" , getVar("AGE") )
.log( "EnglishExam" , getVar("EnglishExam") )
.log( "ExamLevel" , getVar("ExamLevel") )
.log( "EnglishLevel" , getVar("EnglishLevel") )
.log( "fluent" , getVar("fluent") )
.log( "liveUSA" , getVar("liveUSA") )


 
//Nova tela - Tela de instru��es do treino
newTrial("instr.treino",
    defaultText
        .css("font-size","1.2em")
        .print()
    ,
    newText("<p>Let’s practice a little bit before you start the test!</p>")
         .center()
    ,
    newText("<p>Instructions:</p>")
         .center()
         .bold()
    ,
    newText("<p>Step 1: You’ll listen to a sentence. This is the context sentence. As soon as the audio ends, click on the button NEXT.<br> If you need it, you can listen to the audio again by pressing the button LISTEN AGAIN.</p>")
         .left()
    ,
    newText("<p>Step 2: You’ll listen to a second sentence. This sentence is related to the context sentence (previous audio). After listening to this sentence,<br> click on the button NEXT to judge this sentence according to a 5-point scale.<br>If you need it, you can listen to the audio again by pressing the button LISTEN AGAIN.</p>")
    .left()
         ,
         newText("PAY ATTENTION!! You have to judge the second audio, not the first one.</p>")
         .center()
         .bold()
         ,
         
    newText("<p>Step 3: You’ll see a five-point scale and now you’ll choose the best option according to what  you think about the sentence that you just heard:</p>")
         ,
    newImage("escala.instructions.png")
    .print()
    .center()
    ,
    newText("<p>So, you’ll click on the best option for you! (If you are using a laptop or a desktop, you can press the buttons 1 to 5 to choose the best option)</p>")
         .center()
    ,
    newText("<p>If possible, wear headphones to perform the experiment.</p>")
         .left()
    ,
    newText("<p>Press “START” to go to the practice.</p>")
         .left()
    ,
    //Cria um novo bot�o nomeado "Iniciar" e envia para o arquivo "results" a informa��o de quando ele � pressionado
    newButton("START")
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
       
             newButton("Listen again")
                 .css("font-size","1.2em")
                 .callback( 
                  getAudio("contexto.treino", variable.ContextoTreino)
                   .stop()
                    .play()
                    .log()
                    .wait()
                    
               )
               .print()
               
            ,
    
           newButton("Next")
            .css("font-size","1.2em")
            .before(getButton("Listen again"))
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
             getButton("Listen again")
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
        newButton("Listen Again")
                .css("font-size","1.2em")
                 .callback( 
                  getAudio("frase.treino", variable.SentenceTreino)
                   .stop()
                    .play()
                    .log()
                    .wait()
                    
               )
               .print()
                   ,
        
        newButton("Next")
            .css("font-size","1.2em")
            .before(getButton("Listen Again"))
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
             getButton("Listen Again")
             .remove()
             ,
             
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Strongly Unacceptable")
    .css("font-size","1.4em")
        
    ,
    newText("Unacceptable")
    .css("font-size","1.4em")
        
,
   newText("Neutral")
        .css("font-size","1.4em")
,
    newText("Acceptable")
    .css("font-size","1.4em")
        
,
     newText("Strongly Acceptable")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Strongly Unacceptable") )
            .add( 500 , 0 , getText("Unacceptable") )
            .add(   680 , 0 , getText("Neutral") )
            .add( 830 , 0 , getText("Acceptable") )
            .add(   990 , 0 , getText("Strongly Acceptable") )
            .print()
            ,
        newSelector()
            .add( getText("Strongly Unacceptable") , getText("Unacceptable"), getText("Neutral"), getText("Acceptable"), getText("Strongly Acceptable") )
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
    newText("<p>Now that you've practiced, let's start the experiment!</p>")
    ,
    newText("<p>The task will take around 15 minutes. Make sure you are in a quiet place so that there are no interruptions.</p>")
    ,
    newText("<p>Click START when you are ready to start the experiment.</p>")
    ,
    newButton("START")
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
       
             newButton("Listen again")
                 .css("font-size","1.2em")
                 .callback( 
                  getAudio("contexto.exp", variable.AudioContext)
                   .stop()
                    .play()
                    .log()
                    .wait()
                    
                    )
                    .print()
                    ,
        newButton("Next")
            .css("font-size","1.2em")
            .before(getButton("Listen again"))
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
            getButton("Listen again")
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
        
             newButton("Listen Again")
                 .css("font-size","1.2em")
                 .callback( 
                  getAudio("frase.experimento", variable.AudioSentence)
                   .stop()
                    .play()
                    .log()
                    .wait()
                    )
                    .print()
                    ,
        newButton("Next")
            .css("font-size","1.2em")
            .before(getButton("Listen Again"))
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
             getButton("Listen Again")
            .remove()
             ,
        newImage("escala.png")
        .print()
        .center()
        
    ,
    newText("Strongly Unacceptable")
    .css("font-size","1.4em")
        
    ,
    newText("Unacceptable")
    .css("font-size","1.4em")
        
,
   newText("Neutral")
        .css("font-size","1.4em")
,
    newText("Acceptable")
    .css("font-size","1.4em")
        
,
     newText("Strongly Acceptable")
     .css("font-size","1.4em")
        

,
newCanvas( 1400 , 700 )
            .add(   250 , 0 , getText("Strongly Unacceptable") )
            .add( 500 , 0 , getText("Unacceptable") )
            .add(   680 , 0 , getText("Neutral") )
            .add( 830 , 0 , getText("Acceptable") )
            .add(   990 , 0 , getText("Strongly Acceptable") )
            .print()
            ,
        newSelector()
            .add( getText("Strongly Unacceptable") , getText("Unacceptable"), getText("Neutral"), getText("Acceptable"), getText("Strongly Acceptable") )
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
    newText("<p> The experiment was concluded! Thanks for participating!</p>")
        .css("font-size","1.2em")
        .print()
        .wait()
    )
//Ajeita a barra de pogresso para que ela fique completa
.setOption("countsForProgressBar",false);
//Fim do Script

   
