//contains the json objects for all of the elements

//objects are built with:
//Name: Number: State: Group:
var elementsObject = {
"elements": [
{ "name":"H" , "number":"1" , "state":"gas" , "group":"Nonmetals" }, 
{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
{ "name":"He" , "number":"2" , "state":"gas" , "group":"Noble_gases" }, 
{ "name":"Li" , "number":"3" , "state":"solid" , "group":"alkaliMetals" }, 
{ "name":"Be" , "number":"4" , "group":"Alkaline_earth_metals" }, 
{},{},{},{},{},{},{},{},{},{},
{ "name":"B" , "number":"5" , "group":"Metalloid" }, 
{ "name":"C" , "number":"6" , "group":"" , "group":"Nonmetals" }, 
{ "name":"N" , "number":"7" , "state":"gas" ,  "group":"Nonmetals" }, 
{ "name":"O" , "number":"8" , "state":"gas" , "group":"Nonmetals" },
{ "name":"F" , "number":"9" , "state":"gas" , "group":"Halogens" }, 
{ "name":"Ne" , "number":"10" , "state":"gas" , "group":"Noble_gases" },
{ "name":"Na" , "number":"11" , "state":"solid" , "group":"alkaliMetals"},
{ "name":"Mg" , "number":"12" , "group":"Alkaline_earth_metals" }, 
{},{},{},{},{},{},{},{},{},{},
{ "name":"Al" , "number":"13"  , "group":"Poor_Metals" }, 
{ "name":"Si" , "number":"14" , "group":"Metalloid" }, 
{ "name":"P" , "number":"15" , "group":"Nonmetals" }, 
{ "name":"S" , "number":"16" , "group":"Nonmetals" }, 
{ "name":"Cl" , "number":"17" , "state":"gas" , "group":"Halogens" },
{ "name":"Ar" , "number":"18" , "state":"gas" , "group":"Noble_gases" },
{ "name":"K" , "number":"19" , "state":"solid" , "group":"alkaliMetals"}, 
{ "name":"Ca" , "number":"20" , "group":"Alkaline_earth_metals" },
{ "name":"Sc", "number":"21" , "group":"Transition_metals" },
{ "name":"Ti", "number":"22" , "group":"Transition_metals" },
{ "name":"V", "number":"23" , "group":"Transition_metals" },
{ "name":"Cr", "number":"24" , "group":"Transition_metals" },
{ "name":"Mn", "number":"25" , "group":"Transition_metals" },
{ "name":"Fe", "number":"26" , "group":"Transition_metals" },
{ "name":"Co", "number":"27" , "group":"Transition_metals" },
{ "name":"Ni", "number":"28" , "group":"Transition_metals" },
{ "name":"Cu", "number":"29" , "group":"Transition_metals" },
{ "name":"Zn", "number":"30" , "group":"Transition_metals" },
{ "name":"Ga" , "number":"31" , "group":"Poor_Metals" }, 
{ "name":"Ge" , "number":"32" , "group":"Metalloid" },
{ "name":"As" , "number":"33" , "group":"Metalloid" },
{ "name":"Se" , "number":"34" , "group":"Nonmetals" },
{ "name":"Br" , "number":"35" , "state":"gas" , "group":"Halogens" },
{ "name":"Kr" , "number":"36" , "state":"gas" , "group":"Noble_gases" }, 
{ "name":"Rb" , "number":"37" , "state":"solid" , "group":"alkaliMetals"}, 
{ "name":"Sr" , "number":"38" , "group":"Alkaline_earth_metals" }, 
{ "name":"Y", "number":"39" , "group":"Transition_metals" },
{ "name":"Zr", "number":"40" , "group":"Transition_metals" },
{ "name":"Nb", "number":"41" , "group":"Transition_metals" },
{ "name":"Mo", "number":"42" , "group":"Transition_metals" },
{ "name":"Tc", "number":"43" , "group":"Transition_metals" },
{ "name":"Ru", "number":"44" , "group":"Transition_metals" },
{ "name":"Rh", "number":"45" , "group":"Transition_metals" },
{ "name":"Pd", "number":"46" , "group":"Transition_metals" },
{ "name":"Ag", "number":"47" , "group":"Transition_metals" },
{ "name":"Cd", "number":"48" , "group":"Transition_metals" },
{ "name":"In" , "number":"49" , "group":"Poor_Metals" },
{ "name":"Sn" , "number":"50" , "group":"Poor_Metals" }, 
{ "name":"Sb" , "number":"51" , "group":"Metalloid" }, 
{ "name":"Te" , "number":"52" , "group":"Metalloid" },
{ "name":"I" , "number":"53" , "group":"Halogens" }, 
{ "name":"Xe" , "number":"54" , "state":"gas" , "group":"Noble_gases" }, 
{ "name":"Cs" , "number":"55" , "state":"solid" , "group":"alkaliMetals" }, 
{ "name":"Ba" , "number":"56" , "group":"Alkaline_earth_metals" }, 
{ "name":"" , "number":"*" , "group":"Lanthanides"},
{ "name":"Hi", "number":"72" , "group":"Transition_metals" },
{ "name":"Ta", "number":"73" , "group":"Transition_metals" },
{ "name":"W", "number":"74" , "group":"Transition_metals" },
{ "name":"Re", "number":"75" , "group":"Transition_metals" },
{ "name":"Os", "number":"76" , "group":"Transition_metals" },
{ "name":"Ir", "number":"77" , "group":"Transition_metals" },
{ "name":"Pt", "number":"78" , "group":"Transition_metals" },
{ "name":"Au", "number":"79" , "group":"Transition_metals" },
{ "name":"Hg", "number":"80" , "state":"liquid" , "group":"Transition_metals"},
{ "name":"Tl" , "number":"81" , "group":"Poor_Metals" }, 
{ "name":"Pb" , "number":"82" , "group":"Poor_Metals" },
{ "name":"Bi" , "number":"83" , "group":"Poor_Metals" },
{ "name":"Po" , "number":"84" , "group":"Metalloid" },
{ "name":"At" , "number":"85" , "group":"Halogens" }, 
{ "name":"Rn" , "number":"86" , "state":"gas" , "group":"Noble_gases" }, 
{ "name":"Fr" , "number":"87" , "state":"solid" , "group":"alkaliMetals" }, 
{ "name":"Ra" , "number":"88" , "group":"Alkaline_earth_metals" },
{ "name":"" , "number":"**" , "group":"Actinides" },
{ "name":"Rt", "number":"104" , "group":"Transition_metals" },
{ "name":"Db", "number":"105" , "group":"Transition_metals" },
{ "name":"Sq", "number":"106" , "group":"Transition_metals" },
{ "name":"Bh", "number":"107" , "group":"Transition_metals" },
{ "name":"Hs", "number":"108" , "group":"Transition_metals" },
{ "name":"Mt", "number":"109" , "group":"Transition_metals" },
{ "name":"Ds", "number":"110" , "group":"Transition_metals" },
{ "name":"Rq", "number":"111" , "group":"Transition_metals" },
{ "name":"Cn", "number":"112" , "state":"liquid" , "group":"Transition_metals" },
{ "name":"Uut" , "number":"113" , "group":"Poor_Metals" }, 
{ "name":"Uuq" , "number":"114" , "group":"Poor_Metals" }, 
{ "name":"Uup" , "number":"115" , "group":"Poor_Metals" },
{ "name":"Uuh" , "number":"116" , "group":"Poor_Metals" },
{ "name":"Uus" , "number":"117" , "group":"Halogens" },
{ "name":"Uuo" , "number":"118" , "state":"gas" , "group":"Noble_gases" },
{ "name":"Uun" , "number":"119" , "state":"solid" , "group":"alkaliMetals" }
]
}


var alkaliMetalsObject = {
"alkaliMetals": [
{ "name":"H" , "number":"1" , "state":"gas"}, 
{ "name":"Li" , "number":"3" , "state":"solid"}, 
{ "name":"Na" , "number":"11" , "state":"solid"},
{ "name":"K" , "number":"19" , "state":"solid"}, 
{ "name":"Rb" , "number":"37" , "state":"solid"}, 
{ "name":"Cs" , "number":"55" , "state":"solid"}, 
{ "name":"Fr" , "number":"87" , "state":"solid"}, 
{ "name":"Uun" , "number":"119" , "state":"solid"}
]
}

var AlkalineEarthMetalsObject = {
"alkalineEarthMetals": [
{ "name":"Be" , "number":"4" }, 
{ "name":"Mg" , "number":"12" }, 
{ "name":"Ca" , "number":"20" },
{ "name":"Sr" , "number":"38" }, 
{ "name":"Ba" , "number":"56" }, 
{ "name":"Ra" , "number":"88" }
]
}

var lanthanidesObject = {
"lanthanides": [
{ "name":"La" , "number":"57" , "group":"Lanthanides" }, 
{ "name":"Ce" , "number":"58" , "group":"Lanthanides" }, 
{ "name":"Pr" , "number":"59" , "group":"Lanthanides" },
{ "name":"Nd" , "number":"60" , "group":"Lanthanides" }, 
{ "name":"Pm" , "number":"61" , "group":"Lanthanides" }, 
{ "name":"Sm" , "number":"62" , "group":"Lanthanides" }, 
{ "name":"Eu" , "number":"63" , "group":"Lanthanides" }, 
{ "name":"Gd" , "number":"64" , "group":"Lanthanides" },
{ "name":"Tb" , "number":"65" , "group":"Lanthanides" }, 
{ "name":"Dy" , "number":"66" , "group":"Lanthanides" }, 
{ "name":"Ho" , "number":"67" , "group":"Lanthanides" }, 
{ "name":"Er" , "number":"68" , "group":"Lanthanides" },
{ "name":"Tm" , "number":"69" , "group":"Lanthanides" }, 
{ "name":"Yb" , "number":"70" , "group":"Lanthanides" }, 
{ "name":"Lu" , "number":"71" , "group":"Lanthanides" }
]
}

var actinidesObject = {
"actinides": [
{ "name":"Ac" , "number":"89" , "group":"Actinides"}, 
{ "name":"Th" , "number":"90" , "group":"Actinides"}, 
{ "name":"Pa" , "number":"91" , "group":"Actinides"},
{ "name":"U" , "number":"92" , "group":"Actinides"}, 
{ "name":"Np" , "number":"93" , "group":"Actinides"}, 
{ "name":"Pu" , "number":"94" , "group":"Actinides"}, 
{ "name":"Am" , "number":"95" , "group":"Actinides"}, 
{ "name":"Cm" , "number":"96" , "group":"Actinides"},
{ "name":"Bk" , "number":"97" , "group":"Actinides"}, 
{ "name":"Cf" , "number":"98" , "group":"Actinides"}, 
{ "name":"Es" , "number":"99" , "group":"Actinides"}, 
{ "name":"Fm" , "number":"100" , "group":"Actinides"},
{ "name":"Md" , "number":"101" , "group":"Actinides"}, 
{ "name":"No" , "number":"102" , "group":"Actinides"}, 
{ "name":"Lr" , "number":"103" , "group":"Actinides"}
]
}

var nobleGassesObject = {
"nobleGasses": [
{ "name":"He" , "number":"2" , "state":"gas"}, 
{ "name":"Ne" , "number":"10" , "state":"gas"}, 
{ "name":"Ar" , "number":"18" , "state":"gas"},
{ "name":"Kr" , "number":"36" , "state":"gas"}, 
{ "name":"Xe" , "number":"54" , "state":"gas"}, 
{ "name":"Rn" , "number":"86" , "state":"gas"}, 
{ "name":"Uuo" , "number":"118" , "state":"gas"}
]
}

var halogensObject = {
"halogens": [
{ "name":"F" , "number":"9" , "state":"gas"}, 
{ "name":"Cl" , "number":"17" , "state":"gas"}, 
{ "name":"Br" , "number":"35" , "state":"gas"},
{ "name":"I" , "number":"53" }, 
{ "name":"At" , "number":"85" }, 
{ "name":"Uus" , "number":"117" }
]
}

var nonMetalsObject = {
"nonMetals": [
{ "name":"C" , "number":"6" }, 
{ "name":"N" , "number":"7" , "state":"gas"}, 
{ "name":"O" , "number":"8" , "state":"gas"},
{ "name":"P" , "number":"15" }, 
{ "name":"S" , "number":"16" }, 
{ "name":"Se" , "number":"34" }
]
}

var metalloidsObject = {
"metalloids": [
{ "name":"B" , "number":"5" }, 
{ "name":"Si" , "number":"14" }, 
{ "name":"Ge" , "number":"32" },
{ "name":"As" , "number":"33" }, 
{ "name":"Sb" , "number":"51" }, 
{ "name":"Te" , "number":"52" },
{ "name":"Po" , "number":"84" }
]
}

var poorMetalsObject = {
"poorMetals": [
{ "name":"Al" , "number":"13" }, 
{ "name":"Ga" , "number":"31" }, 
{ "name":"In" , "number":"49" },
{ "name":"Sn" , "number":"50" }, 
{ "name":"Tl" , "number":"81" }, 
{ "name":"Pb" , "number":"82" },
{ "name":"Bi" , "number":"83" },
{ "name":"Uut" , "number":"113" }, 
{ "name":"Uuq" , "number":"114" }, 
{ "name":"Uup" , "number":"115" },
{ "name":"Uuh" , "number":"116" }
]
}

var transitionMetalsObject = {
   "transitionMetals": [
   { "name":"Sc", "number":"21"},
   { "name":"Ti", "number":"22"},
   { "name":"V", "number":"23"},
   { "name":"Cr", "number":"24"},
   { "name":"Mn", "number":"25"},
   { "name":"Fe", "number":"26"},
   { "name":"Co", "number":"27"},
   { "name":"Ni", "number":"28"},
   { "name":"Cu", "number":"29"},
   { "name":"Zn", "number":"30"},
   { "name":"Y", "number":"39"},
   { "name":"Zr", "number":"40"},
   { "name":"Nb", "number":"41"},
   { "name":"Mo", "number":"42"},
   { "name":"Tc", "number":"43"},
   { "name":"Ru", "number":"44"},
   { "name":"Rh", "number":"45"},
   { "name":"Pd", "number":"46"},
   { "name":"Ag", "number":"47"},
   { "name":"Cd", "number":"48"},
   { "name":"Hi", "number":"72"},
   { "name":"Ta", "number":"73"},
   { "name":"W", "number":"74"},
   { "name":"Re", "number":"75"},
   { "name":"Os", "number":"76"},
   { "name":"Ir", "number":"77"},
   { "name":"Pt", "number":"78"},
   { "name":"Au", "number":"79"},
   { "name":"Hg", "number":"80" , "state":"liquid"},
 
   { "name":"Db", "number":"105"},
   { "name":"Sq", "number":"106"},
   { "name":"Bh", "number":"107"},
   { "name":"Hs", "number":"108"},
   { "name":"Mt", "number":"109"},
   { "name":"Ds", "number":"110"},
   { "name":"Rq", "number":"111"},
   { "name":"Cn", "number":"112" , "state":"liquid"}
   ]
   }