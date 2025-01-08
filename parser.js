const translateKey = {
    "item-type": "項目タイプ",
    "code": "項目コード",
    "name": "名前",
    "level": "レベル",
    "dm-item-code": "データモデル項目コード",
    "is-visible" : "表示",
    "is-require" : "必須",
    "length" : "桁数",
    "scale" : "小数桁",
    "min-length" : "最小桁数",
    "max-length" : "最大桁数",
    "max-ByteSize" : "最大バイト数",
    "default-value" : "初期値",
    "statement" : "加工式",
    "sort-key" : "ソート順",
    "io-code" : "IOコード",
    "dm-code" : "データモデルコード",
    "format" : "書式",
    "sort-type" : "ソートタイプ",
    "description" : "説明",
    "specification" : "仕様",
    "condition" : "表示条件",
    "c-condition" : "選択リスト条件",
    "c-dm-code" : "選択リストDMコード",
    "fixed" : "選択リスト固定値",
    "value-dm-item-code" : "選択リスト値",
    "name-dm-item-code1" : "選択リスト名",
    "sort-dm-item-code1" : "選択リストソート順",
    "sort-type1" : "選択リストソートタイプ",
    "ch-condition" : "条件式", 
    "msg-code-ok" : "メッセージコードOK", 
    "msg-param-ok" : "メッセージパラメータOK", 
    "msg-code-ng" : "メッセージコードNG",  
    "msg-param-ng" : "メッセージパラメータNG",
    "next-io-code" : "次入出力",
    "next-io-param" : "次入出力パラメータ",
    "msg-code-pre" : "メッセージコード事前",
    "io-item-next-io-logic-list" : "条件指定次入出力",
    "io-item-prop-list" : "入出力項目プロパティ"
};

const IO = [
    "item-type", "code", "name", "level", "dm-code", "dm-item-code", "format", "is-visible", "is-require", "length",
    "scale", "min-length", "max-length", "max-ByteSize", "default-value", "condition", "statement", "sort-key", "sort-type",
    "choice-list", "description", "specification", "io-item-prop-list"
];

const G = ["item-type", "code", "name", "level", "is-visible", "description", "specification", "io-item-prop-list"];

const C = ["item-type", "code", "name", "level", "condition", "msg-code-ok", "msg-param-ok", "msg-code-ng", "msg-param-ng", "description", "specification", "io-item-prop-list"];

const A = ["item-type", "code", "name", "level", "is-visible", "condition", "statement", "next-io-code", "next-io-param", "io-item-next-io-logic-list", "msg-code-pre", "msg-code-ok", "msg-param-ok", "msg-code-ng", "msg-param-ng", "description", "specification", "io-item-prop-list"];

const AI = ["item-type", "code", "name", "statement", "next-io-param", "msg-code-ok", "msg-code-ng", "description", "specification", "io-item-prop-list"];

const BP = ["ctrl-code", "dm-code", "function-code", "param", "work-code", "description", "flowchart-text", "specification"];

function parse() {
    const xmlString = document.getElementById("input1").value;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const ioItem = xmlDoc.getElementsByTagName("io-item-list")[0];

    const xmlString2 = document.getElementById("input2").value;
    const xmlDoc2 = parser.parseFromString(xmlString2, "application/xml");
    const ioItem2 = xmlDoc2.getElementsByTagName("io-item-list")[0];
    const items = Array.from(ioItem.children);
    const items2 = Array.from(ioItem2.children);
    if(items.length === items2.length) {
        console.log("same length");
        //readInput("input1", "table");
        //readInput("input2", "table2");
        //compare();
    } else if (items.length !== items2.length) {
        const length = Math.max(items.length, items2.length);
        if (items.length > items2.length) {
            for(var i = 0; i < length; i++){
                var elements = Array.from(items[i].children);
                var elements2 = Array.from(items2[i].children);
                if(get(elements, "create-time") !== get(elements2, "create-time")){
                    console.log(items2);
                    //items2.splice(i, 0, "");
                    console.log(items2);
                }
            }
        }
        if (items.length < items2.length) {

        }
    }

    /*
    if elements.length == elements2.length{
        do the usual
    }
    if elements.length > elements2.length{ there was an add
        compare node attributes
        if(elements left side create time != right element create time)
    }
    if elements.length < elements2.length{ there was an deletion

    }




    // for(var i = 0; i < Math.max(elements.length, elements2.length); i++){

    //     if(JSON.stringify(elements[i]) !== JSON.stringify(elements2[i])){
    //         console.log(elements[i]);
    //         console.log(elements2[i]);
    //     }
    // }

    //readInput("input1", "table");
    //readInput("input2", "table2");
    //compare();

    */
}

