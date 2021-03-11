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

            if (rowItemText == 'boxNumber') {
                return {
                    rowSpan: item.rowSpan,
                    text: rowItem[rowItemText].toString()
                }
            } else {
                return {
                    text: rowItem[rowItemText].toString()
                };
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
		{text: 'Tables', style: 'header'},
		{
			style: 'tableExample',
			table: {
			
				body: finalData
			
					}
		},
			],
	styles: {
		header: {
			fontSize: 18,
			bold: true,
			margin: [0, 0, 0, 10]
		},
		subheader: {
			fontSize: 16,
			bold: true,
			margin: [0, 10, 0, 5]
		},
		tableExample: {
			margin: [0, 5, 0, 15]
		},
		tableHeader: {
			bold: true,
			fontSize: 13,
			color: 'black'
		}
	},
	defaultStyle: {
	
	}
	
}
