const {Telegraf} = require('telegraf')


const information=["Informazioni bot| ", "codice chat:", "numero persona: ","\n"]
const bot = new Telegraf('5184718531:AAGzREGxj3o2iRXcLo_iFV0OHO4LNp9qmSo')
console.log("Bot online!")
var datain = ""
const back="INDIETRO"
riga=0
sciclo=0
numeventi=2
index=0
counterPersone=0
const data=['10 Aprile', '11 Aprile', '12 Aprile']
const listadiscoteche=["BlackMoon","Vogue","Life","Milk","Joy & Joy","Centralino","Ottantaquattro","Pick up","Bamboo","WhiteMoon"]

//-------------------MESSAGGI VARI

const listacomandi="/start \\- *Per inizializzare il bot* \n/date \\- *Se il bot è in esecuzione permette di scegliere nuovamente una data*\n"

//matrice-> 0-Data 1-Nome Disco 2-Foto 3-Descrizione 4-Url instagram
const Serate=[["15 Aprile","BlackMoon", "https://www.itagnol.com/wp-content/uploads/2019/01/CIAO-326x245.jpg.png","#Revive \nSabato 9 Aprile\nStart ore 23 00","https://instagram.com","Per informazioni contatta il Pr tramite il link qui sotto"],
               ["15 Aprile","Vogue", "https://www.itagnol.com/wp-content/uploads/2019/01/CIAO-326x245.jpg.png","----#Revive \nSabato 9 Aprile\nStart ore 23:00","https://instagram.com","---Per informazioni contatta il Pr tramite il link qui sotto"]]

//----------------------SLASH COMMAND


bot.start((ctx)=>{
    counterPersone++
    console.log("")
    console.log("COMANDO START")
    console.log(information[1], ctx.chat.id, information[2],counterPersone)
    ctx.telegram.sendMessage(ctx.chat.id, "Benvenuto all'interno del bot *Serate* Torino \n Oggi hanno **usato** questo bot "+counterPersone+" persone",
    {
        reply_markup: {
            inline_keyboard: [
                [{text: "Clicca qui", callback_data: "SELEZIONADATA"}]
            ]
        },
        parse_mode:"MarkdownV2"
    })
})

//------------------------------COMANDI  
bot.command('date', async (ctx) => {
    counterPersone++
    try {
        console.log("")
        console.log("COMANDO /DATE")
        console.log(information[1], ctx.chat.id, information[2],counterPersone)
        await ctx.telegram.sendMessage(ctx.chat.id, "Benvenuto all'interno del bot *Serate* Torino \n Oggi hanno **usato** questo bot "+counterPersone+" persone",
        {
            reply_markup: {
                inline_keyboard: [
                    [{text: "Clicca qui", callback_data: "SELEZIONADATA"}]
                ]
            },
            parse_mode:"MarkdownV2"
        })

    } catch (error) {
        console.log('error', error)
        ctx.reply('Errore comando ')
    }
});

bot.command('comandi', async (ctx) => {
    counterPersone++
    try {
        console.log("")
        console.log("COMANDO COMANDI")
        console.log(information[1], ctx.chat.id, information[2],counterPersone)
        await ctx.telegram.sendMessage(ctx.chat.id, listacomandi,{parse_mode:"MarkdownV2"})

    } catch (error) {
        console.log('error', error)
        ctx.reply('Errore Comando ')
    }
});

//--------------------- AZIONI BOT DI RISPOSTA AI BOTTONI

bot.action("SELEZIONADATA", (ctx)=>{
    ctx.deleteMessage()
    ctx.telegram.sendMessage(ctx.chat.id, 'Seleziona una *data* <3',
    {
        reply_markup: {
            inline_keyboard: [
                [{text: data[0], callback_data: data[0]+"RISP"}],
                [{text: data[1], callback_data: data[1]+"RISP"},{text: data[2], callback_data: data[2]+"RISP"}]
            ]
        },
        parse_mode:"MarkdownV2"
    })
})


//PRIMA DATA

bot.action(data[0]+'RISP', (ctx)=>{
    ctx.deleteMessage()
    datain= data[0]
    ctx.telegram.sendMessage(ctx.chat.id, "Stai visualizzando le date del " + datain+ "",
    {
        reply_markup: {
                inline_keyboard:[
                    [{text: listadiscoteche[0],callback_data:listadiscoteche[0]+"P"},{text: listadiscoteche[1],callback_data:listadiscoteche[1]+"P"}],
                    [{text: listadiscoteche[2],callback_data:listadiscoteche[2]+"P"},{text: listadiscoteche[3],callback_data:listadiscoteche[3]+"P"}],
                    [{text: listadiscoteche[4],callback_data:listadiscoteche[4]+"P"},{text: listadiscoteche[5],callback_data:listadiscoteche[5]+"P"}],
                    [{text: listadiscoteche[6],callback_data:listadiscoteche[6]+"P"},{text: listadiscoteche[7],callback_data:listadiscoteche[7]+"P"}],
                    [{text: listadiscoteche[8],callback_data:listadiscoteche[8]+"P"},{text: listadiscoteche[9],callback_data:listadiscoteche[9]+"P"}],
                    [{text: "Indietro",callback_data: "SELEZIONADATA"}]
                ]
        },
        parse_mode:"MarkdownV2"
    })
})

