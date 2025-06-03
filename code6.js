gdjs.Intro_9503Code = {};
gdjs.Intro_9503Code.localVariables = [];
gdjs.Intro_9503Code.GDpainel_959501Objects1= [];
gdjs.Intro_9503Code.GDpainel_959501Objects2= [];
gdjs.Intro_9503Code.GDpainel_959501Objects3= [];
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1= [];
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects2= [];
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects3= [];
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1= [];
gdjs.Intro_9503Code.GDbtn_9595comecarObjects2= [];
gdjs.Intro_9503Code.GDbtn_9595comecarObjects3= [];
gdjs.Intro_9503Code.GDbtn_9595certoObjects1= [];
gdjs.Intro_9503Code.GDbtn_9595certoObjects2= [];
gdjs.Intro_9503Code.GDbtn_9595certoObjects3= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2= [];
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3= [];
gdjs.Intro_9503Code.GDbtn_9595nextObjects1= [];
gdjs.Intro_9503Code.GDbtn_9595nextObjects2= [];
gdjs.Intro_9503Code.GDbtn_9595nextObjects3= [];
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1= [];
gdjs.Intro_9503Code.GDbtn_9595beforeObjects2= [];
gdjs.Intro_9503Code.GDbtn_9595beforeObjects3= [];
gdjs.Intro_9503Code.GDbackgroundObjects1= [];
gdjs.Intro_9503Code.GDbackgroundObjects2= [];
gdjs.Intro_9503Code.GDbackgroundObjects3= [];
gdjs.Intro_9503Code.GDAcerto2Objects1= [];
gdjs.Intro_9503Code.GDAcerto2Objects2= [];
gdjs.Intro_9503Code.GDAcerto2Objects3= [];
gdjs.Intro_9503Code.GDCursorObjects1= [];
gdjs.Intro_9503Code.GDCursorObjects2= [];
gdjs.Intro_9503Code.GDCursorObjects3= [];
gdjs.Intro_9503Code.GDborboleta1Objects1= [];
gdjs.Intro_9503Code.GDborboleta1Objects2= [];
gdjs.Intro_9503Code.GDborboleta1Objects3= [];
gdjs.Intro_9503Code.GDborboleta2Objects1= [];
gdjs.Intro_9503Code.GDborboleta2Objects2= [];
gdjs.Intro_9503Code.GDborboleta2Objects3= [];
gdjs.Intro_9503Code.GDborboleta3Objects1= [];
gdjs.Intro_9503Code.GDborboleta3Objects2= [];
gdjs.Intro_9503Code.GDborboleta3Objects3= [];
gdjs.Intro_9503Code.GDAcertoObjects1= [];
gdjs.Intro_9503Code.GDAcertoObjects2= [];
gdjs.Intro_9503Code.GDAcertoObjects3= [];


gdjs.Intro_9503Code.asyncCallback20977492 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_05", false);
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20977492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20979644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2);

