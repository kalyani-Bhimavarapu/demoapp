var externalData = [
    {
        "gameName": "$50 or $100  (blue)",
        "gameNumber": 749,
        "packetNumber": "062648",
        "startedAt": "2021-03-03T18:03:13.212Z",
        "startValue": "000",
        "packSize": 30,
        "stoppedAt": "2021-03-03T18:03:13.212Z",
        "stopValue": 30,
        "soldCount": 30,
        "soldValue": 300
    },
    {
        "gameName": "$10,000,000 Colossal Cash",
        "boxNumber": 1,
        "gameNumber": "587",
        "packetNumber": "562909",
        "startedAt": "2021-03-03T17:36:13.065Z",
        "startValue": "023",
        "packSize": 30,
        "stoppedAt": "2021-03-03T17:41:52.263Z",
        "stopValue": "023",
        "soldCount": 0,
        "soldValue": 0
    },
    {
        "gameName": "$50 or $100  (blue)",
        "gameNumber": 749,
        "packetNumber": "062658",
        "startedAt": "2021-03-03T18:09:51.711Z",
        "startValue": "000",
        "packSize": 30,
        "stoppedAt": "2021-03-03T18:09:51.711Z",
        "stopValue": 30,
        "soldCount": 30,
        "soldValue": 300
    },
    {
        "gameName": "$10,000,000 Colossal Cash",
        "boxNumber": 3,
        "gameNumber": "587",
        "packetNumber": "557367",
        "startedAt": "2021-03-03T17:38:07.537Z",
        "startValue": "013",
        "packSize": 30,
        "stoppedAt": "2021-03-03T17:42:13.757Z",
        "stopValue": "013",
        "soldCount": 0,
        "soldValue": 0
    },
    {
        "gameName": "$150 MILLION CASH EXPLOSION",
        "updatedVia": "ACTIVATION",
        "boxNumber": 1,
        "gameNumber": "635",
        "packetNumber": "259896",
        "startedAt": "2021-03-03T17:58:56.125Z",
        "startValue": "023",
        "packSize": 30,
        "stoppedAt": "2021-03-03T18:10:26.280Z",
        "stopValue": "023",
        "soldCount": 0,
        "soldValue": 0
    },
    {
        "gameName": "Jumbo Bucks",
        "boxNumber": 3,
        "gameNumber": "602",
        "packetNumber": "493433",
        "startedAt": "2021-03-03T17:55:48.988Z",
        "startValue": "002",
        "packSize": 30,
        "stoppedAt": "2021-03-03T18:12:19.233Z",
        "stopValue": "002",
        "soldCount": 0,
        "soldValue": 0
    },
    {
        "gameName": "Jumbo Bucks",
        "boxNumber": 1,
        "gameNumber": "602",
        "packetNumber": "493439",
        "startedAt": "2021-03-03T17:55:01.149Z",
        "startValue": "005",
        "packSize": 30,
        "stoppedAt": "2021-03-03T17:58:54.726Z",
        "stopValue": 30,
        "soldCount": 25,
        "soldValue": 250
    },
    {
        "gameName": "$10,000,000 Colossal Cash",
        "boxNumber": 2,
        "gameNumber": "587",
        "packetNumber": "568302",
        "startedAt": "2021-03-03T17:37:52.421Z",
        "startValue": "009",
        "packSize": 30,
        "stoppedAt": "2021-03-03T18:11:34.792Z",
        "stopValue": "009",
        "soldCount": 0,
        "soldValue": 0
    }

];

Object.byString = function(o, s) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); 
    s = s.replace(/^\./, '');           
    var a = s.split('.');
    for (var i = 0, n = a.length; i < n; ++i) {
        var k = a[i];
        if (k in o) {
            o = o[k];
        } else {
            return;
        }
    }
    return o;
}


function buildTableBody(data, columns, showHeaders, headers) {
    var body = [];

    if(showHeaders) {
    body.push(headers);
    }
    
     var asd = externalData.sort((a, b) => Number(a.boxNumber) - Number(b.boxNumber));
//console.log(asd)

    
    data.forEach(function(row) {
      var dataRow = [];
      //console.log(row.boxNumber);
      if(row.boxNumber !== undefined)
      {
      columns.forEach(function(column) {
          dataRow.push({text: Object.byString(row, column)});
      
      })
   
    //console.log(dataRow)
      body.push(dataRow);
    }
  });

  return body;
}



function table(data, columns, witdhsDef, showHeaders, headers, layoutDef) {
    return {
        alignment:'center',
        table: {
            headerRows: 1,
            widths: witdhsDef,
            body: buildTableBody(data, columns, showHeaders, headers)
        },
        layout: layoutDef
    };
}


var dd = {
    content: [
        { text: 'Table', fontSize: 16, bold:true, margin: [0, 0 ,0, 10]},
        table(

            externalData,
            
            ['boxNumber','packetNumber','gameName','startValue','stopValue','soldCount','soldValue'],
          
            ['*', '20%', '40%','*','*','*','*'],
            
            true,
           
            [
            'Box',
            'Pack Number',
            'Name',
            'Open',
            'Close',
            'Price',
            'Total',
            ],
           
               {fillColor: function (rowIndex, node, columnIndex) {
    					return (rowIndex  === 0) ? '#CCCCCC' : null;
				   }}
				   
		)
    ]
}
