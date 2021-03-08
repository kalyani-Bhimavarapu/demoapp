var externalData = [
      {
        gameName: '$50 or $100  (blue)',
        boxNumber: '',
        gameNumber: 749,
        packetNumber: 062648,
        startedAt: '2021-03-03T18:03:13.212Z',
        startValue: '000',
        packSize: 30,
        stoppedAt: '2021-03-03T18:03:13.212Z',
        stopValue: 30,
        soldCount: 30,
        soldValue: 300
    },
    {
        gameName: '$10,000,000 Colossal Cash',
        boxNumber: 1,
        gameNumber: 587,
        packetNumber: 562909,
        startedAt: '2021-03-03T17:36:13.065Z',
        startValue: 023,
        packSize: 30,
        stoppedAt: '2021-03-03T17:41:52.263Z',
        stopValue: 023,
        soldCount: 0,
        soldValue: 0
    },
    {
        gameName: '$50 or $100  (blue)',
        boxNumber: '',
        gameNumber: 749,
        packetNumber: 062658,
        startedAt: '2021-03-03T18:09:51.711Z',
        startValue: '000',
        packSize: 30,
        stoppedAt: '2021-03-03T18:09:51.711Z',
        stopValue: 30,
        soldCount: 30,
        soldValue: 300
    },
    {
        gameName: '$10,000,000 Colossal Cash',
        boxNumber: 3,
        gameNumber: 587,
        packetNumber: 557367,
        startedAt: '2021-03-03T17:38:07.537Z',
        startValue: 013,
        packSize: 30,
        stoppedAt: '2021-03-03T17:42:13.757Z',
        stopValue: 013,
        soldCount: 0,
        soldValue: 0
    },
    {
        gameName: '$150 MILLION CASH EXPLOSION',
        //updatedVia: 'ACTIVATION',
        boxNumber: 1,
        gameNumber: 635,
        packetNumber: 259896,
        startedAt: '2021-03-03T17:58:56.125Z',
        startValue: 023,
        packSize: 30,
        stoppedAt: '2021-03-03T18:10:26.280Z',
        stopValue: 023,
        soldCount: 0,
        soldValue: 0
    },
    {
        gameName: 'Jumbo Bucks',
        boxNumber: 3,
        gameNumber: 602,
        packetNumber: 493433,
        startedAt: '2021-03-03T17:55:48.988Z',
        startValue: '002',
        packSize: 30,
        stoppedAt: '2021-03-03T18:12:19.233Z',
        stopValue: '002',
        soldCount: 0,
        soldValue: 0
    },
    {
        gameName: 'Jumbo Bucks',
        boxNumber: 1,
        gameNumber: 602,
        packetNumber: 493439,
        startedAt: '2021-03-03T17:55:01.149Z',
        startValue: '005',
        packSize: 30,
        stoppedAt: '2021-03-03T17:58:54.726Z',
        stopValue: 30,
        soldCount: 25,
        soldValue: 250
    },
    {
        gameName: '$10,000,000 Colossal Cash',
        boxNumber: 2,
        gameNumber: 587,
        packetNumber: 568302,
        startedAt: '2021-03-03T17:37:52.421Z',
        startValue: '009',
        packSize: 30,
        stoppedAt: '2021-03-03T18:11:34.792Z',
        stopValue: '009',
        soldCount: 0,
        soldValue: 0
    }
];

function buildTableBody(data, columns) {
    var body = [];

    body.push(columns);

    data.forEach(function(row) {
        var dataRow = [];

        columns.forEach(function(column) {
            dataRow.push(row[column].toString());
        })

        body.push(dataRow);
    });

    return body;
}