{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
for (const obj of gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20979644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20980980 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2);

{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2[i].getBehavior("Effect").enableEffect("Effect", false);
}
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
for (const obj of gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20980980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20983988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.Intro_9503Code.GDbackgroundObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("btn_certo"), gdjs.Intro_9503Code.GDbtn_9595certoObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3);

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9503Code.GDbtn_9595nextObjects3);
{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595certoObjects3.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595certoObjects3[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbackgroundObjects3.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbackgroundObjects3[i].setTexture("assets\\background_01.jpg", runtimeScene);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595nextObjects3.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595nextObjects3[i].hide(false);
}
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
/* Don't save btn_certo as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_01 as it will be provided by the parent asyncObjectsList. */
/* Don't save btn_errado_02 as it will be provided by the parent asyncObjectsList. */
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20983988(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20983724 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);

{ //Subevents
gdjs.Intro_9503Code.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
for (const obj of gdjs.Intro_9503Code.GDbtn_9595certoObjects1) asyncObjectsList.addObject("btn_certo", obj);
for (const obj of gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1) asyncObjectsList.addObject("btn_errado_01", obj);
for (const obj of gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1) asyncObjectsList.addObject("btn_errado_02", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20983724(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20985444 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_05", false);
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20985444(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.asyncCallback20986388 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_05", false);
}gdjs.Intro_9503Code.localVariables.length = 0;
}
gdjs.Intro_9503Code.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Intro_9503Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Intro_9503Code.asyncCallback20986388(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Intro_9503Code.userFunc0x1105d70 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Parameters
const spriteName = "borboleta1"; // Substitua "YourSpriteName" pelo nome do sprite
const spriteList = runtimeScene.getObjects(spriteName);

if (spriteList.length === 0) {
    console.error(`O objeto "${spriteName}" não foi encontrado na cena.`);
    return; // Sai do script se o sprite não existir
}

const sprite = spriteList[0]; // Obtém o primeiro sprite da lista

// Configurações de movimento
const startX = 0; // Ponto X inicial
const endX = 1920; // Ponto X final
const speedX = 2; // Velocidade no eixo X
const maxYVariation = 50; // Amplitude do movimento no eixo Y
const speedY = 0.1; // Velocidade do movimento no eixo Y (quanto maior, mais rápido oscila)

// Initialize variables
if (!sprite.hasVariable("direction")) {
    sprite.getVariables().get("direction").setNumber(1); // Direção inicial do movimento (1 = direita, -1 = esquerda)
    sprite.getVariables().get("originalY").setNumber(sprite.getY()); // Armazena a posição Y original
    sprite.getVariables().get("time").setNumber(0); // Tempo usado para variação no eixo Y
}

// Atualize a direção do movimento no eixo X
let direction = sprite.getVariables().get("direction").getAsNumber();
if (sprite.getX() >= endX) {
    direction = -1; // Mudar para a esquerda
    sprite.flipX(true); // Inverter o sprite horizontalmente
}
if (sprite.getX() <= startX) {
    direction = 1; // Mudar para a direita
    sprite.flipX(false); // Restaurar a orientação original
}
sprite.getVariables().get("direction").setNumber(direction);

// Movimento no eixo X
sprite.setX(sprite.getX() + direction * speedX);

// Movimento no eixo Y (seno para suavizar a variação)
let time = sprite.getVariables().get("time").getAsNumber();
let originalY = sprite.getVariables().get("originalY").getAsNumber();
let yVariation = Math.sin(time) * maxYVariation; // Calcula a variação no eixo Y
sprite.setY(originalY + yVariation);
sprite.getVariables().get("time").setNumber(time + speedY); // Incrementa o tempo para criar o efeito de onda

};
gdjs.Intro_9503Code.userFunc0x11a55c0 = function GDJSInlineCode(runtimeScene) {
"use strict";
// Parameters
const spriteName = "borboleta2"; // Substitua "YourSpriteName" pelo nome do sprite
const spriteList = runtimeScene.getObjects(spriteName);

if (spriteList.length === 0) {
    console.error(`O objeto "${spriteName}" não foi encontrado na cena.`);
    return; // Sai do script se o sprite não existir
}

const sprite = spriteList[0]; // Obtém o primeiro sprite da lista

// Configurações de movimento
const startX = 0; // Ponto X inicial
const endX = 1920; // Ponto X final
const speedX = 1; // Velocidade no eixo X
const maxYVariation = 30; // Amplitude do movimento no eixo Y
const speedY = 0.2; // Velocidade do movimento no eixo Y (quanto maior, mais rápido oscila)

// Initialize variables
if (!sprite.hasVariable("direction")) {
    sprite.getVariables().get("direction").setNumber(1); // Direção inicial do movimento (1 = direita, -1 = esquerda)
    sprite.getVariables().get("originalY").setNumber(sprite.getY()); // Armazena a posição Y original
    sprite.getVariables().get("time").setNumber(0); // Tempo usado para variação no eixo Y
}

// Atualize a direção do movimento no eixo X
let direction = sprite.getVariables().get("direction").getAsNumber();
if (sprite.getX() >= endX) {
    direction = -1; // Mudar para a esquerda
    sprite.flipX(true); // Inverter o sprite horizontalmente
}
if (sprite.getX() <= startX) {
    direction = 1; // Mudar para a direita
    sprite.flipX(false); // Restaurar a orientação original
}
sprite.getVariables().get("direction").setNumber(direction);

// Movimento no eixo X
sprite.setX(sprite.getX() + direction * speedX);

// Movimento no eixo Y (seno para suavizar a variação)
let time = sprite.getVariables().get("time").getAsNumber();
let originalY = sprite.getVariables().get("originalY").getAsNumber();
let yVariation = Math.sin(time) * maxYVariation; // Calcula a variação no eixo Y
sprite.setY(originalY + yVariation);
sprite.getVariables().get("time").setNumber(time + speedY); // Incrementa o tempo para criar o efeito de onda

};
gdjs.Intro_9503Code.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9503Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Intro_9503Code.GDCursorObjects1);
{for(var i = 0, len = gdjs.Intro_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Intro_9503Code.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDCursorObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Intro_9503Code.GDAcertoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Intro_9503Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9503Code.GDbtn_9595nextObjects1);
{for(var i = 0, len = gdjs.Intro_9503Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDAcertoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDAcertoObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595nextObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.Intro_9503Code.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro_9503Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.Intro_9503Code.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDpainel_959501Objects1[k] = gdjs.Intro_9503Code.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[k] = gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1 */
/* Reuse gdjs.Intro_9503Code.GDbtn_9595beforeObjects1 */
/* Reuse gdjs.Intro_9503Code.GDbtn_9595comecarObjects1 */
/* Reuse gdjs.Intro_9503Code.GDpainel_959501Objects1 */
{for(var i = 0, len = gdjs.Intro_9503Code.GDpainel_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDpainel_959501Objects1[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i].hide();
}
for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i].hide();
}
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Cena", "Effect", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Intro_9503Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Intro_9503Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595certoObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Intro_9503Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Intro_9503Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595certoObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1 */
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_error.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0.2, 5, 5, 5, 0.008, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}
{ //Subevents
gdjs.Intro_9503Code.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_certo"), gdjs.Intro_9503Code.GDbtn_9595certoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_01"), gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1);
gdjs.copyArray(runtimeScene.getObjects("btn_errado_02"), gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595certoObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[k] = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].getVariableBoolean(gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595certoObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595certoObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = k;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Acerto"), gdjs.Intro_9503Code.GDAcertoObjects1);
/* Reuse gdjs.Intro_9503Code.GDbtn_9595certoObjects1 */
/* Reuse gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1 */
/* Reuse gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1 */
{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].returnVariable(gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_hit_bubble_02.mp3", false, 300, 1);
}{for(var i = 0, len = gdjs.Intro_9503Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDAcertoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDbtn_9595certoObjects1[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{for(var i = 0, len = gdjs.Intro_9503Code.GDAcertoObjects1.length ;i < len;++i) {
    gdjs.Intro_9503Code.GDAcertoObjects1[i].startEmission();
}
}
{ //Subevents
gdjs.Intro_9503Code.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Intro_9503Code.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595nextObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595nextObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595nextObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Intro_9503Code.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Text_Instrucao"), gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_before"), gdjs.Intro_9503Code.GDbtn_9595beforeObjects1);
gdjs.copyArray(runtimeScene.getObjects("btn_comecar"), gdjs.Intro_9503Code.GDbtn_9595comecarObjects1);
gdjs.copyArray(runtimeScene.getObjects("painel_01"), gdjs.Intro_9503Code.GDpainel_959501Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDpainel_959501Objects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDpainel_959501Objects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDpainel_959501Objects1[k] = gdjs.Intro_9503Code.GDpainel_959501Objects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDpainel_959501Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[k] = gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595comecarObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length;i<l;++i) {
    if ( gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[k] = gdjs.Intro_9503Code.GDbtn_9595beforeObjects1[i];
        ++k;
    }
}
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Intro_9503Code.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Intro_9503Code.userFunc0x1105d70(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.Intro_9503Code.userFunc0x11a55c0(runtimeScene);

}


};

gdjs.Intro_9503Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Intro_9503Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9503Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9503Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects3.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects1.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects2.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects3.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects1.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects2.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects3.length = 0;
gdjs.Intro_9503Code.GDCursorObjects1.length = 0;
gdjs.Intro_9503Code.GDCursorObjects2.length = 0;
gdjs.Intro_9503Code.GDCursorObjects3.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects3.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects3.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects3.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects3.length = 0;

gdjs.Intro_9503Code.eventsList7(runtimeScene);
gdjs.Intro_9503Code.GDpainel_959501Objects1.length = 0;
gdjs.Intro_9503Code.GDpainel_959501Objects2.length = 0;
gdjs.Intro_9503Code.GDpainel_959501Objects3.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects1.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects2.length = 0;
gdjs.Intro_9503Code.GDText_9595InstrucaoObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595comecarObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595certoObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959501Objects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595errado_959502Objects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595nextObjects3.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects1.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects2.length = 0;
gdjs.Intro_9503Code.GDbtn_9595beforeObjects3.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects1.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects2.length = 0;
gdjs.Intro_9503Code.GDbackgroundObjects3.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects1.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects2.length = 0;
gdjs.Intro_9503Code.GDAcerto2Objects3.length = 0;
gdjs.Intro_9503Code.GDCursorObjects1.length = 0;
gdjs.Intro_9503Code.GDCursorObjects2.length = 0;
gdjs.Intro_9503Code.GDCursorObjects3.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta1Objects3.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta2Objects3.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects1.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects2.length = 0;
gdjs.Intro_9503Code.GDborboleta3Objects3.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects1.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects2.length = 0;
gdjs.Intro_9503Code.GDAcertoObjects3.length = 0;


return;

}

gdjs['Intro_9503Code'] = gdjs.Intro_9503Code;
