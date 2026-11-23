const types=['Fire extinguisher','Hose reel','Hydrant','Fire detection panel','Sprinkler system','Gas suppression system'];
const templates=[
['Is the extinguisher at its recorded location?','Is access clear?','Are the operating instructions legible?','Are the pin and seal visibly intact?','Does the gauge show the marked operating range, where fitted?','Are the hose and nozzle visibly undamaged?'],
['Is access to the reel clear?','Is the cabinet identified?','Is the visible hose free of damage?','Is the nozzle present?','Is the service record legible?'],
['Is the hydrant clearly identified?','Is the approach accessible?','Are visible caps present?','Is the body free from visible leakage?','Is the identification marker legible?'],
['Is the panel accessible?','Is the location label legible?','Does the display indicate normal status?','Is the zone chart present?','Is the site log available?'],
['Is the valve station accessible?','Are labels legible?','Are visible pipes free of damage?','Are visible sprinkler heads unobstructed?','Is the inspection record available?'],
['Is the cylinder area accessible?','Are hazard signs visible?','Are cylinder restraints visibly intact?','Does the status display show normal operation?','Are visible discharge nozzles unobstructed?']
];
const sites=['Highveld Distribution · Johannesburg','Kloofworks Plant · Rustenburg','Atlantic Office Park · Cape Town','Bayline Depot · Richards Bay'];
const clients=['Meridian Stores','Redcliff Processing','Harbour Offices','Coastline Freight'];
const assets=Object.keys(labelMatrices).map((id,i)=>({id,type:i%6,site:i%4,location:['Dispatch bay','North passage','Loading yard','Control room','Pump house'][i%5],offset:(i%17)-5}));
function relativeDate(days){const d=new Date();d.setDate(d.getDate()+days);d.setHours(9,15,0,0);return d.toISOString()}
function initial(){const reports=assets.map((a,i)=>({id:'VIS-'+(1001+i),asset:a.id,date:relativeDate(-1-(i*7%29)),name:['T. Molefe','A. Davids','L. Nkosi'][i%3],answers:templates[a.type].map((q,j)=>({q,result:i%7===0&&j===1?'Fail':'Pass'})),signature:'',sample:true}));return {reports,defects:reports.filter((_,i)=>i%7===0).map((r,i)=>({id:'F-'+(101+i),report:r.id,asset:r.asset,q:r.answers[1].q,note:'Site observation needs supervisor review.',severity:i%2?'Minor':'Major',photo:true,owner:['Site supervisor','Field team'][i%2],due:relativeDate(i+1),status:['Open','In progress','Closed'][i%3]})),forms:templates.map(q=>q.map(text=>({text,type:'Condition'})))}}