function readInput(textArea, table) {
    const xmlString = document.getElementById(textArea).value;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");
    const ioItem = xmlDoc.getElementsByTagName("io-item-list")[0];
    const outputSpace = document.getElementById(table);
    var htmlString = "";
    if(ioItem){
        const items = Array.from(ioItem.children);
        for(var i = 0; i < items.length; i++){
            if(items[i]){
                const elements = Array.from(items[i].children);
                const type = get(elements, "item-type").textContent;
                if(type === "O"  || type === "IO" || type === "I")
                    htmlString += typeIO(elements, table);
                if(type === "G")
                    htmlString += typeG(elements, table);
                if(type === "C")
                    htmlString += typeC(elements, table);
                if(type === "A" && get(elements, "code").textContent === "@INIT_ACTION")
                    htmlString += typeAI(elements, table);
                else if(type === "A")
                    htmlString += typeA(elements, table);
            }
            htmlString += "<tr><td colspan='4'></td></tr>"
            // const bpItem = xmlDoc.getElementsByTagName("bp-logic")[0];
            // if(bpItem){
            //     const elements = Array.from(bpItem.children);
            //     typeBP(elements, table);
            // }
        }
        outputSpace.innerHTML = htmlString;
    }
}

function translate(value){
    return translateKey[value] ? translateKey[value] : value; 
}

function get(array, value) {
    if(array) return array.find(element => element.tagName === value);
    else return null;
}

function typeIO(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "io-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < IO.length){
        if(counter < 2 || (counter >= 14 && counter < 17) || counter >= 20){
            innerHtmlString += createHtmlString(get(data, IO[counter++]), IO[counter-1], false, false, false, "", "");
        } else if((counter >= 2 && counter < 14 ) || (counter >= 17 && counter < 19)){
            innerHtmlString += createHtmlString(get(data, IO[counter++]), IO[counter-1], false, false, true, "", "");
            innerHtmlString += createHtmlString(get(data, IO[counter++]), IO[counter-1], true, false, true, "", "");
        } else if(counter >= 19 && counter < 20){
            innerHtmlString += choiceListToHTML(get(data, IO[counter]));
            counter++;
        } else counter++;

    }
    return innerHtmlString;
}

function typeA(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "io-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < A.length){
        innerHtmlString += createHtmlString(get(data, A[counter++]), A[counter-1], false, false, false, "", "");
    }
    return innerHtmlString;
}

function typeAI(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "io-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < AI.length){
        innerHtmlString += createHtmlString(get(data, AI[counter++]), AI[counter-1], false, false, false, "", "");
    }
    return innerHtmlString;
}

function typeC(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "io-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < C.length){
        if(C[counter] === "condition") innerHtmlString += createHtmlString(get(data, C[counter++]), C[counter-1], false, false, false, "condition", "ch-condition");
        else innerHtmlString += createHtmlString(get(data, C[counter++]), C[counter-1], false, false, false, "", "");
    }
    return innerHtmlString;
}

function typeG(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "io-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < G.length){
            innerHtmlString += createHtmlString(get(data, G[counter++]), G[counter-1], false, false, false, "", "");
    }
    return innerHtmlString;
}

