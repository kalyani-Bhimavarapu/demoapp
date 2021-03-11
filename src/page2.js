
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
	  
		
		ReportBillingTitle: {
			fontSize: 18,
			bold: true,
			alignment:'left',
			margin:[0,5,0,10],
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
			margin: [280, 25,0, 10]
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
