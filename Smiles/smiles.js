function paginalogin(){
   window.location.href="http://127.0.0.1:5500/areadelogin.html"
}

function borda(){
   document.querySelector('#Pax').classList.add('borda');
}
function remove(){
   document.querySelector('#Pax').classList.remove('borda');
}
$(function() {
  var aeroportos = [
   "BSB - Aeroporto Internacional de Brasília ",
   "CGH - Aeroporto Internacional de São Paulo",
   "GIG - Aeroporto Internacional do Rio de Janeiro ",
   "SSA - Aeroporto Internacional de Salvador  	",
   "FLN - Aeroporto Internacional de Florianópolis 	",
   "POA - Aeroporto Internacional de Porto Alegre  ",
   "VCP - Aeroporto Internacional de Viracopos  ",
   "REC - Aeroporto Internacional do Recife ",
   "CWB - Aeroporto Internacional de Curitiba  ",
   "BEL	- Aeroporto Internacional de Belém ",
   "VIX	- Aeroporto de Vitória ",
   "SDU	- Aeroporto Santos Dumont		",
   "CGB	- Aeroporto Internacional de Cuiabá 	",
   "CGR	- Aeroporto Internacional de Campo Grande	",
   "FOR	- Aeroporto Internacional de Fortaleza ",
   "MCP	- Aeroporto Internacional de Macapá	",
   "MGF	- Aeroporto Regional de Maringá ",
   "GYN	- Aeroporto de Goiânia ",
   "NVT - Aeroporto Internacional de Navegantes ",
   "MAO - Aeroporto Internacional de Manaus 	",
   "NAT	- Aeroporto Internacional de Natal ",
   "BPS	- Aeroporto Internacional de Porto Seguro	",
   "MCZ - Aeroporto de Maceió  ",
   "PMW - Aeroporto de Palmas",
   "SLZ	- Aeroporto Internacional de São Luís  ",
   "GRU	- Aeroporto Internacional de São Paulo ",
   "LDB	- Aeroporto de Londrina ",
   "PVH	- Aeroporto Internacional de Porto Velho  ",
   "RBR	- Aeroporto Internacional de Rio Branco  ",
   "JOI - Aeroporto de Joinville  ",
   "UDI	- Aeroporto de Uberlândia   ",
   "CXJ - Aeroporto Regional de Caxias do Sul  " ,
   "IGU - Aeroporto Internacional de Foz do Iguaçu ",
   "THE - Aeroporto de Teresina ",
   "AJU - Aeroporto Internacional de Aracaju  ",
   "JPA	- Aeroporto Internacional de João Pessoa  " ,
   "PNZ	- Aeroporto de Petrolina ",  
   "CNF	- Aeroporto Internacional de Minas Gerais 	",  
   "BVB	- Aeroporto Internacional de Boa Vista ",
   "CPV - Aeroporto de Campina Grande   ",
   "STM	- Aeroporto de Santarém  ",
   "IOS - Aeroporto de Ilhéus",
   "JDO - Aeroporto de Juazeiro do Norte  ",
   "IMP - Aeroporto de Imperatriz  ",
   "XAP	- Aeroporto de Chapecó " ,
   "MAB	- Aeroporto de Marabá",
   "CZS	- Aeroporto Internacional de Cruzeiro do Sul	",
   "PPB	- Aeroporto Estadual de Presidente Prudente",
   "CFB	- Aeroporto Internacional de Cabo Frio	",
   "FEN	- Aeroporto de Fernando de Noronha", 
   "JTC	- Aeroporto Estadual de Bauru",
   "MOC	- Aeroporto de Montes Claros",
];
  $("#caixadedigitarida" ).autocomplete({
    source: aeroportos
  });
});

$(function() {
   var aeroportos = [
   "BSB - Aeroporto Internacional de Brasília ",
   "CGH - Aeroporto Internacional de São Paulo",
   "GIG - Aeroporto Internacional do Rio de Janeiro ",
   "SSA - Aeroporto Internacional de Salvador  	",
   "FLN - Aeroporto Internacional de Florianópolis 	",
   "POA - Aeroporto Internacional de Porto Alegre  ",
   "VCP - Aeroporto Internacional de Viracopos  ",
   "REC - Aeroporto Internacional do Recife ",
   "CWB - Aeroporto Internacional de Curitiba  ",
   "BEL	- Aeroporto Internacional de Belém ",
   "VIX	- Aeroporto de Vitória ",
   "SDU	- Aeroporto Santos Dumont		",
   "CGB	- Aeroporto Internacional de Cuiabá 	",
   "CGR	- Aeroporto Internacional de Campo Grande	",
   "FOR	- Aeroporto Internacional de Fortaleza ",
   "MCP	- Aeroporto Internacional de Macapá	",
   "MGF	- Aeroporto Regional de Maringá ",
   "GYN	- Aeroporto de Goiânia ",
   "NVT - Aeroporto Internacional de Navegantes ",
   "MAO - Aeroporto Internacional de Manaus 	",
   "NAT	- Aeroporto Internacional de Natal ",
   "BPS	- Aeroporto Internacional de Porto Seguro	",
   "MCZ - Aeroporto de Maceió  ",
   "PMW - Aeroporto de Palmas",
   "SLZ	- Aeroporto Internacional de São Luís  ",
   "GRU	- Aeroporto Internacional de São Paulo ",
   "LDB	- Aeroporto de Londrina ",
   "PVH	- Aeroporto Internacional de Porto Velho  ",
   "RBR	- Aeroporto Internacional de Rio Branco  ",
   "JOI - Aeroporto de Joinville  ",
   "UDI	- Aeroporto de Uberlândia   ",
   "CXJ - Aeroporto Regional de Caxias do Sul  " ,
   "IGU - Aeroporto Internacional de Foz do Iguaçu ",
   "THE - Aeroporto de Teresina ",
   "AJU - Aeroporto Internacional de Aracaju  ",
   "JPA	- Aeroporto Internacional de João Pessoa  " ,
   "PNZ	- Aeroporto de Petrolina ",  
   "CNF	- Aeroporto Internacional de Minas Gerais 	",  
   "BVB	- Aeroporto Internacional de Boa Vista ",
   "CPV - Aeroporto de Campina Grande   ",
   "STM	- Aeroporto de Santarém  ",
   "IOS - Aeroporto de Ilhéus",
   "JDO - Aeroporto de Juazeiro do Norte  ",
   "IMP - Aeroporto de Imperatriz  ",
   "XAP	- Aeroporto de Chapecó " ,
   "MAB	- Aeroporto de Marabá",
   "CZS	- Aeroporto Internacional de Cruzeiro do Sul	",
   "PPB	- Aeroporto Estadual de Presidente Prudente",
   "CFB	- Aeroporto Internacional de Cabo Frio	",
   "FEN	- Aeroporto de Fernando de Noronha", 
   "JTC	- Aeroporto Estadual de Bauru",
   "MOC	- Aeroporto de Montes Claros",
];
   $("#caixadedigitarvolta" ).autocomplete({
     source: aeroportos
   });
 });


 var clic = [ "01", "02","03","04","05","06","07","08","09"];