function typeBP(data, tableName){
    var innerHtmlString = `<td><b>${get(data, "bp-code").textContent}</b><td><b>${get(data, "is-disable").textContent === "false" ? "有効" : "無効"}</b></td>`
    var counter = 0;
    while(counter < BP.length){
        //if(BP[counter] === "condition") innerHtmlString += createHtmlString(get(data, BP[counter++]), BP[counter-1], false, false, false, "condition", "ch-condition");
        //else 
        innerHtmlString += createHtmlString(get(data, BP[counter++]), BP[counter-1], false, false, false, "", "");
    }
    return innerHtmlString;
}

function choiceListToHTML(choiceList){
    var htmlString = "";
    const IOChoiceList = ["fixed", "dm-code", "condition", "value-dm-item-code", "name-dm-item-code1", "name-dm-item-code2",
        "name-dm-item-code3", "sort-dm-item-code1", "sort-dm-item-code2", "sort-dm-item-code3", "sort-type1", "sort-type2", "sort-type3"
    ];
    var data = null;
    if(choiceList){
        data = Array.from(choiceList.children);
    }
    var counter = 0;
    while(counter < IOChoiceList.length){
        if(counter < 4){
            if(IOChoiceList[counter] === "dm-code") htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], false, false, true, "dm-code", "c-dm-code");
            else htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], false, false, true, "", "");
            if(IOChoiceList[counter] === "condition") htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], true, false, true, "condition", "c-condition");
            else htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], true, false, true, "", "");
        } else {
            htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], false, true, false, "", "");
            htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], true, true, false, "", "");
            htmlString += createHtmlString(get(data, IOChoiceList[counter++]), IOChoiceList[counter-1], true, true, false, "", "");
        }
    } 
    return htmlString;
}

function propListToHTML(data) {
    var htmlString = "<tr><td><b>入出力項目プロパティ</b></td>";
    const elements = Array.from(data.children);
    for(var i = 0; i < elements.length; i++){
        htmlString += `<td>${elements[i].children[4].textContent === "false" ? "有効" : "無効"}<br>${elements[i].children[2].textContent} <br> ${elements[i].children[3].textContent}</td>`
    }
    return htmlString;
}


function createHtmlString(element, tag, addOn, threes, twos, originalName, newName) {
    var elementName = element ? element.tagName : tag;
    var elementText = element ? element.textContent  : "";
    var htmlStr = "";
    if(elementName === originalName) elementName = newName
    if(threes && addOn) htmlStr = `<td>${elementText}</td>`;
    else if(threes) htmlStr = `<tr><td><b>${translate(elementName)}</b></td><td>${elementText}</td>`;
    else if(twos && addOn) htmlStr = `<td><b>${translate(elementName)}</b></td><td>${elementText}</td>`;
    else if(twos) htmlStr = `<tr><td><b>${translate(elementName)}</b></td><td>${elementText}</td>`;
    else if(elementName === "io-item-prop-list") htmlStr = propListToHTML(element);
    else htmlStr = `<tr><td><b>${translate(elementName)}</b></td><td>${elementText}</td>`;
    return htmlStr;
}


function compare(){
    const table1 = document.getElementById("table");
    const table2 = document.getElementById("table2");
    
    const rows1 = table1.getElementsByTagName("tr");
    const rows2 = table2.getElementsByTagName("tr");

    const maxRows = Math.max(rows1.length, rows2.length);

    for (let i = 0; i < maxRows; i++) {
        const row1 = rows1[i];
        const row2 = rows2[i];

        if (!row1 || !row2) {
            if (row1) markRowAsDifferent(row1);
            if (row2) markRowAsDifferent(row2);
            continue;
        }

        const cells1 = row1.getElementsByTagName("td");
        const cells2 = row2.getElementsByTagName("td");

        const maxCells = Math.max(cells1.length, cells2.length);

        for (let j = 0; j < maxCells; j++) {
            const cell1 = cells1[j];
            const cell2 = cells2[j];

            if (!cell1 || !cell2 || cell1.textContent !== cell2.textContent) {
                if (cell1) cell1.classList.add('diff');
                if (cell2) cell2.classList.add('diff');
            }
        }
    }
}

function markRowAsDifferent(row) {
    Array.from(row.getElementsByTagName("td")).forEach(cell => {
        cell.classList.add('diff');
    });
}