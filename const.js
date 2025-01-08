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
