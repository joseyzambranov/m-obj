let obj = {
    "campaign":"prueba TI 1",
    "subject":"prueba TI 1",
    "domain_id":"13",
    "pre_header":null,
    "sender_email":"sinapsis@sendemail.pe",
    "sender_name":"prueba TI 1",
    "reply_to":"",
    "type":"sendemail.pe",
    "content":"<p>hola {{que tal}}&nbsp;&nbsp;</p>",
    "dynamic_data":"",
    "aux_dynamic_data":[
        [
            {
                "headerName":"Email",
                "headerKey":"email",
                "sample":"joseyzambranov@gmail.com"
            }
        ]
    ],
    "process_date":"2023-02-01",
    "process_hour":null,
    "process_status":null,
    "data_file_id":[5407],
    "template_id":null,
    "attachment_type":null,
    "attachment_column_name":null,
    "attachment_file":null,
    "bcc":null,
    "sendingCampaign":
    {
         "page":1,
         "pageSize":10,
         "pageSizes":[],
         "records":10,
         "total":0},
         "typeCampaign":
         {
             "type":1,
             "category":1,
             "template":null
        },"scheduled":
        {
            "subject":"",
            "datetime":[
                "prueba TI 1 | 2023/02/01 | 12:00:00",
                "prueba prueba 2 | 2023/02/02 | 12:00:00 | prueba 2 | 2023/02/02 | 13:00:00 | abierto | click | sinClick",
                "prueba prueba 3 | 2023/02/04 | 12:00:00 | prueba 3 | 2023/02/24 | 12:00:00 | todos | abierto | click | sinclick",
                ],
                "sending":1},
            "composerSending":{
                "type":1
            }
        }


let campaign = {}
let regex = /todos|abierto|noAbierto|click|sinClick/g
let result =[]
/*
const manipulate  = ((parameters) =>{

let params = parameters['scheduled']['datetime']
console.log("params " , params)

for (let item of params) {
campaign['subject'] = item.split('|')[0];
campaign['process_date']= item.split('|')[1];
campaign['process_hour']= item.split('|')[2];
}

result =JSON.stringify(params).match(regex)



})        

manipulate(obj)

console.log(campaign)
console.log(result)
if(result){
for(let e of result){
if(!e || e === "todos"){
    console.log("creo una nueva campaña")
  }else{
    console.log("no hago nada")
  }
}
}else{
console.log("no existe")
}*/

const m = (p) =>{

let array = p['scheduled']['datetime']
console.log("array ",array)
array.forEach(element => {
console.log("element ", element)
let forwardType = JSON.stringify(element).match(regex)
console.log("forwardType ", forwardType)
if(!forwardType){
    campaign['subject'] = element.split('|')[0];
    campaign['process_date']= element.split('|')[1];
    campaign['process_hour']= element.split('|')[2];
    console.log('campaign ',campaign)
}
if(forwardType){
    if(! /todos/g.test(JSON.stringify(forwardType))){
        campaign['subject'] = element.split('|')[0];
        campaign['process_date']= element.split('|')[1];
        campaign['process_hour']= element.split('|')[2];
        campaign['subject_forward'] = element.split('|')[3];
        campaign['process_date_forward']= element.split('|')[4];
        campaign['process_hour__forward']= element.split('|')[5];
        campaign["forward_type"] = forwardType
        console.log('campaign ',campaign)
    }
    if(/todos/g.test(JSON.stringify(forwardType))){
        campaign['subject'] = element.split('|')[0];
        campaign['process_date']= element.split('|')[1];
        campaign['process_hour']= element.split('|')[2];
        campaign['subject_forward'] = element.split('|')[3];
        campaign['process_date_forward']= element.split('|')[4];
        campaign['process_hour__forward']= element.split('|')[5];
        campaign["forward_type"] = forwardType
        campaign["forward_type"] = 'todos'
        console.log('campaign ',campaign)
    }
}


});
}

m(obj)