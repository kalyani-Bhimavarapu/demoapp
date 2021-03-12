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

const dataWithBoxes = externalData.filter(function (item) {
    return item.boxNumber != null;
})

const dataTablePre = dataWithBoxes.reduce((acc, item) => {
    if (acc[item.boxNumber] == null) {
        acc[item.boxNumber] = [item]
    } else {
        acc[item.boxNumber].push(item)
    }
    return acc;

}, {})


console.log("daata table is", Object.keys(dataTablePre));


const dataTableKeys = Object.keys(dataTablePre);

const rowDataForTableData = dataTableKeys.map(function (item) {

    return {
        rowSpan: dataTablePre[item].length,
        data: [...dataTablePre[item]],
        boxNumber: item
    }

});



const pdfMakeRow = rowDataForTableData.reduce(function (acc, item) {

  

    const rowDataa = item.data.map(function (rowItem) {


        return ['boxNumber','packetNumber','gameName','startValue','stopValue','soldCount','soldValue'].map(function (rowItemText) {

                      if(item.rowSpan === 1)      {
            if (rowItemText === 'boxNumber') {
                return {
                    rowSpan: item.rowSpan,
                    text: rowItem[rowItemText].toString(),
                    alignment:'center',
                    }
            } else {
                return {
                    text: rowItem[rowItemText].toString(),
                    fillColor: (rowItem.packSize && rowItem.stopValue === 30  )  ? '#ffadb7' : '#fff',
                };
            }
        }else{
            if (rowItemText == 'boxNumber') {
                return {
                    rowSpan: item.rowSpan,
                    text: rowItem[rowItemText].toString(),
                    alignment:'center',
                      }
            } else {
                return {
                    text: rowItem[rowItemText].toString(),
                    fillColor: (rowItem.packSize && rowItem.stopValue === 30  ) ? '#ffadb7' : '#8ae393',
                };
            }  
        }
        })
    })

    acc.push(rowDataa)
    return acc;

}
    , []);


var flattened = pdfMakeRow.flat(1);

const header = [
    {  text: 'Box'},
    { text: 'Pack Number'},
    { text: 'Name'},
    { text: 'Open'},
    { text: 'Close'},
    { text: 'Price'},
    { text: 'Total'},
]

const finalData = [header].concat(flattened) ;





var dd = {


  
	content: [

	    {
	        columns: [
	            
	           
	                {
	                    text: 'Shift Report', 
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
	             {
	                text: '\n \nMobile: +19876543210' ,
	                style: 'ReportBillingAddress'
	            },
	           ]
	    },
	    
	    {
	        columns: [
	            {},
	            {
	               text: ' \n email: Testuser@test.com',
	               style: 'ReportBillingAddress'
	            },
	            ]
	    },
      
	    '\n\n',



		{
			style: 'tableExample1',
			table: {
			
			headerRows: 0,
           
            widths:  ['*', '18%', '40%','*','*','*','*'],
			
			body: finalData
			
			},
			
			
			layout: {
				fillColor: function (rowIndex, node, columnIndex) {
					return (rowIndex  === 0) ? '#CCCCCC' : null;
				},
				
       
			}
			
		    
		},

        {
        
    	style: 'tableExample',
          table: {
            headerRows: 0,
           
            widths: [ '*', 80 ],
    
            body: [
             
                   
              [ 
                  {
                      text:'Total Sale Amount',
                      style:'itemsFooterSubTitle',
                      
                      
                  }, 
                  { 
                      text:'$1240.00',
                      style:'itemsFooterSubValue',
                      
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
                      style:'itemsFooterSubValue',
                      color:'#de6868'
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
	    
	],
	styles: {
	  
		ReportTitle: {
			fontSize: 22,
			bold: true,
			alignment:'right',
			margin:[0,0,0,5]
		},
	
	
		ReportBillingTitle: {
			fontSize: 18,
			bold: true,
			alignment:'left',
			margin:[0,5,0,0],
		},
	
		ReportBillingDetails: {
			margin:[2,0,0,10],
			alignment:'left'

		},
		ReportBillingAddressTitle: {
		    margin: [0,7,0,10],
		    bold: true
		},
		ReportBillingAddress: {
		   margin:[-40,0,0,-8], 
		   alignment:'left'
		},
		
			itemsFooterSubTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'left',
		},
		itemsFooterSubValue: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'center',
		},
		itemsFooterTotalTitle: {
		    margin: [0,5,0,5],
		    bold: true,
		    alignment:'left',
		},
		itemsFooterTotalValue: {
		    margin: [0,5,0,5],
		     bold: true,
		     alignment:'center',
		},

			tableExample: {
			margin: [280, 25,0, 0]
		},
		
			tableExample1: {
			alignment:'center',
			fontSize: 12,
			margin: [0,25,0,25],
		},
		
		
	},
	defaultStyle: {
		columnGap: 10,
	},
	pageSize: 'A4',
    pageOrientation: 'portrait',
      
}
