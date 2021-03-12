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
      "stoppedAt": "17:58",
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
  
  
  
  data.forEach(function(row) {
    if(row.boxNumber !== undefined)
    {
    var dataRow = [];
    if(row.packSize && row.stopValue === 30)
    {
    columns.forEach(function(column) {
        dataRow.push({text: Object.byString(row, column)});
    
    })
     body.push(dataRow);
  }
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

	    {
        
    	style: 'tableExample',
          table: {
            headerRows: 0,
           
            widths: [ '*', 80 ],
    
            body: [
             
                   
              
              [ 
                  {
                      text:'Total Sales',
                      style:'itemsFooterTotalTitle',
                      border: [false,  true,false, false],
                  }, 
                  {
                      text: '$1240.00',
                      style:'itemsFooterTotalValue',
                       border: [false,  true,false, false],
                  }
              ],
              [ 
                  {
                      text:'Online Cashes',
                      border: [false, false, false, true],
                      style:'itemsFooterTotalTitle'
                  }, 
                  {
                      text: '$93.00',
                      border: [false, false, false, true],
                      style:'itemsFooterTotalValue',
                      color:'#de6868'
                  }
              ],
            ]
          }, 
          	layout: {
				defaultBorder: false,
			}
},
	    
	    
	     {
	        columns: [
	            {
	                text: 'Inventory Stats',
	                style:'Title',
	                
	            },

	        ]
	    },
	    
	  
        {
        
    	style:'topTable',
          table: {
            headerRows: 0,
           
            widths: [ 200, 90 ],
    
            body: [
             
                   
              [ 
                  {
                      text:'Opening Count',
                      style:'topTablehead',
                      
                      
                  }, 
                  { 
                      text:'4',
                      style:'topTablevalue',
                      
                  }
              ],
              [ 
                  {
                      text:'Closing Count',
                      border: [false, false, false, true],
                        style:'topTablehead',
                  },
                  {
                      text: '0',
                      border: [false, false, false, true],
                      style:'topTablevalue',
                     
                  }
              ],
               [ 
                  {
                      text:'Activations',
                      style:'topTablehead',
                      
                      
                  }, 
                  { 
                      text:'1',
                      style:'topTablevalue',
                      
                  }
              ],
              [ 
                  {
                      text:'Sold',
                      border: [false, false, false, true],
                        style:'topTablehead',
                  },
                  {
                      text: '1',
                      border: [false, false, false, true],
                      style:'topTablevalue',
                     
                  }
              ],
              [ 
                  {
                      text:'Discontinued',
                      style:'topTablehead',
                      
                      
                  }, 
                  { 
                      text:'0',
                      style:'topTablevalue',
                      
                  }
              ],
              [ 
                  {
                      text:'Removed',
                      border: [false, false, false, true],
                        style:'topTablehead',
                  },
                  {
                      text: '-',
                      border: [false, false, false, true],
                      style:'topTablevalue',
                     
                  }
              ],
              [ 
                  {
                      text:'Back Inventory ',
                      style:'topTablehead',
                      
                      
                  }, 
                  { 
                      text:'0',
                      style:'topTablevalue',
                      
                  }
              ],
              [ 
                  {
                      text:'Total Inventory',
                      border: [false, false, false, true],
                        style:'topTablehead',
                  },
                  {
                      text: '0',
                      border: [false, false, false, true],
                      style:'topTablevalue',
                     
                  }
              ],
              
              [ 
                  {
                      text:'Active Value',
                      border: [false, false, false,false],
                        style:'topTablehead',
                  }, 
                  {
                      text: '$93.00',
                      border: [false, false, false, false],
                        style:'topTablevalue',
                      
                  }
              ],
            ]
          }, 
          	layout: {
				defaultBorder: false,
			}
        },
      
	    '\n\n',


   { table: {
                widths: [ '38.9%'],
                body: [
                    [ 
                        {
                          text: 'Activations',
                          fillColor: '#CCC',
                          border: [true, true, true,false],
                          bold: true,
		                  alignment:'center',
                        },
                       
                    ]
                ]
            }},
        table(

            externalData,
            
          ['boxNumber','stoppedAt','packetNumber','soldCount','gameName'],
          
            ['*', '*', '*','*','*'],
            
            true,
           
            [
            'Box',
            'Time',
            'Pack Number',
            'Price',
            'Name',
            ],
           
               {fillColor: function (rowIndex, node, columnIndex) {
    					return (rowIndex  === 0) ? '#CCC' : null;
				   }}
				   
		),
	
	    '\n\n',


       { table: {
                widths: [ '49.1%'],
                body: [
                    [ 
                        {
                          text: 'Sold',
                          fillColor: '#CCC',
                          border: [true, true, true,false],
                          bold: true,
		                  alignment:'center',
                        },
                       
                    ]
                ]
            }},
        table(

            externalData,
            
            ['boxNumber','packetNumber','soldCount','gameName'],
          
            ['*', '*','*','*'],
            
            true,
           
            [
            'Box',
            'Pack Number',
            'Price',
            'Name',
            ],
           
               {fillColor: function (rowIndex, node, columnIndex) {
    					return (rowIndex  === 0) ? '#CCCCCC' : null;
				   }}
				   
		),
	

	    
	],
	styles: {
	  
		
	Title: {
			fontSize: 18,
			bold: true,
			alignment:'left',
			margin:[0,5,0,10],
		},
	
		itemsFooterTotalTitle: {
		    margin: [0,0,0,0],
		    bold: true,
		    alignment:'left',
		},
		itemsFooterTotalValue: {
		    margin: [0,0,0,0],
		     bold: true,
		     alignment:'center',
		},

			tableExample: {
			margin: [280, 0,0,25]
		},
		
			topTable: {
			alignment:'center',
			margin: [0,0,100,5],
		},
		
			topTablehead: {
			 margin: [0,0,0,0],
		    bold: true,
		    alignment:'left',
		},
			topTablevalue: {
			 margin: [0,0,0,0],
		    bold: true,
		    alignment:'left',
		},
		
		
	},
	defaultStyle: {
		columnGap: 10,
	},
	pageSize: 'A4',
    pageOrientation: 'portrait',
      
}