//SECONDA DATA

bot.action(data[1]+'RISP', (ctx)=>{
    ctx.deleteMessage()
    datain= data[1]
    ctx.telegram.sendMessage(ctx.chat.id, "Stai visualizzando le date del " + datain+ "",
    {
        reply_markup: {
                inline_keyboard:[
                    [{text: listadiscoteche[0],callback_data:listadiscoteche[0]+"P"},{text: listadiscoteche[1],callback_data:listadiscoteche[1]+"P"}],
                    [{text: listadiscoteche[2],callback_data:listadiscoteche[2]+"P"},{text: listadiscoteche[3],callback_data:listadiscoteche[3]+"P"}],
                    [{text: listadiscoteche[4],callback_data:listadiscoteche[4]+"P"},{text: listadiscoteche[5],callback_data:listadiscoteche[5]+"P"}],
                    [{text: listadiscoteche[6],callback_data:listadiscoteche[6]+"P"},{text: listadiscoteche[7],callback_data:listadiscoteche[7]+"P"}],
                    [{text: listadiscoteche[8],callback_data:listadiscoteche[8]+"P"},{text: listadiscoteche[9],callback_data:listadiscoteche[9]+"P"}],
                    [{text: "Indietro",callback_data: "SELEZIONADATA"}]
                ]
        },
        parse_mode:"MarkdownV2"
    })
})

//TERZA DATA

bot.action(data[2]+'RISP', (ctx)=>{
    ctx.deleteMessage()
    datain= data[2]
    ctx.telegram.sendMessage(ctx.chat.id, "Stai visualizzando le date del " + datain+ "",
    {
        reply_markup: {
                inline_keyboard:[
                    [{text: listadiscoteche[0],callback_data:listadiscoteche[0]+"P"},{text: listadiscoteche[1],callback_data:listadiscoteche[1]+"P"}],
                    [{text: listadiscoteche[2],callback_data:listadiscoteche[2]+"P"},{text: listadiscoteche[3],callback_data:listadiscoteche[3]+"P"}],
                    [{text: listadiscoteche[4],callback_data:listadiscoteche[4]+"P"},{text: listadiscoteche[5],callback_data:listadiscoteche[5]+"P"}],
                    [{text: listadiscoteche[6],callback_data:listadiscoteche[6]+"P"},{text: listadiscoteche[7],callback_data:listadiscoteche[7]+"P"}],
                    [{text: listadiscoteche[8],callback_data:listadiscoteche[8]+"P"},{text: listadiscoteche[9],callback_data:listadiscoteche[9]+"P"}],
                    [{text: "Indietro",callback_data: "SELEZIONADATA"}]
                ]
        },
        parse_mode:"MarkdownV2"
    })
})

//--------------------------------------------  CERCA SERATE


// CERCA SERATE BLACK MOOON 

bot.action(listadiscoteche[0]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[0]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})


//CERCA SERATE VOGUE

bot.action(listadiscoteche[1]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[1]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE LIFE

bot.action(listadiscoteche[2]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[2]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE MILK

bot.action(listadiscoteche[3]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[3]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE JOY & JOY
bot.action(listadiscoteche[4]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[4]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE CENTRALINO
bot.action(listadiscoteche[5]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[5]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE OTTANTAQUATTRO

bot.action(listadiscoteche[6]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[6]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE PICKUP

bot.action(listadiscoteche[7]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[7]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE BAMBOO

bot.action(listadiscoteche[8]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[8]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

//CERCA SERATE WHITE MOON
bot.action(listadiscoteche[9]+"P", (ctx)=>{
    riga=0
    sciclo=0
    nomedisco=listadiscoteche[9]
    ctx.deleteMessage()
    for (index=0;index < Serate.length && sciclo==0; index++) {
        if (datain==Serate[index][0] && Serate[index][1]==nomedisco) {
            riga=index
            sciclo=1
        } else {
            riga=99999
        }
    }
    if (riga!=99999) {
        ctx.telegram.sendPhoto(ctx.chat.id, Serate[riga][2],
            {
                reply_markup: {
                        inline_keyboard:[
                            [{text: "Instagram "+nomedisco,url: Serate[riga][4]}],
                            [{text: "Indietro",callback_data: datain+"RISP"}]
                        ]
                },
                caption: Serate[riga][3],
                
            })
    } else {
        ctx.telegram.sendMessage(ctx.chat.id, "Non ci sono serate al "+nomedisco+ " organizzate per questa data", {
            reply_markup: {
                    inline_keyboard:[
                        [{text: "Indietro",callback_data: datain+"RISP"}]
                    ]
            },
            parse_mode:"MarkdownV2"
        })
    }
    
})

function handleFile(params) {
    
}

bot.launch()

