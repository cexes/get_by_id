        function Change(){
               document.getElementById("fundo").style.background="yellow"
            }
             function verifica(){
                    var leitor = document.getElementById("fundo").value
                          if(leitor.length <3){
                                document.getElementById("fundo").style.background="red"
                         } else{
                                document.getElementById("fundo").style.background ="green"
                            }
                            
                        }