function table(data, columns) {
    return {
    fontSize:9.5,
	bold: true,
	alignment: 'justify',
	
    table: {
        headerRows: 1,
        body: buildTableBody(data, columns),
        
    },
    	layout: {
    		        hLineWidth: function (i, node) {
    					return (i === 0 || i === node.table.body.length) ? 1 : 1;
    				},
    				vLineWidth: function (i, node) {
    					return (i === 0 || i === node.table.widths.length) ? 1 : 1;
    				},
    				hLineColor: function (i, node) {
    					return (i === 0 || i === node.table.body.length) ? 'black' : 'black';
    				},
    				vLineColor: function (i, node) {
    					return (i === 0 || i === node.table.widths.length) ? 'black' : 'black';
    				},
    				fillColor: function (rowIndex, node, columnIndex) {
    					return (rowIndex  === 0) ? '#CCCCCC' : null;
				   }
		        }
		
  };
}


var dd = {


  
	content: [

	    {
	        columns: [
	            
	           
	                {
	                    text: 'Report', 
	                    style: 'ReportTitle',
	                    width: '*'
	                },
    	            
    	            
	            ],
	        
	    },
	    
	    
	     {
	        columns: [
	            {
	                text: 'Test store',
	                style:'ReportBillingTitle',
	                
	            },

	        ]
	    },
	    
	    {
	        columns: [
	            {
	                text: 'Test user address',
	                style: 'ReportBillingDetails'
	            },
	            
	        ]
	    },
	   
	    {
	        columns: [
	            {
	                text: 'User Id: 86UGU6DLUS2RQYAVRAXB',
	                style: 'ReportBillingAddressTitle'
	            },
	           ]
	    },
	    
	    {
	        columns: [
	            {
	                text: 'Phone Number: +19876543210 \n email: Testuser@test.com',
	                style: 'ReportBillingAddress'
	            },
	            ]
	    },
      
	    '\n\n',

       table(externalData, ['gameName','boxNumber','gameNumber','packetNumber','startValue', 'packSize', 'stopValue','soldCount','soldValue']),
           

        {
          table: {
            headerRows: 0,
           
            widths: [ '*', 80 ],
    
            body: [
             
                   
              [ 
                  {
                      text:'Total Sale Amount',
                      style:'itemsFooterSubTitle'
                  }, 
                  { 
                      text:'$1240.00',
                      style:'itemsFooterSubValue'
                  }
              ],
              [ 
                  {
                      text:'Cashes',
                      border: [false, false, false, true],
                      style:'itemsFooterSubTitle'
                  },
                  {
                      text: '$421.00',
                      	border: [false, false, false, true],
                      style:'itemsFooterSubValue'
                  }
              ],
              [ 
                  {
                      text:'Online',
                      style:'itemsFooterTotalTitle'
                  }, 
                  {
                      text: '$251.00',
                      style:'itemsFooterTotalValue'
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
                      style:'itemsFooterTotalValue'
                  }
              ],
            ]
          }, 
          	layout: {
				defaultBorder: false,
			}
        },
	    
	],
	styles: {
	  
		ReportTitle: {
			fontSize: 22,
			bold: true,
			alignment:'right',
			margin:[0,0,0,15]
		},
	
		ReportSubTitle: {
			fontSize: 12,
			alignment:'right'
		},
		ReportSubValue: {
			fontSize: 12,
			alignment:'right'
		},
		
		ReportBillingTitle: {
			fontSize: 14,
			bold: true,
			alignment:'left',
			margin:[0,20,0,5],
		},
	
		ReportBillingDetails: {
			alignment:'left'

		},
		ReportBillingAddressTitle: {
		    margin: [0,7,0,3],
		    bold: true
		},
		ReportBillingAddress: {
		    
		},
		
		itemsFooterSubTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'right',
		},
		itemsFooterSubValue: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'right',
		},
		itemsFooterTotalTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'right',
		},
		itemsFooterTotalValue: {
		    margin: [0,5,0,5],
		     bold: true,
		     alignment:'right',
		},

		
	},
	defaultStyle: {
		columnGap: 10,
	}
}
